import actionTypes from './../actions/ActionTypes';

const INITIAL_STATE = {
  userInfo: null, 
  loading: false, //done
  access_token: null, //done
  session_id:null,

  monthly_card_data :[], //done
  shipment_buyer_wise_Lists:[],//done
  shipment_buyer_wise_Data:[],//done

  shipment_country_wise_Lists:[],//done
  shipment_country_wise_Data:[],//done
  table_card_data_supplier_wise :[], //done
  table_card_data :[], //done
  made_up_graph_data :[], //done
  gray_fabrics_graph_data :[], //done
  all_employees_profile: [],//done
  all_employees_emails: [],//done
  stock_in_hand: [],//done
  grey_fabric: [],//done
  purchasing_orders: [],//done,
  outstanding_purchasing_orders: [],//done,

  booked_piecegoods_orders_list:[],//done

  
  AboutUS: {}, 
  mySubscription: [], 
  searchedProperties: [], 
  userNotifications: [],
  userStreamsData: [],
  user_id: null,

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

    case actionTypes.GET_EMPLOYEES: {
      return {
        ...state,
        all_employees_profile: action.payload
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

        access_token: null, //done
        session_id:null,
      
        monthly_card_data :[], //done
        table_card_data :[], //done
        made_up_graph_data :[], //done
        gray_fabrics_graph_data :[], //done
        all_employees_profile: [],//done
        all_employees_emails: [],//done
        stock_in_hand: [],//done
      
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
    case actionTypes.SHIPMENT_BUYER_WISE: {

      console.log('action.payload',action.payload)
      return {
        ...state,
        // StreamData: action.payload,
        shipment_buyer_wise_Lists :action.payload
      };
    }
    
    case actionTypes.SEARCHED_SHIPMENT_BUYER_WISE: {

      console.log('action.payload',action.payload)
      return {
        ...state,
 
        shipment_buyer_wise_Data :action.payload
      };
    }




    case actionTypes.BOOKED_PIECEGOODS_ORDERS: {

      console.log('action.payload',action.payload)
      return {
        ...state,

        booked_piecegoods_orders_list :action.payload
      };
    }



//for all shipment country wise data
    case actionTypes.SHIPMENT_COUNTRY_WISE: {

      console.log('action.payload',action.payload)
      return {
        ...state,
        // StreamData: action.payload,
        shipment_country_wise_Lists :action.payload
      };
    }
    
    //searhced data for shipment  country wise data
    case actionTypes.SEARCHED_SHIPMENT_COUNTRY_WISE: {

      console.log('action.payload',action.payload)
      return {
        ...state,
        // StreamData: action.payload,
        shipment_country_wise_Data :action.payload
      };
    }


        //getting table data for quality wise
        case actionTypes.TABLE_GRAPH_DATA: {

          console.log('action.payload',action.payload)
          return {
            ...state,
            // StreamData: action.payload,
            table_card_data :action.payload
          };
        }


        //getting table data for supplier wise
        case actionTypes.TABLE_GRAPH_DATA_SUPPLIER_WISE: {

          console.log('action.payload',action.payload)
          return {
            ...state,
            // StreamData: action.payload,
            table_card_data_supplier_wise :action.payload
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

    case actionTypes.GET_EMPLOYEES_EMAILS: {
      return {
        ...state,
        all_employees_emails: action.payload,
      };
    }

    case actionTypes.STOCK_IN_HAND: {
      return {
        ...state,
        stock_in_hand: action.payload,
      };
    }


    case actionTypes.GREY_FABRIC: {
      return {
        ...state,
        grey_fabric: action.payload,
      };
    }



    case actionTypes.PURCHASING_ORDERS: {
      return {
        ...state,
        purchasing_orders: action.payload,
      };
    }

    case actionTypes.OUTSTANDING_PURCHASING_ORDERS: {
      return {
        ...state,
        outstanding_purchasing_orders: action.payload,
      };
    }


    default:
      return state;
  }
};
