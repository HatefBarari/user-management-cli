🖥️ User Management CLI

A simple Command Line Interface (CLI) application built with Node.js to manage users.
It allows you to create, list, and remove users directly from the terminal.

✨ Features

Create new users with username, email, and password

List all registered users

Remove users by username

Supports command aliases for faster usage

🚀 Getting Started
Prerequisites

Node.js installed on your system

npm (comes with Node.js)

Installation

Clone the repository

git clone https://github.com/HatefBarari/user-management-cli.git
cd user-management-cli


Install dependencies

npm install

Run the CLI
node server.js

📌 Available Commands
➕ Create a new user
node server.js create --username="john" --email="john@example.com" --password="1234"


Aliases:

node server.js c -u "john" -e "john@example.com" -p "1234"

📋 List all users
node server.js list


Alias:

node server.js l

❌ Remove a user
node server.js remove --username="john"


Aliases:

node server.js r -u "john"
node server.js rm -u "john"

🛠 Tech Stack

Node.js

yargs

chalk

📌 Project Status

This is a simple CLI tool for user management.
More commands and features may be added in the future.
