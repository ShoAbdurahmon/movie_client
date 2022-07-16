login_form.onsubmit = async (event) => {
    event.preventDefault()
    const user_name = username[0].value
    const user_password = password[0].value
    username[0].value = null
    password[0].value = null

    const result = await request('http://localhost:3000/api/login', "POST", {user_name, user_password})
    if(result.message == 'ok'){
        window.localStorage.user = JSON.stringify(result.data)
        window.localStorage.token = result.token
        window.location = '/'
    }
}