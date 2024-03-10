getul = document.getElementById('ul')

function foo() {
    var a = document.getElementById('inp')
    var li = document.createElement('li')
    var liText = document.createTextNode(a.value)
    getul.appendChild(li)
    li.appendChild(liText)
    a.valuE = ''
    document.getElementById('inp').value=''
    li.setAttribute('class', 'li')

    var deletebtn = document.createElement('button')
    var deletebtnText = document.createTextNode('delete')
    deletebtn.appendChild(deletebtnText)
    li.appendChild(deletebtn)
    deletebtn.setAttribute('onclick', 'dell(this)')
    deletebtn.setAttribute('class', 'delete btn btn-danger  ')


    var editbtn = document.createElement('button')
    var editbtnText = document.createTextNode('edit')
    editbtn.appendChild(editbtnText)
    li.appendChild(editbtn)
    editbtn.setAttribute('onclick', 'edit(this)')
    editbtn.setAttribute('class', 'edit btn btn-info ')

    console.log(li)
}

function dell(e) {
    e.parentNode.remove()
}

function edit(e) {
    var a = prompt('enter edit value', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}

function del() {
    getul.innerHTML = ''
    document.getElementById('inp').value=''
}
