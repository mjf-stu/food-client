const userLogin = {
    namespaced: true,
    state: {userInfo:{}},
    // { uId:0, uName:"xxx"}数据模拟
    getters:{
        getUserInfo(state,getters,rootState){
            return state.userInfo
        }
    },
    mutations:{
        uLogin(state,payload){
            state.userInfo = payload.userInfo
        },
        uLogout(state,payload){
            state.userInfo = {}
        }
    }
}

export default userLogin