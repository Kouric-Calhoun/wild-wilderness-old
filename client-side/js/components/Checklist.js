export default function Checklist() {
  return `
     <body class="checklist__todo_section">
    <header>
      <h1 class="checklist__todo">Survivor Gear CheckList</h1>
    </header>
    <form class="checklist">
      <input type="text" class="todo-input" />
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-square"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    <div class="todo-container">
      <ul class="todo-list"></ul>
    </div>
  </body>
    `;
}
