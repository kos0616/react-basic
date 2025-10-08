import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Todo from "./Todo";
import Form from "./Form";
import FilterButton from "./FilterButton";

type Task = { id: string; name: string; completed?: boolean };

const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

function App(props: { tasks?: Array<Task> }) {
  const [tasks, setTasks] = useState<Array<Task>>(props.tasks || DATA);

  const [filter, setFilter] = useState<keyof typeof FILTER_MAP>("All");

  const listHeadingRef = useRef<HTMLHeadingElement>(null);

  const FILTER_MAP = {
    All: () => true,
    Active: (task: Task) => !task.completed,
    Completed: (task: Task) => task.completed,
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP) as Array<
    keyof typeof FILTER_MAP
  >;

  function addTask(name: string) {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false };
    setTasks([...tasks, newTask]);
  }

  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const headingText = `${tasks.length} ${tasksNoun} remaining`;

  function toggleTaskCompleted(id: string) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id: string) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id: string, newName: string) {
    const editedTaskList = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // Copy the task and update its name
        return { ...task, name: newName };
      }
      // Return the original task if it's not the edited task
      return task;
    });
    setTasks(editedTaskList);
  }

  function usePrevious(value: number) {
    const ref = useRef(0);

    useEffect(() => {
      ref.current = value;
    });

    return ref.current;
  }

  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length < prevTaskLength) {
      listHeadingRef.current?.focus();
    }
  }, [tasks.length, prevTaskLength]);

  const taskList = tasks
    ?.filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton
      key={name}
      name={name}
      isPressed={name === filter}
      onClick={() => setFilter(name)}
    />
  ));

  return (
    <>
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form onAdd={addTask}></Form>
        <div className="filters btn-group stack-exception">{filterList}</div>
        <h2 ref={listHeadingRef} tabIndex={-1} id="list-heading">
          {headingText} {prevTaskLength}
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    </>
  );
}

export default App;
