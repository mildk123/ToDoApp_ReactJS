const updateUser = (data) => {
    return {
        type: 'UPDATE_USER',
        payload : data

    }
}

const removeUser = () => {
    return {
        type: 'REMOVE_USER'
    }
}

const signOut = (data) => {
    return {
        type: 'SIGN_OUT',
        data
    }
}

export {
    updateUser,
    removeUser,
    signOut
}