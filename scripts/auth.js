// signup
const signupForm = document.querySelector('#signup-form');
console.log(signupForm)
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email,password)

  // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
      console.log(credential)
        const modal = document.querySelector('#modal-signup')
        console.log(modal)
        M.Modal.getInstance(modal).close()
        signupForm.reset()
  })
});



