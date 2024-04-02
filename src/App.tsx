import "./App.css";
import TrainsList from "./components/TrainsList";
import CharacteristicsTable from "./components/CharacteristicsTable";
import { useSelector } from "react-redux";
import { RootState } from "./store";

function App() {
  const characteristics = useSelector(
    (state: RootState) => state.characteristic.currentCharacteristic
  ) as TrainCharacteristic;
  return (
    <>
      <TrainsList />
      {characteristics && <CharacteristicsTable/>}
    </>
  );
}

export default App;
