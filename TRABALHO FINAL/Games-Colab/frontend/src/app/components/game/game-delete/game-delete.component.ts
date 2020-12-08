import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-delete',
  templateUrl: './game-delete.component.html',
  styleUrls: ['./game-delete.component.css']
})
export class GameDeleteComponent implements OnInit {
  game: Game = {} as Game;

  constructor(
    private gameService: GameService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.gameService.readById(id).subscribe((game) => {
      this.game = game;
    });
  }

  deleteGame(): void {
    this.gameService.delete(this.game._id).subscribe(() => {
      this.gameService.showMessage("Jogo excluido com sucesso!");
      this.router.navigate(["/games"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/games"]);
  }
}
