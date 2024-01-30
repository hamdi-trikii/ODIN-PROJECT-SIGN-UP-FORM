function check(f){
    const password=f.password.value;
    const c_password=f.querySelector('#c-password').value;
    return password===c_password ?true :false
}