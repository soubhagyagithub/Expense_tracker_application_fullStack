function formSubmit(event){
   event.preventDefault()

   const name = event.target.name.value;
   const email = event.target.email.value;
   const password = event.target.password.value;

   const userData = {
    userName: name,
    email: email,
    password: password
   }

    try{
    axios.post('/user/signup', userData)
        .then(result => {
            userCreationSuccess(result.data)
        })
        .catch(err => {
            userCreationSuccess(err.response.data);
        });
    }
    catch(err){
    console.error(err);
    }
}