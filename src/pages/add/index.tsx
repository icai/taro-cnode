import { useState } from 'react';
import Taro from "@tarojs/taro";
import { View } from '@tarojs/components'
import { Picker, Cell, Button, Sticky } from '@nutui/nutui-react-taro';
import { TextArea, Input } from '@nutui/nutui-react-taro'
import * as utils from '@/libs/utils'
import classNames from "classnames";
import withUser from '@/components/withUser'
import { useDispatch, useSelector } from 'react-redux';
import { addTopics } from '@/api';

import './index.scss'
import Page from '@/components/page';
import useObjState from '@/hooks/useObjState';

const Add = () => {
  const [topic, setTopic] = useObjState({
    tab: "share",
    title: "",
    content: ""
  });
  const [err, setErr] = useState("");
  const userInfo = useSelector((state: any) => state.auth.user);

  const selector = [
    [
      { text: "分享", value: "share" },
      { text: "问答", value: "ask" },
      { text: "招聘", value: "job" }
    ]
  ];


  const [visible, setVisible] = useState(false)
  const [baseDesc, setBaseDesc] = useState('')




  const addTopic = () => {
    console.log('addTopic', topic)
    let title = utils.trim(topic.title);
    let contents = utils.trim(topic.content);
    if (!title || title.length < 10) {
      setErr("title");
      return false;
    }
    if (!contents) {
      setErr("content");
      return false;
    }
    let postData = {
      ...topic,
      content: topic.content + "\n\n 来自拉风的 [Taro-cnode](https://github.com/icai/taro-cnode)",
      accesstoken: userInfo.token
    };
    addTopics(postData)
      .then(resp => {
        let res = resp.data;
        if (res.success) {
          utils.redirectTo({ url: "/pages/index/index" });
        } else {
          Taro.showToast({ title: res.error_msg });
        }
      })
      .catch(resp => {
        console.info(resp);
      });
  };

  const confirmPicker = (options: any[], values: (string | number)[]) => {
    let description = ''
    options.forEach((option: any) => {
      description += option.text
    })
    setBaseDesc(description)
    setTopic({
      tab: values[0]
    });
  }

  const handleTopicContentChange = e => {
    setTopic({
      content: e
    });
  };

  const handleTopicChange = e => {
    setTopic({
      title: e
    });
  };

  return (
    <Page className="flex-wrp" title={"主题"}>
      <View className="add-container">
        <View className="line">
          <Cell title="请选择分类" description={baseDesc} onClick={() => setVisible(!visible)} />
          <Picker
            options={selector}
            visible={visible}
            onConfirm={(list, values) => confirmPicker(list, values)}
            onClose={() => setVisible(false)} >
          </Picker>

        </View>
        <View className="line">
          <Input className={classNames({ "add-title": 1, err: err == "title" })} value={topic.title} onChange={handleTopicChange} type="text" placeholder="标题，字数10字以上" max-length="100" name={''} />
        </View>
        <TextArea className={classNames({ "add-content": 1, err: err == "content" })} style={{ minHeight: '100px' }} value={topic.content} onChange={handleTopicContentChange} maxLength={9999} rows={20} placeholder="回复支持Markdown语法,请注意标记代码" />
        <View style={{ margin: '0 15px' }}>
          <Sticky threshold={110} position="bottom"  >
            <Button block type="success" size='xlarge' onClick={addTopic} >
              发布
            </Button>
          </Sticky>
        </View>
      </View>
    </Page>
  );
};

export default withUser(Add);
