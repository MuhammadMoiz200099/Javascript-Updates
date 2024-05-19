// Promise.withResolvers() 
// This is a static method that returns an object that contains three properties:
// - A promise
// - A resolve function and
//  -A reject function

let {promise, resolve, reject} = Promise.withResolvers();

// Promise.withResolvers() provides equivalent functionality to the following JavaScript code:
let resolve, reject;
const promise = new Promise((res, rej) => {
  resolve = res;
  reject = rej;
});

// Example use of Promise.withResolvers():
const { resolve, reject, promise } = Promise.withResolvers();

function request(type, message) {
  if (socket) {
    socket.emit(type, message);
    return promise;
  }
    
  return Promise.reject(new Error('Socket unavailable'));
}

socket.on('response', response => {
  if (response.status === 200) {
    resolve(response);
  } else {
    reject(new Error(response));
  }
});

socket.on('error', err => {
  reject(err);
});