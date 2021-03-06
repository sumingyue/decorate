/*
 * 配置文件
 * 李瑞云 2016.12.01
*/
//焦点图
import $ from 'jquery'
import singlePicPreview from './components/parts/singlePic/preview'
import singlePicEdit from './components/parts/singlePic/edit'
//轮播图
import slideBoxPreview from './components/parts/slideBox/preview'
import slideBoxEdit from './components/parts/slideBox/edit'
//新分类
import categoriesPreview from './components/parts/categories/preview'
import categoriesEdit from './components/parts/categories/edit'
//顶部分类
import categoriesBarPreview from './components/parts/categoriesBar/preview'
import categoriesBarEdit from './components/parts/categoriesBar/edit'
//团购
import tuanPreview from './components/parts/tuan/preview'
import tuanEdit from './components/parts/tuan/edit'
//今日上新
import todayPreview from './components/parts/today/preview'
import todayEdit from './components/parts/today/edit'
//大师推荐
import recommended2Preview from './components/parts/recommended2/preview'
import recommended2Edit from './components/parts/recommended2/edit'
//商品列表
import goodsListPreview from './components/parts/goodsList/preview'
import goodsListEdit from './components/parts/goodsList/edit'
//标签单排
import singleRowPreview from './components/parts/singleRow/preview'
import singleRowEdit from './components/parts/singleRow/edit'
//标签双排
import doubleRowPreview from './components/parts/doubleRow/preview'
import doubleRowEdit from './components/parts/doubleRow/edit'


// 在此处添加组件
import localStorage from './assets/js/localStorage.js'

var config = !!configs ? configs : {
    baseUrl: '',
};

var decoration = decorations ? decorations : {};

//左侧组件标签
var tags = [
    {
        category: '图文类',
        list: [
        {
            name: '多图轮播',
            type: 'slideBox',
            max: 1,
            tips: '也称幻灯片，可以选择多张图片（直接输入链接或上传），将在首页自动切换轮播'
        },
        {
            name: '焦点图',
            type: 'singlePic',
            max: null,
            tips: '一般选择一张宣传热图，或者可以一张装饰性图片，如果是纯装饰性的，可以不要文字和连接'
        }]
    },
    {
        category: '标签列表',
        list: [{
            name: '双列',
            type: 'doubleRow',
            max: null,
            tips: '标签的双排列方式'
        }]
    },
];

//默认数据
var defaultElement = {
    //焦点图
    singlePic: {
        name: 'singlePic',
        data: {
            'imgsrc': 'http://img.seatent.com/statics/action/ac20170531/ac201530_tor_banner3.jpg',
            'href': ''
        }
    },
    //多图轮播
    slideBox: {
        name: 'slideBox',
        data: [{ 
            'imgsrc': 'http://store.test.seatent.com/img/decorate/hd-depot/000.jpg',
            'href': '' 
        }]
    },
    //新分类
    categories: {
        name: 'categories',
        data: {
            'name': 'test',
            'pics': [{
                'imgsrc': 'http://store.test.seatent.com/img/decorate/hd-depot/000.jpg',
                'href': ''
            }]
        }
    },
    //顶部分类
    categoriesBar: {
        name: 'categoriesBar',
        data: [{ 
            'title': '首页',
            'href': ''
        }]
    },
    //团购
    tuan: {
        name: 'tuan',
        data: {
            'gp1': '',
            'gp2': '',
            'gp3': ''
        }
    },
    //今日上新
    today: {
        name: 'today',
        data: {
            'todays': ''
        }
    },
    //大师推荐
    recommended2: {
        name: 'recommended2',
        data: {
            'masterrcd': '',
            'subcheck': false
        }
    },
    //商品列表
    goodsList: {
        name: 'goodsList',
        data: {
            id: '',
            bgColor: '#fff',
            bgImage: '',
            priceTitle: '女生价:',
            priceColor: '#ff79c3',
            showBorder: true,
            borderColor: '#eee',
            title: '',
            titleColor: '#333'
        }
    },
    //双排标签
    doubleRow:{
        name:"doubleRow",
        data:{
            title:"主会场, 四大通奶粉",
            bgImage: '', //背景图片
            borderImg:"", //边框图片
            titleBj:"", //标题图片
            bgColor: '#f8bf00',
            titleColor: '#fff',
            priceColor:'red',
            borderColor: '#eee',
            goodId:"123",
            type:"0",
            list:[]
        }
    }
}

var componentsPreview = {
    singlePic: singlePicPreview,
    slideBox: slideBoxPreview,
    categoriesBar: categoriesBarPreview,
    categories: categoriesPreview,
    tuan: tuanPreview,
    today: todayPreview,
    recommended2: recommended2Preview,
    goodsList: goodsListPreview,
    singleRow:singleRowPreview,
    doubleRow:doubleRowPreview
};

var componentsEdit = {
    singlePic: singlePicEdit,
    slideBox: slideBoxEdit,
    categoriesBar: categoriesBarEdit,
    categories: categoriesEdit,
    tuan: tuanEdit,
    today: todayEdit,
    recommended2: recommended2Edit,
    goodsList: goodsListEdit,
    singleRow:singleRowEdit,
    doubleRow:doubleRowEdit
};

var info = config;

export {tags, defaultElement, componentsPreview, componentsEdit, info, decoration}
