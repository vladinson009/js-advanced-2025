function solve(speed, area) {
  const limits = {
    motorway: 130,
    interstate: 90,
    city: 50,
    residential: 20,
  };
  const limit = Number(limits[area]);
  const difference = Number(speed - limit);
  const status =
    difference > 0 && difference <= 20
      ? 'speeding'
      : difference <= 40
      ? 'excessive speeding'
      : 'reckless driving';

  if (speed > limit) {
    console.log(
      `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    );
  } else {
    console.log(`Driving ${speed} km/h in a ${limit} zone`);
  }
}
solve(40, 'city');
solve(21, 'residential');
solve(200, 'motorway');
