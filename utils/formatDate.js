const formatDate = (value) => {
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return new Date(value).toLocaleDateString("en-GB", options);
};

export default formatDate;
