import * as actionTypes from './Actions';

const initState={
    userId:null,
    loading:false,
    token:null,
    error:null,
    signUp:false,
    role:null
};

const Reducer =(state=initState,action)=>{
    switch (action.type) {
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading:true,
                error:null
            };
        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                token:action.token,
                userId:action.userId,
                loading:false,
                role:action.role
            };
        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                loading:false,
                error:action.error,
            }
        case actionTypes.LOGOUT:
            return{
                ...state,
                token:null,
                userId:null,
                role:null
            }            
        default:
            return state;
    }
}
export default Reducer