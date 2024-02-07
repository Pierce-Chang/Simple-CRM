import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        provideFirebaseApp(() => initializeApp({ "projectId": "simple-crm-c9dca", "appId": "1:1028132509425:web:08141e2be18b1bc4fbfb50", "storageBucket": "simple-crm-c9dca.appspot.com", "apiKey": "AIzaSyANVHgcmIRjf02TosYToQLfQqFxgmrEgiY", "authDomain": "simple-crm-c9dca.firebaseapp.com", "messagingSenderId": "1028132509425" })),
        provideFirestore(() => getFirestore()),
      ],
      declarations: [DialogAddUserComponent],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
