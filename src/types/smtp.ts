import { z } from 'zod';

export interface SMTP {
  _id: string;
  name: string;
  service?: string;
  pool?: boolean;
  host?: string;
  port?: number;
  secure?: boolean;
  fromEmail?: string;
  createdBy: string;
  isTested?: boolean;
  lastTested?: Date;
  auth: {
    user: string;
    pass: string;
  };
}


export const smtpSchema = z.object({
  name: z.string().min(5, 'Name must be at least 5 characters'),
  service: z.string().optional(),
  host: z.string().optional(),
  port: z.number().optional(),
  secure: z.boolean().optional(),
  fromEmail: z.string().email('Invalid email format').optional(),
  auth: z.object({
    user: z.string().email('Invalid email format'),
    pass: z.string().min(1, 'Password is required'),
  }),
});


export type SmtpFormData = z.infer<typeof smtpSchema>;
