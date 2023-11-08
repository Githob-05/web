import createUserHandler from "./controller/user.controller.js";
import fs from "fs";

function routes(app) {
  app.get("/healthcheck",(req,res) => res.sendStatus(200));
  app.get("/postman_collection", (req,res) => {
    const data = JSON.parse(fs.readFileSync("./postman_collection.json","utf8"));
    res.header("Content-Tyep","application/json");
    res.send(data);
  });
}

//사용자 등록
app.post("/api/users", createUserHandler)


export default routes;