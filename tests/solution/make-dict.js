/**
 * Created by topchy on 11/15/16.
 */

const fs = require('fs');

const words = fs.readFileSync('../../words.txt', 'utf8').split('\n')
const literals = [..."abcdefghijklmnopqruvwxyz'"]

const getCombinations = (arr, n) => {
    var i,j,k,elem,l = arr.length,childperm,ret=[];
    if(n == 1){
        for(var i = 0; i < arr.length; i++){
            for(var j = 0; j < arr[i].length; j++){
                ret.push([arr[i][j]]);
            }
        }
        return ret;
    }
    else{
        for(i = 0; i < l; i++){
            elem = arr.shift();
            for(j = 0; j < elem.length; j++){
                childperm = getCombinations(arr.slice(), n-1);
                for(k = 0; k < childperm.length; k++){
                    ret.push([elem[j]].concat(childperm[k]));
                }
            }
        }
        return ret;
    }
    i=j=k=elem=l=childperm=ret=[]=null;
}

let twoLetter = getCombinations(literals.slice(),2)
let threeLetter = getCombinations(literals.slice(),3)
let fourLetter = getCombinations(literals.slice(),4)

console.log( 'words stat: ', words.reduce( (acc, e) => { acc.set(e.length, (acc.get(e.length) || 0) + 1 ); return acc } , new Map() ))
console.log( 'size: 2 letters => ', twoLetter.length*2, ', 3 letters => ', threeLetter.length*3, ', 4 letters => ', fourLetter.length*4, ', words => ', words.length)

const notContains = (word,e) => {
    return word.length < e.length || word.toLowerCase().indexOf(e) !== 0
}

const removeExistingCombinations = ( combArr, words) => {
    words.map((w,i) => {
        combArr = combArr.filter( (e) => notContains(w,e.join('')) )
        if ( i%1000 == 0 ) {
            console.log('newLen:', combArr.length, ', index: ', i)
        }
    } )
}

removeExistingCombinations(fourLetter, words.filter( (e) => e.length > 3))
//removeExistingCombinations(twoLetter, words)
//removeExistingCombinations(threeLetter, words)


console.log( 'size: 2 letters => ', twoLetter.length*2, ', 3 letters => ', threeLetter.length*3, ', 4 letters => ', fourLetter.length*4)