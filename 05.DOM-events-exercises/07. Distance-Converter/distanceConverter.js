function attachEventsListeners() {
  const ratios = {
    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.34,
    yrd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
  };
  document.getElementById('convert').addEventListener('click', convert);

  const inputDistance = document.getElementById('inputDistance');
  const inputUnit = document.getElementById('inputUnits');

  const outputDistance = document.getElementById('outputDistance');
  const outputUnit = document.getElementById('outputUnits');

  function convert(ev) {
    const result = Number(inputDistance.value) * ratios[inputUnit.value];
    outputDistance.value = result / ratios[outputUnit.value];
  }
}
