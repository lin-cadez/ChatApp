import express from "express";
import { readDB } from "./functions/readDb";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
	res.json({
		message: "Welcome",
		error: false,
	});
});

app.get("/datum", (req, res) => {
	var today = new Date();
	res.json({
		datum: today,
		error: false,
	});
});

app.get("/leto", (req, res) => {
	leto = new Date();
	res.json({
		message: "leto: " + leto.getFullYear(),
		error: false,
	});
});

app.get("/jakec", (req, res) => {
	res.json({
		message: "Sup lil nigga",
		error: false,
	});
});

app.get("/cas", (req, res) => {
    const start = Data.now();
    res.json({
    message: "ura je "+ start,
    error: false,
   })
  });


get.

app.listen(5000, () => {
	console.log("server started on port 5000");
});

export default app;
