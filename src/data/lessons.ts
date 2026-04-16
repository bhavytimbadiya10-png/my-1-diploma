export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  mathExamples: string[];
}

export const lessons: Lesson[] = [
  {
    id: 'intro',
    title: 'What is Integration?',
    description: 'The zero-level introduction to the concept of area under a curve.',
    content: 'Integration is the reverse process of differentiation. If differentiation tells us the rate of change, integration tells us the accumulation. Imagine finding the area under a curve by summing up infinitely many tiny rectangles.',
    mathExamples: ['\\int f(x) \\, dx = F(x) + C']
  },
  {
    id: 'power-rule',
    title: 'The Power Rule',
    description: 'The most fundamental rule for integrating polynomials.',
    content: 'The power rule states that for any real number n ≠ -1, the integral of x^n is x^(n+1) divided by (n+1), plus a constant C.',
    mathExamples: ['\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C']
  },
  {
    id: 'trig',
    title: 'Trigonometric Integrals',
    description: 'Integrating sine, cosine, and more.',
    content: 'Basic trigonometric functions have straightforward integrals derived from their derivatives.',
    mathExamples: ['\\int \\sin(x) \\, dx = -\\cos(x) + C', '\\int \\cos(x) \\, dx = \\sin(x) + C']
  }
];
