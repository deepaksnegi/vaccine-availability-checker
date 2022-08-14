export const createUser = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
