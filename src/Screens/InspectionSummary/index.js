import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import InspectionSummaryCards from '../../Components/Sections/InspectionSummaryCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh, vw } from '../../Utils/Units';

import MainInput from '../../Components/Input/MainInput';

class InspectionSummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      keyword: ''
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getInspectionSummary);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getInspectionSummary = () => {
    this.props.getInspectionSummary(
      this.state.keyword,
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

  _renderInspectionSummary = (item) => {

    console.log('gettgtttttt fabricsasad', item)
    return <InspectionSummaryCards



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
            placeholder=" Search Employee Emails"
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
          data={this.props.inspection_summary}
          renderItem={this._renderInspectionSummary}
          contentContainerStyle={{ paddingBottom: 10 * vh }}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Purchasing orders state', state)
  return {
    inspection_summary: state.GeneralReducer.inspection_summary,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getInspectionSummary: (keyword, success, error) =>
      dispatch(actions.getInspectionSummary(keyword, success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InspectionSummary);
