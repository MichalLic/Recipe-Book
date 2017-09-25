import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';
import {DataStorageService} from '../../data-storage.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {
  }

  ngOnInit() {
  }

  onSave() {
    this.dataStorageService.storeRecipe()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

}
