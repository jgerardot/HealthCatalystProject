import { Component, OnInit, Input } from '@angular/core';
import UserService from '../shared/API/user.service';
import User from '../shared/ViewModels/User';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
    users: Array<User>;

    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    onSearch(searchString: string) : any {
        this.userService.search(searchString).subscribe(data => {
            this.users = data;
        });
    }
}
