import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Calendar, Star } from "lucide-react";

interface PlanDay {
  day: string;
  phase: string;
  task: string;
  goal: string;
  script?: string;
}

interface TransformationPlanProps {
  title: string;
  plan: PlanDay[];
  variant: "passive" | "aggressive" | "passive-aggressive" | "assertive";
}

export const TransformationPlan = ({ title, plan, variant }: TransformationPlanProps) => {
  const [completedDays, setCompletedDays] = useState<boolean[]>(new Array(plan.length).fill(false));

  const toggleDay = (index: number) => {
    const newCompleted = [...completedDays];
    newCompleted[index] = !newCompleted[index];
    setCompletedDays(newCompleted);
  };

  const completedCount = completedDays.filter(Boolean).length;
  const progress = (completedCount / plan.length) * 100;

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            📅 {title}
          </span>
          <Badge variant={variant}>
            {completedCount}/{plan.length} Days
          </Badge>
        </CardTitle>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {plan.map((day, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border cursor-pointer transition-all ${
                completedDays[index] 
                  ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800' 
                  : 'bg-muted/30 hover:bg-muted/50'
              }`}
              onClick={() => toggleDay(index)}
            >
              <div className="flex items-start gap-3">
                {completedDays[index] ? (
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                ) : (
                  <Circle className="h-6 w-6 text-muted-foreground flex-shrink-0 mt-1" />
                )}
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      {day.day}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {day.phase}
                    </Badge>
                  </div>
                  
                  <h4 className="font-semibold text-sm">{day.task}</h4>
                  <p className="text-sm text-muted-foreground">{day.goal}</p>
                  
                  {day.script && (
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 mt-2">
                      <p className="text-xs font-medium mb-1">💬 Script:</p>
                      <p className="text-xs italic">"{day.script}"</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {completedCount === plan.length && (
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800 text-center">
            <Star className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <p className="font-bold text-green-700 dark:text-green-300">
              🎉 Congratulations! You've completed the transformation plan!
            </p>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Ready for the next level of communication mastery?
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};