function toThrowError(fn) {
    console.assert( (function() {
        try {
            fn();
            return false;
        }
        catch (e) {
            return true;
        }
    })() )
}


var MPSS = require('./index.js');


// getQuestions
console.assert(MPSS.getQuestions().length === 7);

// getChoices
console.assert(MPSS.getChoices(0).length === 5);
console.assert(MPSS.getChoices(1).length === 5);
console.assert(MPSS.getChoices(2).length === 5);
console.assert(MPSS.getChoices(3).length === 5);
console.assert(MPSS.getChoices(4).length === 5);
console.assert(MPSS.getChoices(5).length === 6);
console.assert(MPSS.getChoices(6).length === 6);


// calculate
console.assert(MPSS.calculate([0,0,0,0,0,0,0]) === 15);
console.assert(MPSS.calculate([3,0,0,0,0,0,0]) === 18);
console.assert(MPSS.calculate([4,3,2,1,0,5,4]) === 16);
console.assert(MPSS.calculate(['0','0','0','0','0','0', '0']) === 15);

toThrowError(function() { MPSS.calculate([0,0,0,3,0,0]) }); // 長さのエラーを出す
toThrowError(function() { MPSS.calculate([0,0,0,0,0,0,6]) }); // 値のエラーを出す

console.log('すべてのテスト通過');
