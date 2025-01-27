document.getElementById("add-btn").addEventListener("click",addTask)
function addTask(){
    const taskItem = document.getElementById("text-input").value
    const taskDesc = document.getElementById("text-disc").value
    if(taskItem ==="" || taskDesc ===""){
        alert("Please Enter The Task Title and Task Description")
    }
    const taskList = document.getElementById("task-list")
    const resultItem = document.createElement("div")
    resultItem.classList.add("result-item")
    resultItem.innerHTML = `
    <h2>${taskItem}</h2>
    <p>${taskDesc}</p>
    <button id="edit">Edit</button>
    <button id="delete">Delete</button>
    <button id="completed">Completed</button>
    `;

    taskList.appendChild(resultItem)
    document.getElementById("text-input").value = ""
    document.getElementById("text-disc").value = ""
    document.getElementById("edit").addEventListener("click",(e) => {
        const taskItems = e.target.parentElement
        // console.log(taskItems)
        const taskItem = taskItems.querySelector("h2").innerText
        const taskDesc = taskItems.querySelector("p").innerText
        // console.log(taskItem)
        // console.log(taskDesc);
        

        document.getElementById("text-input").value = taskItem
        document.getElementById("text-disc").value = taskDesc
        taskItems.remove()
    })
    const deleteItem = document.getElementById("delete").addEventListener("click",(e) =>{
        const divElement = e.target.parentElement
        divElement.remove()

        
    })
    document.getElementById("completed").addEventListener("click", (e) => { const divElement = e.target.parentElement; divElement.style.textDecoration = "line-through"; e.target.disabled = true; });
}

