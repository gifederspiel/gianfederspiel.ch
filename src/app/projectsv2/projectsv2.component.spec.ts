import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Projectsv2Component } from './projectsv2.component';

describe('Projectsv2Component', () => {
  let component: Projectsv2Component;
  let fixture: ComponentFixture<Projectsv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Projectsv2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Projectsv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
