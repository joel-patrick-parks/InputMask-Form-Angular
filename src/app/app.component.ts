import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import * as wjCore from '@grapecity/wijmo';
import * as wjInput from '@grapecity/wijmo.input';
import * as wjcInput from '@grapecity/wijmo.angular2.input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Gets the InputMask controls
  @ViewChild('name') name: wjcInput.WjInputMask;
  @ViewChild('email') email: wjcInput.WjInputMask;
  @ViewChild('phone') phone: wjcInput.WjInputMask;
  @ViewChild('social') social: wjcInput.WjInputMask;

  // Tracks the values of the form inputs
  inputForm = this.formBuilder.group({
    name: '',
    email: '',
    phone: '',
    social: ''
  });

  constructor(private formBuilder: FormBuilder) {}

  // Runs when the form is submitted
  onSubmit(): void {
    if(this.isFormComplete()) {
      // Display user info on form submission
      alert('User Information:\nName: ' + this.inputForm.value.name + 
        '\nEmail: ' + this.inputForm.value.email + '\nPhone Number: ' + this.inputForm.value.phone + 
        '\nSSN: ' + this.inputForm.value.social);
      this.inputForm.reset();
    }
  }

  // Adds class to control if the mask has not been filled out
  validateInput(control: wjInput.InputMask) {
    wjCore.toggleClass(control.hostElement, 'state-invalid', !control.maskFull);
  }

  // Checks to see if the form has been filled out
  isFormComplete() {
    if(this.name.value != '' && this.email.value != '' && this.phone.maskFull && this.social.maskFull) {
      return true;
    }
    return false;
  }
}
