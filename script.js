let boxes = document.querySelectorAll('.box')
let selected;
let source;
let prevClass;
for (box of boxes) {
    box.addEventListener('dragstart', (e) => {
        selected = e.target;
        source = e.target.parentNode;
        prevClass = e.target.className
        setTimeout(() => {
            console.log('inside timeout')
            e.target.className = 'hide'
        })
    })
}

let cells = document.querySelectorAll('.cell')
for (let cell of cells) {
    cell.addEventListener('dragover', (e) => {
        e.preventDefault()
    })

    cell.addEventListener('drop', (e) => {
        if (e.target.tagName == 'TD') {
            e.target.appendChild(selected)
            source.appendChild(e.target.children[0])
            selected.className = prevClass
        }else if(e.target.tagName == 'DIV'){
            e.target.parentNode.appendChild(selected)
            source.appendChild(e.target)
            selected.className = prevClass
        }
    })
}