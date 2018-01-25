import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyD9JXKVCShYUjwTvK6Xy8q-XGHc1Ui7hc4',
      authDomain: 'ng-recipe-boo-48bf0.firebaseapp.com',
    });
  }

}
