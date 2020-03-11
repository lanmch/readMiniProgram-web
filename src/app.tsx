import Taro, { Component, Config } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'
import 'taro-ui/dist/style/index.scss'
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      'pages/bookDetail/index',
      'pages/bookIntroduce/index',
      'pages/homepage/index',
      'pages/viewHistory/index',
      'pages/personal/index',
      'pages/bookCity/index',
      'pages/feedback/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#DBE2EF',
      navigationBarTitleText: '便利阅读',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#8a8a8a",
      selectedColor: "#3f72af",
      backgroundColor: "#FBFBFB",
      borderStyle: "white",
      list: [{
        pagePath: "pages/homepage/index",
        text: "书城",
        iconPath: "asset/img/homepage.png",
        selectedIconPath: "asset/img/homepage_select.png"
      },{
        pagePath: "pages/bookCity/index",
        text: "书架",
        iconPath: "asset/img/book.png",
        selectedIconPath: "asset/img/book_select.png"
      },{
        pagePath: "pages/personal/index",
        text: "我的",
        iconPath: "asset/img/personal.png",
        selectedIconPath: "asset/img/personal_select.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
