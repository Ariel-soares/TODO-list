import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import "./globals.css";
const Page = () => {
    return (
      <main>

        
          <div id="lista">
            <h1>Today schedule</h1>
          <Todos />
          </div>
          <div id = "adicionar">
            <h1>Create task</h1>
          <AddTodo />
          </div>
          <div id = "editar">
            <h1>Edit</h1>
          </div>

      </main>
    );
};

export default Page;
