export interface RecurringDate {
  type: "recurring";
  cron: string;
}

export interface AbsoluteDate {
  type: "absolute";
  date: Date;
}

export interface RelativeDate {
  type: "relative";
  date: Date;
}

export default function remindate(input: string): RecurringDate | AbsoluteDate | RelativeDate {
  return {
    type: "recurring",
    cron: "* * * * *" 
  };
}
