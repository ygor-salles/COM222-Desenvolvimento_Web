import { HeaderService } from './../../template/header/header.service';
import { MatTableDataSource } from '@angular/material/table';
import { GameService } from './../../../services/game.service';
import { Game } from './../../../models/game.model';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-game-read',
    templateUrl: './game-read.component.html',
    styleUrls: ['./game-read.component.css']
})
export class GameReadComponent implements OnInit {

    games: Game[] = []
    displayedColumns = ['imgPath', 'title', 'summary', 'developer', 'type', 'genre', 'rating', 'action'];
    filters = [
        { type: 'filteredTitles', attribute: 'title', control: 'titlesControl' }, 
        { type: 'filteredDevelopers', attribute: 'developer', control: 'developersControl' },
        { type:'filteredGenres', attribute: 'genre', control: 'genresControl' }
    ]
    dataSource: any
    statusTable: boolean

    titlesControl = new FormControl();
    developersControl = new FormControl();
    genresControl = new FormControl();

    filteredDevelopers: any;
    filteredTitles: any;
    filteredGenres: any;
    newFilters = []

    constructor(private gameService: GameService, private headerService: HeaderService) { }

    ngOnInit(): void {
        if (this.username == null) this.displayedColumns.pop()
        this.gameService.read().subscribe(games => {
            this.games = games
            this.filters.map(filter => this._multiFilters(filter.type, filter.attribute, filter.control))
        })
        this.statusTable = true
    }

    displayTitles(game: Game): string {
        return game && game.title ? game.title : '';
    }

    displayDevelopers(game: Game): string {
        return game && game.developer ? game.developer : '';
    }
    
    displayGenres(game: Game): string {
        return game && game.genre ? game.genre : '';
    }

    private _filter(name: any, attribute: string): Game[] {
        const filterValue = name.toLowerCase();
        return this.newFilters.filter(option => option[attribute].toLowerCase().indexOf(filterValue) === 0);
    }

    private _prepareValuesToFilter(attribute: string): Game[] {
        this.newFilters = this.games.filter((item, index, self) => index === self.findIndex(i => (i[attribute] === item[attribute]) ) );
        return this.newFilters;
    }

    private _multiFilters(filterType: string, filterAttribute: string, filterControl:string) {
        this[filterType] = this[filterControl].valueChanges
            .pipe(
                startWith(''),
                map(value => typeof value === 'string' ? value : value[filterAttribute]),
                map(name => name ? this._filter(name, filterAttribute) : this._prepareValuesToFilter(filterAttribute))
            );
    }

    applyFilter(filter: string) {
        console.log("filter");
        this.statusTable = false
        this.dataSource = new MatTableDataSource(this.games)
        this.dataSource.filter = filter.trim().toLowerCase();
    }

    get username(): string {
        return this.headerService.headerData.username
    }

    get user_id(): string {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null
    }

    openDialog(event: string) {
        this.gameService.openDialog(event)
    }
}
