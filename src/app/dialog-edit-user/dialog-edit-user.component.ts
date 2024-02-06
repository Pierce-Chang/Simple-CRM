import { Component, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  loading = false;
  user!: User;
  birthDate!: Date;
  userId : string = '';

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  async saveUser() {
    this.loading = true;
    const userRef = doc(this.firestore, "users", this.userId);

    await updateDoc(userRef, {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email
    })
    .then(() => {
      this.loading = false;
      console.log('Updating user finished');
      this.dialogRef.close();
    });
  }
}
