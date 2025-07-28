import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle } from "lucide-react";

interface PersonalityCheckProps {
  title: string;
  character: string;
  traits: string[];
  resultText: string;
  variant: "passive" | "aggressive" | "passive-aggressive" | "assertive";
}

export const PersonalityCheck = ({ title, character, traits, resultText, variant }: PersonalityCheckProps) => {
  const [checkedTraits, setCheckedTraits] = useState<boolean[]>(new Array(traits.length).fill(false));

  const toggleTrait = (index: number) => {
    const newChecked = [...checkedTraits];
    newChecked[index] = !newChecked[index];
    setCheckedTraits(newChecked);
  };

  const score = checkedTraits.filter(Boolean).length;
  const showResult = score >= 3;

  return (
    <Card className="w-full max-w-md mx-auto shadow-card">
      <CardHeader>
        <CardTitle className="text-lg font-bold text-center">
          {title}
        </CardTitle>
        <p className="text-center text-muted-foreground">
          Do you relate to {character}?
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {traits.map((trait, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-lg border cursor-pointer transition-colors hover:bg-muted/50"
              onClick={() => toggleTrait(index)}
            >
              {checkedTraits[index] ? (
                <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
              )}
              <span className="text-sm">{trait}</span>
            </div>
          ))}
        </div>

        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground mb-2">
            Your Score: {score}/4 ✅
          </p>
          
          {showResult && (
            <div className="space-y-3">
              <Button variant={variant} className="w-full">
                🎯 {resultText}
              </Button>
              <p className="text-xs text-muted-foreground">
                Keep reading to learn more about this communication style!
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};