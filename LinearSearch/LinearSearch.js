let array = [10,20,30,40,50,60,65,70,79,100];
const target = 65;
function linearSearch(array,target ){
    for(let i= 0; i < array.length; i++){
        if( array[i]===target ){
            return `${target } found at index ${i}`;
        }
    }
    return `Not Found !`
} 
console.log(linearSearch(array,target ));