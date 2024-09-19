import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSystemInfo } from '@/reducers/base';
import { authCheckState } from "@/reducers/auth";
import classNames from 'classnames';
import Taro, { useLoad, useReady, useRouter } from '@tarojs/taro';
import { View, Text } from '@tarojs/components';
import NvMenu from "../menu"
import { NavBar } from '@nutui/nutui-react-taro';
import { ArrowLeft, FilterH, Share } from '@nutui/icons-react-taro';
import { isAlipay } from '@/libs/utils';
import './index.scss';

interface IProps {
  pageType?: string;
  fixHead?: boolean;
  messageCount?: number;
  scrollTop?: number;
  needAdd?: boolean;
  showMenu?: boolean;
}

const Header: React.FC<IProps> = ({ pageType = '' }) => {
  const [show, setShow] = useState<boolean>(false);

  const router = useRouter(true);
  const systemInfo = useSelector((state: any) => state.base.systemInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  useEffect(() => {
    if (show) {
      setShow(!show);
    }
  }, [router.path, router.params.tab]);


  const fixHead = true;

  const openMenu = () => {
    setShow(!show);
  };

  const showMenus = () => {
    setShow(!show);
  };

  const classnames = classNames({
    show: show && fixHead,
    'fix-header': fixHead,
    'no-fix': !fixHead,
  });
  useReady(() => {
    if (isAlipay()) {
      Taro.hideBackHome();
    }
  })
  useLoad(() => {
    fetchSystemInfo()(dispatch)
  })


  const style = {
    height: fixHead ? systemInfo.navBarHeight + 'px' : 'auto',
    backgroundColor: isAlipay() ? '#fff' : 'transparent'
  };
  let hboxStyle = {
    paddingTop: fixHead ? systemInfo.statusBarHeight + 'px' : '0',
    backgroundColor: '#fff'
  } as any;


  if (isAlipay()) {
    hboxStyle = {
      paddingTop: fixHead ? systemInfo.statusBarHeight + 'px' : '0',
      backgroundColor: '#fff'
    }
  }

  const toolbarStyle = {
    height: systemInfo.titleBarHeight + 'px',
    backgroundColor: '#fff',
    marginBottom: '0px',
  };

  let backMenu = () => {
    if (isAlipay()) {
      return <View style={{ marginLeft: '30px' }}>
        <FilterH size={24} />
      </View>
    }
    return (
      0 ? <>
        <ArrowLeft size={24} />
        返回
      </> : <>
        <FilterH size={24} />
      </>
    )
  }

  let nvMenuStyle = {
    paddingTop: systemInfo.statusBarHeight + 'px',
  }

  if (isAlipay()) {
    nvMenuStyle = {
      paddingTop: systemInfo.navBarHeight + 'px',
    }
  }
  return (
    <View className="header" style={style} >
      <View className={classnames} id="hdbox" style={hboxStyle}>
        {show && fixHead ? (
          <View>
            <View className="page-cover" onClick={showMenus} />
          </View>
        ) : (
          ''
        )}

        <NavBar
          className="nv-toolbar" style={toolbarStyle}
          zIndex={0}
          back={
            backMenu()
          }
          // right={
          //   <View
          //     className="flex-center"
          //     onClick={(e) => Taro.showToast({ title: 'icon' })}
          //   >
          //     <Share size={24} />
          //   </View>
          // }
          onBackClick={(e) => openMenu()}
        >
          <View onClick={(e) => { }}>{pageType}</View>
        </NavBar>
        <View className={classnames} id="hd">
          <NvMenu showMenu={show} pageType={pageType} style={nvMenuStyle} />
        </View>
      </View>
    </View>
  );
};

export default Header;
