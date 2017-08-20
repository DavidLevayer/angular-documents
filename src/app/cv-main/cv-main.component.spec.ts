import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMainComponent } from './cv-main.component';

describe('CvMainComponent', () => {
  let component: CvMainComponent;
  let fixture: ComponentFixture<CvMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
