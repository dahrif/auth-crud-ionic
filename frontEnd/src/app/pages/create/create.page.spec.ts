import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormGroup, FormBuilder } from "@angular/forms";
import { IonicModule } from '@ionic/angular';

import { CreatePage } from './create.page';

describe('CreatePage', () => {
  let component: CreatePage;
  let fixture: ComponentFixture<CreatePage>;
  let userForm: FormGroup;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  }));

  it('should create', () => {
    expect(userForm).toBeTruthy();
  });
});