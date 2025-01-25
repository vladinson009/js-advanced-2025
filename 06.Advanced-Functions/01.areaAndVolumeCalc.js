function solve(area, volume, input) {
  let arr = JSON.parse(input);
  let result = [];
  for (let obj of arr) {
    let areaObj = Math.abs(area.call(obj));
    let volumeObj = Math.abs(volume.call(obj));
    let objResult = {
      area: areaObj,
      volume: volumeObj,
    };
    result.push(objResult);
  }
  return result;
}
solve(
  area,
  vol,
  `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`
);
function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}
