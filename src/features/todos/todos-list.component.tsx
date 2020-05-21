import React from "react";
import { Todo } from "../../shared/models/todo.model";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@material-ui/core";

interface TodosListProps {
  todos: Todo[];
  page: number;
  changePage: any;
}
const TodosList: React.FunctionComponent<TodosListProps> = (
  props: TodosListProps
) => {
  const handleChangePage = () => {};
  const handleChangeRowsPerPage = () => {};
  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="left">Title</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.todos &&
              props.todos.map((todo, index) => (
                <TableRow key={todo?.id}>
                  <TableCell component="th" scope="row">
                    {todo?.id}
                  </TableCell>
                  <TableCell align="left">{todo?.title}</TableCell>
                </TableRow>
              ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[3, { label: "All", value: -1 }]}
                colSpan={3}
                count={9}
                rowsPerPage={3}
                page={1}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter> */}
        </Table>
      </TableContainer>

      <div>
        <ul>
          <li>
            <button
              disabled={props.page === 1}
              onClick={() => props.changePage(1, 3)}
            >
              page 1
            </button>
          </li>
          <li>
            <button
              disabled={props.page === 2}
              onClick={() => props.changePage(2, 3)}
            >
              page 2
            </button>
          </li>
          <li>
            <button
              disabled={props.page === 3}
              onClick={() => props.changePage(3, 3)}
            >
              page 3
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TodosList;
