export const setUserSession = (user) => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getUserSession = () => {
  return JSON.parse(sessionStorage.getItem("user"));
};

export const removeUserSession = () => {
  sessionStorage.removeItem("user");
};

export const isAuthenticated = () => {
  return !!getUserSession();
};
