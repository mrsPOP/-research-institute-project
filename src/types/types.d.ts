type Characteristic = {
  speed: number;
  force: number;
  engineAmperage: number;
};

type Train = {
  name: string;
  description: string;
  characteristics: Characteristic[];
};

type TrainList = Omit<Train, "characteristics">[];
type TrainCharacteristic = Record<Train["name"], Characteristic[]>;
