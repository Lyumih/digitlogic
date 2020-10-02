export const logout = () => {
  console.log("Logout");

  localStorage.removeItem("username");
  localStorage.removeItem("token");
  return Promise.resolve();
};
