(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{221:function(t,a,r){"use strict";r.r(a);var s=r(8),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"麦昆小车-测评"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#麦昆小车-测评"}},[t._v("#")]),t._v(" 麦昆小车 - 测评")]),t._v(" "),r("p",[t._v("一只玩具小车的开箱测评与上手。")]),t._v(" "),r("hr"),t._v(" "),r("h2",{attrs:{id:"前言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),r("p",[t._v("刷朋友圈的时候，偶然刷到 @瀚瀚_luna 的征集令。正好我对近两三年来流行的 micro:bit 板子感兴趣。于是，我眼疾手快地申请到了一只麦昆小车。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/20190509034209667.png",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"开箱"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开箱"}},[t._v("#")]),t._v(" 开箱")]),t._v(" "),r("p",[t._v("拆开快递包裹，出现了一个 DFRobot 专属橙色的盒子：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/IMG_0291.jpg",alt:""}})]),t._v(" "),r("p",[t._v("打开盒盖，可以发现 micro:bit 主板和麦昆套件：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/IMG_0293.jpg",alt:""}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/IMG_0294.jpg",alt:""}})]),t._v(" "),r("p",[t._v("零件全家福：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/IMG_0296.jpg",alt:""}})]),t._v(" "),r("p",[t._v("小车装好后的样子：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/IMG_0305.JPG",alt:""}})]),t._v(" "),r("h2",{attrs:{id:"基本资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本资料"}},[t._v("#")]),t._v(" 基本资料")]),t._v(" "),r("p",[t._v("麦昆小车的开发文档： "),r("a",{attrs:{href:"http://wiki.dfrobot.com.cn/index.php?title=%28SKU:ROB0148%29_micro:Maqueen%28V2.0%29%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B0%8F%E8%BD%A6",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://wiki.dfrobot.com.cn/index.php?title=(SKU:ROB0148)_micro:Maqueen(V2.0)机器人小车"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"硬件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#硬件"}},[t._v("#")]),t._v(" 硬件")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/2019-05-15-130145.jpg",alt:"1280px-ROB0148正+背-ch-2"}}),t._v(" 小车板载了许多功能模块，可以直接实现超声波测距、循迹、红外遥控等功能。小车用 3.5V~5V 直流供电，我用随车附送的电池盒，装上 3 颗 7 号电池给小车供电。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/IMG_0306.JPG",alt:""}})]),t._v(" "),r("h3",{attrs:{id:"软件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#软件"}},[t._v("#")]),t._v(" 软件")]),t._v(" "),r("p",[t._v("麦昆小车使用基于 Scratch3.0 的 Mind+ 编程，很遗憾 Mind+ 暂不支持 MacOS 系统，我只能将工作区切换回 Windows. 我在安装 Mind+ 后，打开软件无响应，于是按照 "),r("a",{attrs:{href:"http://mc.dfrobot.com.cn/thread-267641-1-1.html",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("这篇教程")]),r("OutboundLink")],1),t._v(" 将软件设置以 Windows 7 兼容性模式下运行，但仍不可用。于是，我切换为 "),r("a",{attrs:{href:"https://makecode.microbit.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("makecode"),r("OutboundLink")],1),t._v(" 进行编程。后来，我将 Mind+ 的兼容性设置为 Windows XP，最终可用了。")]),t._v(" "),r("h3",{attrs:{id:"基本开发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#基本开发"}},[t._v("#")]),t._v(" 基本开发")]),t._v(" "),r("h4",{attrs:{id:"makecode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#makecode"}},[t._v("#")]),t._v(" makecode")]),t._v(" "),r("p",[t._v("我编写了一个程序，用于测试电机能否正常运行： "),r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202019-05-09%20%E4%B8%8B%E5%8D%885.39.44.png",alt:""}}),t._v(" 其中，「无限循环」代码块相当于 Arduino 下的 loop() 函数。")]),t._v(" "),r("p",[t._v("点击下载按钮，下载一个 .hex 后缀的文件，将 micro:bit 连接计算机并当做一个储存设备，把文件直接丢进去就自动上传了。 "),r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190509151403842/20190509053649722.png",alt:""}})]),t._v(" "),r("p",[t._v("makecode 是基于 JavaScript 的，对 Arduino 兼容性并不好（例如第三方库）。网页直接便编写程序虽然很方便，但后期开发（加装各种传感器模块、源代码的存档）并不好用，所以后来我切换至 Mind+ 编程。")]),t._v(" "),r("h4",{attrs:{id:"mind"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mind"}},[t._v("#")]),t._v(" Mind+")]),t._v(" "),r("p",[t._v("测试电机的运行：")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/2019-05-15-125933.png",alt:"Snipaste_2019-05-09_23-00-24"}})]),t._v(" "),r("h3",{attrs:{id:"有趣的想法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#有趣的想法"}},[t._v("#")]),t._v(" 有趣的想法")]),t._v(" "),r("h4",{attrs:{id:"恶搞小玩意"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#恶搞小玩意"}},[t._v("#")]),t._v(" 恶搞小玩意")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/2019-05-15-125956.png",alt:"Snipaste_2019-05-09_22-25-11"}}),t._v(" 当检测到有人走过的时候（超声波测距值小于 5 cm），就会发出一段 BGM。")]),t._v(" "),r("h4",{attrs:{id:"乱窜小车"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#乱窜小车"}},[t._v("#")]),t._v(" 乱窜小车")]),t._v(" "),r("p",[t._v("原理：利用超声波测距，如果小于某个值（前方有障碍物），则随机左右转，继续前进。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/2019-05-15-130015.png",alt:"Snipaste_2019-05-11_20-02-58"}})]),t._v(" "),r("h4",{attrs:{id:"（待填坑）我脚底下是什么颜色？"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（待填坑）我脚底下是什么颜色？"}},[t._v("#")]),t._v(" （待填坑）我脚底下是什么颜色？")]),t._v(" "),r("h4",{attrs:{id:"（待填坑）桌面清扫机器人"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（待填坑）桌面清扫机器人"}},[t._v("#")]),t._v(" （待填坑）桌面清扫机器人")]),t._v(" "),r("p",[t._v("自动清扫桌面。")]),t._v(" "),r("h4",{attrs:{id:"（待填坑）桌面小助手"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#（待填坑）桌面小助手"}},[t._v("#")]),t._v(" （待填坑）桌面小助手")]),t._v(" "),r("p",[t._v("时钟、喝水提醒、久坐提醒等。")]),t._v(" "),r("h2",{attrs:{id:"源码资料"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#源码资料"}},[t._v("#")]),t._v(" 源码资料")]),t._v(" "),r("p",[t._v("以上源代码放置于："),r("a",{attrs:{href:"https://www.jianguoyun.com/p/DYRixvgQ9Z2HBxivmL0B",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("坚果云")]),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),r("p",[t._v("亮点： 1. 模块化设计，拼装简单，到手即玩，不必调试硬件，适用于 STEAM 教学； 2. 迷你车身，相较于其他智能小车，更适合小孩子玩； 3. 图形化编程，适合孩子入门；")]),t._v(" "),r("p",[t._v("期待改进之处：")]),t._v(" "),r("ol",[r("li",[t._v("主控板插槽没有分正反标识，初次上手容易插反；")]),t._v(" "),r("li",[t._v("初始 LED 点阵屏亮度太高，有可能会损伤孩子视力。")])]),t._v(" "),r("h2",{attrs:{id:"参考与致谢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[t._v("#")]),t._v(" 参考与致谢")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://sspai.com/post/33612",target:"_blank",rel:"noopener noreferrer"}},[t._v("我写测评文章的态度"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);