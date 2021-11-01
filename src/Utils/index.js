
import Toast from 'react-native-simple-toast'

export const showToast = message => {
    if (Platform.OS == 'android') {
      return Toast.show(message);
    } else {
      return setTimeout(() => Toast.show(message), 300);
    }
  };

  export const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;