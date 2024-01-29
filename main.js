const list = []

function add() {
    list.push(document.getElementById("input-tap").value + " ")
    document.getElementById("pforstoke").innerHTML = list
    document.getElementById("input-tap").value = ''
}

function random(){
    document.getElementById("input-tap").value = ''
    const random = Math.floor( Math.random() * list.length)
    document.getElementById("pforstoke").innerHTML = list[random]
}
function Remove(){
    while (list.length > 0){
        list.pop()
    }
    document.getElementById("pforstoke").innerHTML = list
}   

