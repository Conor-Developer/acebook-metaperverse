const mongoose = require("mongoose");

require("../mongodb_helper");
const User = require("../../models/user");

describe("User model", () => {
  beforeEach((done) => {
    mongoose.connection.collections.users.drop(() => {
      done();
    });
  });

  it("has an email address", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.email).toEqual("someone@example.com");
  });

  it("has a password", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.password).toEqual("password");
  });

  it("has a username", () => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });
    expect(user.username).toEqual("someone");
  });

  it("can list all users", (done) => {
    User.find((err, users) => {
      expect(err).toBeNull();
      expect(users).toEqual([]);
      done();
    });
  });

  it("can save a user", (done) => {
    const user = new User({
      username: "someone",
      email: "someone@example.com",
      password: "password",
    });

    user.save((err) => {
      if (err) throw err;

      User.find({ email: "someone@example.com" }, (err, users) => {
        expect(err).toBeNull();
        expect(users[0]).toMatchObject({
          email: "someone@example.com",
        });
      });
      done();
    });
  });
});

