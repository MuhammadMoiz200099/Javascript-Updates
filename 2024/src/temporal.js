// Temporal.Now.Instant() will return a DateTime object to the nearest nanosecond. 
// You can specify particular dates using the from method like so:
const olympics = Temporal.Instant.from('2024-07-26T20:24:00+01:00');
// This will create a DateTime object that represents the start of the Paris 
// Olympics later this year at 20:24 on the 26th July 2024 (UTC).

// Methods
// This allows you to create just a date, with no time
new Temporal.PlainDate(2024, 7, 26);
Temporal.PlainDate.from('2024-07-26');
// both return a PlainDate object that represents 26th July 2024

// As a complement to PlainDate(), we can use this to create just a time 
// with no date, using .PlainTime():
new Temporal.PlainTime(20, 24, 0);
Temporal.PlainTime.from('20:24:00');
// both return a PlainTime object of 20:24

// PlainMonthDay() is similar to PlainDate, but it only returns the month and 
// day with no year information (useful for dates that recur on the same day 
// every year, such as Pakistion Resolution Day, Indedepandance day):
const PakistanResolutionDay = Temporal.PlainMonthDay.from({ month: 3, day: 23 });

// Similarly, there’s also PlainYearMonth that will return just the year and 
// month (useful for representing a whole month of a year):
const march = Temporal.PlainYearMonth.from({ month: 3, year: 2024 });

// There are a number of calculations that can be done with Temporal objects. 
// You can add and subtract various units of time to a date object:
const today = Temporal.Now.plainDateISO();
const lastWeek = today.subtract({ days: 7});
const nextWeek = today.add({ days: 7 });
// The until and since methods let you find out how much time until a certain 
// date or since the date occurred. For example, the following code will tell 
// you how many days it is until the Paris Olympics:
olympics.until().days
PakistanResolutionDay.since().hours
// These methods return a Temporal.Duration object that can be used to measure an 
// amount of time that has numerous different units and rounding options.