import createUser from "../service/user.service.js";

function createUserHandler(req,res) {
  const user = createUser();

  return res.send(user);
}