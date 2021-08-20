export default function Checklist() {
  return `
     <body class=".header__profile_checklist">
    <header class="checklist__todo">
      <h1 class="checklist__todo"> To Do List</h1>
    </header>
    <div class="pull-left" style="margin-right:5px">
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
    </div>
    <div class="todo-container">
      <ul class="todo-list"></ul>
    </div>
  </body>
    `;
}
