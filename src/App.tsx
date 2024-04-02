import { useSelector } from "react-redux";
import styles from './App.module.css';
import CharacteristicsTable from "./components/CharacteristicsTable";
import TrainsList from "./components/TrainsList";
import { RootState } from "./store";

function App() {
  const characteristics = useSelector(
    (state: RootState) => state.characteristic.currentCharacteristic
  ) as TrainCharacteristic;
  return (
    <main className={styles.main}>
      <TrainsList/>
      {characteristics && <CharacteristicsTable/>}
    </main>
  );
}

export default App;
