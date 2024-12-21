import React from "react";

const QuizResult = ({ userCorrectAnswers }) => {
  return (
    <div className="flex justify-center items-center w-full absolute top-20">
      <div className="w-[75%]">
        <h3 className="bg-[#00fff233] border-2 border-[#00fff2]/50 text-center p-2 rounded-md font-bold text-[20px]">
          Result
        </h3>
        <table className="bg-[#2c365880] border-collapse mt-4 mb-4 w-full font-medium text-[17px]">
          <tbody>
            <tr>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                Total Questions
              </td>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">10</td>
            </tr>
            <tr>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                Total Score
              </td>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                {userCorrectAnswers.length * 5}
              </td>
            </tr>
            <tr>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                Correct Answers
              </td>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                {userCorrectAnswers.length}
              </td>
            </tr>
            <tr>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                Wrong Answers
              </td>
              <td className="text-center p-3 border-2 border-[#00fff2]/50">
                {10 - userCorrectAnswers.length}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="text-center text-[22px] font-semibold">
          {userCorrectAnswers.length * 5 >= 30 ? "Congratulations 🎉" : ""}
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
