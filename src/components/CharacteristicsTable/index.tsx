import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { createUniqueKey } from "../../utils/helpers";

const CharacteristicsTable = () => {
  const characteristics = useSelector(
    (state: RootState) => state.characteristic.currentCharacteristic
  ) as TrainCharacteristic;
  console.log(characteristics);
  const trainName = Object.keys(characteristics)[0]!;
  return (
    <table>
      <caption>Поезда</caption>
      <thead>
        <tr>
          <th>Ток двигателя</th>
          <th>Сила тяги</th>
          <th>Скорость</th>
        </tr>
      </thead>
      <tbody>
        {characteristics !== null &&
          trainName !== undefined &&
          characteristics[trainName].map((characteristic: Characteristic) => (
            <tr key={createUniqueKey(characteristic.engineAmperage)}>
              <td>{characteristic.engineAmperage}</td>
              <td>{characteristic.force}</td>
              <td>{characteristic.speed}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default CharacteristicsTable;
