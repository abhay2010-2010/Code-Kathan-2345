export const useRandomNumber = (
  min: number | undefined = 0,
  max: number | undefined = 50,
) => {
  return Math.ceil(Math.random() * max) - min;
};
