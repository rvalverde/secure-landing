const getUser = async () => {
  const url = "https://randomuser.me/api";
  const api = await fetch(url);
  const json = await api.json();
  const user = json.results[0];

  return user;
};

export default getUser;
