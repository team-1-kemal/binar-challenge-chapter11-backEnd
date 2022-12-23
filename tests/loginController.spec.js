const request = require("supertest");
const app = require("../app-test");
const { expect, describe, it } = require("@jest/globals");

describe("login", () => {
  it("login succesfull, return token", async () => {
    const email = "userb@mail.com";
    const password = "passwordb";
    const req = {
      email,
      password,
    };
    const response = await request(app)
      .post("/auth/login")
      .send(req)
      .set("Accept", "application/json");

    expect(response.status).toEqual(200);
  });

  it("tests unregistered user", async () => {
    const email = "ga ada";

    const req = {
      email,
    };
    const response = await request(app)
      .post("/auth/login")
      .send(req)
      .set("Accept", "application/json");
    expect(response.status).toEqual(404);
    expect(response.body.message).toBe("email not found");
  });

  it("tests user input wrong password", async () => {
    const email = "usera@mail.com";
    const password = "salahpass";
    const req = {
      email,
      password,
    };
    const response = await request(app)
      .post("/auth/login")
      .send(req)
      .set("Accept", "application/json");

    expect(response.status).toEqual(400);
    expect(response.body.message).toBe("wrong password");
  });
});
