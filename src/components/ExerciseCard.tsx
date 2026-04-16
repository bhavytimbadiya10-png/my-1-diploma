import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import MathRenderer from "./MathRenderer";
import { Exercise } from "../data/exercises";
import confetti from "canvas-confetti";

interface ExerciseCardProps {
  exercise: Exercise;
}

export default function ExerciseCard({ exercise }: ExerciseCardProps) {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');
  const [showHint, setShowHint] = useState(false);

  const checkAnswer = () => {
    // Basic normalization for comparison
    const normalizedUser = answer.toLowerCase().replace(/\s/g, '');
    const normalizedCorrect = exercise.correctAnswer.toLowerCase().replace(/\s/g, '');
    
    if (normalizedUser === normalizedCorrect) {
      setStatus('correct');
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } else {
      setStatus('wrong');
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Practice Problem</CardTitle>
          <Badge variant={exercise.difficulty === 'Easy' ? 'secondary' : exercise.difficulty === 'Medium' ? 'default' : 'destructive'}>
            {exercise.difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{exercise.question}</p>
        <div className="bg-muted p-6 rounded-lg flex justify-center">
          <MathRenderer math={exercise.mathQuestion} block />
        </div>
        
        <div className="space-y-2">
          <Input 
            placeholder="Your answer (e.g. x^3/3 + C)" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={status === 'correct'}
          />
          <div className="flex gap-2">
            <Button onClick={checkAnswer} disabled={status === 'correct' || !answer} className="flex-1">
              Check Answer
            </Button>
            <Button variant="outline" onClick={() => setShowHint(!showHint)}>
              <Lightbulb className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {showHint && (
          <Alert>
            <Lightbulb className="w-4 h-4" />
            <AlertDescription>{exercise.hint}</AlertDescription>
          </Alert>
        )}

        {status === 'correct' && (
          <Alert className="bg-green-50 border-green-200 text-green-800">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <AlertDescription>Correct! Well done.</AlertDescription>
          </Alert>
        )}

        {status === 'wrong' && (
          <Alert variant="destructive">
            <XCircle className="w-4 h-4" />
            <AlertDescription>Not quite. Try again or check the hint!</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
