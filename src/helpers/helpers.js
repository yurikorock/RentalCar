const updateAddress = (addressInner, type) => {
  const parts = addressInner.split(",").map((item) => item.trim());
  const city = parts[1];
  const country = parts[2];
  if (type === "second") {
    return `${city}, ${country}`;
  }
  return `${city}  |  ${country}`;
};
export default updateAddress;