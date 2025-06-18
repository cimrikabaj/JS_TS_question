const API_URL = "https://6745efc3512ddbd807fa4072.mockapi.io/id"; 

async function fetchTasks() {
    const response = await fetch(API_URL);
    const tasks = await response.json();
    renderTasks(tasks);
}

async function addTask(task) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });
    return response.json();
}

async function deleteTask(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
    fetchTasks(); 
}

async function toggleTaskCompletion(id, completed) {
    await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ completed }),
    });
    fetchTasks(); 
}

function renderTasks(tasks) {
    const taskList = document.querySelector(".task-list");
    taskList.innerHTML = ""; 

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.className = `task ${task.completed ? "completed" : ""}`;
        taskDiv.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <button onclick="toggleTaskCompletion('${task.id}', ${!task.completed})">
                ${task.completed ? "Undo" : "Complete"}
            </button>
            <button onclick="deleteTask('${task.id}')">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });
}

document.querySelector(".form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const title = document.querySelector(".title").value; 
    const description = document.querySelector(".description").value; 

    await addTask({ title, description, completed: false });

    document.querySelector(".form").reset(); 
    fetchTasks(); 
});

fetchTasks();
