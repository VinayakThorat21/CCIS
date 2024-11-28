// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');

    taskItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Toggle completed status
    taskItem.querySelector('.task-text').addEventListener('click', function() {
        taskItem.classList.toggle('completed');
    });

    taskList.appendChild(taskItem);
    taskInput.value = ''; // Clear the input field
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
