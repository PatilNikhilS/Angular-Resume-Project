import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraCarricularComponent } from './extra-carricular.component';

describe('ExtraCarricularComponent', () => {
  let component: ExtraCarricularComponent;
  let fixture: ComponentFixture<ExtraCarricularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtraCarricularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExtraCarricularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
