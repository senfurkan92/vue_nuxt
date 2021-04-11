
export default function(context){
    if(context.route.name != "auth")
    {
        if(process.client){
            context.store.dispatch("initAuth")
        }
        else{
            context.store.dispatch("initAuth",context.req)
        }
    }
}