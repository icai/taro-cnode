import { useState, useEffect } from 'react';
import { useRouter } from '@tarojs/taro';

const useRouterCodeUrl = (basePath = '') => {
  const router = useRouter(true);
  const [url, setUrl] = useState('');
  let page = router.path.replace(basePath, '')
  if (page.startsWith('/')) {
    page = page.slice(1);
  }
  if (page.includes('?')) {
    page = page.split('?')[0];
  }
  const params = router.params;
  const query = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
  const fullUrl = query ? `${page}${encodeURIComponent('?' + query)}` : page;
  useEffect(() => {
    const newUrl = `alipays://platformapi/startapp?appId=2021002183695117&page=${fullUrl}`;
    setUrl(newUrl);
  }, [router.path, router.params.id, basePath]);

  return {
    url
  };
};

export default useRouterCodeUrl;
