import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../api/api";
import { setAllCharacteristics, setCharacteristic } from "../../store/characteristics/characteristicSlice";
import { createUniqueKey } from "../../utils/helpers";
import { splitTrainsData } from "./helpers";

function TrainsList() {
  const [trains, setTrains] = useState<TrainList>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleTrainClick = (trainName: Train['name']) => {
    dispatch(setCharacteristic(trainName));
  };

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      const { trainList, trainCharacteristics } = splitTrainsData(data);
      dispatch(setAllCharacteristics(trainCharacteristics));
      setTrains(trainList);
      setLoading(false);
      console.log(data);
    })();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <table>
      <caption>Поезда</caption>
      <thead>
        <tr>
          <th>Название</th>
          <th>Описание</th>
        </tr>
      </thead>
      <tbody>
        {trains &&
          trains.map((train) => (
            <tr onClick={() => handleTrainClick(train.name)} key={createUniqueKey(train.name)}>
              <td>{train.name}</td>
              <td>{train.description}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TrainsList;
