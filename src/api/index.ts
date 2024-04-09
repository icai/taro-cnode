import { post, get } from "@/utils/request";


export const accessToken = ({ accesstoken }) => {
  return post({
    url: "https://cnodejs.org/api/v1/accesstoken",
    data: { accesstoken }
  });
};

export const addTopics = (data = {}) => {
  return post({
    url: "https://cnodejs.org/api/v1/topics",
    data
  });
}

type getTopicsData = {
  page?: number;
  limit?: number;
  tab?: string;
  mdrender?: boolean;
}


export const getTopics = (data: getTopicsData = {}) => {
  return get({
    url: "https://cnodejs.org/api/v1/topics",
    data
  });
}


type AddRepliesData = {
  accesstoken?: string;
  content?: string;
  reply_id?: string;
  topicId?: string;
}


export const addReplies = (data: AddRepliesData = {}) => {
  return post({
    url: `https://cnodejs.org/api/v1/topic/${data.topicId}/replies`,
    data
  });
}


export const getMessages = ({ accesstoken }) => {
  return get({
    url: `https://cnodejs.org/api/v1/messages?accesstoken=${accesstoken}`
  });
}

export const markAllMessages = ({ accesstoken }) => {
  return post({
    url: `https://cnodejs.org/api/v1/message/mark_all`,
    data: { accesstoken }
  });
}


export const upReply = ({ accesstoken, replyId }) => {
  return post({
    url: `https://cnodejs.org/api/v1/reply/${replyId}/ups`,
    data: { accesstoken }
  });
}

export const getTopic = ({ topicId }) => {
  return get({
    url: `https://cnodejs.org/api/v1/topic/${topicId}`
  });
}


export const getUser = ({ loginname }) => {
  return get({
    url: `https://cnodejs.org/api/v1/user/${loginname}`
  });
}







