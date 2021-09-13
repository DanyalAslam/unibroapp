import { BlurView } from '@react-native-community/blur';
import React from 'react'
import {Image,View,Text, Modal,TouchableOpacity} from 'react-native'
import PoppinsBold from '../../Text/PoppinsBold';
import PoppinsRegular from '../../Text/PoppinsRegular';
import { connect } from 'react-redux';
import styles from './styles'

class YearGraphDataPopup extends React.Component {
    constructor(props)
    {
        super(props);
        this.state ={
            visible : false,
            value :null,
            year:null
        }
    }
    show = (data) =>{
        
       if(data)
       {
       
        this.setState({...this.state,
            visible:true,
            value:data.value,
            year:this.props?.monthly_card_data?.labels[data.index]
        })
       }
    }
    close = () => {
      
        this.setState({visible:false})
    }
    renderContent = () =>{
        return(
            <View style={styles.contentContainer}>
               <View style={styles.content}>
                   <View style={{flexDirection:'row'}}>
                   <PoppinsRegular>year : </PoppinsRegular>
                   <PoppinsBold>{this.state.year}</PoppinsBold>
                   </View>
                   <View style={{flexDirection:'row'}}>
                   <PoppinsRegular>fcy : </PoppinsRegular>
                   <PoppinsBold>{this.state.value}</PoppinsBold>
                   </View>
                
                   
               </View>
            </View>
        )
    }

    renderOverlay = () => {
return(
    <TouchableOpacity
    style={styles.overlayContainer}
    onPress={this.close}
    >
<BlurView 
blurType="light"
style={styles.blur}
></BlurView>
    </TouchableOpacity>
)

    }
    render(){
        return(
       <Modal
       animationType="fade"
       transparent={true}
       visible={this.state.visible}
       style={styles.container}
    
       >
            {this.renderOverlay()}
            {this.renderContent()}
       </Modal>

        )
    }
}
const mapStateToProps = (state) => {

    return {
      monthly_card_data: state.GeneralReducer.monthly_card_data,
    
  
    };
  };
  
  
  const mapDispatchToProps = (dispatch) => {
    return {
      getMonthYearGraphData: (success, error) =>
        dispatch(actions.getMonthYearGraphData(success, error)),
  
      getTableGraphData: (success, error) =>
        dispatch(actions.getTableGraphData(success, error)),
  
      getMadeUpChart: (success, error) =>
        dispatch(actions.getMadeUpChart(success, error)),
  
      getGrayFabrics: (success, error) =>
        dispatch(actions.getGrayFabrics(success, error)),
  
    };
  };

export default connect(mapStateToProps, mapDispatchToProps,null,{  forwardRef: true,})(YearGraphDataPopup);