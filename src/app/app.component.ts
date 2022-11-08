import { Component } from '@angular/core';
import { User } from './users/users';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: Observable<User[]>;
  
  constructor(store: Firestore) {
    const coll = collection(store, 'users');
    this.info =collectionData(coll, {idField: 'id'}) as Observable<User[]>;
  }
  title = 'giva-app';

}
