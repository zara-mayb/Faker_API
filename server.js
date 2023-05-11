
const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 2000;

const createUser = () => {
  const newUser = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.person.lastName(),
    firstName: faker.person.firstName(),
    _id: faker.database.mongodbObjectId()
  };
  return newUser;
};

const createCompany = () => {
  const newCompany = {
    _id: faker.database.mongodbObjectId(),
    name: faker.company.name(),
    address: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country()
    }
  };
  return newCompany;
};

const newUserObj = createUser();
console.log(newUserObj)
const newCompanyObj = createCompany();
console.log(newCompanyObj)

//returns a new user
app.get("/api/users/new", (req, res) => {
  res.json(newUserObj);
});
//returns a new company
app.get("/api/companies/new", (req, res) => {
  res.json(newCompanyObj);
});
//returns a new user and a new company
app.get("/api/user/company", (req, res) => {
  res.json({
    user: newUserObj,
    company: newCompanyObj
  });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
