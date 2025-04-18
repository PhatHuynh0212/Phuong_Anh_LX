export const convertPrice = (price) => {
  try {
    const result = price?.toLocaleString().replaceAll(",", ".");
    return `${result} ₫`;
  } catch (err) {
    console.log(err);
    return null;
  }
};

// Convert string to kebab-case, không dấu
export const toParamFormat = (str) =>
  str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // loại bỏ dấu
    .toLowerCase()
    .replace(/\s+/g, "-");
