import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DstGridComponent } from './dst-grid.component';

describe('DstGridComponent', () => {
  let component: DstGridComponent;
  let fixture: ComponentFixture<DstGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DstGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DstGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
