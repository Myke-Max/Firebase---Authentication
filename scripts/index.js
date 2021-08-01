const guidesList = document.querySelector('.guides');
const loginLink = document.querySelectorAll('.logged-in');
const logoutLink = document.querySelectorAll('.logged-out');
const accountDetail = document.querySelector('.account-details')


const setupUI = function(user){
    if(user){
        // account info
        db.collection('users').doc(user.uid).get().then(doc =>{
            const html = `
            <div>Logged in as ${user.email}</div>
            <div>${doc.data().bio}
            `
            accountDetail.innerHTML = html
        }) 

        

        loginLink.forEach(item => item.style.display = 'block');
        logoutLink.forEach(item => item.style.display = 'none');
    }

    else{
        loginLink.forEach(item => item.style.display = 'none');
        logoutLink.forEach(item => item.style.display = 'block');
        accountDetail.innerHTML = ''
    }
    }


const setupGuides = (data) => {

    if(data.length){
        let html = ''

        data.forEach(doc => {
            const guide = doc.data()
            console.log(guide)
            const li = `
            <li> 
            <div class = "collapsible-header grey lighten-4" >
             ${guide.title}
             </div>
             <div class = "collapsible-body white" >
              <span> ${guide.content}</span>
             </div>
             </li>
            `
            html += li
        });
        guidesList.innerHTML = html
    }
    else{
        guidesList.innerHTML = '<h5 class="center-align">You need Login to your guides</h5>'
    }    
}

document.addEventListener('DOMContentLoaded', function() {

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals)

    const items = document.querySelectorAll('.collapsible')
    M.Collapsible.init(items)
})