const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["All the effort you are making will ultimately pay off.",
					 "Allow compassion to guide your decisions",
					 "You will travel far and wide,both pleasure and business.",
           "To know oneself, one should assert oneself.",
           "What’s hidden in an empty box?",

  ];
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/pickOne", (req, res) => {
  const greatChoice = ["great choice!"]
  res.status(200).send(greatChoice)
})



app.get("/api/sendMessage", (req, res) => {
  const greatChoice = ["Thank You!"]
  res.status(200).send(greatChoice)
})

// app.get("/api/inspire", (req, res) => {
//   const greatChoice = ["You can climb mountains"]
//   res.status(200).send(greatChoice)
// })

app.get("/api/inspire", (req, res) => {
  const youCan = ["you can climb mountains"]
  res.status(200).send(youCan)
})


app.listen(4000, () => console.log("Server running on 4000"));
