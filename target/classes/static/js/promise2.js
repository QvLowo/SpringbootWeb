// 同步非同步 example2
// 使用async(非同步)與await（等待） 處理Promise
// 簡化程式撰寫與操作

// 模擬煮飯的function（需要五秒鐘）
function cookRice() {
    let promise = new Promise((resolve) => {
        setTimeout(() => {resolve("煮飯完畢");}, 5000);
    });
    return promise;
}

// 模擬擺桌子的 function (立即可以完成)
function setTable() {
    console.log("桌椅碗筷準備完成");
}

// 準備晚餐(使用async與await處理Promise)
async function prepareDinner(){
    console.log("開始準備晚餐");
    // 煮飯擺桌=>非同步，煮飯吃飯=>同步
    // 開始煮飯
    const ricePromise = cookRice();
    // 擺桌子
    setTable();
    // 開始吃飯
    const result =await ricePromise;
    // ricePromise.then((result) => { //當ricePromise完成之後執行
        // 印出promise的resolve，result=煮飯完畢
        console.log(result);
        console.log("飯食準備完成, 開動... 飯吃完了~");
    // });
}
prepareDinner();
