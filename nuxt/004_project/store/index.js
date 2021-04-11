import Vuex from 'vuex'

const constituteStore = () => {
    return new Vuex.Store({
        state:{
            postList:[],
        },
        getters:{
            getPostList(state){
                return state.postList;
            }
        },
        mutations:{
            setPostList(state, postList){
                state.postList = postList;
            },
            insertPost(state,post){
                state.postList.push(post)
            },
            updatePost(state,post){
                let current = state.postList.find(x=> x.id == post.id);
                current.title = post.title;
                current.subtitle = post.subtitle;
                current.description = post.description;
            }
        },
        actions:{
            nuxtServerInit(vuexContext,context)
            {
                if(!process.client)
                {
                    let postList = [];
                    return context.app.$axios.get(process.env.baseUrl + "postList.json")
                        .then(response => {
                            for(let key in response.data){
                                postList.push({id:key, ...response.data[key]});
                            }
                            vuexContext.commit("setPostList",postList);
                        })
                }
            },
            setPostListAsync(vuexContext,postList){
                vuexContext.commit("setPostList",postList)
            },
            insertPostAsync(vuexContext,post){
                return this.$axios.post(process.env.baseUrl + "postList.json",post)
                    .then(response=>{
                        alert(response.statusText)
                        let postInserted = {id:response.data.name, ...post}
                        vuexContext.commit("insertPost",postInserted)
                        return true
                    })
                    .catch(response=>{
                        alert(response)
                        return false
                    })
            },
            updatePostAsync(vuexContext,post)
            {
                return this.$axios.put(`${process.env.baseUrl}${post.id}.json`,{title:post.title,subtitle:post.subtitle,description:post.description})
                    .then(response=>{
                        alert(response.statusText)
                        vuexContext.commit("updatePost",post)
                        return true
                    })
                    .catch(response=>{
                        alert(response.statusText)
                        return false
                    })
            },
        }
    })
}

export default constituteStore;