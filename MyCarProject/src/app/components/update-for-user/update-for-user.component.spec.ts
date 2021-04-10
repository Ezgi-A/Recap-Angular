import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateForUserComponent } from './update-for-user.component';

describe('UpdateForUserComponent', () => {
  let component: UpdateForUserComponent;
  let fixture: ComponentFixture<UpdateForUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateForUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateForUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
