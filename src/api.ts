import { shuffleArray } from "./utils";

export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
    EASY = "easy",
    HARD = "hard",
    MEDIUM = "medium",
}

export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const url = `https://opentdb.com/api.php/?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(url)).json();
    return data.results.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([
                ...question.incorrect_answers,
                question.correct_answer,
            ]),
        }
    ))
}