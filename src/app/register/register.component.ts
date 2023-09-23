import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submittedSuccessful: boolean = true;
  showPopUp: boolean = false;
  categories: any;

  registerForm: FormGroup = new FormGroup({});




  groupSizes: { value: string, label: string }[] = [
    { value: 'select', label: 'Select' },
    { value: 'groupSize-2', label: 'Category 1' },

  ];



  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { customEmail: true };
    };
  }

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      team_name: ['', Validators.required],
      pNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, this.customEmailValidator()]],
      pTopic: ['', Validators.required],
      category: ['', Validators.required],
      gSize: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    });

  };

  ngOnInit(): void {
    this.showRegistrationSuccessPopup();

    this.http.get("https://backend.getlinked.ai/hackathon/categories-list")
    this.http.get<any>('https://backend.getlinked.ai/hackathon/categories-list')
      .subscribe(response => {
        this.categories = response;

      });

  }


  showRegistrationSuccessPopup() {
    this.submittedSuccessful = true;

    console.log("pop up active")
    const registerSection = document.querySelector('.register-section');
    if (registerSection) {
      registerSection.classList.add('overflow-hidden');
    }
  }

  // hideRegistrationSuccessPopup() {
  //   this.submittedSuccessful = false;
  //   const registerSection = document.querySelector('.register-section');
  //   if (registerSection) {
  //     registerSection.classList.remove('overflow-hidden');
  //   }
  // }



  onSubmit() {
    if (this.registerForm.invalid) {
      console.log("form is invalid")
    } else {

    }
  }
}
