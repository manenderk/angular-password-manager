import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRootPassComponent } from './manage-root-pass.component';

describe('ManageRootPassComponent', () => {
  let component: ManageRootPassComponent;
  let fixture: ComponentFixture<ManageRootPassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRootPassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRootPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
