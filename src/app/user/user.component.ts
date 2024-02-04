import { Component, OnInit, inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDatepicker } from '@angular/material/datepicker';
import { User } from '../../models/user.class';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
  positionOptions: TooltipPosition[] = ['after', 'before', 'above', 'below', 'left', 'right'];
  position = new FormControl(this.positionOptions[2]);
  user = new User();
  allUsers: User[] = [];
  
  firestore: Firestore = inject(Firestore);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.watchForChanges();
  }

  watchForChanges() {
    const usersRef = this.getUsersRef();
    const users$ = collectionData(usersRef, { idField: 'id' }) as Observable<User[]>;

    users$.subscribe(changes => {
      console.log('Changes in the database:', changes);
      this.allUsers = changes;
      console.log('All users:', this.allUsers);
    });
  }

  getUsersRef() {
    return collection(this.firestore, 'users');
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
