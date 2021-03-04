const iState = {
    login_status : false,
}

const reducer = (state=iState,action) => {
    if(action.type === 'CHANGE_NAME'){
         console.log(state.login_status)

        return {
            login_status : action.payload
    }

}
return state

}
export default reducer