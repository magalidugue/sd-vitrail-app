import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

export function createPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const hasUpperCase = /[A-Z]+/.test(value);

    const hasLowerCase = /[a-z]+/.test(value);

    const hasNumeric = /[0-9]+/.test(value);

    const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;

    return !passwordValid ? { passwordStrength: true } : null;
  };
}

export function createPasswordConfirmationValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control?.value;
    const password = control.parent?.get('password') as AbstractControl;
    if (!value || password?.value !== value) {
      return { passwordStrength: true };
    }
    return null;
  };
}

export function createEmailValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control?.value;
    if (!value) {
      return null;
    }
    const isEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value);

    return !isEmail ? { notAnEmail: true } : null;
  };
}
