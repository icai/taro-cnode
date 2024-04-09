import Taro, { useRouter, useReachBottom } from '@tarojs/taro';
import { useState, useEffect } from 'react'
import { View } from '@tarojs/components';
import { TopicsList } from '@/components/topics';
import { throttle } from 'throttle-debounce';
import { ITopic } from '@/interfaces/topic';
import BackTop from '@/components/backtotop';
import Loading from '@/components/loading';
import Page from '@/components/page';
import { getTopics } from '@/api';
import './index.scss';
import { isH5 } from '@/libs/utils';


const List = () => {
  const [scroll, setScroll] = useState(true);
  const [topics, setTopics] = useState<ITopic[]>([]);
  const [searchKey, setSearchKey] = useState({
    page: 1,
    limit: 20,
    tab: 'all',
    mdrender: true,
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter(true);

  let componentScrollBox: HTMLElement | null = null;
  let throttledScrollHandler: () => void;

  useEffect(() => {
    const handleScroll = () => {
      if (scroll) {
        const totalheight =
          document.documentElement.clientHeight +
          document.documentElement.scrollTop;
        if (document.documentElement.scrollHeight <= totalheight + 200) {
          onReachBottom();
        }
      }
    };

    if (isH5()) {
      componentScrollBox = document.documentElement;
      throttledScrollHandler = throttle(300, handleScroll);
      window.addEventListener('scroll', throttledScrollHandler);
    }

    return () => {
      if (isH5()) {
        window.removeEventListener('scroll', throttledScrollHandler);
      }
    };
  }, [scroll]);

  useEffect(() => {
    if (router.params.tab) {
      setSearchKey({
        ...searchKey,
        page: 1,
        tab: router.params.tab,
      });
    }
  }, [router.path, router.params.tab]);

  useEffect(() => {
    fetchTopics();
  }, [searchKey]);

  const getTitleStr = (tab: string) => {
    let str = '';
    switch (tab) {
      case 'share':
        str = '分享';
        break;
      case 'ask':
        str = '问答';
        break;
      case 'job':
        str = '招聘';
        break;
      case 'good':
        str = '精华';
        break;
      default:
        str = '全部';
        break;
    }
    return str;
  };

  const fetchTopics = () => {
    const params = searchKey;
    try {

      getTopics(params).then((res) => {
        const data = res.data;
        setScroll(true);
        setLoading(false);
        if (data && data.data) {
          mergeTopics(data.data);
        }
      });
    } catch (error) {
      Taro.showToast({
        title: '载入远程数据错误',
      });
    }
  };

  const mergeTopics = (newTopics: ITopic[]) => {
    // if page is 1, reset topics
    if (searchKey.page === 1) {
      setTopics(newTopics);
      return;
    }
    setTopics([...topics, ...newTopics]);
  };

  const onReachBottom = () => {
    if (scroll) {
      setScroll(false);
      setLoading(true);
      setSearchKey({
        ...searchKey,
        page: searchKey.page + 1,
      });
    }
  };
  useReachBottom(() => {
    onReachBottom();
  })

  return (
    <Page className="flex-wrp" title={getTitleStr(searchKey.tab)}>
      <View id="page">
        <View className="posts-list">
          <TopicsList topics={topics} loading={loading} />
        </View>
        {loading && searchKey.page > 1 && <Loading height="20vh" />}
      </View>
      <BackTop />
    </Page>
  );
};

export default List;
