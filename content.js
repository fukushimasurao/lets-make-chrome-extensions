const body = document.querySelector('body')
const addElement = document.createElement('h1');

// 残業時間が記載されている箇所抜き出す
const headings = document.querySelectorAll(".table01__row > .table01__cell--time:nth-child(18)");

// 時間の計算用に時間を用意
const time_of_origin = new Date("2020/1/1 00:00:00").getTime();
let ary = [];

// このfor分の中身はもっと改良できると思う😇
for (let i = 0; i < headings.length; i++){
    let time = headings[i].textContent;
    // もし時間が記入されていたら、記述されている時間(string形式で書かれている)をうまいこと変換して、
    // Date object形式に変換して、何分残業しているのか確認、配列にぶち込む。
    if (time !== "") {
        let date = new Date("2020/1/1 " + time + ":00").getTime();
        ary.push(date - time_of_origin);
    }
}

// 配列にぶち込まれている時間を合計する。
let total = ary.reduce(function(sum, element){
    return sum + element;
}, 0);

addElement.textContent = '今月の残業時間は' + total / 1000 / 60 + '分だよ';

// 適当に、bodyにくっつける。
body.prepend(addElement);
