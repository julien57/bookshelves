import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    var config = {
      apiKey: "AIzaSyB_YZZDvgIi_wiqzMv-vaf25whNNk6f3AM",
      authDomain: "library-ee2fc.firebaseapp.com",
      databaseURL: "https://library-ee2fc.firebaseio.com",
      projectId: "library-ee2fc",
      storageBucket: "library-ee2fc.appspot.com",
      messagingSenderId: "750327435200"
    };
    firebase.initializeApp(config);
  }
}
