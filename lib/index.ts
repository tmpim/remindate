import { DateTime, Duration, Zone } from "luxon";

export interface RecurringDate {
  type: "recurring";
  cron: string;
}

export interface AbsoluteDate {
  type: "absolute";
  date: Date;
  dateTime: DateTime;
}

export interface RelativeDate {
  type: "relative";
  date: Date;
  dateTime: DateTime;
  duration: Duration;
}

export interface RemindateOptions {
  /** Used to pre-fill blank date fields. Defaults to today at 9 AM. */
  referenceDate?: Date | DateTime;

  /** The date to calculate relative dates from, defaults to now. */
  currentDate?: Date;

  /** IANA timezone offset for absolute calculations. */
  timezone?: string | Zone;
}

export default function remindate(input: string, options?: RemindateOptions): RecurringDate | AbsoluteDate | RelativeDate {
  // Default options
  options = Object.assign({}, {
    currentDate: new Date()
  }, options);

  // Reference date has to be applied after the timezone
  if (!options.referenceDate) {
    options.referenceDate = DateTime.fromObject({ hour: 9, zone: options.timezone });
  } else if (options.referenceDate instanceof Date) {
    options.referenceDate = DateTime.fromJSDate(options.referenceDate);
  }

  return {
    type: "recurring",
    cron: "* * * * *" 
  };
}
