import {useRecoilValue} from "recoil";
import {filteredTodoListState} from "../state/state";
import TodoItemCreator from "./TodoItemCreator";
import TodoItem from "./TodoItem";
import TodoListFilters from "./TodoListFilters";
import TodoListStats from "./TodoListStats";

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <TodoListStats/>
            <TodoListFilters/>
            <TodoItemCreator/>

            {todoList.map((todoItem) => (
                <TodoItem item={todoItem} key={todoItem.id}/>
            ))}
        </>
    );
}

export default TodoList;