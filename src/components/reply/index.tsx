import { useState, useEffect } from 'react';
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components';
import * as utils from "@/libs/utils";
import { useSelector } from 'react-redux';
import { Button, TextArea } from '@nutui/nutui-react-taro'
import classNames from 'classnames';
import { addReplies } from '@/api';
import { markdown } from 'markdown';

import './index.scss';

const Reply = ({ topicId, replyId, replyTo, show, updateReplies, onClose }) => {
  const [hasErr, setHasErr] = useState(false);
  const [content, setContent] = useState('');
  const [authorTxt] = useState("\n\n 来自拉风的 [Taro-cnode](https://github.com/icai/taro-cnode)");


  const userInfo = useSelector((state: { auth: any }) => state.auth.user || {});

  useEffect(() => {
    if (replyTo) {
      setContent(`@${replyTo}`);
    }
  }, [replyTo]);

  const handleChange = (value) => {
    setContent(value);
  };

  const addReply = () => {
    if (!content) {
      setHasErr(true);
    } else {
      let time = new Date();
      let linkUsers = utils.linkUsers(content);
      let htmlText = markdown.toHTML(linkUsers) + authorTxt;
      // let replyContent = utils.getContentHtml(htmlText);
      let postData = {
        accesstoken: userInfo.token,
        content: content + authorTxt,
        topicId
      } as any;
      if (replyId) {
        postData.reply_id = replyId;
      }
      addReplies(postData)
        .then(resp => {
          let res = resp.data;
          if (res.success) {
            updateReplies && updateReplies((topic, setTopic) => {
              const newReply = {
                id: res.reply_id,
                author: {
                  loginname: userInfo.loginname,
                  avatar_url: userInfo.avatar_url
                },
                content: content + authorTxt,
                ups: [],
                create_at: time.toISOString()
              };
              const newReplies = [...topic.replies, newReply];
              const updatedTopic = { replies: newReplies };
              setTopic(updatedTopic);
            });
            setContent('');
            if (show) {
              onClose();
            }
          } else {
            Taro.showToast({ title: res.error_msg });
          }
        })
        .catch(resp => {
          console.info(resp);
        });
    }
  };

  return (
    <View className="reply">
      <TextArea
        id="content"
        className={classNames({
          text: 1,
          err: hasErr
        })}
        style={{ fontSize: '12px', border: '1px solid #ccc', minHeight: '100px' }}
        value={content}
        onChange={handleChange}
        placeholder="回复支持Markdown语法,请注意标记代码"
        rows={8}

      />
      <Button shape="square" block type="success" size='large' onClick={addReply}>
        确定
      </Button>
    </View>
  );
};

export default Reply;
