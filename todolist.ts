// ✅ Interface for a single todo item
interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

// ✅ Type alias for a list of todo items
type TodoList = TodoItem[];

// ✅ Function to create a single todo
function createTodo(task: string): TodoItem {
  return {
    id: Date.now(),
    task,
    completed: false,
  };
}

// ✅ Function to add a todo to the list
function addTodo(todoList: TodoList, task: string): TodoList {
  const newTodo = createTodo(task);
  return [...todoList, newTodo];
}

// ✅ Function to toggle the completed status
function toggleTodo(todoList: TodoList, id: number): TodoList {
  return todoList.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}

// ✅ Function to delete a todo
function deleteTodo(todoList: TodoList, id: number): TodoList {
  return todoList.filter(todo => todo.id !== id);
}

// ✅ Function to display the todo list
function listTodos(todoList: TodoList): void {
  console.log("\n📝 Todo List:");
  todoList.forEach(todo => {
    console.log(`[${todo.completed ? "✓" : " "}] ${todo.id} - ${todo.task}`);
  });
}

// ✅ Demo execution
let myTodos: TodoList = [];

myTodos = addTodo(myTodos, "Learn TypeScript");
myTodos = addTodo(myTodos, "Build a Todo App");
myTodos = addTodo(myTodos, "Crack Ola Interview");

listTodos(myTodos);

myTodos = toggleTodo(myTodos, myTodos[0].id);
myTodos = deleteTodo(myTodos, myTodos[1].id);

listTodos(myTodos);
