import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.class';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection, addDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog';

interface Item {
  name: string,
};

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDate!: Date;
  loading = false;

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogAddUserComponent>) {}


  async saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log('Current user is', this.user)
    this.loading = true;

    const userData = this.user.toJSON();

    await addDoc(collection(this.firestore, "users"),userData)
    .then(() => {
      this.loading = false;
      console.log('Adding user finished');
      this.dialogRef.close();
    }).catch(error => {
      console.error('Error adding user:', error);
    });
  }
}
