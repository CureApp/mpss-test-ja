module.exports = {

    /**
    質問一覧を返す

    @method getQuestions
    @return {Array(String)}
    */
    getQuestions: function() {

        return [
            'ここ24時間のなかで、「落ち込む」とどのぐらい感じましたか?',
            'ここ24時間のなかで、「いらいらする」とどのぐらい感じましたか?',
            'ここ24時間のなかで、「落ち着きがない」とどのぐらい感じましたか?',
            'ここ24時間のなかで、「空腹である」とどのぐらい感じましたか?',
            'ここ24時間のなかで、「集中できない」とどのぐらい感じましたか?',
            'ここ24時間のなかでどれくらいの間、「吸いたい衝動」を感じましたか?',
            'その「吸いたい衝動」の強さを選んでください。'
        ];
   },

    /**
    indexで与えられた質問の選択肢を返す

    @method getChoices
    @param {Number} qsIndex 質問票のインデックス 0, 1, 2, ...
    @return {Array(String)}
    */
    getChoices: function(qsIndex) {

        return [
            [ '全く感じない', 'わずかに感じる', 'ある程度感じる', 'とても感じる', '非常に感じる' ],
            [ '全く感じない', 'わずかに感じる', 'ある程度感じる', 'とても感じる', '非常に感じる' ],
            [ '全く感じない', 'わずかに感じる', 'ある程度感じる', 'とても感じる', '非常に感じる' ],
            [ '全く感じない', 'わずかに感じる', 'ある程度感じる', 'とても感じる', '非常に感じる' ],
            [ '全く感じない', 'わずかに感じる', 'ある程度感じる', 'とても感じる', '非常に感じる' ],
            ['いつも', 'ほとんどいつも', '何回も', '時々', 'あまり感じない', '全く感じない'],
            ['きわめて強い', 'とても強い', '強い', '少し強い', 'わずかに強い', '衝動はない'],
        ][qsIndex];
    },


    /**
    indexで与えられた選択肢の配列から、点数を計算する
    点数表から質問ごとの点数を算出して計算

    @method calculate
    @param {Array(Number)} answerIndexes 選んだ選択肢のインデックスの配列(質問順)
    @return {Number} 点数
    */
    calculate: function(answerIndexes) {

        if (answerIndexes.length !== 7) {
            throw new Error('引数の長さが7でない');
        }

        var points = [
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [1, 2, 3, 4, 5],
            [5, 4, 3, 2, 1, 0],
            [5, 4, 3, 2, 1, 0]
        ];

        return answerIndexes.reduce(function(total, qsIndex, i) {

            var point = points[i][qsIndex];

            if (point === undefined) {
                throw new Error((i + 1) + '番目の値が不正');
            }

            return total + point;

        }, 0);
    }
};

