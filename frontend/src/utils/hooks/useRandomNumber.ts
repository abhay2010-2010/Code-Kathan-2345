export const useRandomNumber = (
  min: number | undefined = 0,
  max: number | undefined = 50,
) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
