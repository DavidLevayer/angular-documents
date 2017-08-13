import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvProjectComponent } from './cv-project.component';

describe('CvProjectComponent', () => {
  let component: CvProjectComponent;
  let fixture: ComponentFixture<CvProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
