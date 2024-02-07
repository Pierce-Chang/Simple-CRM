import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-c9dca", "appId": "1:1028132509425:web:08141e2be18b1bc4fbfb50", "storageBucket": "simple-crm-c9dca.appspot.com", "apiKey": "AIzaSyANVHgcmIRjf02TosYToQLfQqFxgmrEgiY", "authDomain": "simple-crm-c9dca.firebaseapp.com", "messagingSenderId": "1028132509425" })),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [DialogEditAddressComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
