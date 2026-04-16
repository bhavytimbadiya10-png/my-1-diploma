export interface Exercise {
  id: string;
  question: string;
  mathQuestion: string;
  correctAnswer: string;
  hint: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export const exercises: Exercise[] = [
  {
    id: 'ex1',
    question: 'Find the integral of x^2',
    mathQuestion: '\\int x^2 \\, dx',
    correctAnswer: 'x^3/3 + C',
    hint: 'Use the Power Rule: add 1 to the exponent and divide by the new exponent.',
    difficulty: 'Easy'
  },
  {
    id: 'ex2',
    question: 'Find the integral of 5x^4',
    mathQuestion: '\\int 5x^4 \\, dx',
    correctAnswer: 'x^5 + C',
    hint: 'Constants can be pulled out of the integral.',
    difficulty: 'Easy'
  },
  {
    id: 'ex3',
    question: 'Find the integral of sin(x)',
    mathQuestion: '\\int \\sin(x) \\, dx',
    correctAnswer: '-cos(x) + C',
    hint: 'Recall that the derivative of cos(x) is -sin(x).',
    difficulty: 'Medium'
  }
];
