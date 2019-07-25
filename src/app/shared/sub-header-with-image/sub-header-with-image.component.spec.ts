import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeaderWithImageComponent } from './sub-header-with-image.component';

describe('SubHeaderWithImageComponent', () => {
  let component: SubHeaderWithImageComponent;
  let fixture: ComponentFixture<SubHeaderWithImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubHeaderWithImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubHeaderWithImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
