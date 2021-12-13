const initialState = {
    state:[],
    user: {userName: ""},
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload
            }
        case 'SIGN_IN_USER':
            return {
                ...state,
                user: action.payload
            }

        case "TOKEN":
            return {
                ...state,
                token: action.payload
        
            }
        case "SIGN_OUT":
            return {
                ...state,
                user: action.payload
            }   

            default:
            return state
    }
}
export default authReducer