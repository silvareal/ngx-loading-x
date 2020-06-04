import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLoadingXComponent } from './ngx-loading-x.component';

describe('NgxLoadingXComponent', () => {
  let component: NgxLoadingXComponent;
  let fixture: ComponentFixture<NgxLoadingXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxLoadingXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxLoadingXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
