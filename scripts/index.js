

const guidesList = document.querySelector('.guides');
console.log(guidesList)
const setupGuides = (data) => {
let html = ''

data.forEach(doc => {
    const guide = doc.data()
    console.log(guide)
    const li = `
    <li> 
    <div class = "collapsible-header grey lighten-4" >
     ${guide.title}
     < /div>
     <div class = "collapsible-body white" >
      < span > ${guide.content}< /span>
     </div >
     </li>
    `
    html += li
});
        guidesList.innerHTML = html
}

document.addEventListener('DOMContentLoaded', function() {

    const modals = document.querySelectorAll('.modal');
    M.Modal.init(modals)

    const items = document.querySelectorAll('.collapsible')
    M.Collapsible.init(items)
})