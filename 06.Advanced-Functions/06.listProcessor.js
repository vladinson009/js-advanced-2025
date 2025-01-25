function solve(commands) {
  let result = [];
  const actions = {
    add: (string) => result.push(string),
    remove: (string) => (result = result.filter((el) => el !== string)),
    print: () => console.log(result.join(',')),
  };
  for (let each of commands) {
    let [command, value] = each.split(' ');
    actions[command] ? actions[command](value) : null;
  }
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
