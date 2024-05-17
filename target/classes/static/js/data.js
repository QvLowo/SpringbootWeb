// 透過$(id)來替代document.getElementById(id)
const $ = (id) => document.getElementById(id);
const renderShipTable = (ships) => {

    const rows = ships.map(ship => `<tr>
										<td>${ship.name}</td>
										<td>${ship.type}</td>
										<td>${ship.length}</td>
										<td>${ship.width}</td>
									</tr>`).join('');

    const table = `<table border=1>
					<thead>
						<tr>
							<th>名稱</th><th>種類</th><th>長度</th><th>寬度</th>
						</tr>
					</thead>
					<tbody>
						${rows}
					</tbody>
				</table>`;

    $('result').innerHTML = table;
};
// 待DOM加載完成之後再執行
document.addEventListener("DOMContentLoaded", async () => {

    // 監聽xxxbutton是否有被點擊
    $('todayBtn').addEventListener("click", async (event) => {
        console.log('todayBtn 被點擊');
        // 同步請求
        const response = await fetch('/data/today');
        const {state, message, data} = await response.json();
        console.log(state, message, data);
        $('result').innerHTML = data;
    });

    $('lottoBtn').addEventListener("click", async (event) => {
        console.log('lottoBtn 被點擊');
        const response = await fetch('/data/lotto');
        const {state, message, data} = await response.json();
        console.log(state, message, data);
        $('result').innerHTML = data;
    });

    $('shipBtn').addEventListener("click", async (event) => {
        console.log('shipBtn 被點擊');
        const response = await fetch('/data/ship');
        const {state, message, data} = await response.json();
        console.log(state, message, data);
        $('result').innerHTML = `
    名稱: ${data.name}<br>
        種類: ${data.type}<br>
        長度: ${data.length}<br>
        寬度: ${data.width}`;
    });
    $('shipsBtn').addEventListener("click", async (event) => {
        console.log('shipsBtn 被點擊');
        const response = await fetch('/data/ships');
        const {state, message, data} = await response.json();
        console.log(state, message, data);
        // 資料渲染
        renderShipTable(data);
    });

    $('shipByIdBtn').addEventListener("click", async (event) => {
        console.log('shipByIdBtn 被按下');
        // 彈出輸入框
        const id = window.prompt('請輸入 id');
        const response = await fetch(`http://localhost:8081/data/ship/${id}`);
        const {state, message, data} = await response.json();
        console.log(state, message, data);
        if (state) {
            $('result').innerHTML = `名稱: ${data.name}<br>
									 種類: ${data.type}<br>
									 長度: ${data.length}m<br>
									 寬度: ${data.width}m`;
        } else {
            $('result').innerHTML = message;
        }
    });

    $('bmiBtn').addEventListener("click", async (event) => {
        console.log('bmiBtn 被按下');
        // 彈出輸入框
        const h = window.prompt('請輸入 身高');
        const w = window.prompt('請輸入 體重');
        const response = await fetch(`http://localhost:8081/data/bmi?h=${h}&w=${w}`);
        const {state, message, data} = await response.json();
        console.log(state, message, data);
        if (state) {
            $('result').innerHTML = `身高: ${data.height}<br>
									 體重: ${data.weight}<br>
									 BMI: ${data.bmi}<br>
                                      結果: ${data.result}`;
        } else {
            $('result').innerHTML = message;
        }
    });
});
