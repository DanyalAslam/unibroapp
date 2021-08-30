import actionTypes from './../actions/ActionTypes';

const INITIAL_STATE = {
  userInfo: null, 
  loading: false, //done
  access_token: null, //done


  session_id:null,

  monthly_card_data :[], //done
  table_card_data :[], //done
  made_up_graph_data :[], //done
  gray_fabrics_graph_data :[], //done

  AboutUS: {}, 
  mySubscription: [], 
  searchedProperties: [], 
  userNotifications: [],
  userStreamsData: [],
  user_id: null,
  notification_count: [],
  paymentLogs: [],
  searchModal: false,
  wishList: [],
  localWishList: [],
};

export default GeneralReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case actionTypes.GET_NOTIFICATIONs_COUNT: {
      return {
        ...state,
        notification_count: action.payload
      };
    }

    case actionTypes.CLOSE_LOADING: {
      return {
        ...state,
        loading: false,
      };
    }

    //login
    case actionTypes.USER_INFO: {
      return {
        ...state,
        ...(action.payload.access_token != undefined
          ? { access_token: action.payload.access_token }
          : undefined),
        loading: false,
      };
    }

    //Login saving access token
    case actionTypes.USER_INFO_Access_token: {
      return {
        ...state,
        ...(action.payload.access_token != undefined
          ? { access_token: action.payload.access_token }
          : undefined),
        loading: false,
      };
    }

    //Signup saving access token
    case actionTypes.USER_INFO_Access_token_signup: {
      return {
        ...state,
        ...(action.payload.access_token_signup != undefined
          ? { access_token_signup: action.payload.access_token_signup }
          : undefined),
        loading: false,
      };
    }

    //logout
    case actionTypes.LOG_OUT: {
      return {
        ...INITIAL_STATE,
      };

      // return {
      //   ...state,
      //   userInfo: null,
      //   access_token: null,
      //   homeData: [],
      //   searchedProperties: [],
      //   loading: false,
      //   AboutUS: [],
      // };
    }

    //update profile
    case actionTypes.UPDATE_PROFILE: {
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    }

    //getting Home data : Streams
    case actionTypes.MONTHLY_GRAPH_DATA: {

      console.log('action.payload',action.payload)
      return {
        ...state,
        // StreamData: action.payload,
        monthly_card_data :action.payload
      };
    }


        //getting Home data : Streams
        case actionTypes.TABLE_GRAPH_DATA: {

          console.log('action.payload',action.payload)
          return {
            ...state,
            // StreamData: action.payload,
            table_card_data :action.payload
          };
        }

    //About us
    case actionTypes.ABOUT_US: {
      return {
        ...state,
        AboutUS: action.payload,
      };
    }

    //Testimonials
    case actionTypes.MADE_UP_GRAPH: {
      return {
        ...state,
        made_up_graph_data: action.payload,
      };
    }

    //SearchedProperties
    case actionTypes.SEARCHED_PRODUCTS: {
      return {
        ...state,
        loading: false,
        // searchedProperties: action.payload,
      };
    }
    case actionTypes.GRAY_FABRICS: {
      return {
        ...state,
        gray_fabrics_graph_data: action.payload,
      };
    }

    case actionTypes.GET_NOTIFICATION: {
      return {
        ...state,
        userNotifications: action.payload,
      };
    }

    case actionTypes.PAYMENT_LOGS: {
      return {
        ...state,
        paymentLogs: action.payload,
      };
    }

    case actionTypes.USER_STREAM: {
      return {
        ...state,
        userStreamsData: action.payload,
      };
    }

    default:
      return state;
  }
};
