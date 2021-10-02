import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './styles';
import GreyCards from '../../Components/Sections/GreyCards';
import { connect } from 'react-redux';
import actions from '../../redux/actions/index';
import { vh } from '../../Utils/Units';


class Grey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
    };
  }

  componentDidMount() {
    this.props.navigation.addListener('focus', this._getGreys);
  }

  componentWillUnmount() {
    this.props.navigation.removeListener('focus');
  }

  _getGreys = () => {
    this.props.getGreys(
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

  _renderGrey = (item) => {

    console.log('gettgtttttt fabricsasad',item)
    return <GreyCards



      // onSuccess={() =>
      //   this.props.navigation.navigate('WatchStreanScreen', { item })
      // }
      stock={item} 
      
      />;
  };
  render() {

    return (
      <View style={styles.container}>
  <FlatList 
  showsVerticalScrollIndicator={false}
  data={this.props.grey_fabric}
  renderItem={this._renderGrey}
  contentContainerStyle={{paddingBottom:10*vh}}
  />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('Employee state',state)
  return {
    grey_fabric: state.GeneralReducer.grey_fabric,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGreys: (success, error) =>
      dispatch(actions.getGreys(success, error)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grey);
