const isName = (name) => {
  if (name === ("" || null)) return "Please gives name!";

  return null;
};

const isEmail = (email) => {
  const checkEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  if (!checkEmail) return "Email is not valid!";

  return null;
};

const isPassword = (password) => {
  const checkPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!checkPassword) return "Please should have number letter symbol!";

  return null;
};

export { isName, isEmail, isPassword };
