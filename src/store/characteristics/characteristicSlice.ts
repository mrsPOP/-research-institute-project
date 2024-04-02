import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CharacteristicState = {
  currentCharacteristic: TrainCharacteristic | null | {};
  allCharacteristics: TrainCharacteristic;
};

const initialState: CharacteristicState = {
  currentCharacteristic: null,
  allCharacteristics: {},
};

export const characteristicSlice = createSlice({
  name: 'characteristic',
  initialState,
  reducers: {
    setCharacteristic: (state, action: PayloadAction<Train['name']>) => {
      const characteristics = state.allCharacteristics[action.payload];
      state.currentCharacteristic = characteristics
        ? { [action.payload]: characteristics }
        : null;
    },
    setAllCharacteristics: (
      state,
      action: PayloadAction<TrainCharacteristic>
    ) => {
      state.allCharacteristics = action.payload;
    },
  },
});

export const { setCharacteristic, setAllCharacteristics } = characteristicSlice.actions;

export default characteristicSlice.reducer;
