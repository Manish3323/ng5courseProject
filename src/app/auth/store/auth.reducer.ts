import * as AuthActions from './auth.actions';


export interface State {
    token: String;
    authenticated: boolean;
}
const initialState: State = {
    token : null,
    authenticated : false
}

export function AuthReducer(state = initialState, action: AuthActions.AuthActions){
    switch (action.type) {
        case (AuthActions.SIGNIN):
        case (AuthActions.SIGNUP): {
            return {
                ...state,
                authenticated : true
            }
        }
        case (AuthActions.LOGOUT): {
            return {
                ...state,
                token : null,
                authenticated: false
            }
        }
        case (AuthActions.SET_TOKEN):{
            const newToken = action.payload;
            return {
                ...state,
                token: newToken
            }
        }
        default :
            return state;
    }
}