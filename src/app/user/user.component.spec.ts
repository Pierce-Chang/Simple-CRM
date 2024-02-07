import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-c9dca", "appId": "1:1028132509425:web:08141e2be18b1bc4fbfb50", "storageBucket": "simple-crm-c9dca.appspot.com", "apiKey": "AIzaSyANVHgcmIRjf02TosYToQLfQqFxgmrEgiY", "authDomain": "simple-crm-c9dca.firebaseapp.com", "messagingSenderId": "1028132509425" })),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [UserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
