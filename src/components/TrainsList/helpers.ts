export const splitTrainsData = (list: Train[]) => {
  const trainList: TrainList = [];
  const trainCharacteristics: TrainCharacteristic = {};

  list.forEach((train) => {
    trainList.push({ name: train.name, description: train.description });
    trainCharacteristics[train.name] = train.characteristics;
  });

  return { trainList, trainCharacteristics };
};
