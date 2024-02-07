import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatMenuModule,
        provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-c9dca", "appId": "1:1028132509425:web:08141e2be18b1bc4fbfb50", "storageBucket": "simple-crm-c9dca.appspot.com", "apiKey": "AIzaSyANVHgcmIRjf02TosYToQLfQqFxgmrEgiY", "authDomain": "simple-crm-c9dca.firebaseapp.com", "messagingSenderId": "1028132509425" })),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [UserDetailComponent],
      providers: [],
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
