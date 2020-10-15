import React ,{Component} from 'react';
import * as actions from '../../store/index'
import {connect} from 'react-redux'

class Logout extends Component {
    componentDidMount(){
        this.props.onLogout();
        window.location.href='/'
    }
   
    render(){
        return <></>
    }
}

const mapDispatchToProps=dispatch=>{
    return{
       onLogout:()=>dispatch(actions.logout())    
    }
}
export default connect(null,mapDispatchToProps)(Logout)
 