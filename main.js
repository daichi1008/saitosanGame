// const setBtn = function () {
//     let hoge = Math.floor(Math.random() * 10);
//     if (hoge < 5) {
//         alert(`ペッペペー`)
//     } else {
//         alert(`斎藤さんだぞー`)
//     }
// };

// チャレンジ問題
// const setBtn = function () {
//     const hoge = Math.random() * 10;
//     console.log(hoge)
//     hoge < 5 ? alert(`ぺっぺぺー`) : alert(`斎藤さんだぞ`);
// };

// 追加チャレンジ問題
const word1 = `ぺっぺぺー`
const word2 = `斎藤さんだぞ`;

const setBtn = function () {
    let hoge = Math.floor(Math.random() * 10);
    if (hoge < 5) {
        const result = window.confirm(word1);
        if (result) {
            alert(word1);
        } else {
            alert(word2)
        }
    } else {
        const result = window.confirm(word2);
        if (result) {
            alert(word2);
        } else {
            alert(word1);
        }

    }


};