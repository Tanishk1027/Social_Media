export const Login_start = ()=>{
    return{
        type: "Login_start",
    }
}

export const Login_success = (name)=>{
    return{
        type: "Login_success",
        payload: name
    }
}

export const Logout = ()=>{
    return{
        type: "Logout"
    }
}