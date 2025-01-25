function attachEventsListeners() {
  document.querySelector('main').addEventListener('click', onClick);

  const ratios = {
    days: 1,
    hours: 24,
    minutes: 1440,
    seconds: 86400,
  };
  const inputDays = document.getElementById('days');
  const inputHours = document.getElementById('hours');
  const inputMinutes = document.getElementById('minutes');
  const inputSeconds = document.getElementById('seconds');

  function onClick(ev) {
    const input = ev.target.parentElement.querySelector('input[type="text"]');
    const time = convert(Number(input.value), input.id);
    if (ev.target.tagName == 'INPUT' && ev.target.type == 'button') {
      inputDays.value = time.days;
      inputHours.value = time.hours;
      inputMinutes.value = time.minutes;
      inputSeconds.value = time.seconds;
    }
  }

  function convert(value, unit) {
    const inDays = value / ratios[unit];
    return {
      days: inDays,
      hours: inDays * ratios.hours,
      minutes: inDays * ratios.minutes,
      seconds: inDays * ratios.seconds,
    };
  }
}
