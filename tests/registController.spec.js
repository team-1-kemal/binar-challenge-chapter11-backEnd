const request = require("supertest");
const app = require("../app-test");
const { expect, describe, it } = require("@jest/globals");

describe("register", () => {
  it("register new user", async () => {
    const body = {
      full_name: "userc",
      email: "userc@mail.com",
      password: "passwordc",
      city: "padang",
      dob: "2000-07-22",
    };

    const response = await request(app).post("/auth/signup").send(body);
    expect(response.status).toEqual(200);
  });

  it("return error, register failed email used", async () => {
    const body = {
      full_name: "userc",
      email: "userc@mail.com",
      password: "passwordc",
      city: "padang",
      dob: "2000-07-22",
    };

    const response = await request(app).post("/auth/signup").send(body);
    expect(response.status).toEqual(503);
  });
});
