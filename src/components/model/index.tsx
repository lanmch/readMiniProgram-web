
import { View } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'


import './index.less'

type PageState = {}
type PageProps = {}


interface Homepage {
    props: PageProps,
    state: PageState
}


class Homepage extends Component {
    static defaultProps = {}
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render () {
        return (
          <View>
          </View>
        )
      }
}

export default Homepage as ComponentClass;

