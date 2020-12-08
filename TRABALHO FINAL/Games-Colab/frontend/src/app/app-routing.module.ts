import { LoginComponent } from './login/login/login.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserReadComponent } from './components/user/user-read/user-read.component';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UsersCrudComponent } from './views/users-crud/users-crud.component';
import { GameUpdateComponent } from './components/game/game-update/game-update.component';
import { ReviewReadComponent } from './components/game/game-review/game-review.component';
import { GameReadComponent } from './components/game/game-read/game-read.component';
import { GameCreateComponent } from './components/game/game-create/game-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GamesCrudComponent } from './views/games-crud/games-crud.component';
import { GameDeleteComponent } from './components/game/game-delete/game-delete.component';
import { TopRatedComponent } from "./views/top-rated/top-rated.component";
import { ConsolesComponent } from "./views/consoles/consoles.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    runGuardsAndResolvers: 'always'
  },
  {
    path: "games",
    component: GamesCrudComponent
  },
  {
    path: "games/create",
    component: GameCreateComponent
  },
  {
    path: "games/read",
    component: GameReadComponent
  },
  {
    path: "games/delete/:id",
    component: GameDeleteComponent
  },
  {
    path: "games/update/:id",
    component: GameUpdateComponent
  },
  {
    path: "games/review/:id",
    component: ReviewReadComponent
  },
  {
    path: "users",
    component: UsersCrudComponent
  },
  {
    path: "users/create",
    component: UserCreateComponent
  },
  {
    path: "users/read",
    component: UserReadComponent
  },
  {
    path: "users/delete/:id",
    component: UserDeleteComponent
  },
  {
    path: "users/update/:id",
    component: UserUpdateComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "top/:plataforma",
    component: TopRatedComponent
  },
  {
    path: "consoles",
    component: ConsolesComponent
  },
  {
    path: "consoles/:plataforma",
    component: ConsolesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
