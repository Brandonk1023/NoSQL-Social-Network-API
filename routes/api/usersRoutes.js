const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/usersController");

router.route("/").get(getAllUsers).post(createUser);

router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

module.exports = router;
