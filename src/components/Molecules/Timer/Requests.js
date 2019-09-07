import firebase from 'firebase';
import { getCurrentTime } from 'functions';

const safeTodataBase = currentTime => {
  const nowTime = getCurrentTime();

  const time = new Date(
    nowTime.dateYear,
    nowTime.dateMonth,
    nowTime.dateDay,
    nowTime.dateHours,
    nowTime.dateMinutes,
    nowTime.dateSecound + currentTime,
  );
  return time.getTime();
};

export const SendRunAction = currentTime => {
  const willTime = safeTodataBase(currentTime);

  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set(
      {
        time: willTime,
        status: 'run',
      },
      error => {
        error && console.log(error);
      },
    );
};

export const SendPauseAction = time => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set({ time, status: 'pause' }, err => {
      err && console.log(err);
    });
};

export const SendResetAction = () => {
  const userId = firebase.auth().currentUser.uid;
  firebase
    .database()
    .ref(`/users/${userId}/timer`)
    .set({
      status: 'reset',
    });
};
