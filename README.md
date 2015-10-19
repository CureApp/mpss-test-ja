# mpss-test-ja
日本語のMPSS (The Mood and Physical Symptom Scale) の質問票の文言と点数計算

## install

```sh
npm install mpss-test-ja
```

## usage

```js
var MPSS = require('mpss-test-ja');
```

質問一覧を取得
```js
MPSS.getQuestions();
```

質問の選択肢を取得
```js
MPSS.getChoices(0); // Q1の選択肢の配列
MPSS.getChoices(4); // Q5の選択肢の配列
```

点数を計算
```js
// 引数はQ1~Q7 の回答の配列. getChoices で得られた配列のインデックスの値の列を渡す
MPSS.calculate([2,1,0,3,1,0,3]); // 6 を返す。
```

## LICENSE
MIT
