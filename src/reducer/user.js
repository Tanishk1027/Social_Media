
const user = (state=null,action)=>{
    switch(action.type){
        case "Login_start":
            return (
             null
            );
        case "Login_success":
            return(
             action.payload
            );
        case "Login_failure":
            return(
           null
        );
        case "Logout":
            return(
              null
            );
        default : return state 
    }
}

export default user;