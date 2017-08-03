import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBe7_Dcmmm60h6nXQUSeAHlerAfczMYduA',
      authDomain: 'ng-recipe-book-8d5a1.firebaseapp.com',
    });
  }

  onNavigate(featured: string) {
    this.loadedFeature = featured;
  }
}
