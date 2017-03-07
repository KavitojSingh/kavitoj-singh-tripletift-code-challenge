var listItems = []

document.addEventListener("DOMContentLoaded", function(){

  var listForm = document.getElementById("listForm")

  listForm.addEventListener("submit", function(event){
    var input = document.getElementById("input")
    var userInput = input.value

    event.preventDefault()
    input.value = ""

    if (userInput === "") { alert("A note cannot be empty!") }
    else {
      var ul = document.getElementById("ul")
      var li = document.createElement("li")
      var deleteButton = document.createElement("button")

      listItems.push(userInput)
      li.innerText = userInput
      deleteButton.innerText = "X"
      deleteButton.setAttribute("onClick", `deleteListItem(this.parentNode)`)
      li.appendChild(deleteButton)
      ul.appendChild(li)
    }

  })

})


function deleteListItem(event) {
  var item = listItems.indexOf(event.innerText.slice("X", -1))
  listItems.splice(item, 1)
  event.style.opacity = '0';
  setTimeout(function(){event.remove()}, 500)
}
