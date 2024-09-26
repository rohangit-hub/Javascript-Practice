let p = new Promise((resolve, reject) => {
    let isTrue = false;
    if (isTrue) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });
  
  p
  .then( (message) => {console.log(`Promise resolved: ${message}`) })
  .catch( (message) => {console.log(`Promise rejected: ${message} `) });