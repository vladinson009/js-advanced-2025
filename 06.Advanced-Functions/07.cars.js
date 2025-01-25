function solve(array) {
  const cars = {};
  const actions = {
    create,
    set,
    print,
  };
  for (const each of array) {
    const [command, ...rest] = each.split(' ');
    actions[command] ? actions[command](...rest) : null;
  }
  function create(name, inherit, parent) {
    if (inherit == undefined) {
      cars[name] = {};
    } else {
      cars[name] = Object.create(cars[parent]);
    }
  }
  function set(name, key, value) {
    cars[name][key] = value;
  }
  function print(name) {
    const result = [];
    for (const key in cars[name]) {
      result.push(`${key}:${cars[name][key]}`);
    }
    console.log(result.join(','));
  }
}
solve([
  'create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2',
]);
