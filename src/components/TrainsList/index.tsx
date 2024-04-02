import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../../api/api";
import {
  setAllCharacteristics,
  setCharacteristic,
} from "../../store/features/characteristics/characteristicSlice";
import tableStyles from "../../styles/table.module.css";
import { splitTrainsData } from "./helpers";
import styles from "./styles.module.css";

function TrainsList() {
  const [trains, setTrains] = useState<TrainList>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleTrainClick = (trainName: Train["name"]) => {
    dispatch(setCharacteristic(trainName));
  };

  useEffect(() => {
    (async () => {
      const data = await fetchData();
      const { trainList, trainCharacteristics } = splitTrainsData(data);
      dispatch(setAllCharacteristics(trainCharacteristics));
      setTrains(trainList);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Загрузка...</div>;
  }

  return (
    <div className={styles.container}>
      <table className={tableStyles.table}>
        <caption className={tableStyles.caption}>Поезда</caption>
        <thead>
          <tr>
            <th>Название</th>
            <th>Описание</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train, index) => (
            <tr
              className={styles["table-row"]}
              onClick={() => handleTrainClick(train.name)}
              key={index}
            >
              <td>{train.name}</td>
              <td>{train.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainsList;
