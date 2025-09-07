const yargs = require("yargs");
const { createUser, showUsers, removeUser } = require("./utils/users");
const chalk = require("chalk");

yargs.scriptName(chalk.bgYellowBright("User Management system"));

yargs.command({
  command: "create",
  aliases: ["c", "cr"],
  describe: "Create new user",
  builder: {
    username: {
      alias: "u",
      describe: "New user username",
      demandOption: true,
      type: "string",
    },
    email: {
      alias: "e",
      describe: "New user username",
      demandOption: true,
      type: "string",
    },
    password: {
      alias: "p",
      describe: "New user username",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ username, email, password }) => {
    createUser({ username, email, password });
  },
});

yargs.command({
  command: "list",
  alias: "l",
  describe: "List all users",
  handler: () => {
    showUsers();
  },
});

yargs.command({
  command: "remove",
  aliases: ["r", "rm"],
  describe: "Remove new user",
  builder: {
    username: {
      alias: "u",
      describe: "Main user username to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: ({ username }) => {
    removeUser(username);
  },
});

yargs.parse();
