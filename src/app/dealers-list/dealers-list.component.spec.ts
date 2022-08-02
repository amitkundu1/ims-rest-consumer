import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { DealersListComponent } from './dealers-list.component';

describe('DealersListComponent', () => {
  let component: DealersListComponent;
  let fixture: ComponentFixture<DealersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule,RouterTestingModule],
      declarations: [ DealersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
