import Task from "./Task";

const TaskList = ({ tasks, onDelete, onToggle ,completedTasks}) => {
    console.log(tasks)
  return (
    <div>
      {tasks.map((task) => <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      )}
    </div>
  );
};

export default TaskList;