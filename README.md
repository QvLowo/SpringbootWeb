SpringBoot + JSP
===
05/17~05/20 springboot 課程
使用8081 port
CSR
mysql 
---

## 同步非同步 example
- 同步：程式要等前面的執行完才可執行下一個，類似同一個thread．
  >  ex:銀行交易執行系統
- 非同步：程式不用等待前面的執行完，可以同時執行其他程式，類似多個thread．

## Promise的解釋
Promise 是一個用來處理非同步操作的物件．他代表一個尚未完成的操作，但最終會成功完成或失敗．</br>
Promise 的三種狀態</br>
Pending(待定):初始狀態，操作尚未完成或被拒絕．</br>
Fulfilled(已完成):操作成功完成．</br>
Rejected(已拒絕):操作失敗．</br>
---
### Promise基本用法
 > let只能在某個實作區塊內超過即不可使用（類似區域變數），var類似全域變數
```
let promise = new Promise((resolve, reject) => {
   // 執行一些非同步操作
   if (操作成功 ) {
        resolve('成功的結果'); // 操作成功時調用
      } else {
        reject('失敗的原因'); // 操作失敗時調用
      }
 });
```
---
## callback回呼[重要]
promise是用來解決回呼地獄
