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
  //imagePreloadCount = 0;
  //imagesToPreload = [
  //  'image.jpg',
  //  'anotherimage.png'
  //];

  constructor(private userService: UserService) {
    this.source = new LocalDataSource();
    //this.preloadImages();
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

  //preloadImages() {
  //  for (var i = 0; i < this.imagesToPreload.length; i++) {
  //    var thisImage = new Image();
  //    thisImage.src = this.imagesToPreload[i];
  //    thisImage.onload = this.imageLoaded();
  //  }
  //}

  //imageLoaded() {
  //  this.imagePreloadCount += 1;
  //  if (this.imagePreloadCount == this.imagesToPreload.length) {
  //    this.startMyAnimation();
  //  }
  //}

  onSearch(searchString: string) {
    // TODO loading
    this.source.empty();

    this.userService.search(searchString).subscribe(data => {
      this.source.load(data);
      // TODO end loading
    }, error => {
      // TODO alert user there was an error in the search
    });
  }
}
