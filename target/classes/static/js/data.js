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
});
