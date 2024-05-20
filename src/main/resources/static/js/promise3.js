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
        // 做其他事情(同步)，等上面做完才會執行這行
        console.log('doSomething~~');

        console.log('end');
    });

    // 非同步
    $('queryButton2').addEventListener("click",(event)=>{
        console.log('begin');
        // 遠端抓資料
        fetch('http://localhost:8081/data/lotto')
            // 接到response轉換成json，會花一點時間
           .then(response => response.json())
           .then(({state, message, data}) => {
               console.log(state, message, data);
               console.log('end');
           });
        // 做其他事情（非同步）
        console.log('doSomething~~');
    });
});
