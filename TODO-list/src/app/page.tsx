import AddTodo from "@/components/add-todo";
import {Todos} from "@/components/todos";
import "./globals.css";
const Page = () => {
    return (
      <main>
          <AddTodo />
          <Todos />
      </main>
    );
};

export default Page;