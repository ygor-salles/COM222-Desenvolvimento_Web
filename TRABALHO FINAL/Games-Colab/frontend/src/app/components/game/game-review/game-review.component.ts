import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/models/review.model';
import { ReviewService } from 'src/app/services/review.service';
import { GameService } from 'src/app/services/game.service';
import { HeaderService } from '../../template/header/header.service';
import { AppComponent } from 'src/app/app.component';

@Component({
    selector: 'app-game-review',
    templateUrl: './game-review.component.html',
    styleUrls: ['./game-review.component.css']
})

export class ReviewReadComponent implements OnInit {
    gameTitle: string;
    reviews: Review[] = [];
    review: Review = {} as Review;
    displayedColumns = ['rate', 'comment', 'action'];

    constructor(
        private reviewService: ReviewService,
        private gameService: GameService,
        private router: Router,
        private route: ActivatedRoute,
        private headerService: HeaderService,
        private appComponent: AppComponent
    ) {
        Object.assign(headerService.headerData, {
            title: 'Avaliação de Game',
            icon: 'grade',
            routeUrl: '/games'
        })
    }

    get user_id(): string {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null
    }

    ngOnInit(): void {
        this.review.game_id = this.route.snapshot.paramMap.get('id');
        this.gameService.readById(this.review.game_id).subscribe(game => {
            this.gameTitle = game.title
        })
        this.reviewService.read(this.review.game_id).subscribe(reviews => {
            this.reviews = reviews
        })
    }

    insertReview(): void {
        this.review.rate = Number(this.review.rate);
        this.review.user_id = this.user_id;
        if (this.review.rate >= 0 && this.review.rate <= 10) {
            this.reviewService.create(this.review).subscribe((): void => {
                this.reviewService.showMessage("Avaliação salva com sucesso!");
                this.router.navigate([`/games/review/${this.review.game_id}`]);
                this.appComponent.redirectFromLoginToCurrent()
            });
        } else {
            this.reviewService.showMessage("Favor inserir uma nota entre 0 e 10", true);
        }
    }

    deleteReview(id: string): void {
        this.reviewService.delete(id).subscribe(() => {
            this.reviewService.showMessage('Avaliação deletada com sucesso!')
            this.router.navigate([`/games/review/${this.review.game_id}`]);
            this.appComponent.redirectFromLoginToCurrent()
        })
    }
    checkInput(e: KeyboardEvent) {
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            (e.key === 'a' && e.ctrlKey === true) ||
            (e.key === 'c' && e.ctrlKey === true) ||
            (e.key === 'v' && e.ctrlKey === true) ||
            (e.key === 'x' && e.ctrlKey === true)) {
            return;
        }

        if (e.key === ' ' || isNaN(Number(e.key))) {
            e.preventDefault();
        }
    }

    backToGames(): void {
        this.router.navigate(["/games"]);
    }
}
