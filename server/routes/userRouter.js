const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/verify", userController.verifyToken);

module.exports = router;
