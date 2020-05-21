import { Todo } from "../models/todo.model";

export class TodosService {
  static todosGet(page: number, pageSize: number): Promise<Todo[]> {
    return new Promise((resolve) => {
      resolve(
        [
          { id: 1, title: "first" },
          { id: 2, title: "second" },
          { id: 3, title: "third" },
          { id: 4, title: "qwe" },
          { id: 5, title: "asd" },
          { id: 6, title: "zxc" },
          { id: 7, title: "777" },
          { id: 8, title: "888" },
          { id: 9, title: "999" },
        ].slice(page * pageSize - pageSize, page * pageSize)
      );
    });
  }

  static todosDelete(id: number) {}
}
