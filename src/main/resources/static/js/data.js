// 透過$(id)來替代document.getElementById(id)
const $ =(id) => document.getElementById(id);
// 待DOM加載完成之後再執行
document.addEventListener("DOMContentLoaded",async ()=>{

        // 監聽xxxbutton是否有被點擊
    $('todayBtn').addEventListener("click",async(event)=>{
        console.log('todayBtn 被點擊');
    });

    $('lottoBtn').addEventListener("click",async(event)=> {
        console.log('lottoBtn 被點擊');
    });

    $('shipBtn').addEventListener("click",async(event)=> {
        console.log('shipBtn 被點擊');
    });
    $('shipsBtn').addEventListener("click",async(event)=>{
       console.log('shipsBtn 被點擊');
    });
});
