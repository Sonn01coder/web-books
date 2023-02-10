export const validation = ({ email, password}) => {
    
    let error = {}

    if(!email) {
        error.email = "Hãy nhập email của bạn"
    } else if(!/\S+@\S+\.\S+/.test(email)) {
        error.email = "Email của bạn không chính xác"
    }

    if(!password) {
        error.password ="Hãy nhập mật khẩu"
    } else if(password.length < 6) {
        error.password = "Mật khẩu không đạt yêu cầu"
    }

    return error
}