import {setUserData} from './user/actions';
import {loadChatData, updateChatData, updateUnreadCount} from './chat/actions';
import {updateLastReadMessage} from './message/actions';
import {notify} from '@/utils';

export const getData = () => async (dispatch) => {
  try {
    const {data} = await axios.get(window.laroute.route('get.chat.data'));
    console.log(data);
    dispatch(setUserData(data.user));
    dispatch(loadChatData(data.chat));
    dispatch(updateLastReadMessage(data.lastReadMessage));
    dispatch(updateUnreadCount(data.unreadCount));
    document.dispatchEvent(new CustomEvent('chatDataIsUpdated'));
  } catch (e) {
    //TODO: error message here...
    console.error(e);
  }
};

export const getPrevPage = (firstMessageId) => async (dispatch) => {
  try {
    const {data} = await axios.get(window.laroute.route('get.chat.prev.page', {id: firstMessageId}));
    dispatch(updateChatData('prev', data.page));
  } catch (e) {
    //TODO: error message here...
    console.error(e);
  }
};

export const createMessage = (message) => async () => {
  try {
    await axios.post(window.laroute.route('post.message.create'), {message});
  } catch ({response}) {
    if (parseInt(response.status, 10) === 403) {
      notify({text: 'Вы не можете отправлять сообщения в этом чате', type: 'warning'});
    } else {
      notify({text: 'Ошибка отправки сообщения. Повторите попытку позже', type: 'danger'});
    }
  }

};

export const deleteMessage = (id) => async () => {
  try {
    await axios.post(window.laroute.route('post.message.delete', {chatAuthorMessage: id}));
  } catch ({response}) {
    if (parseInt(response.status, 10) !== 403) {
      notify({text: 'Ошибка удалеия сообщения. Повторите попытку позже'});
    }
  }
};

export const editMessage = (message) => async () => {
  try {
    await axios.post(window.laroute.route('post.message.edit', {chatAuthorMessage: message.id}), {message});
  } catch ({response}) {
    if (parseInt(response.status, 10) !== 403) {
      notify({text: 'Ошибка редактирования сообщения. Повторите попытку позже'});
    }
  }
};

export const getUnreadCount = () => async (dispatch) => {
  try {
    const {data} = await axios.get(window.laroute.route('get.unread-count'));
    dispatch(updateUnreadCount(data.unreadCount));
  } catch (e) {
    console.error(e);
  }
};

export const resetUnreadCounter = () => async (dispatch) => {
  await axios.post(window.laroute.route('post.unread-count.reset'));
  dispatch(updateUnreadCount(0));
};