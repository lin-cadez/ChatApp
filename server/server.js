import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Hello World");

});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

export default app;
