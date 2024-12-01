const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
let path = require("path");
const User = require("./Models/user");
const Club = require("./Models/clubs");
const Events = require("./Models/events");
const Sports = require("./Models/sports");

app.set("view engine", "ejs");
const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

const viewsPath = path.join(__dirname, "../templates/views");
app.set("views", viewsPath);

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.render("signup", { error: null });
});

app.post("/signup", async (req, res) => {
  const { name, mobile, batch, email, enrollment, password, confirmPassword } =
    req.body;

  if (
    !name ||
    !mobile ||
    !batch ||
    !email ||
    !enrollment ||
    !password ||
    !confirmPassword
  ) {
    return res.render("signup", { error: "Please fill all the fields" });
  }

  if (password !== confirmPassword) {
    return res.render("signup", { error: "Passwords do not match" });
  }

  try {
    const userExists = await User.findOne({ email: email });

    if (userExists) {
      return res.render("signup", { error: "User already exists" });
    }

    const user = new User({ name, mobile, batch, email, enrollment, password });
    await user.save();

    console.log("User registered successfully");
    return res.redirect("/login");
  } catch (err) {
    console.error("Error registering user:", err);
    return res.render("signup", {
      error: "Something went wrong. Please try again.",
    });
  }
});

app.get("/signup", (req, res) => {
  res.render("signup", { error: null });
});

app.get("/home", async(req, res) => {
  const clubs = await Club.find({});
    res.render("main", { clubs });
});

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post("/login", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email) {
    return res.render("login", { error: "Please fill all the fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.render("login", { error: "User does not exist" });
    }

    if (user.password !== password) {
      return res.render("login", {
        error: "email id or the password entered is incorrect",
      });
    }
    const clubs = await Club.find({});
    res.render("main", { clubs });
  } catch (err) {
    console.error("Error during login:", err);
    res.render("login", { error: "Something went wrong. Please try again." });
  }
});

app.get("/clubs", async (req, res) => {
  const clubs = await Club.find({});
  res.render("clubs", { clubs });
});

app.post("/clubs", async (req, res) => {
  const { name, description, imageUrl, members } = req.body; // imageUrl from the form

  try {
    const club = new Club({
      title: name,
      image: imageUrl || "/images/smc logo.png", // Default image if not provided in the form
      description: description,
      members: members,
      subtitle: "Subtitle", // Default value if not provided in the form
      getInvolved: "Get Involved", // Default value
      clubActivity: [
        "/images/smc activity 1.jpg",
        "/images/smc activity 2.jpg",
      ], // Default activity
    });
    await club.save();
    res.redirect("/clubs");
  } catch (err) {
    console.error("Error adding club:", err);
    res.send("Something went wrong. Please try again.");
  }
});

app.get("/clubs/:id", async (req, res) => {
  const club = await Club.findById(req.params.id);
  res.render("club", { club });
});

app.get("/events", async (req, res) => {
  const events = await Events.find({});
  res.render("events", { events });
});

app.post("/events", async (req, res) => {
  const { title, description, date, image } = req.body;

  try {
    const event = new Events({
      title: title,
      description: description,
      date: date,
      image:
        image ||
        "https://satisfiedeye.com/wp-content/uploads/2024/10/close-up-recording-video-with-smartphone-during-concert_1153-7310.jpg",
    });
    await event.save();
    res.redirect("/events");
  } catch (err) {
    console.error("Error adding event:", err);
    res.send("Something went wrong. Please try again.");
  }
});

app.get("/register", (req, res) => {
  res.render("eventRegister", {});
});

app.get("/sports", async (req, res) => {
  try {
    const sports = await Sports.find({});
    res.render("sports", { sports });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching sports data");
  }
});

app.get("/sports/:id", async (req, res) => {
  try {
    const sport = await Sports.findById(req.params.id);
    if (!sport) {
      return res.status(404).send("Sport not found");
    }

    const club = {
      ...sport._doc,
      title: sport.title,
    };

    res.render("club", { club });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching sports data");
  }
});

app.post("/sports", async (req, res) => {
  const { title, image, practiceTime } = req.body;

  description =
    req.body.description ||
    "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.";
  subtitle = req.body.subtitle || "Your Gateway to Scientific Brilliance";
  members = req.body.members || 20;
  getInvolved =
    req.body.getInvolved ||
    "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!";
  clubActivity = req.body.clubActivity || [
    "/images/smc activity 1.jpg",
    "/images/smc activity 2.jpg",
  ];

  try {
    const sport = new Sports({
      title,
      image,
      practiceTime,
      description,
      subtitle,
      members,
      getInvolved,
      clubActivity,
    });

    await sport.save();
    res.redirect("/sports");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while adding sports data");
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`Server is running on port ${PORT}`);
});
