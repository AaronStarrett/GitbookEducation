function pigLatin(string){
 let array = string.split('');
 let vowels = ['a', 'e', 'i', 'o', 'u'];
 let newWord = '';
 for(let i = 0; i < vowels.length-1; i++){
     for(let y = 0; y < string.length-1; y++ ){
         if(string[y] === vowels[i]) {
             for(let x = y; x < string.length; x++){
                 newWord = newWord + string[x];
             }
             for( let n = 0; n < y; n++){
                 newWord = newWord + string[n];
             }
             return newWord + "ay";
         } 
     }
 }
}
console.log(pigLatin('Pig Latin'));