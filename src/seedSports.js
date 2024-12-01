const mongoose = require("mongoose");
const Sports = require("./Models/sports"); // Adjust the path to your sports model file

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/clubs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Sports data to seed
const sportsData = [
  {
    title: "Cricket",
    image: "/images/cricket.jpg",
    practiceTime: "2 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Football",
    image: "/images/football.jpeg",
    practiceTime: "1.5 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Badminton",
    image: "/images/badminton.jpg",
    practiceTime: "1 Hour/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Table Tennis",
    image: "/images/table tennis.jpg",
    practiceTime: "2 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Lawn Tennis",
    image: "/images/Lawn Tennis.jpg",
    practiceTime: "1.5 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Basketball",
    image: "/images/Basketball.jpg",
    practiceTime: "1 Hour/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Volleyball",
    image: "/images/volleyball.jpg",
    practiceTime: "1.5 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Hockey",
    image: "/images/hockey.jpg",
    practiceTime: "2 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Swimming",
    image: "/images/swimming.avif",
    practiceTime: "1 Hour/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Golf",
    image: "/images/golf.jpg",
    practiceTime: "2 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Archery",
    image: "/images/archery.avif",
    practiceTime: "1.5 Hours/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
  {
    title: "Karate",
    image: "/images/karate.jpg",
    practiceTime: "1 Hour/day",
    description:
      "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
    subtitle: "Your Gateway to Scientific Brilliance",
    members: 20,
    getInvolved:
      "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
    clubActivity: ["/images/smc activity 1.jpg", "/images/smc activity 2.jpg"],
  },
];

// Insert sports data into the database
const seedSports = async () => {
  try {
    await Sports.deleteMany({});
    const result = await Sports.insertMany(sportsData);
    console.log("Sports data seeded:", result);
  } catch (error) {
    console.error("Error seeding sports data:", error);
  } finally {
    mongoose.connection.close();
  }
};

seedSports();
