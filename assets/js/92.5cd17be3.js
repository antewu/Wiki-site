(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{301:function(a,t,s){"use strict";s.r(t);var r=s(8),_=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"云打印服务器搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#云打印服务器搭建"}},[a._v("#")]),a._v(" 云打印服务器搭建")]),a._v(" "),s("p",[a._v("用树莓派搭建云打印服务器，让普通打印机也能无线共享打印。")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/IMG_20181222_155243.jpg",alt:""}})]),a._v(" "),s("hr"),a._v(" "),s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" 背景")]),a._v(" "),s("p",[a._v("实验室有两台打印机，每次打印，都得抱着电脑跑来跑去，久之觉得麻烦，正好有闲置的树莓派板子一枚，遂搭了个云打印服务器，共享给实验室的所有人，实现云端打印。")]),a._v(" "),s("h2",{attrs:{id:"步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[a._v("#")]),a._v(" 步骤")]),a._v(" "),s("h3",{attrs:{id:"_1-前期准备"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-前期准备"}},[a._v("#")]),a._v(" 1. 前期准备")]),a._v(" "),s("p",[a._v("树莓派刷入 Raspbian 系统，最好更换国内软件源（教程请自行 Google）。")]),a._v(" "),s("h3",{attrs:{id:"_2-配置云打印服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-配置云打印服务"}},[a._v("#")]),a._v(" 2. 配置云打印服务")]),a._v(" "),s("p",[a._v("安装 CUPS 插件：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ sudo apt-get install cups\n$ sudo cupsctl --remote-any\n$ sudo /etc/init.d/cups restart\n")])])]),s("p",[a._v("查看树莓派当前 IP 地址：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$hostname -I\n")])])]),s("p",[a._v("现在可以在浏览器输入：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("https://你的树莓派IP:631/\n")])])]),s("p",[a._v("打开 CUPS 的界面。 浏览器可能会弹出警告，忽略即可。")]),a._v(" "),s("p",[a._v("跳到 Administration 界面，注意右边的勾选：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/SRnaG8Upe4QCw4A7__thumbnail.png",alt:""}})]),a._v(" "),s("p",[a._v("添加打印机：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/2ha01tLqMK8dKPPw__thumbnail.png",alt:""}})]),a._v(" "),s("p",[a._v("将打印机用 USB 线接上树莓派，一般可以看到本地 USB 设备： "),s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/dOY25IVr55cf4qbg__thumbnail-1.png",alt:""}})]),a._v(" "),s("p",[a._v("直接添加设备，名字越简单越好，share选项一定要勾选： "),s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/zY62367hBa0ZuwJV__thumbnail.png",alt:""}})]),a._v(" "),s("p",[a._v("找到打印机相应的型号，然后一直点就行了。 配置完成后，可以在打印机的页面选择 "),s("code",[a._v("Print Test Page")]),a._v(" 测试能否正常打印：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/9izhdEoI8cobbMjF__thumbnail.png",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"_3-在-windows-上配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-在-windows-上配置"}},[a._v("#")]),a._v(" 3. 在 Windows 上配置")]),a._v(" "),s("p",[a._v("控制面板 - 设备和打印机 - 添加打印机")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/dk39pnMjcQYPBElC__thumbnail.png",alt:""}})]),a._v(" "),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/CRkgxClLaaYjdGPt__thumbnail.png",alt:""}})]),a._v(" "),s("p",[a._v("填入IP，例如：")]),a._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("http://你的树莓派IP:631/printers/刚才设定的打印机名称\n")])])]),s("p",[s("img",{attrs:{src:"https://image-backup-1253965369.cos.ap-guangzhou.myqcloud.com/20190106181653349/Z8sZTaxH5ZoGWyBK__thumbnail.png",alt:""}})]),a._v(" "),s("p",[a._v("打印测试页试试？")]),a._v(" "),s("h2",{attrs:{id:"faq"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[a._v("#")]),a._v(" FAQ")]),a._v(" "),s("p",[a._v("Q：两台打印机都能实现云打印了吗？"),s("br"),a._v("\nA：其中一台激光打印机年代比较久远，应该是驱动问题，花了一天的时间折腾，最终还是实现不了。")]),a._v(" "),s("p",[a._v("Q：云打印具体有哪些功能？"),s("br"),a._v("\nA："),s("strong",[a._v("局域网内")]),a._v(" 可以无线打印，手机上也可以直接打印。")]),a._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),s("p",[a._v("重复两遍以上的事情，就可以考虑用自动化流程解决了，要学会用聪明的方法偷懒。")]),a._v(" "),s("h2",{attrs:{id:"参考与致谢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考与致谢"}},[a._v("#")]),a._v(" 参考与致谢")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.ncnynl.com/archives/201608/742.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("树莓派3 - 搭建网络打印机服务器（支持PC，IPhone，Android打印）"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=_.exports}}]);