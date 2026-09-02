import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";

function App() {
  return <center
    class='todo-container'>
    <AppName />
    <AddTodo />
    <TodoItem1 />
    <div class="container text-center">

      <div class="row">
        <div class="col-4">Go to College</div>
        <div class="col-4">04/10/2023</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger">Delete</button>
        </div>
      </div>

    </div>
  </center>
}

export default App
