// const request = require("supertest");
// const app = require("../app-test");
// const { expect, describe, it } = require("@jest/globals");

// describe("users game result ", () => {
//   it("get user game history", async () => {
//     const req = {
//       email: "userb@mail.com",
//       password: "passwordb",
//     };
//     const login = await request(app)
//       .post("/auth/login")
//       .send(req)
//       .set("Accept", "application/json");
//     const jwt = login.body.data.token;
//     const id = login.body.data.userId;
//     const gameId = 3;
//     // let point = login.body.data.point;
//     // point = 1000;
//     const gameHistory =
//       {
//         UserId: id,
//         GameId: gameId,
//         gameplay: new Date(),
//         game_title: "rps",
//       },
//     ;

//     const response = await request(app)
//       .put(`/${gameId}/:${id}`)
//       .send(gameHistory)
//       .set("authorization", jwt);
//     // console.log(response);
//     expect(response.status).toEqual(200);
//     expect(response.body.message).toBe("Data has been input!");
//   });
// });
