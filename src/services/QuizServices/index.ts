import { Characteristics, Result } from "../../types";

class QuizServices {
  updateResults = (characteristics: Characteristics[], results: Result[]) => {
    const updatedResults = results.filter((result) => {
      return result.characteristics.some((resultCharacteristic)=>{
        return characteristics.some((characteristic)=>resultCharacteristic===characteristic);
      })
    });
    return updatedResults;
  };
}

const quizServices = new QuizServices();

export default quizServices;
