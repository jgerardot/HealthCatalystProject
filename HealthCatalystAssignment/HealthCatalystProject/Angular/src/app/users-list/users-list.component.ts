import { Component } from '@angular/core';
import UserService from '../shared/API/user.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  source: LocalDataSource;

  constructor(private userService: UserService) {
    this.source = new LocalDataSource();
  }

  settings = {
    hideSubHeader: true,
    columns: {
      profilePicture: {
        title: '',
        editable: false,
        filter: false,
        sort: false,
        type: "html",
        valuePrepareFunction: (value) => { return `<img width="50" src="${value}" />`}
      },
      firstName: {
        title: 'First Name',
        editable: false,
        filter: false,
        sort: false
      },
      lastName: {
        title: 'Last Name',
        editable: false,
        filter: false,
        sort: false
      },
      age: {
        title: 'Age',
        editable: false,
        filter: false,
        sort: false
      },
      interests: {
        title: 'Interests',
        editable: false,
        filter: false,
        sort: false
      },
      address: {
        title: 'Address',
        editable: false,
        filter: false,
        sort: false
      }
    },
    actions: {
      edit: false,
      delete: false,
      add: false
    }
  };
  
  onSearch(searchString: string) {
    $('#main-raised').addClass("wait");
    $('#search').prop("disabled", true);
    this.source.empty();

    this.userService.search(searchString).subscribe(data => {
      this.source.load(data);
      $('#main-raised').removeClass("wait");
      $('#search').prop("disabled", false);
    });
  }
}
