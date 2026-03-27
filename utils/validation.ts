/**
 * Validate email address format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format (basic international format)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
}

/**
 * Validate URL format
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if string is not empty
 */
export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validate form fields
 */
export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FormFields {
  [key: string]: string;
}

export function validateForm(fields: FormFields, rules: Record<string, (value: string) => string | null>): ValidationResult {
  const errors: Record<string, string> = {};
  
  for (const [field, value] of Object.entries(fields)) {
    if (rules[field]) {
      const error = rules[field](value);
      if (error) {
        errors[field] = error;
      }
    }
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Common validation rules
 */
export const validationRules = {
  required: (fieldName: string) => (value: string) => 
    !value.trim() ? `${fieldName} is required` : null,
  
  email: () => (value: string) =>
    !isValidEmail(value) ? 'Please enter a valid email address' : null,
  
  phone: () => (value: string) =>
    !isValidPhone(value) ? 'Please enter a valid phone number' : null,
  
  minLength: (min: number, fieldName: string) => (value: string) =>
    value.length < min ? `${fieldName} must be at least ${min} characters` : null,
  
  maxLength: (max: number, fieldName: string) => (value: string) =>
    value.length > max ? `${fieldName} must be less than ${max} characters` : null
};