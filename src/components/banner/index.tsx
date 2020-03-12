
import { View } from '@tarojs/components'
import { ComponentClass } from 'react'
import { Component } from '@tarojs/taro'
import { Swiper, SwiperItem, Image } from '@tarojs/components';

import './index.less'

type PageState = {
    banner: any
}
type PageProps = {}


interface Banner {
    props: PageProps,
    state: PageState
}

const url = Taro.getApp().global.url;

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            banner: []
        }
    }
    componentDidMount() {
        this.getBanner()
    }
    getBanner() {
        Taro.request({
            url: url + '/banner',
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: (res) => {
                this.setState({
                    banner: res.data.data.bannerList
                })
            }
        })
    }
    render () {
        const { banner } = this.state
        return (
            <Swiper
                className='swiper-container'
                circular
                indicatorDots
                indicatorColor='#999'
                indicatorActiveColor='#bf708f'
                autoplay>

                { banner.map((item, index) => (
                <SwiperItem key={index}>
                    <Image className='swiper-img' mode='widthFix' src={item.img}></Image>
                    
                </SwiperItem>
                ))}
        </Swiper>
        )
      }
}

export default Banner as ComponentClass;

