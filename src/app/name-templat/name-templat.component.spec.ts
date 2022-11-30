import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameTemplatComponent } from './name-templat.component';

describe('NameTemplatComponent', () => {
  let component: NameTemplatComponent;
  let fixture: ComponentFixture<NameTemplatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameTemplatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameTemplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
