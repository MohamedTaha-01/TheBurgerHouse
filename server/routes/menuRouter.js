const router = require("express").Router();
const menu = require("../public/menu.json");

router.route("/").get((req, res) => {
  res.json(menu);
});

module.exports = router;
