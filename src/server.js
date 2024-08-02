import express from "express";
import bodyParser from "body-parser"; // Chỉnh sửa đúng tên module
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
require('dotenv').config();

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

let port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Backend Nodejs is running on port: " + port);
});
