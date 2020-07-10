import React, { Component } from 'react'
import NewKeg from './NewKeg'
import KegList from './KegList'
import Details from './Details'
import * as a from './../actions';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


export default class KegControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //detail: false,
    };
    this.handleClick = this.handleClick.bind(this); 
  }
  
  
  

  


  handleClick = () => {
  const { dispatch } = this.props;
  const action = a.actionFormTgl();
  dispatch(action);
  }
  

  

  onNewKegCreation = (newKeg) => {
    const {dispatch} =this.props;
    const action1 = a.actionAdd(newKeg);
    dispatch(action1);
    const action2 = a.actionFormFalse();
    dispatch(action2);
    
  }
  
  
  buy = (id) => {
    const {dispatch} =this.props;
    const action = a.actionDecQty(id);
    dispatch(action);
  }

 

  detail = (id) => {
    const {dispatch} =this.props;
    console.log(this.props.masterKegList);
    const action = a.actionDetail(this.props.masterKegList, id);
    dispatch(action);
    const action2 = a.actionDetailTrue();
    dispatch(action2);
    //this.setState({ detail : true });
  }

  
  back = () =>{
    const {dispatch} =this.props;
    const action = a.actionDetailFalse();
    dispatch(action);
    //this.setState({ detail : false });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.detail){
      currentlyVisibleState = <Details detailItem={this.props.detailItem} back={this.back } />;
      buttonText = "Not to be clicked"
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewKeg onNewKegCreation={this.onNewKegCreation} />
      buttonText = "cancel"; 
    } else if (!this.props.formVisibleOnPage) {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} buy={this.buy} detail={this.detail} />;
      buttonText = "Add Kegs";
    }
  
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button  onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}


  

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.macroKegList,
    detailItem : state.detailItem,
    formVisibleOnPage :state.formVisibleOnPage,
    detail : state.detail
  }
}

KegControl = connect(mapStateToProps)(KegControl);












