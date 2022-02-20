import bcrypt from "bcryptjs";

const users = [
  {
    name: "Krishna",
    email: "krishna@gmail.com",
    password: bcrypt.hashSync("secret", 12),
    isAdmin: true,
  },
  {
    name: "Peter",
    email: "peter@gmail.com",
    password: bcrypt.hashSync("secret", 12),
  },
  {
    name: "Susan",
    email: "susan@gmail.com",
    password: bcrypt.hashSync("secret", 12),
  },
];

export default users;
