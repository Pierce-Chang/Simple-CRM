import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        MatDialogModule,
        MatFormFieldModule,
        provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-c9dca", "appId": "1:1028132509425:web:08141e2be18b1bc4fbfb50", "storageBucket": "simple-crm-c9dca.appspot.com", "apiKey": "AIzaSyANVHgcmIRjf02TosYToQLfQqFxgmrEgiY", "authDomain": "simple-crm-c9dca.firebaseapp.com", "messagingSenderId": "1028132509425" })),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [DialogEditUserComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
