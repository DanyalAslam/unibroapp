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

          dispatch({
            type: actionTypes.USER_INFO,
            payload: {
              access_token: apiSuccess.session_id,
              user_code: apiSuccess.user_code,
              apcontrol: apiSuccess.apcontrol,
            },
          });
          dispatch({ type: actionTypes.CLOSE_LOADING });
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

      dispatch({ type: actionTypes.LOG_OUT });
      dispatch({ type: actionTypes.CLOSE_LOADING });
      return success(true)
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




  //for year graph : yearGraph new hit
  getMonthYearGraphData: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'yearGraphApi.php',
        (apiSuccess) => {
          console.log('Get Dashboard success:123231', apiSuccess);

          dispatch({
            type: actionTypes.MONTHLY_GRAPH_DATA,
            payload: apiSuccess.YWiseShipment,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get Dashboard apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },

  //getting all shipment and order details on very first page of an app
  getHomepageInformation: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'summaryofgraphApi.php',
        (apiSuccess) => {
          console.log('summaryofgraphApi success:123231', apiSuccess);

          dispatch({
            type: actionTypes.ORDER_INFORMATION_DATA,
            payload: apiSuccess.Summary,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('summaryofgraphApi apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },

  //getapproveddocumentsoption for dropdown
  getApprovedDocumentsOptions: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'assignDocumentApi.php/?user_code=001',
        (apiSuccess) => {
          console.log('getApprovedDocumentsOptions success', apiSuccess);

          dispatch({
            type: actionTypes.APPROVED_DOCUMENTS_OPTIONS,
            payload: apiSuccess.docRight,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('getApprovedDocumentsOptions apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },



  //getting approved and non approved documents details
  getDocumentDetails: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'approveDocApi.php/?status=sent&&docnic=PO',
        (apiSuccess) => {
          console.log('getDocumentDetails success', apiSuccess);

          dispatch({
            type: actionTypes.APPROVED_DOCUMENTS_DETAILS,
            payload: apiSuccess.DocumentData,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('getDocumentDetails apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },


  //getShipmentBuyerWise
  //getting all data for Shipment buyer wise
  getShipmentBuyerWise: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'sbwGraphApi.php',
        (apiSuccess) => {
          console.log('getShipmentBuyerWise success', apiSuccess);

          dispatch({
            type: actionTypes.SHIPMENT_BUYER_WISE,
            payload: apiSuccess.sbwShipment,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('getShipmentBuyerWise apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });

        },
      );
    };
  },

  //getting all data for shipment country wise
  getShipmentCountryWise: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'scwGraphApi.php',
        (apiSuccess) => {
          console.log('getShipmentCountryWise success', apiSuccess);

          dispatch({
            type: actionTypes.SHIPMENT_COUNTRY_WISE,
            payload: apiSuccess.scwShipment,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('getShipmentCountryWise apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });

        },
      );
    };
  },



  //get Booked / Outstanding Orders (Piecegoods cloth)
  getBookedPieceGoodsOrders: (success, error) => {

    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'piecegoodsGraphApi.php',
        (apiSuccess) => {
          console.log('getBookedPieceGoodsOrders success', apiSuccess);

          dispatch({
            type: actionTypes.BOOKED_PIECEGOODS_ORDERS,
            payload: apiSuccess.PieceGoodGraph,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('getBookedPieceGoodsOrders apiError', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });

        },
      );
    };
  },




  //searched Specific company buyer wise
  getSearchedShipmentBuyerWise: (success, error, name = null, year = null) => {

    console.log('name', name, 'year', year)
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `singlebuyerGraphApi.php/?short_name=${name}&&year=${year}`,
        (apiSuccess) => {
          console.log('getSearchedShipmentBuyerWise success', apiSuccess);

          dispatch({
            type: actionTypes.SEARCHED_SHIPMENT_BUYER_WISE,
            payload: apiSuccess.sbwShipment,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);

        },
        (apiError) => {
          console.log('getSearchedShipmentBuyerWise apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });

        },
      );
    };
  },



  getSearchedShipmentCountryWise: (success, error, name = null, year = null) => {

    console.log('name', name, 'year', year)
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `singleCountryGraphApi.php/?cont_name=${name}&&year=${year}`,
        (apiSuccess) => {
          console.log('getSearchedShipmentCountryWise success', apiSuccess);

          dispatch({
            type: actionTypes.SEARCHED_SHIPMENT_COUNTRY_WISE,
            payload: apiSuccess.scwShipment,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);

        },
        (apiError) => {
          console.log('getSearchedShipmentCountryWise apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });

        },
      );
    };
  },

  //getting data for grey fabrics quality wise in table
  getTableGraphData: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'qwTableChart.php',
        (apiSuccess) => {
          console.log('Get getTableGraphData success', apiSuccess);

          dispatch({
            type: actionTypes.TABLE_GRAPH_DATA,
            payload: apiSuccess.qwtableChart,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getTableGraphData apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },

  //getting data for grey fabrics Supplier wise in table
  getTableGreyGabricSupplierWise: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'swTableChart.php',
        (apiSuccess) => {
          console.log('Get getTableGreyGabricSupplierWise success', apiSuccess);

          dispatch({
            type: actionTypes.TABLE_GRAPH_DATA_SUPPLIER_WISE,
            payload: apiSuccess.swtableChart,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getTableGreyGabricSupplierWise apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },



  getMadeUpChart: (success, error) => {

    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'mGraphApi.php',
        (apiSuccess) => {
          console.log('Get getMadeUpChart success', apiSuccess);

          dispatch({
            type: actionTypes.MADE_UP_GRAPH,
            payload: apiSuccess.madeupGraph,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getMadeUpChart apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return error(apiError);
        },
      );
    };
  },



  getGrayFabrics: (success, error) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'gfGraphApi.php',
        (apiSuccess) => {
          console.log('Get getGrayFabrics success', apiSuccess);

          dispatch({
            type: actionTypes.GRAY_FABRICS,
            payload: apiSuccess.greyFabricGraph,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return success(true);
        },
        (apiError) => {
          console.log('Get getGrayFabrics apiError:', apiError);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
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



  getEmployeeEmails: (keyword, completed, failed) => {
    console.log('right action callked', keyword)
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `ueApi.php/?uname=${keyword}`,
        (success) => {
          console.log('getEmployeeProfiles Success :', success);

          dispatch({
            type: actionTypes.GET_EMPLOYEES_EMAILS,
            payload: success.userEmailD,
          });
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          // return completed(true);
        },
        (error) => {
          console.log('getEmployeeProfiles error :', success);
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
          return failed(error?.message);
        },
      );
    };
  },


  getStockInHands: (keyword, completed, failed) => {

    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `stockApi.php/?item_desc&&item_code=${keyword}`,

        (success) => {

          dispatch({
            type: actionTypes.STOCK_IN_HAND,
            payload: success.stockD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },


  //getting Grey Report
  getGreys: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `greyApi.php/?supplier=${keyword}`,
        (success) => {
          console.log('greyApi.php SUCCESSSS', success)
          dispatch({
            type: actionTypes.GREY_FABRIC,
            payload: success.greyFabricD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('greyApi.php error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },


  //get Daily Production for production stock
  getDailyProduction: (completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'dailyproductionApi.php',
        (success) => {
          console.log('greyApi.php SUCCESSSS', success)
          dispatch({
            type: actionTypes.DAILY_PRODUCTION,
            payload: success.dailyproductionD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('greyApi.php error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },



  //get Booked Orders for Export Stock
  //contract
  getBookedOrders: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `bookedorderApi.php/?contract=${keyword}`,

        (success) => {
          console.log('bookedorderApi SUCCESSSS', success)
          dispatch({
            type: actionTypes.BOOKED_ORDERS,
            payload: success.bookedorderD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('bookedorderApi error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },



  getInspectionReportView: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.postReport(
        `erpsys/Frm_Rep_maInspection.php/?docid=${keyword}`,

        (success) => {
          console.log('getViewReports SUCCESSSS', success)
          dispatch({
            type: actionTypes.VIEW_REPORTS,
            payload: success.rows,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('getViewReports error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },



  //for daily production reports
  getDailyProductionReportsView: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.postReport(
        `erpsys/Frm_Rep_maDailyProd4Email.php/?docid=${keyword}`,

        (success) => {
          console.log('getViewReports SUCCESSSS', success)
          dispatch({
            type: actionTypes.VIEW_REPORTS,
            payload: success.rows,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('getViewReports error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },


  //for production summary view
  getProductionSummaryView: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.postReport(
        `erpsys/Frm_Rep_maDailyProductionSummary.php/?docid=${keyword}`,

        (success) => {
          console.log('getViewReports SUCCESSSS', success)
          dispatch({
            type: actionTypes.VIEW_REPORTS,
            payload: success.rows,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('getViewReports error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },


  //for grey productionview
  getGreishSummaryView: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.postReport(
        `erpsys/Frm_Rep_maGreyContract.php/?docid=${keyword}`,

        (success) => {
          console.log('getViewReports SUCCESSSS', success)
          dispatch({
            type: actionTypes.VIEW_REPORTS,
            payload: success.rows,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('getViewReports error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },




  //get Buyer Wise for Export Stock
  //invoice=
  getBuyersWiseExport: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `bweApi.php/?invoice=${keyword}`,
        (success) => {
          console.log('bweAp SUCCESSSS', success)
          dispatch({
            type: actionTypes.BUYER_WISE_EXPORT,
            payload: success.buyerwiseexportD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('bweAp error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },


  //get Country Wise for Export Stock
  //name
  getCountryWiseExport: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `cweApi.php/?name=${keyword}`,

        (success) => {
          console.log('cweApi SUCCESSSS', success)
          dispatch({
            type: actionTypes.COUNTRY_WISE_EXPORT,
            payload: success.countrywiseexportD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('cweApi error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },

  //get getInspectionSummary for production stock
  getInspectionSummary: (completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'inspsummaryApi.php',
        (success) => {
          console.log('inspsummaryApi.php SUCCESSSS', success)
          dispatch({
            type: actionTypes.INSPECTION_SUMMARY,
            payload: success.inspsummaryD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('inspsummaryApi.php error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },



  //get production summary for production stock
  getProductionSummary: (completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'productionsummaryApi.php',
        (success) => {
          console.log('productionsummaryApi SUCCESSSS', success)
          dispatch({
            type: actionTypes.PRODUCTION_SUMMARY,
            payload: success.productionsummaryD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('productionsummaryApi error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },


  //get Inspection Report for production stock
  getInspectionReport: (completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        'inspreportApi.php',
        (success) => {
          console.log('inspreportApi.php SUCCESSSS', success)
          dispatch({
            type: actionTypes.INSPECTION_REPORT,
            payload: success.inspreportD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('inspreportApi.php error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },

  //Getting Purchasing orders
  getPurchasingOrders: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `poApi.php/?podetail=${keyword}`,

        (success) => {
          console.log('getPurchasingOrders SUCCESSSS', success)
          dispatch({
            type: actionTypes.PURCHASING_ORDERS,
            payload: success.purchaseOrderD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('getPurchasingOrders error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
      );
    };
  },

  //getting Outstanding purchase orders
  getOutstandingPurchasingOrders: (keyword, completed, failed) => {
    return (dispatch) => {
      dispatch({ type: actionTypes.START_ACTIVITY_LOADING });
      Api.get(
        `outstandingPoApi.php/?osdetail=${keyword}`,

        (success) => {
          console.log('getOutstandingPurchasingOrders SUCCESSSS', success)
          dispatch({
            type: actionTypes.OUTSTANDING_PURCHASING_ORDERS,
            payload: success.outstandingD,
          });

          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
        },
        (error) => {
          console.log('getOutstandingPurchasingOrders error', error)
          dispatch({ type: actionTypes.CLOSE_ACTIVITY_LOADING });
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
