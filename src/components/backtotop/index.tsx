import Taro, { usePageScroll } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { throttle } from 'throttle-debounce';
import { useEffect, useState } from 'react';
import './index.scss';
import { ArrowCircleUp } from '@nutui/icons-react-taro';
import { isH5 } from '@/libs/utils';


const BackTop = () => {
  const [show, setShow] = useState(false);
  let componentScrollBox: HTMLElement | null = null;
  let scrollbinding: () => void;

  useEffect(() => {
    if (isH5()) {
      componentScrollBox = document.documentElement;
      scrollbinding = throttle(300, handleScroll);
      window.addEventListener('scroll', scrollbinding);
    }
    return () => {
      if (isH5()) {
        window.removeEventListener('scroll', scrollbinding);
      }
    };
  }, []);

  const handleScroll = () => {
    const scrollTop = componentScrollBox!.scrollTop;
    const shouldShow = scrollTop >= 0.5 * document.body.clientHeight;
    setShow(shouldShow);
  };

  usePageScroll((e) => {
    const scrollTop = e.scrollTop;
    setShow(scrollTop > 500);
  });

  const goTop = () => {
    Taro.pageScrollTo({
      scrollTop: 0,
    });
  };

  return (
    <View>
      {show ? (
        <View className="icon-top" onClick={goTop}>
          <ArrowCircleUp color="#42b983" size={30} />
        </View>
      ) : null}
    </View>
  );
};

export default BackTop;
