import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

import { AtDrawer } from 'taro-ui'



export default class Drawer extends AtDrawer {
  constructor () {
    super(...arguments);
    this.state = { 
      animShow: false,
      show: this.props.show
    }
  }
  // onItemClick (index, e) {
  //   this.props.onItemClick && this.props.onItemClick(index)
  //   this.animHide(e, index)
  // }

  onHide () {
    this.setState({ show: false })
    this.props.onClose && this.props.onClose()
  }

  animHide () {
    this.setState({
      animShow: false,
    })
    this.props.onStartHide && this.props.onStartHide();
    setTimeout(() => {
      this.onHide(...arguments)
    }, 300)
  }

  animShow () {
    this.setState({ show: true })
    setTimeout(() => {
      this.setState({
        animShow: true,
      })
    }, 200)
  }

  onMaskClick () {
    this.animHide(...arguments)
  }

  componentWillReceiveProps (props) {
    const { show } = props
    if (show !== this.props.show) {
      if (show) this.animShow()
      else this.animHide(...arguments)
    }
  }

  render () {
    const {
      mask,
      width,
      right,
      // items,
    } = this.props
    const {
      animShow,
      show,
    } = this.state
    let rootClassName = ['at-drawer']

    const maskStyle = {
      display: mask ? 'block' : 'none',
      opacity: animShow ? 1 : 0,
    }
    const listStyle = {
      // width,
      // transition: animShow ? 'all 225ms cubic-bezier(0, 0, 0.2, 1)' : 'all 195ms cubic-bezier(0.4, 0, 0.6, 1)',
    }
    if (right) rootClassName.push('at-drawer--right')
    else rootClassName.push('at-drawer--left')

    if (animShow) rootClassName.push('at-drawer--show')
    rootClassName = rootClassName.filter(str => str !== '')

    return (
      show && <View className={rootClassName}>
        <View className='at-drawer__mask' style={maskStyle} onClick={this.onMaskClick.bind(this)}></View>
        <View className='at-drawer__content' style={listStyle}>
          {this.props.children}
        </View>
      </View>
    )
  }
}
