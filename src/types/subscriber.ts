import { z } from 'zod';
import { User } from './user';
import { Segment } from './segment';

export interface Subscriber {
  _id: string;
  name?: string;
  email: string;
  notes: string;
  isSubscribed: boolean;
  segmentId: string | Segment;
  createdBy: string | User;
  customFields?: Record<string, any>;
}

export const changeSegmentSchema = z.object({
  subscriberIds: z.array(z.string().min(24, 'subscriberId must be a valid subscriberId')),
  newSegmentId: z.string().min(24, 'segmentId must be a valid segmentID'),
});

export const subscriberBulkDeleteSchema = z.object({
  subscriberIds: z.array(z.string().min(24, 'subscriberId must be a valid subscriberId')),
});

export interface SubscriberFilters {
  searchQuery?: string;
  subscribed?: string;
  segmentId?: string;
  page?: number;
  limit?: number;
}

export const subscriberSchema = z.object({
  name: z.string().optional(),
  email: z.string().email('Invalid email format'),
  notes: z.string().optional(),
  segmentId: z.string().min(24, 'segmentId must be a valid segmentID'),
  customFields: z.record(z.any()).optional(),
});

export type SubscriberFormData = z.infer<typeof subscriberSchema>;
export type ChangeSegmentFormData = z.infer<typeof changeSegmentSchema>;
export type SubscriberBulkDeleteFormData = z.infer<typeof subscriberBulkDeleteSchema>;
