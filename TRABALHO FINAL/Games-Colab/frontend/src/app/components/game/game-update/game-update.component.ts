import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
    selector: 'app-game-update',
    templateUrl: './game-update.component.html',
    styleUrls: ['./game-update.component.css']
})
export class GameUpdateComponent implements OnInit {
    game: Game = {} as Game;
    genres = ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esporte', 'Simulação']

    @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

    constructor(
        private gameService: GameService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get("id");
        this.gameService.readById(id).subscribe((game) => {
            this.game = game;
        });
    }

    uploadFileEvt(imgFile: any) {
        if (imgFile.target.files && imgFile.target.files[0]) {
            // HTML5 FileReader API
            let reader = new FileReader();
            reader.onload = (e: any) => {
                let image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    const imgBase64Path = e.target.result;
                    this.game.imgPath = imgBase64Path
                };
            };
            reader.readAsDataURL(imgFile.target.files[0]);
        }
    }

    updateGame(): void {
        this.gameService.update(this.game).subscribe(() => {
            this.gameService.showMessage("Jogo atualizado com sucesso!");
            this.router.navigate(["/games"]);
        });
    }

    cancel(): void {
        this.router.navigate(["/games"]);
    }
}
