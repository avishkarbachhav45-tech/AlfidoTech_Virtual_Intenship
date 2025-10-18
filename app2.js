// app.js - simple To-Do List (add/remove/complete)
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('task-form');
  const input = document.getElementById('task-input');
  const list = document.getElementById('task-list');
  const countEl = document.getElementById('count');
  const clearCompletedBtn = document.getElementById('clear-completed');

  // helper: update task count
  function updateCount() {
    const total = list.children.length;
    countEl.textContent = `${total} ${total === 1 ? 'task' : 'tasks'}`;
  }

  // create a task list item DOM
  function createTaskItem(text) {
    const li = document.createElement('li');
    li.className = 'task-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('aria-label', 'Mark task complete');

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = text;

    const delBtn = document.createElement('button');
    delBtn.className = 'delete-btn';
    delBtn.textContent = 'Delete';
    delBtn.setAttribute('aria-label', 'Delete task');

    // events
    checkbox.addEventListener('change', () => {
      span.classList.toggle('completed', checkbox.checked);
    });

    delBtn.addEventListener('click', () => {
      li.remove();
      updateCount();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);
    return li;
  }

  // add task handler
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return; // ignore empty
    const item = createTaskItem(text);
    list.prepend(item); // newest on top
    input.value = '';
    input.focus();
    updateCount();
  });

  // clear completed tasks
  clearCompletedBtn.addEventListener('click', () => {
    const completed = list.querySelectorAll('.task-text.completed');
    completed.forEach(span => span.closest('.task-item').remove());
    updateCount();
  });

  // optional: allow Enter in input (already works because of form)
  updateCount();
});
