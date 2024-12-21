import React, { useState } from "react";
import contents from "../contents.json";
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";

const QuizApp = () => {
  const [slideNumber, setSlideNumber] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [userAnswer, setUserAnswer] = useState(Array(10).fill(null));

  const correctAnswers = contents.map((content) => {
    return content.correctAnswer;
  });
  console.log(correctAnswers);

  const userCorrectAnswers = correctAnswers.filter((ans,idx)=>{
    return ans==userAnswer[idx];
  })
  console.log(userCorrectAnswers);

  const handleChoice = (e, index) => {
    setSelectedIndex(index);
    const updatedAnswers = [...userAnswer];
    updatedAnswers[slideNumber - 1] = e.target.innerText;
    console.log(updatedAnswers);
    setUserAnswer(updatedAnswers);
  };

  const handleNext = () => {
    if (slideNumber <= 10) {
      setSlideNumber((prevslideNumber) => prevslideNumber + 1);
    }
    setSelectedIndex(null);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="w-full min-h-[85vh] bg-[#2c3658] flex items-center justify-center text-base">
        <div className="text-white h-[30rem] w-[30rem] p-7 bg-[#699cf4] rounded-xl border-t-[5px] border-[#00fff2]">
          <div className="h-full relative">
            {slideNumber <= 10 ? (
              <QuizQuestion
                slideNumber={slideNumber}
                contents={contents}
                handleChoice={handleChoice}
                handleNext={handleNext}
                selectedIndex={selectedIndex}
              />
            ) : (
              <QuizResult userCorrectAnswers={userCorrectAnswers} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;
