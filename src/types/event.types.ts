export type Event = {
  id: number;
  title: string;
  description?: string;
  dateStart: Date;
  dateEnd: Date;
  location?: string;
  timezone?: string;
  recurrenceRule?: string | null; // A recurrence rule string, or null for one-time events
};

// example of rule

// ISO RFC 5545
// Open AI chat: https://chat.openai.com/c/bb2e5b0d-9dfb-4ea5-9baa-d38b7e553162

// type RecurrenceRule = {
//   freq: string; // e.g., "DAILY", "WEEKLY", "MONTHLY", "YEARLY"
//   byday?: string; // e.g., "SU,MO,TU", specific days of the week
//   bymonthday?: string; // e.g., "1,15", specific days of the month
//   bymonth?: string; // e.g., "1,6", specific months
//   interval?: number; // e.g., 2 for bi-weekly
//   count?: number; // maximum number of occurrences
//   until?: Date; // end date for recurrence
// };
