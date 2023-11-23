import moment from "moment";

export const getElapsedTime = (timestamp) => {
  const currentTime = moment();
  const postedAt = moment(timestamp);

  const timeDifference = currentTime.diff(postedAt, "seconds");

  let unit;
  let roundedDifference;

  switch (true) {
    case timeDifference < 60:
      unit = "second";
      roundedDifference = timeDifference;
      break;
    case timeDifference < 3600:
      unit = "minute";
      roundedDifference = Math.floor(timeDifference / 60);
      break;
    case timeDifference < 86400:
      unit = "hour";
      roundedDifference = Math.floor(timeDifference / 3600);
      break;
    case timeDifference < 31536000:
      unit = "day";
      roundedDifference = Math.floor(timeDifference / 86400);
      break;
    default:
      unit = "year";
      roundedDifference = Math.floor(timeDifference / 31536000);
      break;
  }

  return `${roundedDifference} ${unit}${
    roundedDifference !== 1 ? "s" : ""
  } ago`;
};
