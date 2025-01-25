function solve(object) {
  const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
  const versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
  const uriPatern = /^[\w\.]+$/gm;
  const messagePatern = /[<>&'"\\]/gm;

  try {
    if (!methods.includes(object.method) || object.method == undefined) {
      throw new Error('Method');
    } else if (!uriPatern.test(object.uri) || object.uri == undefined || object.uri == '') {
      throw new Error('URI');
    } else if (!versions.includes(object.version || object.version == undefined)) {
      throw new Error('Version');
    } else if (messagePatern.test(object.message) || object.message == undefined) {
      throw new Error('Message');
    }
  } catch (error) {
    throw new Error(`Invalid request header: Invalid ${error.message}`);
  }
  return object;
}
console.log(
  solve({
    method: 'GET',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '123',
  })
);
