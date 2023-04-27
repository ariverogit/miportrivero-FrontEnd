import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtrayectoriaComponent } from './newtrayectoria.component';

describe('NewtrayectoriaComponent', () => {
  let component: NewtrayectoriaComponent;
  let fixture: ComponentFixture<NewtrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewtrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
