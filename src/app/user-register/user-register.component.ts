import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import {
  createEmailValidator,
  createPasswordConfirmationValidator,
  createPasswordValidator,
} from '../validators';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerForm: FormGroup<{
    firstName: FormControl<string | null>;
    lastName: FormControl<string | null>;
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    passwordConfirmation: FormControl<string | null>;
  }>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.buildRegisterForm();
  }

  buildRegisterForm(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, createEmailValidator()]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          createPasswordValidator(),
        ],
      ],
      passwordConfirmation: [
        '',
        [Validators.required, createPasswordConfirmationValidator()],
      ],
    });
  }

  onSubmit(): void {
    console.log(this.registerForm?.value);
  }
}
