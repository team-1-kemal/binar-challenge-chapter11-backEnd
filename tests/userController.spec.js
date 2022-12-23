const request = require("supertest");
const app = require("../app-test");
const { expect, describe, it } = require("@jest/globals");

describe("leaderboard", () => {
  it("returns all user detail with game point and city", async () => {
    const response = await request(app).get("/user/profile");
    expect(response.status).toEqual(200);
  });
});

describe(" user profile", () => {
  it("return user profile ", async () => {
    const req = {
      email: "userb@mail.com",
      password: "passwordb",
    };
    const login = await request(app)
      .post("/auth/login")
      .send(req)
      .set("Accept", "application/json");
    const jwt = login.body.data.token;
    const id = login.body.data.userId;
    const response = await request(app)
      .get(`/user/profile/:${id}`)
      .set("authorization", jwt);

    expect(response.status).toEqual(200);
    expect(response.body.message).toBe("Get data successfully");
  });

  it("edits user profile", async () => {
    const req = {
      email: "userb@mail.com",
      password: "passwordb",
    };
    const login = await request(app)
      .post("/auth/login")
      .send(req)
      .set("Accept", "application/json");

    const jwt = login.body.data.token;
    const id = login.body.data.userId;

    const body = {
      full_name: "updated userb",
      email: " updated email.com",
      city: "updated city",
      dob: "2010-07-22",
      pict: "adaddad",
    };

    const response = await request(app)
      .put(`/user/profile/:${id}`)
      .send(body)
      .set("authorization", jwt);
    expect(response.status).toEqual(200);
    expect(response.body.message).toBe("Update data successfully");
  });
});
