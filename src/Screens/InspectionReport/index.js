import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import InspectionReportCards from '../../Components/Sections/InspectionReportCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh,vw } from '../../Utils/Units';

import MainInput from '../../Components/Input/MainInput';

class InspectionReport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getInspectionReport);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getInspectionReport = () => {
    this.props.getInspectionReport(
      (success) => {
        if (success) {
          this.setState({
            refreshing: false,
          });
        }
      },
      (error) => {
        this.setState({
          refreshing: false,
        });
      },
    );
  };

  _renderInspectionReport = (item) => {

    console.log('_renderInspectionReport success',item)
    return <InspectionReportCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      stock={item} 
      
      />;
  };
  render() {

    return (
      <View style={styles.container}>

<View
          style={{
            height: 6 * vh,
            width: 90 * vw,
            borderRadius: 2 * vw,
            backgroundColor: '#FFFFFF',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 5 * vw,
            alignItems: 'center',
            elevation: 2 * vw,
            marginTop: 2 * vh
          }}>

          <MainInput
            placeholder=" Search Purchase Order"
            style={styles.inputField}
            onChangeText={(keyword) => this.onStateChange('keyword', keyword)}
          />

          {/* <TouchableOpacity onPress={this._search}>
            <Image
              resizeMode="contain"
              style={{ height: 5 * vh, width: 5 * vw }}
              source={icons.searchBlue}
            />
          </TouchableOpacity> */}
        </View>

  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.inspection_report}
  renderItem={this._renderInspectionReport}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state',state)
  return {
    inspection_report: state.GeneralReducer.inspection_report,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInspectionReport: (success, error) =>
      dispatch(actions.getInspectionReport(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InspectionReport);
