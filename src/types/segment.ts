import { z } from 'zod';
import { User } from './user';

export interface Segment {
  _id: string;
  name: string;
  description: string;
  createdBy: string[] | User[];
}

export const segmentSchema = z.object({
  name: z.string().min(4, 'Name must be at least 4 characters'),
  description: z.string().min(12, 'Name must be at least 12 characters'),
});

export type SegmentFormData = z.infer<typeof segmentSchema>;
