import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsocComponent } from './redsoc.component';

describe('RedsocComponent', () => {
  let component: RedsocComponent;
  let fixture: ComponentFixture<RedsocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedsocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedsocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
