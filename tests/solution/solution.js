'use strict'

let words

module.exports.init = (data) => {
    words = data.toString('utf8').split('\n')
}

module.exports.test = (w) => {
    //console.warn('w:', words[0], '-', words[1])
    for(var i = 0; i < words.length; i++){
        if (w.toLowerCase().indexOf(words[i]) >= 0) {
            return false
        }
    }
    return true;
}