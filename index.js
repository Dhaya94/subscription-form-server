import axios from "axios";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/user", (req, res) => {
  res.send("user details page");
});

app.post("/user", async (req, res) => {
  const body = req.body;
  console.log(body);
  const postUrl = "https://ch-common-functions.azurewebsites.net/api/devtest";
  try {
    await axios.post(postUrl, body, {
      params: {
        code: `Ewg6_uNwa0DNMhi4OtY5RdyN2EwK5NRPX34QXoGpZZM1AzFusxP7gg==`,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    res
      .status(200)
      .json({ success: true, message: "form submitted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
