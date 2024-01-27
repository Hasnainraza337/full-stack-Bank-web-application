const express = require("express");
const adminController = require("../controllers/admin-controllers");
const router = express.Router();
const authMiddleware = require("../middlewares/userMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");

router.get("/users", authMiddleware, adminMiddleware, adminController.getAllUsers);
router.get("/users/:id", authMiddleware, adminMiddleware, adminController.getOneUser);
router.delete("/users/delete/:id", authMiddleware, adminMiddleware, adminController.deleteUser);
router.patch("/users/update/:id", authMiddleware, adminMiddleware, adminController.updateUser);
router.get("/contacts", authMiddleware, adminMiddleware, adminController.getAllContacts);
router.delete("/contacts/delete/:id", authMiddleware, adminMiddleware, adminController.deleteContact);

module.exports = router;