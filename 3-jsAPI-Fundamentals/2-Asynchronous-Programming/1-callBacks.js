function callbackFunction(){
    for(let i = 0; i < 100; i++){
        console.log(i)
    }

     const data = {
        name: 'Ralf Machio', 
        age: 66, 
        occupation: 'kickboxing'
    }
    return data;
}

function showData(dataFromFunction){
    return "hello " + dataFromFunction.name
}

console.log(
    showData(callbackFunction())
)


//Promises:
// similar to callbacks - in that we can use them to make things happen in order asynchronously
//3 status: pending, resolved, rejected
//instead of calling other functions as parameters, they do things,
//and then either resolve or reject
//our next step is using ".then"
//cleaner syntax than callbacks


let one = new Promise(res => setTimeout(res('cat'), 500))

one
.then(
(cat) => console.log(cat)
)
.catch(
    err => console.log(err)
)

//
//






