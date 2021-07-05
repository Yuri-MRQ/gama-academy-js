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

function render() {
    lists.forEach(function(list){
        const item = document.createElement('li')
        item.classList.add('item')
        item.innerText = list.name
        listContainer.appendChild(item)
        
    })
}

function CleanList(){
    lists = []
}
