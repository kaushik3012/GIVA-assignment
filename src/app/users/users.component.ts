import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from './users';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private store: Firestore) { }

  ngOnInit(): void {
  }
  @Input() user: User | null = null;
  @Output() edit = new EventEmitter<User>();

  toggleStatus(){
    if(this.user)
    {
      this.user.disabled = !this.user.disabled;
      this.edit.emit(this.user);
      const docRef = doc(this.store, 'users', this.user.id);
      updateDoc(docRef, { disabled : this.user.disabled });
    }
  }
}
