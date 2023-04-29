const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addItem = document.getElementById("additem")
const displaySection = document.getElementById('display-section');
const getCurrentList = document.getElementById('todolist');
const valueOfItem = document.getElementById('add');

const BaseURL = 'http://localhost:4000'

const getCompliment = () => {
    axios.get(`${BaseURL}/api/compliment/`)
        .then(res => {
            alert(res.data);
    });
};

const getFortune = () => {
    axios.get(`${BaseURL}/api/fortune/`)
        .then(res => {
            alert(res.data);
    });
};

const getList = () => {
    axios.get(`${BaseURL}/api/list`)
    .then(res => showList(res.data))
    .catch(err => console.log(err))
}

const showList = (arr) => {
    displaySection.innerHTML = ''
    arr.map(item => {
        const itemCard = document.createElement('div')
        itemCard.innerHTML = `<h4>${item.item}</h4>
        <button onclick='deleteItem(${item.id})'>delete</button>
        <button onclick='completeItem(${item.id})'>complete</button>`

        displaySection.appendChild(itemCard)
    })
}

const postItem = (e) => {
    e.preventDefault()
    let body = {
        item: valueOfItem.value
    }

    axios.post(`${BaseURL}/api/add`,body)
    .then(res => getList(res.data))

    addInput.value = ''
}

const deleteItem = (id) => {
    axios.delete(`${BaseURL}/api/delete/${id}`)
    .then(res => getList(res.data))
}

const completeItem = (id) => {
    axios.put(`${BaseURL}/api/complete/${id}`)
    .then(res => getList(res.data))
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
getCurrentList.addEventListener('click', getList)
addItem.addEventListener('click', postItem)

