export interface NavbarProps {
  conf: Config;
}

export interface Config {
  item: {
    time: number;
    restTime: number;
  };
  createStorage: Function;
  deleteStorage: Function;
}

export interface SettingsProps {
  conf: Config;
}

export interface TaskInputProps {
  changeHandler: Function;
  pressKeyHandler: Function;
  task: string;
  pressHandler: Function;
}

export interface TaskListProps {
  index: number;
  currentValue: string;
  deleteHandler: Function;
}

export interface TimerControlsProps {
  timerOn: boolean;
  toggleTimer: Function;
  workTime: boolean;
  time: number;
  restTime: number;
  changeTimer: Function;
}
export interface ProgressProps {
  percent: number;
  workTime: boolean;
}

export interface SettingsInputProps {
  time: number;
  changeHandler: Function;
  restTime: number;
}

export interface TimerProps {
  totalSeconds: number;
}