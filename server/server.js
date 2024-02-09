import express from "express";

const app = express();
var today = new Date();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome",
    error: false
  });

});

app.get("/datum", (req, res) => {
  res.json({
    datum: today,
    error: false
  });
});

app.get("/leto", (req, res) => {
  leto = new Date;
  res.json({
    message: "leto: " + leto.getFullYear(),
    error: false
  });

});



app.get("/jakec", (req, res) => {
	res.json({
		message: "Sup lil nigga",
		error: false,
	});
});


app.listen(5000, () => {
  console.log("server started on port 5000");
});

export default app;
