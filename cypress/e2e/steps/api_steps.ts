import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let createBody;
let updateBody;

When("I make a POST to create user with body {string}", (body) => {
  createBody = JSON.parse(body);
  cy.request({
    method: "POST",
    url: "https://reqres.in/api/users",
    body: createBody,
  }).as("createUserResponse");
});

Then("user is created successfully", () => {
  cy.log(createBody);
  cy.get("@createUserResponse").then((response) => {
    cy.log(response.body);
    expect(response.status).to.eq(201);
    expect(response.body.name).to.eq(createBody.name);
    expect(response.body.job).to.eq(createBody.job);
  });
});

When("I update user with id {int} with the following body {string}", (id, body) => {
  updateBody = JSON.parse(body);
  cy.request({
    method: "PUT",
    url: `https://reqres.in/api/users/${id}`,
    body: updateBody,
  }).as("updateUserResponse");
});

Then("user is updated successfully", () => {
  cy.get("@updateUserResponse").then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.name).to.eq(updateBody.name);
    expect(response.body.job).to.eq(updateBody.job);
  });
});
