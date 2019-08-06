import React, {Component} from 'react';
import {connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';


class BookDetail extends Component {


    render(){
        return(
            <ul className="list-group col-sm-4">
                {(this.props.activeBook) ? this.props.activeBook.title : "Nothing selected"} 
            </ul>
        )
    }
}

function mapStateToProps(state){

    // whatever is returned will show up 
    // as props inside the booklist
  
    return{
        activeBook:state.activeBook
    }
  
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook:selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
  