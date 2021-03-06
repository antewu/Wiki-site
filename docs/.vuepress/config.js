module.exports = {
    title: 'Power\'s Wiki',
    description: '个人知识库',
    //base: '/Wiki-site/',

    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },

    // PWA
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
            // 自定义弹窗
            // popupComponent: 'MySWUpdatePopup',
        }
    },



    plugins: [
        '@vuepress/back-to-top', // 回到顶部
        '@vuepress/google-analytics',
        {
            'ga': '' // UA-00000000-0
        },

        // RSS 插件
        'vuepress-plugin-rss',
        {
            base_url: '/', // required
            site_url: 'https://wiki-power.com', // required
            copyright: '2020 Power Lin', // optional
            // filter some post
            filter: (frontmatter) => {
                return [true | false]
            },
            // How much articles
            count: 100,
        },

        // 阅读进度
        'reading-progress',

        // 代码块一键复制按钮
        ['vuepress-plugin-code-copy', true],
    ],
    //theme: 'reco', //reco 主题，会拖慢加载速度
    //theme: 'antdocs',

    // 解决搜索框放大问题
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }]
    ],

    themeConfig: {

        //logo: '/logo.png', 
        lastUpdated: 'Last Updated',
        smoothScroll: true, // 干嘛用的？


        // Edit on GitHub
        repo: 'linyuxuanlin/Wiki-site',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '本站源码',
        docsDir: 'docs',
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页面',

        themePicker: {
            colorName1: 'red',
            colorName2: 'yellow',
            colorName3: 'blue'
        },

        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Tools',
                link: '/Tools/'
            },
            {
                text: 'Collection',
                link: 'Collection'
            },
        ],


        sidebar: [

            {
                title: '电路设计',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/电路设计/STM32系统硬件电路设计",
                    "post/电路设计/SwiftCtrl-蓝牙手柄",
                    "post/电路设计/TinyDVR-小巧身材，满载动力",
                    "post/电路设计/ZenDriver-高性能的电机驱动",
                    "post/电路设计/PCB布线规范",
                    "post/电路设计/PCB元件布局规范",
                    "post/电路设计/函数思想在电路设计中的应用",
                    "post/电路设计/基本元器件选型",
                    "post/电路设计/电源的设计",
                    "post/电路设计/AD小技巧整理",
                    "post/电路设计/AD入门系列一：环境搭建",
                    "post/电路设计/AD入门系列二：基础知识",
                    "post/电路设计/AD入门系列三：原理图绘制",
                    "post/电路设计/AD入门系列四：PCB绘制",
                    "post/电路设计/AD入门系列五：库文件绘制",
                    "post/电路设计/自制CMSIS-DAP",
                    "post/电路设计/PCB名片设计",
                    "post/电路设计/焊接比赛：培训及总结",
                ]
            },
            {
                title: '无人机',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/无人机/N3参数调试",
                ]
            },
            {
                title: '产品经理',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/产品经理/产品经理的日常",
                    "post/产品经理/中台的概念",
                    "post/产品经理/画图基础",
                ]
            },
            {
                title: '活动策划',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/活动策划/RM校内赛-前期策划",

                ]
            },
            {
                title: 'Arduino',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/Arduino/T-Clock桌上小钟",
                    "post/Arduino/小车游华广-比赛",
                    "post/Arduino/麦昆小车-测评",
                    "post/Arduino/一个舵机的自我修养",
                    "post/Arduino/麦轮小车",
                ]
            },
            {
                title: 'STM32',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/STM32/KeilMDK配置指南",
                    "post/STM32/Doxygen注释规范",
                    "post/STM32/STM32麦轮小车",
                ]
            },
            {
                title: '树莓派',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/树莓派/云打印服务器搭建",
                ]
            },
            {
                title: '前端',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/前端/CSS学习笔记",
                    "post/前端/HTML学习笔记",
                    "post/前端/JavaScript学习笔记",
                    "post/前端/自适应网页设计",
                    "post/前端/Node.js和npm的安装与卸载（MacOS）",
                    "post/前端/前端开发-环境搭建",
                ]
            },
            {
                title: '微信小程序',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/微信小程序/BookJourney-二手书商城",
                ]
            },
            {
                title: '命令行',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/命令行/命令行基本操作",

                ]
            },
            {
                title: 'Git&GitHub',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/Git&GitHub/Git学习笔记",




                ]
            },
            {
                title: '效率',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/效率/文章排版规范",
                    "post/效率/基于docsify搭建个人Wiki",
                    "post/效率/用Graphviz绘制关系图",
                    "post/效率/博客转至GitBook",
                    "post/效率/浅谈Bitcron博客平台",
                    "post/效率/RSS-高效率的阅读方式",
                    "post/效率/把回忆放心交给GooglePhotos",
                    "post/效率/构建知识管理系统",
                    "post/效率/回归博客",
                    "post/效率/定制SublimeText3",
                    "post/效率/定制VSCode",

                ]
            },
            {
                title: '音乐',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/音乐/哥德堡变奏曲",
                    "post/音乐/不能说的秘密",

                ]
            },
            {
                title: '美食',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/美食/极简面包-烘培",
                    "post/美食/参考",

                ]
            },
            {
                title: '比赛经历',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/比赛经历/THEHack2019",
                    "post/比赛经历/Hack.init()",

                ]
            },
            {
                title: '生活方式',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/生活方式/华广爬楼指北",
                    "post/生活方式/读《黑客与画家》",
                    "post/生活方式/英语六级-备考",
                    "post/生活方式/ITX装机筹备",

                ]
            },
            {
                title: '摘录',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/摘录/Producter",
                    "post/摘录/且听风吟",
                    "post/摘录/爱因斯坦的梦",
                    "post/摘录/小岛经济学",
                    "post/摘录/沉默的大多数",
                    "post/摘录/黄金时代",
                    "post/摘录/一只特立独行的猪",
                    "post/摘录/王小波作品集（未归纳）",
                    "post/摘录/关于审美",
                    "post/摘录/创业时，我们在知乎聊什么",
                    "post/摘录/游戏化教育：改变互联网教育的创新战略",
                    "post/摘录/刘慈欣作品集",
                    "post/摘录/博客十年",
                    "post/摘录/失控",
                    "post/摘录/生死疲劳",
                    "post/摘录/沙与沫",
                    "post/摘录/先知",
                    "post/摘录/中国，少了一味药",
                    "post/摘录/蝇王",
                    "post/摘录/独裁者手册",
                    "post/摘录/创造力：心流与创新心理学",
                    "post/摘录/世界上有趣的事太多",
                    "post/摘录/黑客与画家",
                    "post/摘录/社会契约论",
                    "post/摘录/如何成为一个有趣的人",
                    "post/摘录/当我谈跑步时我谈些什么",
                    "post/摘录/百年孤独",
                    "post/摘录/中国哲学史大纲",
                    "post/摘录/东西文化及其哲学",
                    "post/摘录/万历十五年",
                    "post/摘录/乌合之众",
                    "post/摘录/肖申克的救赎",
                    "post/摘录/挪威的森林",
                    "post/摘录/一个人的朝圣",
                    "post/摘录/动物农场",
                    "post/摘录/德米安：彷徨少年时",
                    "post/摘录/基督山伯爵",
                    "post/摘录/白鹿原",
                    "post/摘录/活着",
                    "post/摘录/岛上书店",
                    "post/摘录/双城记",
                    "post/摘录/一九八四",
                    "post/摘录/万万没想到",
                    "post/摘录/富爸爸，穷爸爸",
                    "post/摘录/独裁者手册",
                    "post/摘录/追风筝的人",
                    "post/摘录/三体",
                    "post/摘录/反脆弱：从不确定性中获益",
                ]
            },
            {
                title: '言论',
                collapsable: false,
                sidebarDepth: 0,
                children: [
                    "post/言论/写作",
                    "post/言论/财富",
                    "post/言论/创业",
                    "post/言论/个人发展",
                ]
            },
        ]
    }
}