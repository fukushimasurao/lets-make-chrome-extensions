const body = document.querySelector('body')
const addElement = document.createElement('h1');

// 残業時間が記載されている箇所抜き出す
const got_time = document.querySelectorAll(".table01__row > .table01__cell--time:nth-child(18)");

// 以下、この時間取得の方法はもっと改良できると思う😇

// 時間の計算用に時間を用意
const time_of_origin = new Date("2020/1/1 00:00:00").getTime();
let ary = [];

for (let i = 0; i < got_time.length; i++){
    let time = got_time[i].textContent;
    // もし時間が記入されていたら、記述されている時間(string形式で書かれている)をうまいことDate object形式に変換
    // 何分残業しているのか取得, 配列にぶち込む。
    if (time !== "") {
        let date = new Date("2020/1/1 " + time + ":00").getTime();
        ary.push(date - time_of_origin);
    }
}

// 配列にぶち込まれている時間を合計する。
let total = ary.reduce(function(sum, element){
    return sum + element;
}, 0);

// 表示したいテキストを用意。
addElement.textContent = '今月の残業時間は' + total / 1000 / 60 + '分だよ';

// 適当に、bodyにくっつける。
body.prepend(addElement);
