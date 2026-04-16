import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import MathRenderer from "./MathRenderer";
import { Lesson } from "../data/lessons";

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{lesson.title}</CardTitle>
        <CardDescription>{lesson.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed">{lesson.content}</p>
        <div className="space-y-2">
          <p className="text-xs font-bold uppercase text-muted-foreground">Key Formula:</p>
          <div className="bg-muted p-4 rounded-md">
            {lesson.mathExamples.map((ex, i) => (
              <div key={i}>
                <MathRenderer math={ex} block />
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
