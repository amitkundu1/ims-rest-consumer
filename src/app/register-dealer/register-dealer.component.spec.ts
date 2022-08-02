import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { RegisterDealerComponent } from './register-dealer.component';

describe('RegisterDealerComponent', () => {
  let component: RegisterDealerComponent;
  let fixture: ComponentFixture<RegisterDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ RegisterDealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
