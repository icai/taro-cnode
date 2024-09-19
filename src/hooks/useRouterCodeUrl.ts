import { useState, useEffect } from 'react';
import { useRouter } from '@tarojs/taro';

const useRouterCodeUrl = (basePath = '') => {
  const router = useRouter(true);
  const [url, setUrl] = useState('');
  const page = router.path.replace(basePath, '')
  const params = router.params;
  const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  const fullUrl = query ? `${page}?${encodeURIComponent(query)}` : page;
  useEffect(() => {
    const newUrl = `alipays://platformapi/startapp?appId=2021002183695117&page=${encodeURIComponent(fullUrl)}`;
    setUrl(newUrl);
  }, [router.path, router.params.id, basePath]);

  return {
    url
  };
};

export default useRouterCodeUrl;
