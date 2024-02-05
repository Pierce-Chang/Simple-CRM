import { Component, inject } from '@angular/core';
import { Firestore, doc, docData, getDoc, onSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { Observable } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId = '';
  user: User = new User();

  firestore: Firestore = inject(Firestore);

  constructor(
    private route: ActivatedRoute, 
    public dialog: MatDialog) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id') ?? '';
      console.log('GOT ID', this.userId);
    })

    this.getUser();
  }

  getUser() {
    onSnapshot(doc(this.firestore, "users", this.userId), (doc) => {
      if (doc.data()) {
        let userData = doc.data();
        this.user = userData as User;
        console.log('Recieved user:', this.user);
      }
    });
  }


  openAddressDialog() {
    console.log('Opening address dialog');
  }

  editMenu() {
    this.dialog.open(DialogEditAddressComponent);
  }

  editUserDetail() {
    this.dialog.open(DialogEditUserComponent);
  }
}
