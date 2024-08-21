import express from "express";
import { v4 as uuidv4 } from "uuid";
import morgan from "morgan";
import * as dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

const app = express();

const port = process.env.PORT || 5100;

let jobs = [
  { id: 1, company: "facebook", position: "front-end" },
  { id: 2, company: "google", position: "back-end" },
];

// Utiliser morgan pour le logging en développement
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Middleware pour parser les requêtes en JSON
app.use(express.json());

// Exemple de fetch externe (pas nécessaire pour le serveur)
fetch("https://www.course-api.com/react-useReducer-cart-project")
  .then((res) => res.json())
  .then((data) =>
    console.log("%cbackendserver.js:19 data", "color: #007acc;", data)
  );

// Route d'accueil
app.get("/", (req, res) => {
  res.send("hello world");
});

// GET /api/v1/jobs - Afficher la liste des jobs
app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});

app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "Please provide company and position" });
  }
  const id_jobs = uuidv4();
  const job = { id: id_jobs, company, position };
  jobs.push(job);
  res.status(200).json({ jobs });
});

app.get(`/api/v1/jobs/:positionJobs`, (req, res) => {
  const { positionJobs } = req.params;
  console.log("req.params", req.params, positionJobs);
  const job = jobs.find(({ position }) => position === positionJobs);
  if (!job) {
    return res
      .status(404)
      .json({ msg: `no job with this position ${positionJobs}` });
  }
  res.status(200).json({ job });
});

app.patch("/api/v1/jobs/:positionJobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res
      .status(404)
      .json({ msg: `no job with this position ${positionJobs}` });
  }
  const { positionJobs } = req.params;
  const job = jobs.find(({ position }) => position === positionJobs);
  if (!job) {
    return res.status(404).json({ msg: `no job with this position` });
  }
  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
});

app.delete("/api/v1/jobs/:positionJobs", (req, res) => {
  const { positionJobs } = req.params;
  console.log(' jobs', jobs);
 const job = jobs.find(({ position }) => position === positionJobs);

  if (!job) {
    return res.status(404).json({ msg: `no job with this position` });
  }
  console.log("positionJobs",positionJobs);
   jobs = jobs.find(({ position }) => position !== positionJobs);
  res.status(200).json({ msg: "job supp", jobs });
});

app.post("/", (req, res) => {
  //   console.log(req);
  res.json({ message: "data received", data: req.body });
});

app.listen(port, () => {
  console.log(`server running on PORT ${port} ...`);
});
