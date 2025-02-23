import express from "express";
import bcrypt from "bcrypt";

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});

const myFucntion = async () => {
  const password = "Red12345";
  const hashedPassword = await bcrypt.hash(password, 8);

  console.log(password);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("red12345", hashedPassword);

  console.log(isMatch);
};
myFucntion();
///Users/adamo/mongodb/bin/mongod.exe --dbpath=/Users/adamo/mongodb-data