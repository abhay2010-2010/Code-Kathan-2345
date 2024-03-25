const jsonServer = require("json-server");

const server = jsonServer.create();
const auth = require("json-server-auth");
const cors = require("cors");
const fs = require('fs')
const path = require('path')
const filePath = path.join('db.json')
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db)
const middlewares = jsonServer.defaults();
server.db = router.db;

server.use(middlewares);


server.use(cors());
server.use(auth);
server.use(middlewares);
server.use(router);


const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`JSON Server with authentication is running on port ${port}`);
});


module.exports = server;