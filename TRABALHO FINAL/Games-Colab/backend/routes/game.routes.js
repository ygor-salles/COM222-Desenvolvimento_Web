const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "..", "uploads"),
  filename(req, file = {}, cb) {
    const { originalname } = file;
    const fileExtension = (originalname.match(/\.+[\S]+$/) || [])[0];
    cb(null, `${file.fieldname}__${Date.now()}${fileExtension}`);
  },
});
const upload = multer({ storage });
module.exports = (app) => {
  const game = require("../controllers/game.controller");
  let router = require("express").Router();

  router.post("/", game.create);

  router.get("/most_rated/:type", game.mostRated);

  router.get("/", game.findAll);

  router.get("/:id", game.findOne);

  router.get("/", game.findAll);

  router.put("/:id", game.update);

  router.delete("/:id", game.delete);

  router.post("/upload/:id", upload.single("image"), game.upload);

  app.use("/games", router);
};
