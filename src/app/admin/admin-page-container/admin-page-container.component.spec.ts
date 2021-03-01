import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageContainerComponent } from './admin-page-container.component';

describe('AdminPageContainerComponent', () => {
  let component: AdminPageContainerComponent;
  let fixture: ComponentFixture<AdminPageContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
