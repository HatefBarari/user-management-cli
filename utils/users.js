const fs = require("fs");
const chalk = require("chalk");

const createUser = ({ username, email, password }) => {
  const users = loadUsers();

  const isExistUser = checkDuplicateUser(users, username, email);

  if (!isExistUser) {
    const user = { id: crypto.randomUUID(), username, email, password };

    users.push(user);

    fs.writeFileSync("users.json", JSON.stringify(users));

    console.log(chalk.bgGreen("User created successfully :))"));
  } else {
    console.log(chalk.bgRed("User is exist with this username or email !!"));
  }
};

const showUsers = () => {
  const users = loadUsers();

  //* Way 1
  // console.table(users);

  //* Way 2
  console.log(chalk.yellow("List of users: \n"));

  users.forEach((user) => {
    console.log(`\t ${chalk.green("Username")}: ${user.username}`);
    console.log(`\t ${chalk.green("Email")}: ${user.email}`);
    console.log(chalk.redBright(`---------------------------------`));
  });
};

const removeUser = (username) => {
  const users = loadUsers();
  const isExistUser = checkDuplicateUser(users, username, "");

  if (!isExistUser) {
    console.log(chalk.bgRed("User not found !!"));
  } else {
    const newUsers = users.filter((user) => user.username !== username);
    fs.writeFileSync("users.json", JSON.stringify(newUsers));
    console.log(chalk.bgGreen("User removed successfully :))"));
  }
};

const loadUsers = () => {
  try {
    const usersBuffer = fs.readFileSync("users.json");
    const users = JSON.parse(usersBuffer.toString());

    return users;
  } catch (err) {
    console.log("Err ->", err);
  }
};

const checkDuplicateUser = (users, username, email) => {
  const isExistUser = users.some(
    (user) => user.username === username || user.email === email
  );

  return isExistUser;
};

module.exports = {
  createUser,
  showUsers,
  removeUser,
};
