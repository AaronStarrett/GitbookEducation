//  sports = {
//     contact: "football", 
//     sissySport: "soccer",
// };

// classmate = {
//     firstName: "A-A-Ron",
//     secondName: "MuFnStarrett"
// }

// function swap (obj, property1, property2) {
// let newObj = obj[property1]
// obj[property1] = obj[property2]
// obj[property2] = newObj
// };
// swap(sports, "contact", "ManSport");
// console.log(sports);

// swap(classmate, "firstName", "secondName")


// function nonDestructiveSwap (obj, prop1, prop2) {
//     let newProp1 = obj[prop1]
//     let newProp2 = obj[prop2]
//     let newObj = obj

//     newObj[prop2] = newProp2
//     newObj[prop1] = newProp1
//     return newObj
// }

// console.log(nonDestructiveSwap(classmate, "firstName", "secondName"))

let tensArray = [10,20,30,40,50,70];
let onesArray = [5,3,2,5];

// function multArray(array1, array2) {
//     let i = [];
//     for( let i = 0; i < array1.length && i < array2.length; i++) 
//      return array1[i] * array2[i];
// };
// console.log(multArray(array1, array2));

let multIndicies = (a, b) => {
    let arrSmall =(a.length < b.length) ? a : b 
    let arrLarge = (a.length > b.length) ? a : b
    
    arrResult = arrLarge.map((x, xInd) => {
        let multiplier = (arrSmall[xInd] !== undefined) ? arrSmall[xInd] : 1 

        return x * multiplier
    })

    return arrResult
}

console.log(multIndicies(tensArray, onesArray))
