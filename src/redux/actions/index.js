import actionTypes from './ActionTypes';
import Api from './../../Api/index';
import { Platform } from 'react-native';
// import {showToast} from './../../Utils/index';
import { getStoredState } from 'redux-persist';
import { persistConfig } from './../index';

const actions = {
  login: (credentials, success, error) => {
    console.log('credentials login', credentials);
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.loginPost(
        'loginApi.php',
        credentials,
        (apiSuccess) => {


          console.log('apiSuccess login', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          dispatch({
            type: actionTypes.USER_INFO,
            payload: {
              access_token: apiSuccess.session_id,
            },
          });
          return success(apiSuccess.mess)


          // if (apiSuccess.data.subsciption != true) {
          //   dispatch({type: actionTypes.CLOSE_LOADING});
          //   return error(apiSuccess);
          // } else if (apiSuccess.data.block_status == 1) {
          //   dispatch({type: actionTypes.CLOSE_LOADING});
          //   return error(2);
          // } else {
          //   dispatch({type: actionTypes.CLOSE_LOADING});
          //   const userInfo = {
          //     id: apiSuccess.data.id,
          //     name: apiSuccess.data.name,
          //     email: apiSuccess.data.email,
          //     image: apiSuccess.data.image,
          //     block_status: apiSuccess.data.block_status,
          //     subsciption: apiSuccess.data.subsciption,
          //   };
          //   dispatch({
          //     type: actionTypes.USER_INFO,
          //     payload: {
          //       userInfo,
          //       access_token: apiSuccess.data.token,
          //     },
          //   });



        },
        (apiError) => {
          console.log('apiError logiun', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          return error(apiError);
        },
      );
    };
  },

  //logout
  logOut: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        '/admin/logout',
        (apiSuccess) => {
          console.log('logout success :', apiSuccess);
          dispatch({ type: actionTypes.LOG_OUT });
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.message);
        },
        (Apierror) => {
          console.log('logout error :', Apierror);
          dispatch({ type: actionTypes.LOG_OUT });
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(Apierror.message);

          // return showToast(error);
        },
      );
    };
  },

  //report the stream
  Report: (id, success, error) => {
    const _id = id;
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.get(
        `/user/reportStatus/${_id}`,
        (apiSuccess) => {
          console.log('Report success :', apiSuccess);
          // dispatch({type: actionTypes.LOG_OUT});
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.message);
        },
        (Apierror) => {
          console.log('Report error :', Apierror);
          // dispatch({type: actionTypes.LOG_OUT});
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(Apierror.message);

          // return showToast(error);
        },
      );
    };
  },

  //send verification code
  sendCode: (email, success, error) => {
    console.log('verification code email :', email);
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        '/user/sendForgotCode',
        email,
        (apiSuccess) => {
          console.log('verification code successs:', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.message);
        },
        (apiError) => {
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
      );
    };
  },
  //code verification
  verifyCode: (code, success, error) => {
    console.log('code ', code);
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        `/user/verify`,
        code,
        (apiSuccess) => {
          console.log('code verified:', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.message);
        },
        (apiError) => {
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
      );
    };
  },

  //reset password
  resetPassword: (credentials, success, error) => {
    console.log('credentials resetPassword', credentials);
    return (dispatch) => {
      const _data = {
        newpassword: credentials.newpassword,
        confirmpassword: credentials.confirmPassword,
      };

      dispatch({ type: actionTypes.START_LOADING });

      console.log('_data', _data);

      Api.post(
        `api/auth/reset/${credentials.code}`,
        _data,
        (apiSuccess) => {
          console.log('apiSuccess reset', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('apiError reset', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
      );
    };
  },

  //signup
  register: (credentials, success, error) => {
    console.log('Signup credentials', credentials);
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        '/user/register',
        credentials,
        (apiSuccess) => {
          console.log('Sign up success : ', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          dispatch({
            type: actionTypes.USER_INFO_Access_token_signup,
            payload: {
              access_token_signup: null,
              // user_id: apiSuccess.data.id,
              // access_token: apiSuccess.data.token,
            },
          });

          return success(apiSuccess.data.id);
        },
        (apiError) => {
          console.log('Sign up Error : ', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
      );
    };
  },

  // getProfile: (success, error) => {
  //   return dispatch => {
  //     Api.get(
  //       'account/profile',
  //       apiSuccess => {
  //         const userInfo = {
  //           id: apiSuccess.id,
  //           first_name: apiSuccess.first_name,
  //           last_name: apiSuccess.last_name,
  //           email: apiSuccess.email,
  //           billing_address: apiSuccess.billing_address,
  //           billing_city: apiSuccess.billing_city,
  //           billing_state: apiSuccess.billing_state,
  //           billing_zip: apiSuccess.billing_zip,
  //           billing_country: apiSuccess.billing_country,
  //           shipping_address: apiSuccess.shipping_address,
  //           shipping_city: apiSuccess.shipping_city,
  //           shipping_state: apiSuccess.shipping_state,
  //           shipping_zip: apiSuccess.shipping_zip,
  //           shipping_country: apiSuccess.shipping_country,
  //           image: apiSuccess.image,
  //         };

  //         dispatch({
  //           type: actionTypes.USER_INFO,
  //           payload: {
  //             userInfo,
  //             access_token: apiSuccess.token,
  //           },
  //         });

  //         return success(apiSuccess.message);
  //       },
  //       apiError => {
  //         return error(apiError);
  //       },
  //     );
  //   };
  // },

  contactUs: (credentials, success, error) => {
    console.log('contactUs credentials', credentials);
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        '/user/contactus',
        credentials,
        (apiSuccess) => {
          console.log('apiSuccess Contact us:', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('apiError Contact us:', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
      );
    };
  },

  //buyTicket
  buyTicket: (cardDetails, success, error) => {
    return (dispatch) => {
      // dispatch({type: actionTypes.START_LOADING});
      Api.post(
        '/user/buyticket',
        cardDetails,
        (apiSuccess) => {
          console.log('apiSuccess ticket', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('apiError ticket', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          return error(apiError);
        },
      );
    };
  },

  //buy Subscription
  buySubscription: (Data, success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.post(
        '/user/subscribe',
        Data,
        (apiSuccess) => {
          console.log('apiSuccess subscreipotion', apiSuccess);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('apiError subscreipotion', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          return error(apiError);
        },
      );
    };
  },


//for year graph : yearGraph new hit
  getMonthYearGraphData: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.get(
        'mnthGraphApi.php',
        (apiSuccess) => {
          console.log('Get Dashboard success:123231', apiSuccess);

          dispatch({
            type: actionTypes.MONTHLY_GRAPH_DATA,
            payload: apiSuccess.mWiseShipment,
          });
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get Dashboard apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return error(apiError);
        },
      );
    };
  },


  getTableGraphData: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.get(
        'qwTableChart.php',
        (apiSuccess) => {
          console.log('Get getTableGraphData success', apiSuccess);

          dispatch({
            type: actionTypes.TABLE_GRAPH_DATA,
            payload: apiSuccess.qwtableChart,
          });
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getTableGraphData apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return error(apiError);
        },
      );
    };
  },



  getMadeUpChart: (success, error) => {
   
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.get(
        'mGraphApi.php',
        (apiSuccess) => {
          console.log('Get getMadeUpChart success', apiSuccess);

          dispatch({
            type: actionTypes.MADE_UP_GRAPH,
            payload: apiSuccess.madeupGraph,
          });
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getMadeUpChart apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return error(apiError);
        },
      );
    };
  },



  getGrayFabrics: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.get(
        'gfGraphApi.php',
        (apiSuccess) => {
          console.log('Get getGrayFabrics success', apiSuccess);

          dispatch({
            type: actionTypes.GRAY_FABRICS,
            payload: apiSuccess.greyFabricGraph,
          });
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getGrayFabrics apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          // return error(apiError);
        },
      );
    };
  },





  //About Us Data
  getAboutUsData: (completed, failed) => {
    return (dispatch) => {
      // dispatch({type: 'START_LOAD'});
      Api.get(
        '/user/about_us',
        (success) => {
          console.log('About us Success :', success);
          if (success.code == 'error') {
            return failed(error?.message);
          } else {
            dispatch({
              type: actionTypes.ABOUT_US,
              payload: success,
            });

            return completed(true);
          }
        },
        (error) => {
          console.log('About us error :', success);
          // dispatch({type: 'CLOSE_LOAD'});
          return failed(error?.message);
        },
      );
    };
  },

  //getting packages
  getPackages: (success, error) => {
    return (dispatch) => {
      Api.get(
        `/user/packages`,
        (apiSuccess) => {
          console.log('getPackages success :', apiSuccess);
          return success(apiSuccess);
        },
        (apiError) => {
          console.log('getPackages error :', apiSuccess);
          return error(apiError);
        },
      );
    };
  },

  //get USer Subscription
  getSubscription: (success, error) => {
    return (dispatch) => {
      Api.get(
        `/user/subscribelog`,
        (apiSuccess) => {
          console.log('Subscribe success :', apiSuccess);
          dispatch({
            type: actionTypes.MY_SUBSCRIPTION,
            payload: apiSuccess.data.data,
          });
          return success(apiSuccess);
        },
        (apiError) => {
          console.log('Subscribe error :', apiError);
          return error(apiError);
        },
      );
    };
  },

  //get payment logs
  getPaymentLogs: (data, success, error) => {
    return (dispatch) => {
      Api.get(
        `/user/paymentlog?page=1&filter=${data}`,
        (apiSuccess) => {
          console.log('getPaymentLogs success :', apiSuccess);
          dispatch({
            type: actionTypes.PAYMENT_LOGS,
            // payload: apiSuccess.data.subscription,
          });
          return success(apiSuccess);
        },
        (apiError) => {
          console.log('getPaymentLogs error :', apiError);
          return error(apiError);
        },
      );
    };
  },

  //edit profile
  editProfile: (credentials, success, error) => {
    console.log('edit credentials', credentials);
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        '/user/profileUpdate',
        credentials,
        (apiSuccess) => {
          console.log('edit profile apiSuccess', apiSuccess);
          // dispatch({type: actionTypes.CLOSE_LOADING});
          dispatch({ type: actionTypes.CLOSE_LOADING });
          dispatch({
            type: actionTypes.UPDATE_PROFILE,
            payload: apiSuccess.data,
          });
          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('apiError pictire', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
        true,
      );
    };
  },

  //update password
  UpdatePassword: (credentials, success, error) => {
    console.log('update pasword credentials', credentials);

    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });

      Api.post(
        '/user/changePassword',
        credentials,
        (apiSuccess) => {
          console.log('Upate password apiSuccess', apiSuccess);

          dispatch({ type: actionTypes.CLOSE_LOADING });
          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('apiError', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });
          return error(apiError);
        },
      );
    };
  },

  getNotifications: (completed, failed) => {
    return (dispatch) => {
      // dispatch({type: 'START_LOAD'});
      Api.get(
        '/user/getNotification',
        (success) => {
          console.log('getNotifications  Success :', success);
          if (success.code == 'error') {
            return failed(error?.message);
          } else {
            dispatch({
              type: actionTypes.GET_NOTIFICATION,
              payload: success,
            });

            return completed(true);
          }
        },
        (error) => {
          console.log('getNotifications error :', success);
          // dispatch({type: 'CLOSE_LOAD'});
          return failed(error?.message);
        },
      );
    };
  },

  //getAllTheEmployees
  getEmployeeProfiles: (completed, failed) => {
    console.log('right action callked')
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.get(
        'epApi.php',
        (success) => {
          console.log('getEmployeeProfiles Success :', success);

          dispatch({
            type: actionTypes.GET_EMPLOYEES,
            payload: success.employeeD,
          });
        dispatch({ type: actionTypes.CLOSE_LOADING });
          // return completed(true);
        },
        (error) => {
          console.log('getEmployeeProfiles error :', success);
        dispatch({ type: actionTypes.CLOSE_LOADING });
          return failed(error?.message);
        },
      );
    };
  },



  getEmployeeEmails: (completed, failed) => {
    console.log('right action callked')
    return (dispatch) => {
      dispatch({ type: actionTypes.START_LOADING });
      Api.get(
        'ueApi.php',
        (success) => {
          console.log('getEmployeeProfiles Success :', success);

          dispatch({
            type: actionTypes.GET_EMPLOYEES_EMAILS,
            payload: success.userEmailD,
          });
        dispatch({ type: actionTypes.CLOSE_LOADING });
          // return completed(true);
        },
        (error) => {
          console.log('getEmployeeProfiles error :', success);
        dispatch({ type: actionTypes.CLOSE_LOADING });
          return failed(error?.message);
        },
      );
    };
  },



  getStockInHands: (completed, failed) => {

    return (dispatch) => {
      Api.get(
        'stockApi.php',
        (success) => {
          console.log('Stock Api successs',success )
          dispatch({
            type: actionTypes.STOCK_IN_HAND,
            payload: success.stockD,
          });

          // return completed(true);
        },
        (error) => {
          console.log('Stock Api error',error )
          // return failed(error?.message);
        },
      );
    };
  },

  getUserStreams: (success, error) => {
    return (dispatch) => {
      Api.get(
        `/user/userstreams`,
        (apiSuccess) => {
          console.log('getUserStreams success :', apiSuccess);
          dispatch({
            type: actionTypes.USER_STREAM,
            payload: apiSuccess.data,
          });
          return success(apiSuccess.message);
        },
        (apiError) => {
          console.log('getUserStreams error :', apiError);
          return error(apiError);
        },
      );
    };
  },

  getSingleStreams: (id, success, error) => {
    return (dispatch) => {
      Api.get(
        `/user/stream/${id}`,
        (apiSuccess) => {
          console.log('SingleStream success :', apiSuccess);
          // dispatch({
          //   type: actionTypes.USER_STREAM,
          //   payload: apiSuccess.data.data,
          // });
          return success(apiSuccess);
        },
        (apiError) => {
          console.log('SingleStream error :', apiError);
          return error(apiError);
        },
      );
    };
  },

  //search products
  search: (keyword, success, error) => {
    console.log('Param Search:', keyword);
    return (dispatch) => {
      // dispatch({type: actionTypes.START_LOADING});

      Api.getProducts(
        `api/property/searchproperty`,
        keyword,
        (apiSuccess) => {
          console.log('Search result 123:', apiSuccess);

          dispatch({ type: actionTypes.CLOSE_LOADING });

          return success(apiSuccess.data);
        },
        (apiError) => {
          console.log('apiError search', apiError);
          dispatch({ type: actionTypes.CLOSE_LOADING });

          return error(apiError);
        },
      );
    };
  },
};

export default actions;
