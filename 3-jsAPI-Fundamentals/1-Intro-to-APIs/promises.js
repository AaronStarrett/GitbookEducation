let promise = new Promise(function(resolve, reject){
   setTimeout(() => {
      if(true){
          resolve('success');
        }else{
          reject('failure :(');
        } 
   }, 3000);
})

promise
    .then(newResult => {
        return newResult + ' we are returning from our first .then'
    })
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})

console.log(' this code is after our promise & .then chain! ');


//Promises:
// similar to callbacks - in that we can use them to make things happen in order asynchronously
//3 status: pedning, resolved, rejected
//instead of calling other functions as parameters, they do things,
//and then either resolve or reject
//our next step is using ".then"
//cleaner syntax than callbacks




