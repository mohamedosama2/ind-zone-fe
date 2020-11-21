import * as actionTypes from './Actions';

const initState={
    userId:null,
    loading:false,
    token:null,
    error:null,
    signUp:false,
    role:null,
    username:null,
    photo:null,
    email:null
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
                role:action.role,
                username:action.username,
                photo:action.photo,
                email:action.email
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
                role:null,
                photo:null,
                username:null,
                email:null
            }            
        default:
            return state;
    }
}
export default Reducer