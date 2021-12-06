import React from 'react';
import { View, Text, ToastAndroid, Platform, ScrollView, Image, Linking, ActivityIndicator } from 'react-native';
import styles from './styles';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit'
import { vh, vw } from '../../Utils/Units';
import PoppinsRegular from '../../Components/Text/PoppinsRegular'
import PoppinsBold from '../../Components/Text/PoppinsBold'
import YearGraphDataPopup from '../../Components/Popups/YearGraphDataPopup'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainInput from '../../Components/Input/MainInput';
import { icons } from '../../assets/images'
import DropDown from '../../Components/DropDown'
import { showToast } from '../../Utils';




class ApprovedDocuments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            selected_buyer_company: '',
            selected_buyer_year: '',

            selected_country_company: '',
            selected_country_year: '',

            selected_AppDoc: '',
            selected_AppRights: '',
            showloading: ''
        };
    }

    _ApprovedDocuments = (doc_id, doc_no, user_code) => {
        console.log('doc_id', doc_id, 'doc_no', doc_no, 'user_code', user_code)

        this.props.getApprovedDocumentsResponse(
            doc_id,
            doc_no,
            user_code,
            (success) => {
                showToast('Report Approved successfully')
                if (success) {
                    this._getSearchedApproveDocuments()
                }
            },
            (error) => {
                showToast('Internal Server Error')
                alert('error', error)
            },
        );


    }


    _getDocumentDetails = () => {
        this.props.getDocumentDetails(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );
    }

    _getShipmentBuyerWise = () => {
        this.props.getShipmentBuyerWise(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );
    }

    _getShipmentCountryWise = () => {
        this.props.getShipmentCountryWise(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );
    }



    _getBookedPieceGoodsOrders = () => {
        this.props.getBookedPieceGoodsOrders(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );
    }

    _getSearchedShipmentBuyerWise = () => {


        this.props.getSearchedShipmentBuyerWise(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
            this.state.selected_buyer_company,
            this.state.selected_buyer_year
        );
    }
    _getSearchedApproveDocuments = () => {

        if (this.state.selected_AppRights == '' && this.state.selected_AppDoc == '') {
            return showToast('Please select option 1 and option 2')
        }
        if (this.state.selected_AppRights == '' && this.state.selected_AppDoc != '') {
            return showToast('Please select option 2')
        }
        if (this.state.selected_AppDoc == '' && this.state.selected_AppRights != '') {
            return showToast('Please select option 1')
        }


        this.setState({ showloading: true })
        this.props.getSearchedApproveDocuments(
            this.state.selected_AppDoc,
            this.state.selected_AppRights,
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                        showloading: false
                    });
                }
            },
            (error) => {
                showToast(error);
                this.setState({
                    sessions: this.props.streamData,
                    showloading: false
                });
            },
        );
    }

    _getSearchedShipmentCountryWise = () => {
        this.props.getSearchedShipmentCountryWise(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
            this.state.selected_country_company,
            this.state.selected_country_year
        );
    }

    _getTableGraphData = () => {
        this.props.getTableGraphData(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );

    }

    _getTableGreyGabricSupplierWise = () => {
        this.props.getTableGreyGabricSupplierWise(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );

    }

    _getMadeUpChart = () => {
        this.props.getMadeUpChart(
            (success) => {
                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );
    }

    _getOptions = () => {

        this.props.getApprovedDocumentsOptions(
            this?.props?.user_code,
            (success) => {

                if (success) {
                    this.setState({
                        sessions: this.props.streamData,
                    });
                }
            },
            (error) => {
                showToast(error);
            },
        );
    }


    _getHomeData = () => {

        this._getOptions()
        // this._getDocumentDetails()

    };

    componentDidMount() {

        this.props.navigation.addListener('focus', this._getHomeData);
    }

    onSelectFirstOption = () => {

        this.CompanyDropDown.show(
            'title',
            ["Sent", "Preparing"],
            'Select Option 1',
            // (data) =>
            //   this.setState({
            //     request_data: {
            //       ...this.state.request_data,
            //       blood_group: data.title,
            //     },
            //   }),
            (data) => this.setState({ selected_AppDoc: data }),
            null,
            null,
        );






    }

    onSelectSecondOption = () => {

        this.CompanyDropDown.show(
            'title',
            this.props.approved_documents_options,
            'Select option 2',
            // (data) =>
            //   this.setState({
            //     request_data: {
            //       ...this.state.request_data,
            //       blood_group: data.title,
            //     },
            //   }),
            (data) => this.setState({ selected_AppRights: data }),
            null,
            null,
        );





    }


    renderRow = (data, index) => {
        console.log('getttting dataaa', data)
        console.log('index', index)
        if (data.DocumentName === 'PO') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>PO.NO</Text>
                    </View>


                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Supplier</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Amount</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 5 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.poNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Supplier}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Amount}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data.poNo, role: 'PO' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this._ApprovedDocuments(data?.poNo, '02', this?.props?.user_code)}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approve }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }
        if (data.DocumentName === 'DEMAND NOTE') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>DEMAND.NO</Text>
                    </View>


                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Date</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 4 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.demandNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Date}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.CreatedBy}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <Image
                                style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.View }}
                                resizeMode='contain'
                            />
                            <TouchableOpacity
                                onPress={() => this._ApprovedDocuments(data?.demandNo, '01', this?.props?.user_code)}><Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approve }}
                                    resizeMode='contain'
                                /></TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }
        if (data.DocumentName === 'DCR') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Dcr no</Text>
                    </View>


                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Description</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 5 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.dcrno}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Description}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.PreparedBy}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data.dcrno, role: 'DailyProduction' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                /></TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Approve }}
                                resizeMode='contain'
                            />
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }
        if (data.DocumentName === 'DPR') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Dpr no</Text>
                    </View>


                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Description</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 5 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.dprno}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Description}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.PreparedBy}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data.dprno, role: 'DailyProduction' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this._ApprovedDocuments(data?.dprno, '12', this?.props?.user_code)}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approve }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }
        if (data.DocumentName === 'IGP') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Igp No</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Supplier</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Quantity</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 4 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.IgpNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.Supplier}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.Quantity}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 2 * vw }}>{data.PreparedBy}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data?.IgpNo, role: 'IGP' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Approved }}
                                resizeMode='contain'
                            />
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }

        if (data.DocumentName === 'INSPECTION') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Insp No</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Date</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>UbiNo</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Status</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 4 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.InspNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Date}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.UbiNo}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Status}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data?.InspNo, role: 'InspectionReport' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this._ApprovedDocuments(data?.InspNo, '14', this?.props?.user_code)}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approved }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }

        if (data.DocumentName === 'GRN') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Grn No</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Product</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Customer</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Amount</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 5 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.GrnNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Product}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Customer}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Amount}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data?.GrnNo, role: 'GRN' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this._ApprovedDocuments(data?.GrnNo, '04', this?.props?.user_code)}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approve }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }

        if (data.DocumentName === 'OGP') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>OGP No</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Description</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Remarks</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 5 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.OGPNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Description}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Remarks}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.PreparedBy}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data?.OGPNo, role: 'OGP' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this._ApprovedDocuments(data?.OGPNo, '10', this?.props?.user_code)}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approve }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }



        if (data.DocumentName === 'I-RETURN') {
            if (index === 0) {
                return (<View style={{ backgroundColor: '#fff', flex: 1, height: 10 * vh, alignSelf: 'stretch', flexDirection: 'row', marginHorizontal: 5 }}>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>OGP No</Text>
                    </View>

                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Description</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Remarks</Text>
                    </View>
                    <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ color: '#012c65', fontWeight: 'bold' }}>Prepared By</Text>
                    </View>
                </View>
                );

            }
            else {
                return (
                    <View style={{ flex: 1, alignSelf: 'stretch', borderBottomColor: 'black', borderBottomWidth: 0.3, height: 10 * vh, backgroundColor: '#fff', marginHorizontal: 5, backgroundColor: '#ffF' }}>
                        <View style={{ flexDirection: 'row', height: 5 * vh, backgroundColor: '#fff' }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingLeft: 7 }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.OGPNo}</PoppinsRegular></View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Description}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.Remarks}</PoppinsRegular>
                            </View>
                            <View style={{ flex: 1, alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center' }} >
                                <PoppinsRegular style={{ fontSize: 3 * vw }}>{data.PreparedBy}</PoppinsRegular>
                            </View>
                        </View>

                        <View style={{ height: 6 * vh, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this.props.navigation.navigate('ViewReports', { id: data?.IReturnNo, role: 'I-RETURN' })}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 3 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.View }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                            <TouchableOpacity

                                // onPress={() => Linking.openURL(`http://103.25.138.171/:4080/erpsys/Frm_Rep_Po.php/${data.poNo}`)}
                                onPress={() => this._ApprovedDocuments(data?.OGPNo, '10', this?.props?.user_code)}

                            >
                                <Image
                                    style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                    source={{ uri: data.Approve }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                            <Image
                                style={{ width: 4 * vw, height: 4 * vh, marginRight: 4 * vw }}
                                source={{ uri: data.Delete }}
                                resizeMode='contain'
                            />
                        </View>


                    </View>
                );

            }
        }

    }


    _renderSecondGraph = () => {


        if (typeof this.props.approved_documents_details !== 'undefined') {

            if (this.props.approved_documents_details.length === 0) {
                return (<View style={{ height: 50 * vh, width: 100 * vw, justifyContent: 'center', alignItems: 'center' }}><PoppinsRegular

                    style={{ color: '#D3D3D3', fontSize: 4 * vw }}
                >No record found for the selected Data.....</PoppinsRegular></View>)
            }
            else {
                return (

                    <View style={styles.secondContainer}>

                        {this.props?.approved_documents_details?.length === 0 ? null : this?.props?.approved_documents_details.map((datum, index) => { // This will render a row for each data element.
                            return this.renderRow(datum, index);
                        })

                        }

                    </View>)
            }


        }
        else {
            return null

        }


    }


    _renderGreyFabricSupplierWise = () => {
        return (<><PoppinsBold style={{ fontSize: 5 * vw }}>Grey Fabric Supplier Wise</PoppinsBold>

            <View style={styles.secondContainer}>
                {this?.props?.table_card_data_supplier_wise?.length === 0 ? null : this?.props?.table_card_data_supplier_wise.map((datum, index) => { // This will render a row for each data element.
                    return this.renderRowSupplierWise(datum, index);
                })

                }

            </View></>)
    }




    _renderShipmentBuyerWiseGraph = () => {
        return (<>

            <PoppinsBold style={{ fontSize: 5 * vw }}>Shipment Buyer Wise</PoppinsBold>
            <View style={styles.firstContainer}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => this.onSelectFirstOption('buyer')}

                    >
                        <MainInput
                            label="Enter Blood Group"
                            required
                            placeholder="Select Company"
                            value={this.state.selected_buyer_company}
                            editable={false}
                            style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
                            fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
                            rightIcon={icons.downArrow}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.onSelectSecondOption('buyer')}
                    >
                        <MainInput
                            label="Enter Year"
                            value={this.state.selected_buyer_year}
                            required
                            placeholder="Select year"
                            editable={false}
                            style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
                            fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
                            rightIcon={icons.downArrow}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this._getSearchedShipmentBuyerWise()}
                    >
                        <Image
                            source={icons.searchBlue}
                            style={{ height: 4 * vh, width: 4 * vw }}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>

                </View>


                {this.props?.shipment_buyer_wise_Data?.length === 0 ? null : <BarChart


                    data={this?.props?.shipment_buyer_wise_Data}
                    width={90 * vw}
                    height={40 * vh}
                    chartConfig={{
                        barPercentage: 0.3,
                        propsForVerticalLabels: { fontSize: 2 * vw },
                        propsForHorizontalLabels: { fontSize: 2 * vw },
                        backgroundGradientFrom: "#fff",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#fff",
                        backgroundGradientToOpacity: 0.5,
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
                        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                        propsForBackgroundLines: {
                            strokeWidth: 0.6,

                        }
                    }}


                />}

            </View></>
        )
    }

    _renderShipmentCountryWiseGraph = () => {
        return (<>

            <PoppinsBold style={{ fontSize: 5 * vw }}>Shipment Country Wise</PoppinsBold>
            <View style={styles.firstContainer}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => this.onSelectFirstOption('country')}

                    >
                        <MainInput
                            label="Enter Blood Group"
                            required
                            placeholder="Select Company"
                            value={this.state.selected_country_company}
                            editable={false}
                            style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
                            fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
                            rightIcon={icons.downArrow}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.onSelectSecondOption('country')}
                    >
                        <MainInput
                            label="Enter Year"
                            value={this.state.selected_country_year}
                            required
                            placeholder="Select year"
                            editable={false}
                            style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
                            fieldStyle={{ width: 20 * vw, fontSize: 2 * vw }}
                            rightIcon={icons.downArrow}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this._getSearchedShipmentCountryWise('country')}
                    >
                        <Image
                            source={icons.searchBlue}
                            style={{ height: 4 * vh, width: 4 * vw }}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>

                </View>


                {this.props?.shipment_country_wise_Data?.length === 0 ? null : <BarChart


                    data={this?.props?.shipment_country_wise_Data}
                    width={90 * vw}
                    height={40 * vh}
                    chartConfig={{
                        barPercentage: 0.3,
                        propsForVerticalLabels: { fontSize: 2 * vw },
                        propsForHorizontalLabels: { fontSize: 2 * vw },
                        backgroundGradientFrom: "#fff",
                        backgroundGradientFromOpacity: 0,
                        backgroundGradientTo: "#fff",
                        backgroundGradientToOpacity: 0.5,
                        decimalPlaces: 2,
                        color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`,
                        labelColor: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                        propsForBackgroundLines: {
                            strokeWidth: 0.6,

                        }
                    }}


                />}

            </View></>


        )
    }



    render() {
        console.log('checllllllllll', this.props.approved_documents_details)
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', paddingVertical: 2 * vh, alignItems: 'center' }}>

                    <TouchableOpacity
                        onPress={() => this.onSelectFirstOption()}

                    >
                        <MainInput
                            label="Enter Blood Group"
                            required
                            placeholder="Select option 1"
                            value={this.state.selected_AppDoc}
                            editable={false}
                            style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
                            fieldStyle={{ width: 20 * vw, fontSize: 2.5 * vw }}
                            rightIcon={icons.downArrow}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.onSelectSecondOption()}
                    >
                        <MainInput
                            label="Enter Year"
                            value={this.state.selected_AppRights}
                            required
                            placeholder="Select option 2"
                            editable={false}
                            style={{ width: 30 * vw, paddingHorizontal: 1 * vw }}
                            fieldStyle={{ width: 20 * vw, fontSize: 2.5 * vw }}
                            rightIcon={icons.downArrow}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this._getSearchedApproveDocuments()}
                    >
                        <Image
                            source={icons.searchBlue}
                            style={{ height: 4 * vh, width: 4 * vw }}
                            resizeMode="contain"
                        />

                    </TouchableOpacity>

                </View>
                {this.state.showloading ? <ActivityIndicator size="small" color="#012c65"
                    style={{ paddingVertical: 3 * vh }}
                /> : null

                }
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ alignItems: 'center', paddingBottom: 10 * vh }}
                    style={styles.container}
                >{this._renderSecondGraph()}</ScrollView>

                <DropDown ref={(e) => (this.CompanyDropDown = e)} />
            </View>
        );
    }
}




const mapStateToProps = (state) => {
    console.log("mesgs", state.GeneralReducer)
    return {

        approved_documents_options: state.GeneralReducer.approved_documents_options,
        approved_documents_details: state.GeneralReducer.approved_documents_details,
        user_code: state.GeneralReducer.user_code,


    };
};


const mapDispatchToProps = (dispatch) => {
    return {


        getApprovedDocumentsOptions: (keyword, success, error) =>
            dispatch(actions.getApprovedDocumentsOptions(keyword, success, error)),

        // getDocumentDetails: (success, error) =>
        //     dispatch(actions.getDocumentDetails(success, error)),

        getSearchedApproveDocuments: (selected_AppDoc, selected_AppRights, success, error) =>
            dispatch(actions.getSearchedApproveDocuments(selected_AppDoc, selected_AppRights, success, error)),


        getApprovedDocumentsResponse: (docid, docno, usercode, success, error) =>
            dispatch(actions.getApprovedDocumentsResponse(docid, docno, usercode, success, error)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedDocuments);
