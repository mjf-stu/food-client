const userLogin = {
    namespaced: true,
    state: {userInfo:{}},
    // { userId:0, userName:"xxx"}数据模拟
    getters:{
        getUserInfo(state,getters,rootState){
            return state.userInfo
        }
    }
}

export default userLogin