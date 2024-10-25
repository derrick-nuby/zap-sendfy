import { z } from 'zod';
import { SMTP } from './smtp';

export interface User {
  _id: string;
  name: string;
  phone: string;
  email: string;
  isAdmin: boolean;
  smtpConfig: SMTP[];
}

export const loginSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 6 characters'),
});

export const userSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(10, 'Phone must be at least 10 characters'),
  password: z.string().regex(RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@.#$!%*?&^])[A-Za-z\\d@.#$!%*?&^]{8,15}$'), 'Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character'),
});

export type UserFormData = z.infer<typeof userSchema>;
export type LoginSchemaFormData = z.infer<typeof loginSchema>;