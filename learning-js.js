const listContainer = document.querySelector('[data-list]')
const listInput = document.querySelector('[new-list-input]')
const listForm = document.querySelector('[new-list-form]')

let lists = []

listForm.addEventListener('submit', function(e){
    e.preventDefault()
    const listName = listInput.value
    if (listName === null || listName === '') return
    const list = createList(listName)
    listInput.value = null
    lists.push(list)
    render()
    CleanList()
})


function createList(name){
    return {id: Date.now().toString, name: name}
}

let counter = 0
function render() {
    lists.forEach(function(list){
        const item = document.createElement('li')
        const remove_item = document.createElement('button')

        // create new item
        item.classList.add('item' + counter.toString())
        item.id = 'new-item' + counter.toString()
        // create new button to remove
        remove_item.classList.add('remove')
        remove_item.id = counter.toString()

        // add the text
        remove_item.innerText = '-'
        item.innerText = list.name

        listContainer.appendChild(item)
        item.appendChild(remove_item)

        counter ++

        
    })
}

document.addEventListener('click', function(e){
    itemRemove = document.getElementById('new-item' + e.target.id)
    if (e.target.id != 'input' && e.target.id != 'add'){
        listContainer.removeChild(itemRemove)
    } 
})



function CleanList(){
    lists = []
}

