Page({
  data: {
    target: 0,           // 目标数字
    guess: '',           // 当前输入
    count: 0,            // 猜测次数
    message: '输入1-100的数字，开始猜测！',  // 提示信息
    messageType: 'info', // 消息类型: info|success|error
    isWin: false,        // 是否赢了
    history: []          // 历史记录
  },

  onLoad() {
    this.initGame();
  },

  // 初始化游戏
  initGame() {
    const target = Math.floor(Math.random() * 100) + 1;
    this.setData({
      target: target,
      guess: '',
      count: 0,
      message: '输入1-100的数字，开始猜测！',
      messageType: 'info',
      isWin: false,
      history: []
    });
  },

  // 输入框变化事件
  onInputChange(e) {
    this.setData({
      guess: e.detail.value
    });
  },

  // 猜测按钮点击
  onGuessClick() {
    const { target, guess, count } = this.data;

    // 验证输入
    const guessNum = parseInt(guess);
    if (guess === '' || isNaN(guessNum)) {
      this.setData({
        message: '请输入有效数字',
        messageType: 'error'
      });
      return;
    }

    if (guessNum < 1 || guessNum > 100) {
      this.setData({
        message: '请输入1-100之间的数字',
        messageType: 'error'
      });
      return;
    }

    // 更新计数
    const newCount = count + 1;
    const history = this.data.history.concat([guessNum]);

    let message = '';
    let messageType = 'info';
    let isWin = false;

    if (guessNum === target) {
      message = `恭喜！你用${newCount}次猜中了！`;
      messageType = 'success';
      isWin = true;
    } else if (guessNum < target) {
      message = `太小了！再试试`;
      messageType = 'error';
    } else {
      message = `太大了！再试试`;
      messageType = 'error';
    }

    this.setData({
      count: newCount,
      message: message,
      messageType: messageType,
      isWin: isWin,
      guess: '',
      history: history
    });

    // 赢了之后清空输入框
    if (isWin) {
      this.setData({
        guess: ''
      });
    }
  },

  // 重新开始按钮
  onRestartClick() {
    this.initGame();
  },

  // 处理输入框回车事件
  onKeyDown(e) {
    if (e.key === 'Enter') {
      this.onGuessClick();
    }
  }
});
