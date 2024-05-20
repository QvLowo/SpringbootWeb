// 同步非同步 example

// 煮東西
function cookRice(){
    console.log("煮飯完畢");
}
// 模擬煮飯的function（需要五秒鐘）
function cook(){
    // lambda表達式
    setTimeout(cookRice(),5000);
}
function cook(){
    // lambda表達式
    setTimeout(()=>{console.log("煮飯完畢")},5000);
}
// 模擬擺桌子的function（立即可以完成）
function setTable(){
    console.log("桌椅碗筷準備完成");
}
// 準備晚餐
function prepareDinner(){
    console.log("開始準備晚餐");
    // 開始煮飯
    cookRice();
    // 擺桌子
    setTable();
    // 開始吃飯
    console.log("飯食準備完成,開動!");
}
prepareDinner();
