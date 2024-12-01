// const mongoose = require("mongoose");
// const Club = require("./Models/clubs");

// mongoose
//   .connect("mongodb://localhost:27017/clubs", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("Database connected successfully!"))
//   .catch((err) => console.error("Database connection error:", err));

// // Seed Data
// const seedData = [
//   {
//     image: "/images/scimat logo.png",
//     title: "Sci-Mat",
//     description:
//       "Scimat is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of science and mathematics among students.",
//     subtitle: "Your Gateway to Scientific Brilliance",
//     members: 20,
//     getInvolved:
//       "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
//     clubActivity: [
//       "/images/smc activity 1.jpg",
//       "/images/smc activity 2.jpg",
//     ],
//   },
//   {
//     image: "/images/smc logo.png",
//     title: "Social Media Club",
//     description:
//       "The Social Media Club at BML Munjal University captures and showcases all the happenings on campus, enhancing the college's digital presence.",
//     subtitle: "Most Fun Club in the Uni",
//     members: 20,
//     getInvolved:
//       "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
//     clubActivity: [
//       "/images/smc activity 1.jpg",
//       "/images/smc activity 2.jpg",
//     ],
//   },
//   {
//     image: "/images/pac logo.png",
//     title: "PAC",
//     description:
//       "The Photography & Cinematography Club at BML Munjal University is dedicated to exploring and honing the art of visual storytelling through photography and film.",
//     subtitle: "Lights, Camera & Action",
//     members: 20,
//     getInvolved:
//       "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
//     clubActivity: [
//       "/images/smc activity 1.jpg",
//       "/images/smc activity 2.jpg",
//     ],
//   },
//   {
//     image: "/images/pfa logo.png",
//     title: "PFA",
//     description:
//       "The Performing Arts is a club at BML Munjal University that focuses on your talent and appreciation.",
//     subtitle: "Cheers to your talent",
//     members: 20,
//     getInvolved:
//       "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
//     clubActivity: [
//       "/images/smc activity 1.jpg",
//       "/images/smc activity 2.jpg",
//     ],
//   },
//   {
//     image: "/images/robotic logo.png",
//     title: "Robotics",
//     description:
//       "Robotics is a club at BML Munjal University that focuses on fostering a deeper understanding and appreciation of robots among students.",
//     subtitle: "Robo Wars",
//     members: 20,
//     getInvolved:
//       "Join the Social Media Club at BML Munjal University to enhance your digital marketing skills, create engaging content, and capture the pulse of campus life. Be part of a dynamic team that showcases the best of BMU to the world!",
//     clubActivity: [
//       "/images/smc activity 1.jpg",
//       "/images/smc activity 2.jpg",
//     ],
//   },
// ];

// const seedDatabase = async () => {
//   try {
//     await Club.deleteMany({});
//     console.log("Existing data cleared!");

//     await Club.insertMany(seedData);
//     console.log("Seed data added successfully!");

//     mongoose.connection.close();
//     console.log("Database connection closed!");
//   } catch (err) {
//     console.error("Error seeding data:", err);
//     mongoose.connection.close();
//   }
// };

// seedDatabase();

const mongoose = require("mongoose");
const Event = require("./Models/events"); // Adjust the path to your Event model

const events = [
  {
    title: "Founders Day",
    description:
      "Founders Day at BML Munjal University honors the visionary Brijmohan Lall Munjal, celebrating his legacy of innovation, leadership, and commitment to education.",
    date: "20th October 2024",
    image: "images/bml founder.jpeg",
  },
  {
    title: "Melange",
    description:
      "Get ready to experience a whirlwind of cultures at Mélange, where vibrant performances from the North, West, South, and East come together in one electrifying celebration.",
    date: "19th October 2024",
    image: "images/Copy of melange.jpg",
  },
  {
    title: "67th Milestone Annual Fest",
    description:
      "67th Milestone, BML Munjal University's annual fest, is a vibrant celebration of talent, creativity, and culture, bringing students together for unforgettable performances, competitions, and experiences.",
    date: "1-3 March",
    image: "images/67th logo.png",
  },
  {
    title: "HultPrize BMU 2025",
    description:
      "Hult Prize BMU 2025 is a prestigious competition that challenges students to develop innovative solutions to global issues, blending entrepreneurial spirit with social impact.",
    date: "Oct 2024- Feb 2025",
    image: "images/hult logo.png",
  },
  {
    title: "PitchFest 2025",
    description:
      "Pitchfest 2025 at BML Munjal University is a dynamic platform where aspiring entrepreneurs showcase their innovative ideas, competing for support and funding.",
    date: "20-21 February 2025",
    image: "images/pitch logo.png",
  },
];

const seedEvents = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/clubs", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    await Event.deleteMany(); // Clear existing events to prevent duplicates
    console.log("Existing events cleared");

    await Event.insertMany(events);
    console.log("Events seeded successfully");

    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding events:", error);
    mongoose.disconnect();
  }
};

seedEvents();