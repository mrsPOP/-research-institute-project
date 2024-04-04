import clsx from "clsx";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styles from "./styles.module.css";
import tableStyles from "../../styles/table.module.css";

type FormValues = {
  characteristic: Characteristic[];
};

const CharacteristicsTable = () => {
  const characteristics = useSelector(
    (state: RootState) => state.characteristic.currentCharacteristic
  ) as TrainCharacteristic;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({ mode: "onChange" });
  const trainName = Object.keys(characteristics)[0]!;
  useEffect(() => {
    if (characteristics && trainName) {
      reset();
    }
  }, [characteristics]);

  return (
    <form
      noValidate={true}
      className={styles.form}
      onSubmit={handleSubmit((data) => {
        const speedList = data.characteristic
          .map((ch) => ch.speed)
          .sort((a, b) => a - b);
        console.log(speedList);
      })}
    >
      <table className={tableStyles.table}>
        <caption className={tableStyles.caption}>
          Характеристики <br />
          {trainName}
        </caption>
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
            characteristics[trainName].map((characteristic, index: number) => (
              <tr key={index}>
                <td>
                  <input
                    {...register(`characteristic.${index}.engineAmperage`, {
                      required: true,
                      pattern: /^[0-9]+d*$/,
                    })}
                    type="number"
                    defaultValue={characteristic.engineAmperage}
                    className={clsx(styles.input, {
                      [styles["input-invalid"]]:
                        errors.characteristic?.[index]?.engineAmperage,
                    })}
                  ></input>
                </td>
                <td>
                  <input
                    {...register(`characteristic.${index}.force`, {
                      required: true,
                      pattern: /^[0-9]+(?:\.[0-9]+)?$/,
                    })}
                    type="number"
                    defaultValue={characteristic.force}
                    className={clsx(styles.input, {
                      [styles["input-invalid"]]:
                        errors.characteristic?.[index]?.force,
                    })}
                  ></input>
                </td>
                <td>
                  <input
                    {...register(`characteristic.${index}.speed`, {
                      required: true,
                      pattern: /^[0-9]+d*$/,
                    })}
                    type="number"
                    defaultValue={characteristic.speed}
                    className={clsx(styles.input, {
                      [styles["input-invalid"]]:
                        errors.characteristic?.[index]?.speed,
                    })}
                  ></input>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button
        className={clsx(styles.button)}
        disabled={!!errors.characteristic}
        type="submit"
      >
        Отправить данные
      </button>
    </form>
  );
};

export default CharacteristicsTable;
