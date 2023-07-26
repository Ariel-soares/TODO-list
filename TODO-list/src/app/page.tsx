import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import "./globals.css";
const Page = () => {
    return (
      <main>

        
          <div id="lista">
            <p>Today Schedule</p>
          <Todos />
          </div>
          <div id = "adicionar">
            <p>Create task</p>
          <AddTodo />
          </div>

      </main>
    );
};

export default Page;
