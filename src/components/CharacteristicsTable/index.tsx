import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "react-hook-form";
import styles from "./styles.module.css";
import clsx from "clsx";
import { useEffect } from "react";

const CharacteristicsTable = () => {
  const characteristics = useSelector(
    (state: RootState) => state.characteristic.currentCharacteristic
  ) as TrainCharacteristic;
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm({ mode: "onChange" });
  const trainName = Object.keys(characteristics)[0]!;

  const handleSendData = () => {
    const allFormValues = getValues();
    console.log("Send data", allFormValues);
  };

  useEffect(() => {
    if (characteristics && trainName) {
      reset();
    }
  }, [characteristics]);

  return (
    <form onSubmit={handleSubmit(handleSendData)}>
      <table>
        <caption>Характеристики</caption>
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
                    {...register(`engineAmperage${index}`, { required: true })}
                    defaultValue={characteristic.engineAmperage}
                    className={clsx(styles.input, {
                      [styles["input-invalid"]]:
                        errors[`engineAmperage${index}`],
                    })}
                  ></input>
                </td>
                <td>
                  <input
                    {...register(`force${index}`, { required: true })}
                    defaultValue={characteristic.force}
                    className={clsx(styles.input, {
                      [styles["input-invalid"]]: errors[`force${index}`],
                    })}
                  ></input>
                </td>
                <td>
                  <input
                    {...register(`speed${index}`, { required: true })}
                    defaultValue={characteristic.speed}
                    className={clsx(styles.input, {
                      [styles["input-invalid"]]: errors[`speed${index}`],
                    })}
                  ></input>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <button type="submit">Отправить данные</button>
    </form>
  );
};

export default CharacteristicsTable;
