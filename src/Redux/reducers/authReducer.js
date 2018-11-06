const reducer = (state = {}, action) => {
    switch (action.type) {
        case "UPDATE_USER" : {
            return {...state, user : action.payload}
        }        
        case "REMOVE_USER" : {
            return {...state, user : action.payload}
        }
        case "SIGN_OUT" : {
            return {...state, signout : action.data}
        }
        default : {
            return state
        }

    }
}

export default reducer;