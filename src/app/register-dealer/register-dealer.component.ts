import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

import { Dealeraddress } from '../dealeraddress';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register-dealer',
  templateUrl: './register-dealer.component.html',
  styleUrls: ['./register-dealer.component.css']
})
export class RegisterDealerComponent implements OnInit {
    
      /*  FormGroup is one of the four fundamental building blocks used to
        define forms in Angular.
        A FormGroup aggregates the values of each child FormControl into one object,
        with each control name as the key.
        If one of the controls in a group is invalid, the entire group becomes invalid.
      */
    registerForm: FormGroup | any; //Check And Validate for a Group of form controls.
    submitted = false;
    City: any = ['Bangalore','Chennai', 'Delhi', 'Kolkatta','Mumbai', ]
    dealer: Dealeraddress = new Dealeraddress();

    // FormBuilder service provides convenient methods for generating controls.
  constructor(private formBuilder: FormBuilder,private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
      fname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      lname: ['',[ Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      dob: ['', [Validators.required]],
      phoneNo:  ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      street:  ['', [Validators.required]],
      city:  ['', [Validators.required]],
      pincode:  ['', [Validators.required]],
  });
    
    
  }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    changeCity(e:any) {
      this.registerForm.get('city').setValue(e.target.value, {
       onlySelf: true
      })
    }
    Dealeraddress(): void {
      this.submitted = false;
      this.dealer= new Dealeraddress();
    }
   
  onSubmit() {
    this.submitted = true;
this.dealer=this.registerForm.value;
    // stop the process here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
   
    this.save();
}
save() {
 
  this.authenticationService.saveDealer(this.dealer)
    .subscribe(data => console.log(data), error => console.log(error));
  this.dealer= new Dealeraddress();
  alert("Dealer Register Successfully");
  this.gotoList();
}
gotoList() {
  this.router.navigate(['/login']);
}
  

}
