const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept, Authorization"
    );
    next();
  });

  var router = require("express").Router();

  router.post(
    "/register",
    // [verifySignUp.checkDuplicatePhoneOrEmailUser],
    controller.signup
  );

  router.post("/signin", controller.signin);

  app.use("/api/v1", router);
};
