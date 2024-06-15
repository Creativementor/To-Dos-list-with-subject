const tasks = [];

  document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const taskName = document.getElementById('taskName').value;
    const dueDate = document.getElementById('dueDate').value;
    const category = document.getElementById('category').value;
    
    tasks.push({ taskName, dueDate, category });
    displayTasks(tasks);
  });

  document.getElementById('filterCategory').addEventListener('change', function() {
    const selectedCategory = this.value;
    const filteredTasks = selectedCategory === 'all' ? tasks : tasks.filter(task => task.category === selectedCategory);
    displayTasks(filteredTasks);
  });

  function displayTasks(tasks) {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = `${task.taskName} (Due: ${task.dueDate}) - Category: ${task.category}`;
      taskList.appendChild(li);
    });
  }