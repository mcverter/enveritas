export function retrieveQuestions(){
  const questionList = [
    "What is your favorite color?",
    "How many angels dance on the head of a pin?",
    "What is the average wind speed velocity of an unladen swallow?",
    "Why do fools fall in love?",
    "Come on baby, do you know the twist?",
    "What animal would be cutest if scaled down to the size of a cat?",
    "What’s your cure for hiccups?",
    "What movie would be greatly improved if it was made into a musical?",
    "What is something that is really popular now, but in 5 years everyone will look back on and be embarrassed by?",
    "What would be the hat to end all hats? What could you wear on your head that would make people stop what they are doing and stare in awe and amazement?",
    "If animals could talk, which would be the rudest?",
    "In 40 years what will people be nostalgic for?",
    "What inanimate object do you wish you could eliminate from existence?",
  ];

  const questionPromise = new Promise(
    (resolve, reject) => {
      setTimeout(resolve, 1000, questionList);
    });
  return questionPromise;
}

// if we want to upload the questions
export function pushQuestionsToServer() {}