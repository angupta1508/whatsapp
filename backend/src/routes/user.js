const express = require("express");
const { Login, Register, ValidUser } = require("../controller/LoginController");
const validate = require("../middleware/validation-middleware");
const { loginSchema, registerSchema } = require("../validation/LoginController-Validation");
const router = express.Router();


router.post("/login", validate(loginSchema), Login);
router.post("/register",validate(registerSchema), Register)
router.get("/valid-user", ValidUser)
module.exports = router;