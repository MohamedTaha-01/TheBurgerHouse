const router = require("express").Router();

router
  .route("/")
  // get all my orders
  .get((req, res) => {
    res.json({ msg: "Get all my orders" });
  })
  // create a new order
  .post();

router
  .route("/:id")
  // get order
  .get()
  // update order
  .put()
  // delete order
  .delete();

module.exports = router;
