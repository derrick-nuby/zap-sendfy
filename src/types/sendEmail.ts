import { z } from 'zod';

export interface EmailRequest {
  smtpId: string;
  fromEmail?: string;
  recipients: string | string[];
  subject: string;
  content: string;
  batchLimit?: number;
  batchInterval?: number;
  method?: 'mySubscriberList' | 'bySegment';
  segmentId?: string;
}

export interface BatchResult {
  accepted: string[];
  rejected: string[];
  messageId?: string;
  response?: string;
}

export interface SendMailResponse {
  message: string;
  totalRecipients: number;
}

export interface ErrorResponse {
  error: string;
}

export const emailRequestSchema = z.object({
  smtpId: z.string().nonempty("SMTP ID is required"),
  fromEmail: z.string().email().optional(),
  recipients: z.union([
    z.string().email().nonempty("Recipient email is required"),
    z.array(z.string().email()).nonempty("At least one recipient email is required")
  ]),
  subject: z.string().nonempty("Subject is required"),
  content: z.string().nonempty("Email content is required"),
  batchLimit: z.number().int().positive().optional().default(500),
  batchInterval: z.number().int().positive().optional().default(1440),
  method: z.enum(['mySubscriberList', 'bySegment']).optional(),
  segmentId: z.string().optional(),
});

export type EmailRequestFormData = z.infer<typeof emailRequestSchema>;
