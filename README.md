# 🎮 Guess the Number

> 一个简洁优雅的微信小程序猜数字游戏。系统随机生成 1-100 的整数，你需要通过逻辑推理不断缩小范围，最终猜中目标数字。

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Platform](https://img.shields.io/badge/platform-WeChat%20Mini%20Program-green.svg)](https://mp.weixin.qq.com/)

---

## ✨ 项目介绍

**Guess the Number** 是一款交互友好的微信小程序游戏。通过猜数字这个经典的逻辑游戏，展示现代化的 UI 设计和流畅的用户交互体验。

### 🎯 核心特点
- 🚀 **极速上手** - 规则简单，上手即玩
- 🎨 **现代 UI** - 渐变背景、毛玻璃效果、流畅动画
- 📊 **数据展示** - 实时显示猜测次数和历史记录
- ♻️ **无限重玩** - 随时重新开始新一轮游戏

---

## 🎯 功能特性

| 功能 | 描述 |
|------|------|
| 🎲 **智能随机** | 每次游戏生成不同的 1-100 随机数字 |
| 📝 **输入验证** | 自动验证输入的有效性和范围 |
| 💬 **实时反馈** | 即时给出"太小了""太大了""恭喜"的提示 |
| 📈 **次数计数** | 实时显示当前是第几次猜测 |
| 📋 **历史记录** | 显示所有已猜的数字，便于策略调整 |
| 🎉 **庆祝动画** | 猜对时展示动态庆祝效果 |
| 🔄 **快速重置** | 一键重新开始新游戏 |

---

## 🚀 如何使用

### 前置要求
- 📱 微信开发者工具
- 💻 有效的小程序 AppID

### 快速开始

#### 1️⃣ 克隆项目
```bash
git clone https://github.com/yourusername/Guess-the-Number.git
cd Guess-the-Number
```

#### 2️⃣ 导入到微信开发者工具
- 打开微信开发者工具
- 点击 **导入项目**
- 选择项目文件夹 `Guess-the-Number`
- 填入你的小程序 **AppID**
- 点击 **导入** 按钮

#### 3️⃣ 开始游戏
- 项目导入成功后会自动编译
- 点击 **预览** 或 **真机调试** 开始体验
- 输入数字并点击 **猜一猜** 按钮
- 根据提示调整策略，最终猜中数字

### 💡 游戏玩法

```
1. 系统生成 1-100 的随机数字 🎲
   ↓
2. 你输入一个数字 ⌨️
   ↓
3. 系统给出提示 💬
   - 太小了 🔺
   - 太大了 🔻
   - 恭喜了 🎉
   ↓
4. 根据提示调整范围，继续猜测 🔄
   ↓
5. 猜中后点击"重新开始"开新局 ♻️
```

---

## 📁 项目结构

```
Guess-the-Number/
├── 📄 app.js              # 应用入口
├── 📋 app.json            # 应用全局配置
├── 🎨 app.wxss            # 应用全局样式
├── 📝 project.config.json # 项目配置（包含 AppID）
├── 📚 README.md           # 项目文档
└── pages/
    └── index/
        ├── index.js       # 页面逻辑（游戏核心）
        ├── index.json     # 页面配置
        ├── index.wxml     # 页面模板
        └── index.wxss     # 页面样式
```

---

## 🎨 UI 设计

### 视觉特性
- **配色方案**：紫色渐变背景 (`#667eea` → `#764ba2`)
- **设计风格**：毛玻璃 + 现代化交互
- **动画效果**：
  - 消息滑入动画
  - 按钮缩放反馈
  - 庆祝 emoji 弹跳效果
  - 流畅的状态切换

### 界面布局
- 📱 全屏垂直居中设计
- 🔄 响应式布局，自适应各屏幕尺寸
- ♿ 清晰的视觉层级和信息优先级

---

## 🔧 技术栈

| 技术 | 用途 |
|------|------|
| **WXML** | 小程序页面模板语言 |
| **WXSS** | 小程序样式语言 |
| **JavaScript** | 游戏逻辑实现 |
| **WeChat API** | 小程序原生 API |

### 核心实现
- ✅ 随机数生成：`Math.random()`
- ✅ 状态管理：`setData()`
- ✅ 动态类名：模板字符串拼接
- ✅ 事件绑定：`bindtap`、`bindinput`

---

## 📊 游戏统计

### 推荐难度
- 🟢 **简单**：运气好可 3-5 次猜中
- 🟡 **普通**：理性玩家 5-8 次猜中
- 🔴 **困难**：需要完美策略 8+ 次猜中

### 最优策略
使用**二分查找法**可以在最多 7 次内猜中任意 1-100 的数字：
```
100 个数字 → 最多 log₂(100) ≈ 7 次
```

---

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 许可证

本项目采用 [MIT License](LICENSE) - 详见 [LICENSE](LICENSE) 文件

---

## 📮 联系方式

- 📧 邮箱：your.email@example.com
- 🐦 微博：[@YourUsername](https://weibo.com)
- 💬 微信：添加备注"Guess-the-Number"

---

## ⭐ 致谢

感谢所有关注和使用本项目的朋友！如果觉得项目不错，欢迎给个 Star ⭐

---

<div align="center">

**Made with ❤️ by Your Name**

*最后更新：2024 年 12 月 26 日*

</div>
