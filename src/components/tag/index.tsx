import { View } from "@tarojs/components"
import './index.scss'

const Tag = ({ children, type }) => {
  const classnames = `xtag ${type}`
  return (
    <View className={classnames}>{children}</View>
  )
}

export default Tag
