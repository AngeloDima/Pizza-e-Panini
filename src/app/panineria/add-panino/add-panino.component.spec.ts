import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaninoComponent } from './add-panino.component';

describe('AddPaninoComponent', () => {
  let component: AddPaninoComponent;
  let fixture: ComponentFixture<AddPaninoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPaninoComponent]
    });
    fixture = TestBed.createComponent(AddPaninoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
