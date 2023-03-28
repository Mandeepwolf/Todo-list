let inputTask = document.getElementById("input-task");
let taskList = document.getElementById("task-list");

// function addTask() {
//     let task = inputTask.value;
//     if (task !== "") {
//         let newTask = document.createElement("li");
//         newTask.classList.add("lic");
//         let taskText = document.createTextNode(task);
//         newTask.appendChild(taskText);
//         let removeButton = document.createElement("button");
//         removeButton.innerText = "Remove";
//         removeButton.classList.add("remove-task");
//         removeButton.addEventListener("click", removeTask);
//         newTask.appendChild(removeButton);
//         taskList.appendChild(newTask);
//         inputTask.value = "";
//     }
// }

function addTask() {
    let task = inputTask.value;
    if (task !== "") {
        let newTask = document.createElement("li");
        newTask.classList.add("lic");
        let taskText = document.createTextNode(task);
        newTask.appendChild(taskText);
        let removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.classList.add("remove-task");
        removeButton.addEventListener("click", removeTask);
        newTask.appendChild(removeButton);
        taskList.appendChild(newTask);
        inputTask.value = "";
    }
}

// Add event listener to input element to listen for Enter key press
inputTask.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addTask();
    }
});

function removeTask(event) {
    event.target.parentNode.remove();
}



const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
    if (checkbox.checked) {
        source1.src = "Beautiful scene in anime [FHD].mp4";
        source2.src = "No copyright Lofi animation Background loop visual loop.mp4";
      } 
      else {
        source1.src = "No copyright Lofi animation Background loop visual loop.mp4";
        source2.src = "Beautiful scene in anime [FHD].mp4";
      }
      myVideo.load();
      myVideo.play();
  const container = document.querySelector('.c1');
  const text=document.querySelector('.text2');
  const list=document.querySelector('.lic');
  container.classList.toggle('dark');
  
  text.classList.toggle('text11');
 
  list.classList.toggle('lic1');
  
})