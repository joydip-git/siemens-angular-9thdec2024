import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const validatePassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    if (control) {
        const value = control.value

        let lenStatus = false
        if (value.length >= 6 && value.length <= 12) {
            lenStatus = true
        }

        if (!lenStatus)
            return { 'passlength': { actual: value.length, min: 6, max: 12 } };
        let upperStatus = false
        for (const char of value) {
            if (char >= 'A' && char <= 'Z') {
                upperStatus = true
                break;
            }
        }

        if (!upperStatus)
            return { 'upper': 'one uppercase is must' };

        return null;
    } else
        return null;
}