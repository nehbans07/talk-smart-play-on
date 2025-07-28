import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CostItem {
  icon: string;
  label: string;
  cost: string;
}

interface CostCalculatorProps {
  title: string;
  costs: CostItem[];
  variant: "passive" | "aggressive" | "passive-aggressive" | "assertive";
}

export const CostCalculator = ({ title, costs, variant }: CostCalculatorProps) => {
  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          💸 {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {costs.map((cost, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div className="flex items-center gap-3">
                <span className="text-xl">{cost.icon}</span>
                <span className="font-medium">{cost.label}</span>
              </div>
              <Badge variant="secondary" className="font-semibold">
                {cost.cost}
              </Badge>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-destructive/10 rounded-lg border border-destructive/20">
          <p className="text-sm text-center font-semibold text-destructive">
            💡 These hidden costs add up! Ready to change your communication style?
          </p>
        </div>
      </CardContent>
    </Card>
  );
};