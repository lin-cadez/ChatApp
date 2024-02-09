import express from "express";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
    const start = Date.now();
  res.json({
    message: start,
    error: false
  });

});

app.listen(5000, () => {
  console.log("server started on port 5000");
});

export default app;
