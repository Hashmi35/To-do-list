const name = document.querySelector(".nameInput")
const amount = document.querySelector(".amountInput")
const delBtn = document.querySelector(".closeBtn")

const add = document.querySelector(".addBtn")
let items = document.querySelector(".items")


add.addEventListener('click', ()=>
{
    let nameValue = name.value
    let amountValue = amount.value
    let toAdd = `  `

    // if (amountValue = !NaN) {amountValue = 1}
        
    for (let i = 0; i < amountValue; i++){
    toAdd += `
        <div class="smallContainer">
            <input type="checkbox" class="checkBox">
            <h1>${nameValue}</h1>
            <button class="closeBtn">X</button>
        </div>
        ` }

    console.log(amountValue)
    items.innerHTML += 
    `
    <div class="test">
        ${toAdd}
    <div>
    `
})

delBtn.addEventListener('click', ()=>{
    toAdd.remove()
})