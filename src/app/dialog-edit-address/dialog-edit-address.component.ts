import { Component, inject } from '@angular/core';
import { User } from '../../models/user.class';
import { MatDialogRef } from '@angular/material/dialog';
import { Firestore, addDoc, collection, doc, getFirestore, updateDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-edit-address',
  templateUrl: './dialog-edit-address.component.html',
  styleUrl: './dialog-edit-address.component.scss'
})
export class DialogEditAddressComponent {
  loading = false;
  user: User = new User();
  userId : string = '';

  firestore: Firestore = inject(Firestore);

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>) { }

  async saveUser() {
    this.loading = true;
    const userRef = doc(this.firestore, "users", this.userId);

    await updateDoc(userRef, {
      street: this.user.street,
      zipCode: this.user.zipCode,
      city: this.user.city
    })
    .then(() => {
      this.loading = false;
      console.log('Updating user finished');
      this.dialogRef.close();
    });
  }
}
