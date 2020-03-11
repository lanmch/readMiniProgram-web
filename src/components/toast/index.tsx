
import { View } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'


import './index.less'

type PageState = {}
type PageProps = {
    toastText: string
}


interface Toast {
    props: PageProps,
    state: PageState
}


class Toast extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        const { toastText } = this.props;
        if(!toastText) return
        return (
          <View className='toast'>
              <View className='text'>
              {toastText}
              </View>
          </View>
        )
      }
}

export default Toast as ComponentClass;

