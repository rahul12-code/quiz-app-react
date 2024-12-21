import React from "react";

const QuizQuestion = ({
  slideNumber,
  contents,
  handleChoice,
  handleNext,
  selectedIndex,
}) => {
  return (
    <>
      <div className="flex items-center justify-between font-medium mb-4">
        <p>TOPIC: React</p>
        <div>
          <span>{slideNumber}</span>
          <span>/10</span>
        </div>
      </div>

      <div>
        <h2 className="h-20 text-lg font-bold bg-[#00fff233] rounded-md p-4 mb-4 border-2 border-[#00fff2]/50">
          {contents[slideNumber - 1].question}
        </h2>

        <div className="pl-0">
          {contents[slideNumber - 1].choices.map((choice, index) => (
            <div
              key={index}
              onClick={(e) => handleChoice(e, index)}
              className={`p-2 mb-2 border-2 rounded-md hover:cursor-pointer font-medium
                ${
                  selectedIndex === index
                    ? "bg-[#2c3658]/75 border-[#2c3658]"
                    : "bg-[#2c365833] border-[#2c3658]/50"
                }`}
            >
              {choice}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row-reverse absolute bottom-0">
        <button
          className={`px-4 py-2 font-medium rounded-md ${
            selectedIndex !== null
              ? "bg-[#2c3658] text-white cursor-pointer"
              : "bg-[#2c365833] text-white cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={selectedIndex === null}
        >
          {slideNumber === 10 ? "Finish" : "Next"}
        </button>
      </div>
    </>
  );
};

export default QuizQuestion;
