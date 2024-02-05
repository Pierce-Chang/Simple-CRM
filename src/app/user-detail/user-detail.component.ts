import { Component, inject } from '@angular/core';
import { Firestore, doc, docData, getDoc, onSnapshot } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user.class';
import { Observable } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {

  userId = '';
  user: User = new User();

  firestore: Firestore = inject(Firestore);

  constructor(private route: ActivatedRoute) { }

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
      }
    });
  }


  openAddressDialog() {
    console.log('Opening address dialog');
  }
}
