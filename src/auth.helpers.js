import joshAvatar from './images/josh-avatar.png';

const isBeingPrebuilt = typeof window === 'undefined';

const LOCAL_STORAGE_KEY = 'user-info';

export const FAKE_USER = {
  displayName: 'Josh C',
  avatar: joshAvatar,
};

export const getUserInfo = () => {
  if (isBeingPrebuilt) {
    return null;
  }

  const persistedData = window.localStorage.getItem(LOCAL_STORAGE_KEY);

  if (!persistedData) {
    return null;
  }

  return JSON.parse(persistedData);
};

export const persistUserInfo = user => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user));
};
