import { IQuestion, IState } from "./types";

// JSON 데이터를 직접 가져오기 require 사용
export const getQuestions = (): IQuestion[] => {
    return require('../data/questions.json');
}

export const getStates = (): IState[] => {
    return require('../data/states.json');
}

export const getQuizQuestions = (state: number): IQuestion[] => {
    const questions = getQuestions();
    const states = getStates()[state].questions;
    // slice() 사용하여 배열의 일부를 추출 새로운 배열을 생성
    return [...questions.slice(0, 30), ...states.slice(0, 3)];
}