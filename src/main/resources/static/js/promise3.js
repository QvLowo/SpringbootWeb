// 同步非同步 example3
// 遠端同步promise
const $ = (id) => document.getElementById(id);



document.addEventListener("DOMContentLoaded", () => {
    //  同步
    $('queryButton').addEventListener('click', async(event) => {
        console.log('begin');
        // fetch抓不到json要先加await
        const response = await fetch('http://localhost:8081/data/lotto');
        // 非同步，response完成有時間所以也要加await，等待完成再往下執行
        const {state, message, data} = await response.json();
        console.log(state, message, data);

        console.log('doSomething~~');

        console.log('end');
    });
});
