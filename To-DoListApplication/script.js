document.addEventListener('DOMContentLoaded', () => {

    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const li = document.createElement('li');
        
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        li.appendChild(taskSpan);
        li.appendChild(deleteBtn);
        
        taskList.appendChild(li);

        taskInput.value = '';
    }

    function deleteTask(event) {
        if (event.target.classList.contains('delete-btn')) {
            const li = event.target.parentElement;
            taskList.removeChild(li);
        }
    }

});