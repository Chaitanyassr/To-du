//item addition script
function todo(){
	var item  = document.getElementById('todoinput').value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todolist").appendChild(newItem)
}
document.getElementById("click").onclick = function() {todo()};
//item deletion script
function del(){
	var item1 = document.getElementById('todolist');
	item1.removeChild(item1.childNodes[0]);
}
document.getElementById("cross").onclick = function() {del()};