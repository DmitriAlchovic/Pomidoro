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
