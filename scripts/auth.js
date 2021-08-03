// // Add admin cloud function(need to pay)
// const adminForm = document.querySelector('.admin-actions')
// adminForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const adminEmail = document.querySelector('#admin-email').value
//     const addAdminRole = functions.httpsCallable('addAdminRole');
//     addAdminRole({
//         email:adminEmail
//     }).then(res => {
//         console.log(res)
//     })
// })


// listen auth status change 'return null if user logout'

auth.onAuthStateChanged(user => {
    console.log(user)
        if (user) {
           // get data collection
db.collection('guides').onSnapshot(snapshot => {
    setupGuides(snapshot.docs);
    console.log(snapshot);
        console.log(snapshot.docs);
        setupUI(user);
    },err =>{
        console.log(err.message)
    });
        } else {
            setupGuides([])
            setupUI()
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
        return db.collection('users').doc(credential.user.uid).set({
            bio:signupForm['signup-bio'].value
        })
        
    }).then(() => {
        const modal = document.querySelector('#modal-signup')
        // console.log(modal)
    M.Modal.getInstance(modal).close()
        signupForm.reset()
         signupForm.querySelector('.error').innerHTML = ''
    }).catch(err => {
        signupForm.querySelector('.error').innerHTML = err.message
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
    // getUserInfo
    const email = loginForm['login-email'].value;
    const password = loginForm['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        // close and clear form
const modal = document.querySelector('#modal-login')
    M.Modal.getInstance(modal).close()
        loginForm.reset()
        loginForm.querySelector('.error').innerHTML = ''
    }).catch(err => {
    console.log(err.message);
     loginForm.querySelector('.error').innerHTML = err.message
})

    
})

// Create guide

const createGuideForm = document.querySelector('#create-form');
console.log(createGuideForm)

createGuideForm.addEventListener('submit', function(e){
e.preventDefault()

    db.collection('guides').add({
        title:createGuideForm['title'].value,
        content:createGuideForm['content'].value
    }).then(() => {
        // close and clear form

    const modal = document.querySelector('#modal-create')
    M.Modal.getInstance(modal).close()
    createGuideForm.reset()
    }).catch(err =>{
        console.log(err)
    })
})




