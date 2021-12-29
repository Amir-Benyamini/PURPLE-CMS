const api = require("../servises/api");
const store = require("../stores/UserStore");

const loadUser = async () => {
  const response = await api.fetchUser();
  const user = await response.json();
  store.userStore.setUser(user);
};

const updateUser = async (id, update, files) => {
  if (files?.length > 0) api.updateUserImage(id, files[0]);
  const response = await api.updateUser(id, update, files);
  const user = await response.json();
  store.userStore.setUser(user);
};

module.exports = {
  loadUser,
  updateUser,
};
