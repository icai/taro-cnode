import React, { useState, useEffect } from 'react';
import { View } from '@tarojs/components';

import './index.scss';

const Drawer: React.FC<any> = (props) => {
  const [animShow, setAnimShow] = useState(false);
  const [show, setShow] = useState(props.show);



  const onHide = () => {
    setShow(false);
    props.onClose && props.onClose();
  };

  const animHide = () => {
    setAnimShow(false);
    props.onStartHide && props.onStartHide();
    setTimeout(() => {
      onHide();
    }, 300);
  };

  const doAnimShow = () => {
    setShow(true);
    setTimeout(() => {
      setAnimShow(true);
    }, 200);
  };

  const onMaskClick = () => {
    animHide();
  };

  useEffect(() => {
    setShow(props.show);
    if (props.show !== show) {
      if (props.show) doAnimShow();
      else animHide();
    }
  }, [props.show]);

  const rootClassName = ['at-drawer'];
  if (props.right) rootClassName.push('at-drawer--right');
  else rootClassName.push('at-drawer--left');
  if (animShow) rootClassName.push('at-drawer--show');

  return (
    show && (
      <View className={rootClassName.join(' ')}>
        <View className='at-drawer__mask' style={{ display: props.mask ? 'block' : 'none', opacity: animShow ? 1 : 0 }} onClick={onMaskClick}></View>
        <View className='at-drawer__content' style={props.navTopStyle}>{props.children}</View>
      </View>
    )
  );
};

export default Drawer;
