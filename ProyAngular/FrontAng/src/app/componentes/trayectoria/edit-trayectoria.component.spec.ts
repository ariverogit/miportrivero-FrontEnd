import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTrayectoriaComponent } from './edit-trayectoria.component';

describe('EditTrayectoriaComponent', () => {
  let component: EditTrayectoriaComponent;
  let fixture: ComponentFixture<EditTrayectoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTrayectoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTrayectoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
