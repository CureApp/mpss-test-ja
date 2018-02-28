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
console.assert(MPSS.calculate(['0','0','0','0','0','0','0']) === 15);

// getScore
console.assert(MPSS.getScore(0, 0) === 1);
console.assert(MPSS.getScore(0, 3) === 4);
console.assert(MPSS.getScore(2, 4) === 5);
console.assert(MPSS.getScore(5, 1) === 4);
console.assert(MPSS.getScore(5, 5) === 0);
console.assert(MPSS.getScore(6, 3) === 2);

// questionExpressions
console.assert(MPSS.questionExpressions[0] === '抑うつ感');
console.assert(MPSS.questionExpressions[1] === 'いらいら感');
console.assert(MPSS.questionExpressions[2] === '落ち着きのなさ');
console.assert(MPSS.questionExpressions[3] === '空腹感');
console.assert(MPSS.questionExpressions[4] === '集中力の欠如');
console.assert(MPSS.questionExpressions[5] === '喫煙衝動の頻度');
console.assert(MPSS.questionExpressions[6] === '喫煙衝動の強さ');

// getQuestionExpressionEN
console.assert(MPSS.getQuestionExpressionEN('抑うつ感') === 'Depressed');
console.assert(MPSS.getQuestionExpressionEN('いらいら感') === 'Irritable');
console.assert(MPSS.getQuestionExpressionEN('落ち着きのなさ') === 'Restless');
console.assert(MPSS.getQuestionExpressionEN('空腹感') === 'Hungry');
console.assert(MPSS.getQuestionExpressionEN('集中力の欠如') === 'Poor concentration');
console.assert(MPSS.getQuestionExpressionEN('喫煙衝動の頻度') === 'Time spent with urges');
console.assert(MPSS.getQuestionExpressionEN('喫煙衝動の強さ') === 'Strength of urges');

toThrowError(function() { MPSS.calculate([0,0,0,3,0,0]) }); // 長さのエラーを出す
toThrowError(function() { MPSS.calculate([0,0,0,0,0,0,6]) }); // 値のエラーを出す

console.log('すべてのテスト通過');
