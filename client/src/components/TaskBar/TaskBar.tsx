import React, { ReactElement, useEffect, useState, FC } from 'react';
import './TaskBar.css';
import useStorage from '../../hooks/storage.hook';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

const TaskBar:FC = () => {
  const storedTasks = useStorage('tasks', []);
  const [task, setTask] = useState<string>('');
  const [taskArray, setTaskArray] = useState<string[]>([]);
  const [taskStack, setTaskStack] = useState<ReactElement[]>([]);

  useEffect(() => {
    if (storedTasks.item) {
      setTaskArray(storedTasks.item);
    }
  }, [storedTasks.item]);

  const deleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.id);

    const arr: string[] = [
      ...taskArray.slice(0, parseInt(event.currentTarget.id)),
      ...taskArray.slice(parseInt(event.currentTarget.id) + 1),
    ];
    storedTasks.deleteStorage();
    storedTasks.createStorage(arr);
  };

  useEffect(() => {
    const Tasks: ReactElement[] = taskArray.map((currentValue, index) => {
      return (<TaskList currentValue={currentValue} index={index} deleteHandler={deleteHandler} key={index} />
      );
    });
    setTaskStack(Tasks);
  }, [taskArray]);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };
  const pressHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const arr: string[] = taskArray.slice();
    arr.push(task);
    storedTasks.createStorage(arr);
    setTask('');
  };

  const pressKeyHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && task) {
      const arr: string[] = taskArray.slice();
      arr.push(task);
      storedTasks.deleteStorage();
      storedTasks.createStorage(arr);
      setTask('');
    }
  };

  return (
    <div className='tasksContainer'>
      <div className='tasksBar'>
      <TaskInput changeHandler={changeHandler} pressHandler={pressHandler} pressKeyHandler={pressKeyHandler} task={task} />
      {taskStack}
      </div>
    </div>
  );
};

export default TaskBar;
