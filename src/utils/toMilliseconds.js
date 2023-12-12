/**
 *
 * @param {*} value The numeric value of the duration.
 * @param {*} unit The unit of the duration. Supported units are "ms"
 *          (milliseconds), "s" (seconds), "mins" (minutes),
 *          "hrs" (hours), "days" (days), and "weeks" (weeks).
 * @returns The equivalent duration in milliseconds.
 *
 * @throws {Error} If an unsupported unit is provided.
 *
 * @example
 * const durationInMilliseconds = timeDuration(2, "hrs");
 * cacheTime: timeDuration(30, "mins"),
 */

export const toMilliseconds = (value, unit) => {
  const millisecondsPerSecond = 1000;
  const secondsPerMinute = 60;
  const minutesPerHour = 60;
  const hoursPerDay = 24;
  const daysPerWeek = 7;

  let milliseconds = 0;

  switch (unit.toLowerCase()) {
    case "ms":
      milliseconds = value;
      break;
    case "s":
      milliseconds = value * millisecondsPerSecond;
      break;
    case "mins":
      milliseconds = value * millisecondsPerSecond * secondsPerMinute;
      break;
    case "hrs":
      milliseconds =
        value * millisecondsPerSecond * secondsPerMinute * minutesPerHour;
      break;
    case "days":
      milliseconds =
        value *
        millisecondsPerSecond *
        secondsPerMinute *
        minutesPerHour *
        hoursPerDay;
      break;
    case "weeks":
      milliseconds =
        value *
        millisecondsPerSecond *
        secondsPerMinute *
        minutesPerHour *
        hoursPerDay *
        daysPerWeek;
      break;
    default:
      throw new Error(
        "Invalid unit. Supported units are ms, s, mins, hrs, days, and weeks."
      );
  }

  return milliseconds;
};
