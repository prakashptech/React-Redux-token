const initialState = {
    isAuthenticates:false,
    token:null,
    error:null
}

export const authReducers = (state=initialState, action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isAuthenticates:true,
                token:action.payload.token,
                error:null,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                isAuthenticates:false,
                token:null,
                error:action.payload.error,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticates:false,
                token:null,
                error:null,
            };
            default:
                return state;
    }
}