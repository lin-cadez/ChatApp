import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome",
    error: false
  });

});

app.get("/api/leto", (req,res) => {
  const year = new Date();
  
  res.json({
    
    
    message:"leto: " + year.getFullYear(),
    error: false
  });
});


app.listen(5000, () => {
  console.log("server started on port 5000");
});

export default app;
