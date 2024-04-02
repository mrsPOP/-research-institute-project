const url =
  "https://gist.githubusercontent.com/allbel/ae2f8ead09baf7bb66d281e3a6050261/raw/4c898f101913cd7918ab1dbfce008fa12c6d4838/mock.json";

export const fetchData = async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return await response.json();
    }
    throw new Error(`HTTP ошибка! Статус: ${response.status}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Произошла ошибка:", error);
      return null;
    }
  }
};
