import { Router } from '@angular/router';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-game-create',
    templateUrl: './game-create.component.html',
    styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent implements OnInit {

    game: Game = {
        _id: '',
        title: '',
        summary: '',
        developer: '',
        genre: '',
        type: '',
        rating: 0,
        user_id: ''
    }

    types = ['pc', 'xbox', 'switch', 'playstation']
    genres = ['Ação', 'Aventura', 'Estratégia', 'RPG', 'Esporte', 'Simulação']

    @ViewChild("fileUpload", { static: false }) fileUpload: ElementRef; files = [];

    constructor(
        private gameService: GameService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    uploadFileEvt(imgFile: any) {
        if (imgFile.target.files && imgFile.target.files[0]) {
            // HTML5 FileReader API
            let reader = new FileReader();
            reader.onload = (e: any) => {
                let image = new Image();
                image.src = e.target.result;
                image.onload = rs => {
                    console.log();
                    const imgBase64Path = e.target.result;
                    this.game.imgPath = imgBase64Path
                };
            };
            console.log(imgFile.target);
            reader.readAsDataURL(imgFile.target.files[0]);
        }
    }

    createGame() {
        this.game.user_id = JSON.parse(localStorage.getItem('currentUser')).id
        this.gameService.create(this.game).subscribe(() => {
            this.gameService.showMessage('Jogo cadastrado com sucesso')
            this.router.navigate(['/games'])
        })
    }

    cancel() {
        this.router.navigate(['/games'])
    }

}
