
  


// listen auth status change 'return null if user logout'

auth.onAuthStateChanged(user => {
        if (user) {
           // get data collection
db.collection('guides').get().then(snapshot => {
    setupGuides(snapshot.docs)
        console.log(snapshot.docs)
        seupUI(user)
    })
        } else {
            setupGuides([])
            seupUI()
        }
    })
    // signup
const signupForm = document.querySelector('#signup-form ')
console.log(signupForm)
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;
    console.log(email, password)

    // sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(credential => {
        // console.log(credential)
        const modal = document.querySelector('#modal-signup')
            // console.log(modal)
        M.Modal.getInstance(modal).close()
        signupForm.reset()
    })
});


// logout

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
    e.preventDefault()
    auth.signOut()
});


// Login


const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value

    auth.signInWithEmailAndPassword(email, password)

    // close and clear form

    const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close()
    loginForm.reset()

})




