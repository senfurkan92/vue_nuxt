import Vuex from 'vuex'
import Cookie from "js-cookie"

const constituteStore = () => {
    return new Vuex.Store({
        state:{
            authKey :null,
        },
        getters:{
            getAuthKey(state){
                return state.authKey;
            },
            isAuthenticated(state){
                return state.authKey != null;
            }
        },
        mutations:{
            setLocalStorage(state, value){
                localStorage.setItem("authKey",value + "");
                state.authKey = value;
            },
            clearLocalStorage(state){
                localStorage.removeItem("authKey")
            },
            setCookie(state, value){
                Cookie.set("authKey",value + "");
                state.authKey = value;
            },
            setAuthKey(state, value){
                state.authKey = value;
            },
            clearCookie(state){
                Cookie.remove("authKey")
            },
        },
        actions:{
            nuxtServerInit(vuexContext, context){
                if(context.req.headers.cookie){
                    let cookies = context.req.headers.cookie.split(";")
                    try {
                        let cookie = cookies.find(x => x.trim().startsWith("authKey=")).split('=')[1];
                    } catch (error) {
                        console.warn("Cookie expired...")
                    }
                }
            },
            signUp(vuexContext, member){
                return this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.firebaseAPIkey}`,{...member,returnSecureToken:true})
                    .then((response) => {
                        vuexContext.commit("setCookie",response.data.idToken)
                        vuexContext.commit("setLocalStorage",response.data.idToken)
                        setTimeout(()=>{
                            vuexContext.dispatch("logout");
                        },response.data.expiresIn*1000)
                        return true;
                    }).catch((err) => {
                        return false;
                    });
            },
            signIn(vuexContext, member){
                return this.$axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.firebaseAPIkey}`,{...member,returnSecureToken:true})
                    .then((response) => {
                        vuexContext.commit("setCookie",response.data.idToken)
                        vuexContext.commit("setLocalStorage",response.data.idToken)
                        setTimeout(()=>{
                            vuexContext.dispatch("logout");
                        },response.data.expiresIn*1000)
                        return true;
                    }).catch((err) => {
                        return false;
                    });
            },
            logout(){
                this.commit("clearLocalStorage");
                this.commit("clearCookie");
                this.commit("setAuthKey",null);
                return true;
            },
            initAuth(vuexContext, req){
                let token;
                if(req)
                {
                    // server
                    if(req.headers.cookie)
                    {
                        token = req.headers.cookie.split(";").find(x => x.trim().startsWith("authKey="))
                        if(token)
                        {
                            vuexContext.commit("setCookie",token.split('=')[1]);
                        }
                    }
                }
                else
                {
                    // client
                    token = localStorage.getItem("authKey")
                    if(token)
                    {
                        vuexContext.commit("setLocalStorage",token);
                    }
                }
            }
        },
    })
}

export default constituteStore