// 模拟宝藏地图API
class TreasureMap {

    static getInitialClue() {
      // 返回一个Promise，模拟在古老的图书馆里找到第一个线索
      return new Promise((resolve) => {
        // 使用setTimeout函数模拟异步操作，1秒后解析Promise，返回一个字符串
        setTimeout(() => {
          resolve("在古老的图书馆里找到了第一个线索...");
        }, 1000);
      });
    }
    
    static async decodeAncientScript(clue) {
      // 返回一个Promise，模拟解码古老的文字
      return new Promise((resolve, reject) => {
        // 使用setTimeout函数模拟异步操作
        setTimeout(() => {
          if (!clue) {
            reject("没有线索可以解码!");
          }
          resolve("解码成功!宝藏在一座古老的神庙中...");
        }, 1500);
      });
    }
  
    static async searchTemple(location) {
      // 返回一个Promise，模拟在神庙中寻找的过程
      return new Promise((resolve, reject) => {
        // 使用setTimeout函数模拟异步操作
        setTimeout(() => {
          // 生成一个随机数，如果小于0.5，则拒绝Promise，否则解析Promise
          const random = Math.random();
          if (random < 0.5) {
            reject("糟糕!遇到了神庙守卫!");
          }
          resolve("找到了一个神秘的箱子...");
        }, 2000);
      });
    }
  
    static async openTreasureBox() {
      // 返回一个Promise，模拟打开宝藏箱子的过程
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("恭喜!你找到了传说中的宝藏!");
        }, 1000);
      });
    }
  }
  
// DOMContentLoaded事件的监听器，用于绑定按钮点击事件和动画显示逻辑
document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const resultDiv = document.getElementById('result');
    const loadingDiv = document.getElementById('loading');
  
    startButton.addEventListener('click', async () => {
      resultDiv.innerHTML = ''; // 清空之前的结果
      loadingDiv.style.display = 'block'; // 显示加载动画
  
      try {
        const clue = await TreasureMap.getInitialClue();
        resultDiv.innerHTML += `<div class="result-box"><p>${clue}</p><img src="古老的图书馆.jpg" alt="Image 1"></div>`;
        
        const location = await TreasureMap.decodeAncientScript(clue);
        resultDiv.innerHTML += `<div class="result-box"><p>${location}</p><img src="古老的神庙.png" alt="Image 2"></div>`;

        const box = await TreasureMap.searchTemple(location);
        resultDiv.innerHTML += `<div class="result-box"><p>${box}</p><img src="宝箱.jpg" alt="Image 3"></div>`;

        const treasure = await TreasureMap.openTreasureBox();
        resultDiv.innerHTML += `<div class="result-box"><p style="color:blue;">${treasure}</p><img src="财宝.jpg" alt="Image 4"></div>`;
      }
      catch (error) {
        resultDiv.innerHTML += `<div class="result-box"><p style="color:red;">任务失败: ${error}</p><img src="怪兽.jpg" alt="Image 5"></div>`;
      }
      loadingDiv.style.display = 'none'; // 隐藏加载动画

    });
  });