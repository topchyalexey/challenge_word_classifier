/**
 * Created by topchy on 11/15/16.
 */

const fs = require('fs');

const words = fs.readFileSync('../../words.txt', 'utf8').split('\n').map((e) => e.toLowerCase())
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

//let twoLetter = getCombinations(literals.slice(),2).map( (e) => e.join(''))
//let threeLetter = getCombinations(literals.slice(),3).map( (e) => e.join(''))
let fourLetter = getCombinations(literals.slice(),4).map( (e) => e.join(''))

console.log( 'words stat: ', words.reduce( (acc, e) => { acc.set(e.length, (acc.get(e.length) || 0) + 1 ); return acc } , new Map() ))
console.log( 'size: 4 letters => ', fourLetter.length, ', words => ', words.length)

const notContains = (word,e) => {
    return word.indexOf(e) != 0
}

const removeExistingCombinations = ( combArr, words) => {
    words.map((w,i) => {
        combArr = combArr.filter( (e) => notContains(w,e) )
        if ( i%10000 == 0 ) {
            console.log('newLen:', combArr.length, ', index: ', i)
        }
    } )
    return combArr
}

fourLetter = removeExistingCombinations(fourLetter, words.filter( (e) => e.length > 3))
//removeExistingCombinations(twoLetter, words)
//removeExistingCombinations(threeLetter, words)

const pack = (bytes) => {
    var chars = [];
    for(var i = 0, n = bytes.length; i < n;) {
        chars.push(((bytes[i++] & 0xff) << 8) | (bytes[i++] & 0xff));
    }
    return String.fromCharCode.apply(null, chars);
}

const unpack = (str) => {
    var bytes = [];
    for(var i = 0, n = str.length; i < n; i++) {
        var char = str.charCodeAt(i);
        bytes.push(char >>> 8, char & 0xFF);
    }
    return bytes;
}

const storeDict = (arr,fileName) => {
    let file = fs.createWriteStream(fileName);
    file.on('error', function (err) { console.error(err) })
    file.write(arr.join('\n'))
    file.end()
}

storeDict(fourLetter, 'four.txt')

console.log( 'size: 4 letters => ', fourLetter.length)