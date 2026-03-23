import React, { useEffect, useState } from "react";

const jamb = () => {
  const [score, setScore] = useState(0)
  const [submit, setSubmit] = useState(false)
  const [answeredQuestions, setAnsweredQuestions] = useState([])
  const [shuffledQuestions, setShuffledQuestions] = useState([])

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledQuestions(shuffleArray(questions));
  }, []);
  const questions = [
    // ENGLISH (15 questions)
    {
      id: 1,
      question: "Which of the following is the set of all real numbers x for which the function f(x) = √(x² - 4) is defined?",
      options: [
        { id: "a", answer: "x ≥ 2 or x ≤ -2" },
        { id: "b", answer: "x > 2 or x < -2" },
        { id: "c", answer: "-2 ≤ x ≤ 2" },
        { id: "d", answer: "-2 < x < 2" }
      ],
      correctAnswer: "a"
    },
    {
      id: 2,
      question: "In the sentence 'The teacher insisted that the student pays attention,' which is the grammatical error?",
      options: [
        { id: "a", answer: "Subject and verb do not agree" },
        { id: "b", answer: "Wrong verb tense is used" },
        { id: "c", answer: "A preposition is missing" },
        { id: "d", answer: "The object is misplaced" }
      ],
      correctAnswer: "b"
    },
    {
      id: 3,
      question: "Which word best completes this sentence: 'Despite his wealth, he lived a very ___ life.'?",
      options: [
        { id: "a", answer: "opulent" },
        { id: "b", answer: "austere" },
        { id: "c", answer: "extravagant" },
        { id: "d", answer: "luxurious" }
      ],
      correctAnswer: "b"
    },
    {
      id: 4,
      question: "What is the antonym of 'taciturn'?",
      options: [
        { id: "a", answer: "silent" },
        { id: "b", answer: "loquacious" },
        { id: "c", answer: "quiet" },
        { id: "d", answer: "reserved" }
      ],
      correctAnswer: "b"
    },
    {
      id: 5,
      question: "Which of the following is NOT a figure of speech?",
      options: [
        { id: "a", answer: "Metaphor" },
        { id: "b", answer: "Personification" },
        { id: "c", answer: "Alliteration" },
        { id: "d", answer: "Description" }
      ],
      correctAnswer: "d"
    },
    {
      id: 6,
      question: "'He is the cynosure of all eyes' means that he is:",
      options: [
        { id: "a", answer: "very handsome" },
        { id: "b", answer: "the centre of attention" },
        { id: "c", answer: "very mysterious" },
        { id: "d", answer: "extremely intelligent" }
      ],
      correctAnswer: "b"
    },
    {
      id: 7,
      question: "Which word is correctly spelled?",
      options: [
        { id: "a", answer: "Occassion" },
        { id: "b", answer: "Occasion" },
        { id: "c", answer: "Occastion" },
        { id: "d", answer: "Ocassion" }
      ],
      correctAnswer: "b"
    },
    {
      id: 8,
      question: "The phrase 'in light of' means:",
      options: [
        { id: "a", answer: "despite" },
        { id: "b", answer: "in consideration of" },
        { id: "c", answer: "instead of" },
        { id: "d", answer: "because of" }
      ],
      correctAnswer: "b"
    },
    {
      id: 9,
      question: "Which pair of words are homophones?",
      options: [
        { id: "a", answer: "there, their" },
        { id: "b", answer: "complement, compliment" },
        { id: "c", answer: "break, brake" },
        { id: "d", answer: "All of the above" }
      ],
      correctAnswer: "d"
    },
    {
      id: 10,
      question: "The word 'perspicacious' means:",
      options: [
        { id: "a", answer: "transparent" },
        { id: "b", answer: "having keen insight" },
        { id: "c", answer: "related to perspiration" },
        { id: "d", answer: "very detailed" }
      ],
      correctAnswer: "b"
    },
    {
      id: 11,
      question: "Which of these is an example of assonance?",
      options: [
        { id: "a", answer: "The big brown bear" },
        { id: "b", answer: "The cat sat on the mat" },
        { id: "c", answer: "She sells shells by the shore" },
        { id: "d", answer: "The murmur of the bees" }
      ],
      correctAnswer: "d"
    },
    {
      id: 12,
      question: "'Brevity is the soul of wit' is an example of which literary device?",
      options: [
        { id: "a", answer: "Simile" },
        { id: "b", answer: "Metonymy" },
        { id: "c", answer: "Metaphor" },
        { id: "d", answer: "Allusion" }
      ],
      correctAnswer: "c"
    },
    {
      id: 13,
      question: "The phrase 'to cry over spilt milk' means to:",
      options: [
        { id: "a", answer: "be genuinely sorrowful" },
        { id: "b", answer: "regret something that cannot be changed" },
        { id: "c", answer: "be wasteful" },
        { id: "d", answer: "care deeply for someone" }
      ],
      correctAnswer: "b"
    },
    {
      id: 14,
      question: "Which sentence uses the correct form of the comparative degree?",
      options: [
        { id: "a", answer: "She is more prettier than her sister" },
        { id: "b", answer: "She is prettier than her sister" },
        { id: "c", answer: "She is more pretty than her sister" },
        { id: "d", answer: "She is prettiersome than her sister" }
      ],
      correctAnswer: "b"
    },
    {
      id: 15,
      question: "In formal writing, which of the following should be avoided?",
      options: [
        { id: "a", answer: "Complex sentences" },
        { id: "b", answer: "Contractions" },
        { id: "c", answer: "Long paragraphs" },
        { id: "d", answer: "Technical terms" }
      ],
      correctAnswer: "b"
    },

    // MATHEMATICS (18 questions)
    {
      id: 16,
      question: "If x² - 5x + 6 = 0, what are the roots?",
      options: [
        { id: "a", answer: "2, 3" },
        { id: "b", answer: "-2, -3" },
        { id: "c", answer: "2, -3" },
        { id: "d", answer: "-2, 3" }
      ],
      correctAnswer: "a"
    },
    {
      id: 17,
      question: "What is the sum of angles in a polygon with 8 sides?",
      options: [
        { id: "a", answer: "720°" },
        { id: "b", answer: "900°" },
        { id: "c", answer: "1080°" },
        { id: "d", answer: "1260°" }
      ],
      correctAnswer: "c"
    },
    {
      id: 18,
      question: "If log₁₀(x) = 2, what is x?",
      options: [
        { id: "a", answer: "10" },
        { id: "b", answer: "20" },
        { id: "c", answer: "100" },
        { id: "d", answer: "1000" }
      ],
      correctAnswer: "c"
    },
    {
      id: 19,
      question: "The derivative of f(x) = 3x² + 2x + 1 is:",
      options: [
        { id: "a", answer: "6x + 2" },
        { id: "b", answer: "3x + 2" },
        { id: "c", answer: "6x + 1" },
        { id: "d", answer: "6x² + 2" }
      ],
      correctAnswer: "a"
    },
    {
      id: 20,
      question: "What is the probability of rolling a 6 on a standard die?",
      options: [
        { id: "a", answer: "1/2" },
        { id: "b", answer: "1/6" },
        { id: "c", answer: "1/4" },
        { id: "d", answer: "1/3" }
      ],
      correctAnswer: "b"
    },
    {
      id: 21,
      question: "If a triangle has sides 3, 4, and 5, what type of triangle is it?",
      options: [
        { id: "a", answer: "Acute triangle" },
        { id: "b", answer: "Right triangle" },
        { id: "c", answer: "Obtuse triangle" },
        { id: "d", answer: "Isosceles triangle" }
      ],
      correctAnswer: "b"
    },
    {
      id: 22,
      question: "What is the area of a circle with radius 7 cm?",
      options: [
        { id: "a", answer: "49π cm²" },
        { id: "b", answer: "14π cm²" },
        { id: "c", answer: "7π cm²" },
        { id: "d", answer: "98π cm²" }
      ],
      correctAnswer: "a"
    },
    {
      id: 23,
      question: "Simplify: (2³)²",
      options: [
        { id: "a", answer: "2⁵" },
        { id: "b", answer: "2⁶" },
        { id: "c", answer: "2⁸" },
        { id: "d", answer: "2⁹" }
      ],
      correctAnswer: "b"
    },
    {
      id: 24,
      question: "The value of 5! (5 factorial) is:",
      options: [
        { id: "a", answer: "25" },
        { id: "b", answer: "90" },
        { id: "c", answer: "120" },
        { id: "d", answer: "150" }
      ],
      correctAnswer: "c"
    },
    {
      id: 25,
      question: "If 2x - 3 = 7, what is x?",
      options: [
        { id: "a", answer: "2" },
        { id: "b", answer: "5" },
        { id: "c", answer: "10" },
        { id: "d", answer: "-5" }
      ],
      correctAnswer: "b"
    },
    {
      id: 26,
      question: "What is the GCD of 48 and 36?",
      options: [
        { id: "a", answer: "6" },
        { id: "b", answer: "12" },
        { id: "c", answer: "18" },
        { id: "d", answer: "24" }
      ],
      correctAnswer: "b"
    },
    {
      id: 27,
      question: "If a:b = 3:4 and b:c = 4:5, what is a:b:c?",
      options: [
        { id: "a", answer: "3:4:5" },
        { id: "b", answer: "3:4:5" },
        { id: "c", answer: "3:4:4" },
        { id: "d", answer: "4:4:5" }
      ],
      correctAnswer: "a"
    },
    {
      id: 28,
      question: "What is the solution to sin(x) = 0.5 for 0° ≤ x ≤ 90°?",
      options: [
        { id: "a", answer: "30°" },
        { id: "b", answer: "45°" },
        { id: "c", answer: "60°" },
        { id: "d", answer: "90°" }
      ],
      correctAnswer: "a"
    },
    {
      id: 29,
      question: "What is the value of cos(0°)?",
      options: [
        { id: "a", answer: "0" },
        { id: "b", answer: "-1" },
        { id: "c", answer: "1" },
        { id: "d", answer: "0.5" }
      ],
      correctAnswer: "c"
    },
    {
      id: 30,
      question: "If y = 2x + 3, what is the y-intercept?",
      options: [
        { id: "a", answer: "2" },
        { id: "b", answer: "3" },
        { id: "c", answer: "5" },
        { id: "d", answer: "-3" }
      ],
      correctAnswer: "b"
    },
    {
      id: 31,
      question: "What is the median of 2, 4, 6, 8, 10?",
      options: [
        { id: "a", answer: "4" },
        { id: "b", answer: "6" },
        { id: "c", answer: "8" },
        { id: "d", answer: "5" }
      ],
      correctAnswer: "b"
    },
    {
      id: 32,
      question: "If a rectangle has length 10m and width 5m, what is its perimeter?",
      options: [
        { id: "a", answer: "30m" },
        { id: "b", answer: "50m" },
        { id: "c", answer: "20m" },
        { id: "d", answer: "15m" }
      ],
      correctAnswer: "a"
    },
    {
      id: 33,
      question: "What is 25% of 80?",
      options: [
        { id: "a", answer: "20" },
        { id: "b", answer: "25" },
        { id: "c", answer: "30" },
        { id: "d", answer: "40" }
      ],
      correctAnswer: "a"
    },

    // PHYSICS (15 questions)
    {
      id: 34,
      question: "What is the SI unit of force?",
      options: [
        { id: "a", answer: "Dyne" },
        { id: "b", answer: "Newton" },
        { id: "c", answer: "Pascal" },
        { id: "d", answer: "Joule" }
      ],
      correctAnswer: "b"
    },
    {
      id: 35,
      question: "Which of the following is a vector quantity?",
      options: [
        { id: "a", answer: "Speed" },
        { id: "b", answer: "Distance" },
        { id: "c", answer: "Velocity" },
        { id: "d", answer: "Time" }
      ],
      correctAnswer: "c"
    },
    {
      id: 36,
      question: "What is the acceleration due to gravity on Earth?",
      options: [
        { id: "a", answer: "9.8 m/s²" },
        { id: "b", answer: "9.8 cm/s²" },
        { id: "c", answer: "8.9 m/s²" },
        { id: "d", answer: "10.8 m/s²" }
      ],
      correctAnswer: "a"
    },
    {
      id: 37,
      question: "Newton's first law of motion states that an object at rest will remain at rest unless acted upon by a(n):",
      options: [
        { id: "a", answer: "friction" },
        { id: "b", answer: "external force" },
        { id: "c", answer: "normal force" },
        { id: "d", answer: "weight" }
      ],
      correctAnswer: "b"
    },
    {
      id: 38,
      question: "What is the SI unit of work?",
      options: [
        { id: "a", answer: "Watt" },
        { id: "b", answer: "Joule" },
        { id: "c", answer: "Newton" },
        { id: "d", answer: "Pascal" }
      ],
      correctAnswer: "b"
    },
    {
      id: 39,
      question: "Which form of energy is due to an object's motion?",
      options: [
        { id: "a", answer: "Potential energy" },
        { id: "b", answer: "Kinetic energy" },
        { id: "c", answer: "Chemical energy" },
        { id: "d", answer: "Thermal energy" }
      ],
      correctAnswer: "b"
    },
    {
      id: 40,
      question: "What is the speed of light in vacuum?",
      options: [
        { id: "a", answer: "3 × 10⁸ m/s" },
        { id: "b", answer: "3 × 10⁹ m/s" },
        { id: "c", answer: "3 × 10⁷ m/s" },
        { id: "d", answer: "3 × 10⁶ m/s" }
      ],
      correctAnswer: "a"
    },
    {
      id: 41,
      question: "Which of the following is NOT a state of matter?",
      options: [
        { id: "a", answer: "Solid" },
        { id: "b", answer: "Liquid" },
        { id: "c", answer: "Neutral" },
        { id: "d", answer: "Gas" }
      ],
      correctAnswer: "c"
    },
    {
      id: 42,
      question: "What is the relationship between pressure and volume at constant temperature according to Boyle's Law?",
      options: [
        { id: "a", answer: "PV = constant" },
        { id: "b", answer: "P + V = constant" },
        { id: "c", answer: "P/V = constant" },
        { id: "d", answer: "P = V" }
      ],
      correctAnswer: "a"
    },
    {
      id: 43,
      question: "Which of the following best describes refraction?",
      options: [
        { id: "a", answer: "Bending of light when passing through a different medium" },
        { id: "b", answer: "Bouncing of light off a surface" },
        { id: "c", answer: "Spreading of light through a narrow opening" },
        { id: "d", answer: "Absorption of light by a material" }
      ],
      correctAnswer: "a"
    },
    {
      id: 44,
      question: "What is the formula for calculating power?",
      options: [
        { id: "a", answer: "P = VI" },
        { id: "b", answer: "P = IV" },
        { id: "c", answer: "P = V/I" },
        { id: "d", answer: "Both A and B" }
      ],
      correctAnswer: "d"
    },
    {
      id: 45,
      question: "In electrostatics, like charges:",
      options: [
        { id: "a", answer: "attract each other" },
        { id: "b", answer: "repel each other" },
        { id: "c", answer: "have no effect on each other" },
        { id: "d", answer: "neutralize each other" }
      ],
      correctAnswer: "b"
    },
    {
      id: 46,
      question: "What is the SI unit of electric current?",
      options: [
        { id: "a", answer: "Volt" },
        { id: "b", answer: "Ampere" },
        { id: "c", answer: "Ohm" },
        { id: "d", answer: "Coulomb" }
      ],
      correctAnswer: "b"
    },
    {
      id: 47,
      question: "Which phenomenon describes the bending of waves around obstacles?",
      options: [
        { id: "a", answer: "Reflection" },
        { id: "b", answer: "Diffraction" },
        { id: "c", answer: "Refraction" },
        { id: "d", answer: "Dispersion" }
      ],
      correctAnswer: "b"
    },
    {
      id: 48,
      question: "What is the SI unit of temperature?",
      options: [
        { id: "a", answer: "Fahrenheit" },
        { id: "b", answer: "Celsius" },
        { id: "c", answer: "Kelvin" },
        { id: "d", answer: "Rankine" }
      ],
      correctAnswer: "c"
    },

    // CHEMISTRY (15 questions)
    {
      id: 49,
      question: "What is the chemical formula for table salt?",
      options: [
        { id: "a", answer: "KCl" },
        { id: "b", answer: "NaCl" },
        { id: "c", answer: "MgCl₂" },
        { id: "d", answer: "CaCl₂" }
      ],
      correctAnswer: "b"
    },
    {
      id: 50,
      question: "Which of the following is the most electronegative element?",
      options: [
        { id: "a", answer: "Oxygen" },
        { id: "b", answer: "Nitrogen" },
        { id: "c", answer: "Fluorine" },
        { id: "d", answer: "Chlorine" }
      ],
      correctAnswer: "c"
    },
    {
      id: 51,
      question: "What is the pH of a neutral solution?",
      options: [
        { id: "a", answer: "0" },
        { id: "b", answer: "7" },
        { id: "c", answer: "14" },
        { id: "d", answer: "-7" }
      ],
      correctAnswer: "b"
    },
    {
      id: 52,
      question: "Which gas is produced when an acid reacts with a metal?",
      options: [
        { id: "a", answer: "Oxygen" },
        { id: "b", answer: "Hydrogen" },
        { id: "c", answer: "Carbon dioxide" },
        { id: "d", answer: "Nitrogen" }
      ],
      correctAnswer: "b"
    },
    {
      id: 53,
      question: "What is Avogadro's number?",
      options: [
        { id: "a", answer: "6.02 × 10²²" },
        { id: "b", answer: "6.02 × 10²³" },
        { id: "c", answer: "6.02 × 10²⁴" },
        { id: "d", answer: "6.02 × 10²¹" }
      ],
      correctAnswer: "b"
    },
    {
      id: 54,
      question: "Which of the following is an exothermic reaction?",
      options: [
        { id: "a", answer: "Melting of ice" },
        { id: "b", answer: "Burning of wood" },
        { id: "c", answer: "Dissolving ammonium chloride in water" },
        { id: "d", answer: "Evaporation of water" }
      ],
      correctAnswer: "b"
    },
    {
      id: 55,
      question: "What is the valency of carbon in most of its compounds?",
      options: [
        { id: "a", answer: "2" },
        { id: "b", answer: "3" },
        { id: "c", answer: "4" },
        { id: "d", answer: "5" }
      ],
      correctAnswer: "c"
    },
    {
      id: 56,
      question: "Which type of bond involves the sharing of electrons between atoms?",
      options: [
        { id: "a", answer: "Ionic bond" },
        { id: "b", answer: "Covalent bond" },
        { id: "c", answer: "Metallic bond" },
        { id: "d", answer: "Hydrogen bond" }
      ],
      correctAnswer: "b"
    },
    {
      id: 57,
      question: "What is the formula for calculating molarity?",
      options: [
        { id: "a", answer: "Molarity = moles / volume (L)" },
        { id: "b", answer: "Molarity = volume / moles" },
        { id: "c", answer: "Molarity = mass / volume" },
        { id: "d", answer: "Molarity = concentration × density" }
      ],
      correctAnswer: "a"
    },
    {
      id: 58,
      question: "Which element has the highest atomic number?",
      options: [
        { id: "a", answer: "Uranium" },
        { id: "b", answer: "Platinum" },
        { id: "c", answer: "Tungsten" },
        { id: "d", answer: "Oganesson (in known elements)" }
      ],
      correctAnswer: "d"
    },
    {
      id: 59,
      question: "What is the chemical formula for ammonia?",
      options: [
        { id: "a", answer: "NH₂" },
        { id: "b", answer: "NH₃" },
        { id: "c", answer: "N₂H₄" },
        { id: "d", answer: "NH₄" }
      ],
      correctAnswer: "b"
    },
    {
      id: 60,
    question: "In a redox reaction, oxidation means:",
      options: [
        { id: "a", answer: "Loss of electrons" },
        { id: "b", answer: "Gain of electrons" },
        { id: "c", answer: "Formation of oxygen compounds" },
        { id: "d", answer: "Increase in atomic number" }
      ],
      correctAnswer: "a"
    },
    {
      id: 61,
      question: "Which of the following is a noble gas?",
      options: [
        { id: "a", answer: "Nitrogen" },
        { id: "b", answer: "Oxygen" },
        { id: "c", answer: "Neon" },
        { id: "d", answer: "Fluorine" }
      ],
      correctAnswer: "c"
    },
    {
      id: 62,
      question: "What type of reaction is represented by CaCO₃ → CaO + CO₂?",
      options: [
        { id: "a", answer: "Synthesis" },
        { id: "b", answer: "Decomposition" },
        { id: "c", answer: "Single displacement" },
        { id: "d", answer: "Double displacement" }
      ],
      correctAnswer: "b"
    },
    {
      id: 63,
      question: "What is the mass number of an atom?",
      options: [
        { id: "a", answer: "Number of protons only" },
        { id: "b", answer: "Number of electrons only" },
        { id: "c", answer: "Total number of protons and neutrons" },
        { id: "d", answer: "Number of protons minus electrons" }
      ],
      correctAnswer: "c"
    },

    // BIOLOGY (15 questions)
    {
      id: 64,
      question: "What is the primary function of mitochondria?",
      options: [
        { id: "a", answer: "Protein synthesis" },
        { id: "b", answer: "ATP production (energy)" },
        { id: "c", answer: "Photosynthesis" },
        { id: "d", answer: "DNA replication" }
      ],
      correctAnswer: "b"
    },
    {
      id: 65,
      question: "Which of the following is NOT a component of the cell membrane?",
      options: [
        { id: "a", answer: "Phospholipids" },
        { id: "b", answer: "Proteins" },
        { id: "c", answer: "Cholesterol" },
        { id: "d", answer: "Cellulose" }
      ],
      correctAnswer: "d"
    },
    {
      id: 66,
      question: "What is the process by which plants make their own food?",
      options: [
        { id: "a", answer: "Respiration" },
        { id: "b", answer: "Photosynthesis" },
        { id: "c", answer: "Fermentation" },
        { id: "d", answer: "Digestion" }
      ],
      correctAnswer: "b"
    },
    {
      id: 67,
      question: "How many chromosomes do humans have in each cell?",
      options: [
        { id: "a", answer: "23" },
        { id: "b", answer: "46" },
        { id: "c", answer: "92" },
        { id: "d", answer: "48" }
      ],
      correctAnswer: "b"
    },
    {
      id: 68,
      question: "Which blood type is considered the universal donor?",
      options: [
        { id: "a", answer: "A" },
        { id: "b", answer: "B" },
        { id: "c", answer: "AB" },
        { id: "d", answer: "O-" }
      ],
      correctAnswer: "d"
    },
    {
      id: 69,
      question: "What is the main function of the stomach?",
      options: [
        { id: "a", answer: "Nutrient absorption" },
        { id: "b", answer: "Mechanical and chemical digestion" },
        { id: "c", answer: "Water absorption" },
        { id: "d", answer: "Bile production" }
      ],
      correctAnswer: "b"
    },
    {
      id: 70,
      question: "Which enzyme breaks down proteins?",
      options: [
        { id: "a", answer: "Amylase" },
        { id: "b", answer: "Lipase" },
        { id: "c", answer: "Protease" },
        { id: "d", answer: "Cellulase" }
      ],
      correctAnswer: "c"
    },
    {
      id: 71,
      question: "What is the genetic material in most organisms?",
      options: [
        { id: "a", answer: "RNA" },
        { id: "b", answer: "DNA" },
        { id: "c", answer: "Protein" },
        { id: "d", answer: "Lipid" }
      ],
      correctAnswer: "b"
    },
    {
      id: 72,
      question: "Which of the following is a part of the female reproductive system?",
      options: [
        { id: "a", answer: "Testis" },
        { id: "b", answer: "Prostate" },
        { id: "c", answer: "Ovary" },
        { id: "d", answer: "Seminal vesicle" }
      ],
      correctAnswer: "c"
    },
    {
      id: 73,
      question: "What type of muscle tissue is under voluntary control?",
      options: [
        { id: "a", answer: "Smooth muscle" },
        { id: "b", answer: "Cardiac muscle" },
        { id: "c", answer: "Skeletal muscle" },
        { id: "d", answer: "Involuntary muscle" }
      ],
      correctAnswer: "c"
    },
    {
      id: 74,
      question: "Which hormone is produced by the pancreas?",
      options: [
        { id: "a", answer: "Insulin" },
        { id: "b", answer: "Adrenaline" },
        { id: "c", answer: "Thyroid hormone" },
        { id: "d", answer: "Testosterone" }
      ],
      correctAnswer: "a"
    },
    {
      id: 75,
      question: "What is the name of the protein in red blood cells that carries oxygen?",
      options: [
        { id: "a", answer: "Myoglobin" },
        { id: "b", answer: "Hemoglobin" },
        { id: "c", answer: "Collagen" },
        { id: "d", answer: "Keratin" }
      ],
      correctAnswer: "b"
    },
    {
      id: 76,
      question: "Which phase of the cell cycle involves the duplication of chromosomes?",
      options: [
        { id: "a", answer: "G1 phase" },
        { id: "b", answer: "S phase" },
        { id: "c", answer: "G2 phase" },
        { id: "d", answer: "M phase" }
      ],
      correctAnswer: "b"
    },
    {
      id: 77,
      question: "What is the correct order of biological organization from smallest to largest?",
      options: [
        { id: "a", answer: "Cells, tissues, organs, organisms" },
        { id: "b", answer: "Organisms, organs, tissues, cells" },
        { id: "c", answer: "Tissues, cells, organs, organisms" },
        { id: "d", answer: "Organs, cells, organisms, tissues" }
      ],
      correctAnswer: "a"
    },
    {
      id: 78,
      question: "Which of the following is NOT a vertebrate animal?",
      options: [
        { id: "a", answer: "Dog" },
        { id: "b", answer: "Fish" },
        { id: "c", answer: "Insect" },
        { id: "d", answer: "Bird" }
      ],
      correctAnswer: "c"
    },

    // ECONOMICS (10 questions)
    {
      id: 79,
      question: "What is the basic economic problem that all societies face?",
      options: [
        { id: "a", answer: "Inflation" },
        { id: "b", answer: "Scarcity of resources" },
        { id: "c", answer: "Unemployment" },
        { id: "d", answer: "Exchange rate fluctuations" }
      ],
      correctAnswer: "b"
    },
    {
      id: 80,
      question: "Which of the following is an example of a factor of production?",
      options: [
        { id: "a", answer: "Money" },
        { id: "b", answer: "Labor" },
        { id: "c", answer: "Bank account" },
        { id: "d", answer: "Savings" }
      ],
      correctAnswer: "b"
    },
    {
      id: 81,
      question: "What is GDP?",
      options: [
        { id: "a", answer: "Gross Domestic Product" },
        { id: "b", answer: "General Development Plan" },
        { id: "c", answer: "Government Demand Plan" },
        { id: "d", answer: "Global Deficit Product" }
      ],
      correctAnswer: "a"
    },
    {
      id: 82,
      question: "When supply exceeds demand, what happens to price?",
      options: [
        { id: "a", answer: "Price increases" },
        { id: "b", answer: "Price decreases" },
        { id: "c", answer: "Price remains unchanged" },
        { id: "d", answer: "Price becomes zero" }
      ],
      correctAnswer: "b"
    },
    {
      id: 83,
      question: "Which economic system allows complete private ownership of resources?",
      options: [
        { id: "a", answer: "Command economy" },
        { id: "b", answer: "Mixed economy" },
        { id: "c", answer: "Capitalist economy" },
        { id: "d", answer: "Planned economy" }
      ],
      correctAnswer: "c"
    },
    {
      id: 84,
      question: "What is inflation?",
      options: [
        { id: "a", answer: "A decrease in the purchasing power of money" },
        { id: "b", answer: "An increase in the purchasing power of money" },
        { id: "c", answer: "An increase in economic growth" },
        { id: "d", answer: "A decrease in unemployment" }
      ],
      correctAnswer: "a"
    },
    {
      id: 85,
      question: "What does the term 'monopoly' mean in economics?",
      options: [
        { id: "a", answer: "Many sellers competing" },
        { id: "b", answer: "One seller controlling the market" },
        { id: "c", answer: "Government price control" },
        { id: "d", answer: "International trade" }
      ],
      correctAnswer: "b"
    },
    {
      id: 86,
      question: "Which is an example of indirect taxation?",
      options: [
        { id: "a", answer: "Income tax" },
        { id: "b", answer: "Property tax" },
        { id: "c", answer: "Value Added Tax (VAT)" },
        { id: "d", answer: "Inheritance tax" }
      ],
      correctAnswer: "c"
    },
    {
      id: 87,
      question: "What is the primary role of the central bank?",
      options: [
        { id: "a", answer: "Lending to businesses" },
        { id: "b", answer: "Controlling money supply and regulating banks" },
        { id: "c", answer: "Collecting taxes" },
        { id: "d", answer: "Managing government expenditure" }
      ],
      correctAnswer: "b"
    },
    {
      id: 88,
      question: "What does elasticity of demand measure?",
      options: [
        { id: "a", answer: "The quantity of goods produced" },
        { id: "b", answer: "The responsiveness of quantity demanded to price changes" },
        { id: "c", answer: "The cost of production" },
        { id: "d", answer: "The profit margin" }
      ],
      correctAnswer: "b"
    },

    // GOVERNMENT/CIVICS (10 questions)
    {
      id: 89,
      question: "What is the process by which a bill becomes a law?",
      options: [
        { id: "a", answer: "Executive order" },
        { id: "b", answer: "Judicial review" },
        { id: "c", answer: "Legislative process" },
        { id: "d", answer: "Constitutional amendment" }
      ],
      correctAnswer: "c"
    },
    {
      id: 90,
      question: "Which of the following is a characteristic of democracy?",
      options: [
        { id: "a", answer: "Power held by one person" },
        { id: "b", answer: "Free and fair elections" },
        { id: "c", answer: "Monarchy rule" },
        { id: "d", answer: "Military control" }
      ],
      correctAnswer: "b"
    },
    {
      id: 91,
      question: "What does the separation of powers mean?",
      options: [
        { id: "a", answer: "Division of government into executive, legislative, and judicial branches" },
        { id: "b", answer: "Division of power between states and federal government" },
        { id: "c", answer: "Power given only to the military" },
        { id: "d", answer: "Restriction of voting rights" }
      ],
      correctAnswer: "a"
    },
    {
      id: 92,
      question: "What is the primary function of the legislative branch?",
      options: [
        { id: "a", answer: "To enforce laws" },
        { id: "b", answer: "To interpret laws" },
        { id: "c", answer: "To make laws" },
        { id: "d", answer: "To execute laws" }
      ],
      correctAnswer: "c"
    },
    {
      id: 93,
      question: "Which of the following is a fundamental human right?",
      options: [
        { id: "a", answer: "Freedom of speech" },
        { id: "b", answer: "Right to life" },
        { id: "c", answer: "Right to freedom from torture" },
        { id: "d", answer: "All of the above" }
      ],
      correctAnswer: "d"
    },
    {
      id: 94,
      question: "What is the main purpose of the Judiciary?",
      options: [
        { id: "a", answer: "To create laws" },
        { id: "b", answer: "To interpret laws and administer justice" },
        { id: "c", answer: "To enforce laws" },
        { id: "d", answer: "To collect taxes" }
      ],
      correctAnswer: "b"
    },
    {
      id: 95,
      question: "In Nigeria's political system, how many tiers of government are there?",
      options: [
        { id: "a", answer: "Two" },
        { id: "b", answer: "Three" },
        { id: "c", answer: "Four" },
        { id: "d", answer: "Five" }
      ],
      correctAnswer: "b"
    },
    {
      id: 96,
      question: "What is the purpose of a constitution?",
      options: [
        { id: "a", answer: "To list all laws" },
        { id: "b", answer: "To establish the framework and principles of government" },
        { id: "c", answer: "To declare war" },
        { id: "d", answer: "To manage the economy" }
      ],
      correctAnswer: "b"
    },
    {
      id: 97,
      question: "Which international organization was founded to maintain world peace?",
      options: [
        { id: "a", answer: "NATO" },
        { id: "b", answer: "African Union" },
        { id: "c", answer: "United Nations" },
        { id: "d", answer: "ECOWAS" }
      ],
      correctAnswer: "c"
    },
    {
      id: 98,
      question: "What does rule of law mean?",
      options: [
        { id: "a", answer: "Government can make any decision" },
        { id: "b", answer: "Everyone, including the government, is subject to the law" },
        { id: "c", answer: "Laws apply only to citizens" },
        { id: "d", answer: "The military controls the country" }
      ],
      correctAnswer: "b"
    },

    // LITERATURE (10 questions)
    {
      id: 99,
      question: "'To be or not to be' is a famous soliloquy from which play?",
      options: [
        { id: "a", answer: "Macbeth" },
        { id: "b", answer: "Hamlet" },
        { id: "c", answer: "Othello" },
        { id: "d", answer: "Romeo and Juliet" }
      ],
      correctAnswer: "b"
    },
    {
      id: 100,
      question: "Which of the following is an example of an allegory?",
      options: [
        { id: "a", answer: "Animal Farm" },
        { id: "b", answer: "The Great Gatsby" },
        { id: "c", answer: "Pride and Prejudice" },
        { id: "d", answer: "Wuthering Heights" }
      ],
      correctAnswer: "a"
    }
  ];

  const handleScore = (quesId, optionId) => {
    const question = shuffledQuestions.find((ques) => {
      return ques.id === quesId
    })
    if (!question) {
      alert("question not found")
      return
    }

    if (question.correctAnswer === optionId) {
      setScore(prev => prev + 1)

    } else {
      console.log("Not correct")

    }

    setAnsweredQuestions(prev => [...prev, quesId]);
  };

  // const submit = () => {
  //   return <p>{score}</p>
  // }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmit(true)

  }

  return (
    <div>
      <h1 className="head">Jamb Past Questions for all subjects</h1>
      <div className="question">
        {shuffledQuestions.map((q) => (
        <div key={q.id}>
          <p className="realQuestion">{q.question}</p>
          {q.options.map((option) => (
            <div className="option-row" key={`${q.id}-${option.id}`}>
              <input
                type="radio"
                value={option.id}
                id={`${q.id}-${option.id}`}
                name={String(q.id)}
                disabled={answeredQuestions.includes(q.id)}
                onClick={() => handleScore(q.id, option.id)}
              />
              <label htmlFor={`${q.id}-${option.id}`} className="option-label">
                {option.answer}
              </label>
            </div>
          ))}
        </div>
      ))}
      {/* <button onClick={setSubmit(true)}>Submit</button> */}

      {/* <button type="submit" onSubmit={handleSubmit} onClick={setSubmit(true)}>Submit</button>



      {submit ? {score} : <p>nope</p>} */}

      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      {/* <p>{score}</p> */}
      {submit ? <p>Score: {score}/100</p> : <p></p>}
      {submit ? <p>Percentage: {(score/100) * 100}%</p> : <p></p>}
    </div>
    </div>
  );
};

export default jamb;
