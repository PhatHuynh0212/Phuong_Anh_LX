export const convertPrice = (price) => {
  try {
    const result = price?.toLocaleString().replaceAll(",", ".");
    return `${result} ₫`;
  } catch (err) {
    console.log(err);
    return null;
  }
};
