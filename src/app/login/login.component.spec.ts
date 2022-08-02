import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoginComponent } from './login.component';
import { AuthenticationService } from '../authentication.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  
  let service:AuthenticationService;
  let spy:any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [ LoginComponent ],
      providers:[AuthenticationService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
/*
  it('returns true when user is authenticated', () => {
    service = TestBed.inject(AuthenticationService);
         spy= spyOn(service,'authenticate').and.callThrough();
       expect(spy("raj","redhat")).toBeTruthy();
  });
*/

  

});
