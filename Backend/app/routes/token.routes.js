const { authJwt, upload } = require("../middleware");
const controller = require("../controllers/token.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept",
      "Authorization, authorization"
    );
    next();
  });

  var router = require("express").Router();

  router.get("/", controller.findAll);

  router.post("/", controller.create);

  router.get("/:id",  controller.findOne);

  router.put("/:id",  controller.update);

  router.delete("/:id",  controller.delete);

  app.use("/api/v1/tokens", router);
};
