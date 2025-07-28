import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shuffle, Target } from "lucide-react";

interface Scenario {
  context: string;
  situation: string;
  response: string;
  reality: string;
}

interface ScenarioGeneratorProps {
  title: string;
  scenarios: Scenario[];
  variant: "passive" | "aggressive" | "passive-aggressive" | "assertive";
}

export const ScenarioGenerator = ({ title, scenarios, variant }: ScenarioGeneratorProps) => {
  const [currentScenario, setCurrentScenario] = useState(0);

  const nextScenario = () => {
    setCurrentScenario((prev) => (prev + 1) % scenarios.length);
  };

  const scenario = scenarios[currentScenario];

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>🎮 {title}</span>
          <Badge variant="outline">
            {currentScenario + 1}/{scenarios.length}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Scenario: {scenario.context}
            </h4>
            <p className="text-sm text-muted-foreground">{scenario.situation}</p>
          </div>

          <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
            <h4 className="font-semibold text-sm mb-2">Your Response:</h4>
            <p className="text-sm">{scenario.response}</p>
          </div>

          <div className="p-4 bg-destructive/10 rounded-lg border border-destructive/20">
            <h4 className="font-semibold text-sm mb-2">Reality Check:</h4>
            <p className="text-sm">{scenario.reality}</p>
          </div>
        </div>

        <Button 
          onClick={nextScenario}
          variant={variant}
          className="w-full"
        >
          <Shuffle className="h-4 w-4 mr-2" />
          Try Another Scenario
        </Button>
      </CardContent>
    </Card>
  );
};