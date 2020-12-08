import { UserService } from './../../../services/user.service';
import { User } from './../../../models/users.model';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';

@Component({
    selector: 'app-user-read',
    templateUrl: './user-read.component.html',
    styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

    users: User[]
    displayedColumns = ['name', 'email', 'action']

    constructor(
        private userService: UserService,
        private headerService: HeaderService,
    ) { }

    ngOnInit(): void {
        if (this.username == null) this.displayedColumns.pop()

        this.userService.read().subscribe(users => this.users = users)
    }

    get username(): string {
        return this.headerService.headerData.username
    }

    get user_id(): string {
        return localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')).id : null
    }

}
