import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosboxComponent } from './choosbox.component';

describe('ChoosboxComponent', () => {
  let component: ChoosboxComponent;
  let fixture: ComponentFixture<ChoosboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoosboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
