import { Navigation } from "@/components/Navigation";
import { PersonalityCheck } from "@/components/PersonalityCheck";
import { CostCalculator } from "@/components/CostCalculator";
import { ScenarioGenerator } from "@/components/ScenarioGenerator";
import { TransformationPlan } from "@/components/TransformationPlan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import priyaImage from "@/assets/priya-aggressive.jpg";

const aggressiveTraits = [
  "Interrupt people mid-sentence",
  "Type in ALL CAPS when making a point",
  "Always need to prove you're right",
  "Give advice nobody asked for"
];

const aggressiveCosts = [
  { icon: "👥", label: "Friendships lost", cost: "3-4 close friends yearly" },
  { icon: "💼", label: "Career impact", cost: "Colleagues avoid you" },
  { icon: "❤️", label: "Dating disasters", cost: "Matches unmatch quickly" },
  { icon: "🏠", label: "Family tensions", cost: "Relatives avoid topics" }
];

const aggressiveScenarios = [
  {
    context: "Dating Apps",
    situation: "Match takes 3 hours to reply",
    response: "If you're not interested, just say so. I don't have time for games",
    reality: "They were in a meeting, now think you're crazy"
  },
  {
    context: "Family Group Chat",
    situation: "Aunt shares fake news article",
    response: "This is completely fake. Why do you share things without fact-checking? You're spreading misinformation",
    reality: "Now there's family drama and she's hurt"
  },
  {
    context: "Work Presentation",
    situation: "Colleague suggests different approach",
    response: "That won't work. I've tried similar things before and they failed. We should stick to my plan",
    reality: "Their idea was actually better, but now they won't share ideas anymore"
  }
];

const aggressivePlan = [
  {
    day: "Day 1-2",
    phase: "Pause Power",
    task: "Count to 5 before responding when heated",
    goal: "Create space between feeling and reacting"
  },
  {
    day: "Day 3-4",
    phase: "Listen First",
    task: "Let ONE person finish their complete thought",
    goal: "Practice active listening",
    script: "That's interesting, tell me more"
  },
  {
    day: "Day 5-6",
    phase: "'I' Statement Practice",
    task: "Replace 'You always...' with 'I feel...'",
    goal: "Take ownership of your emotions",
    script: "I feel frustrated when meetings start late"
  },
  {
    day: "Day 7",
    phase: "Apology Practice",
    task: "Apologize for ONE recent aggressive moment",
    goal: "Practice humility and repair",
    script: "I realize I interrupted you yesterday. I'd like to hear your complete thought"
  }
];

const Aggressive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-aggressive/5 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="aggressive" className="text-lg px-4 py-2">
                  😤 Aggressive Communication
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-aggressive to-aggressive/70 bg-clip-text text-transparent">
                  Meet Priya 
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  "The Bulldozer" 🔥
                </h2>
                <p className="text-lg text-muted-foreground">
                  Influencer who gets things done but leaves drama in her wake. 
                  Recognize yourself? Let's explore the world of aggressive communication.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What is Aggressive Communication?</h3>
                <Card className="p-4 bg-aggressive/10 border-aggressive/20">
                  <p className="text-sm">
                    You say what you want but bulldoze over others in the process. You win arguments but lose relationships.
                  </p>
                  <div className="mt-3 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs font-semibold">💡 Reality Check:</p>
                    <p className="text-xs">82% of people have been in a fight that started because of aggressive communication!</p>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={priyaImage} 
                alt="Priya - Aggressive Communication Character"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-aggressive text-aggressive-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                💪 I'm Priya!
              </div>
            </div>
          </div>

          {/* Personality Check */}
          <div className="mb-12">
            <PersonalityCheck
              title="Quick Personality Check"
              character="Priya"
              traits={aggressiveTraits}
              resultText="You might be Priya! Time for some self-reflection."
              variant="aggressive"
            />
          </div>

          {/* Day in the Life Story */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📖 Day-in-the-Life: Priya's Wednesday Drama</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-red-50 dark:bg-red-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🌅 Morning (Instagram Comments):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Random follower:</strong> Posts about loving pineapple pizza</p>
                    <p><strong>Priya comments:</strong> "That's literally the worst food combination ever. People who like this have no taste 🤮"</p>
                    <p><strong>Result:</strong> 47 replies arguing, Priya keeps responding to prove her point</p>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <h4 className="font-semibold mb-2">📱 Afternoon (College Group Chat):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Classmate:</strong> "Should we meet at Central Mall or Phoenix?"</p>
                    <p><strong>Priya:</strong> "Central is TERRIBLE. Parking is a nightmare and food is overpriced. Phoenix is obviously better. Why is this even a question?"</p>
                    <p><strong>Silence in group chat for 20 minutes</strong></p>
                    <p><strong>Someone:</strong> "Or we could just meet online..."</p>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🎥 Evening (YouTube Collaboration Meeting):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Collaborator:</strong> "I think we should do a makeup tutorial—"</p>
                    <p><strong>Priya interrupts:</strong> "Makeup tutorials are overdone. Gaming content gets more views. Trust me, I know what works"</p>
                    <p><strong>Collaborator:</strong> "But my audience prefers—"</p>
                    <p><strong>Priya:</strong> "Your audience is small, mine isn't. We're doing gaming."</p>
                    <p><strong>Result:</strong> Collaborator cancels, Priya rants on story about "unprofessional people"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pop Culture References */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">🎬 Pop Culture Parallels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">🎭 Bollywood:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Kabir Singh: Controls every conversation, never listens</li>
                    <li>• Tanu (Tanu Weds Manu): Always arguing, needs to win every point</li>
                  </ul>
                  
                  <h4 className="font-semibold">📺 Netflix/International:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Emily in Paris: Bulldozes through French culture with American confidence</li>
                    <li>• Rue's mom in Euphoria: Aggressive communication during conflict scenes</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">📱 Social Media Behavior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• The Quote Tweet Warrior: Always quote tweeting to prove people wrong</li>
                    <li>• ALL CAPS RESPONDER: Types like they're shouting</li>
                    <li>• The Unsolicited Advisor: Comments "You should really..." on everyone's posts</li>
                    <li>• DM Arguer: Takes disagreements to private messages to continue fighting</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScenarioGenerator
              title="Interactive Scenario Selector"
              scenarios={aggressiveScenarios}
              variant="aggressive"
            />
            
            <CostCalculator
              title="The Aggressive Communication Damage Calculator"
              costs={aggressiveCosts}
              variant="aggressive"
            />
          </div>

          {/* Transformation Plan */}
          <div className="mb-12">
            <TransformationPlan
              title="The 7-Day Bulldozer Recovery Program"
              plan={aggressivePlan}
              variant="aggressive"
            />
          </div>

          {/* Additional Resources */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📚 Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* 7-Day Program */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-aggressive">🔥 Aggressive to Assertive Bootcamp</h3>
                <div className="grid gap-4">
                  {[
                    { day: "Day 1-2", phase: "Pause Power", task: "Count to 3 before responding when feeling triggered", goal: "Break the instant reaction cycle" },
                    { day: "Day 3-4", phase: "Listen First", task: "Let someone finish their full thought before responding", goal: "Develop active listening skills", script: "Help me understand your perspective..." },
                    { day: "Day 5-6", phase: "Question Mode", task: "Ask one clarifying question instead of giving immediate solutions", goal: "Show curiosity over certainty", script: "What would ideal success look like for you?" },
                    { day: "Day 7", phase: "Collaborative Close", task: "End one difficult conversation with collaboration", goal: "Transform conflict into teamwork", script: "How can we work together on this?" }
                  ].map((day, index) => (
                    <div key={index} className="p-4 bg-aggressive/5 border border-aggressive/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="aggressive">{day.day}</Badge>
                        <span className="font-semibold">{day.phase}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{day.task}</p>
                      <p className="text-xs text-aggressive font-medium">Goal: {day.goal}</p>
                      {day.script && (
                        <div className="mt-2 p-2 bg-background/50 rounded text-xs italic">
                          "Script: {day.script}"
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Character Evolution */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-aggressive">✨ Priya's Leadership Evolution</h3>
                <div className="space-y-3">
                  {[
                    { phase: "Bulldozer Boss", description: "Steamrolls conversations, dismisses others' ideas, creates defensive team members" },
                    { phase: "Awareness Awakening", description: "Realizes her approach is causing collaboration breakdowns and team conflicts" },
                    { phase: "Listening Leader", description: "Practices active listening and asks questions before offering solutions" },
                    { phase: "Collaborative Champion", description: "Becomes the leader everyone wants to work with - firm but fair, decisive but inclusive" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-aggressive/10 to-transparent rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-aggressive text-aggressive-foreground rounded-full text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{step.phase}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center p-4 bg-aggressive/10 rounded-lg">
                  <p className="text-sm font-semibold mb-2">🚀 From Bulldozer to Bridge-Builder</p>
                  <div className="flex justify-center gap-2 text-lg">
                    🔥💥➡️🤝✨
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Aggressive;