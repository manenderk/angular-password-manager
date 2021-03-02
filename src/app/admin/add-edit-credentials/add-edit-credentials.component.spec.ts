import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCredentialsComponent } from './add-edit-credentials.component';

describe('AddEditCredentialsComponent', () => {
  let component: AddEditCredentialsComponent;
  let fixture: ComponentFixture<AddEditCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCredentialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
