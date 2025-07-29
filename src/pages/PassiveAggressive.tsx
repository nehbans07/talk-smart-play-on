import { Navigation } from "@/components/Navigation";
import { PersonalityCheck } from "@/components/PersonalityCheck";
import { CostCalculator } from "@/components/CostCalculator";
import { ScenarioGenerator } from "@/components/ScenarioGenerator";
import { TransformationPlan } from "@/components/TransformationPlan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import kavyaImage from "@/assets/kavya-passive-aggressive.jpg";

const passiveAggressiveTraits = [
  "Post vague stories when upset with someone specific",
  "Say 'fine' but clearly show you're not fine",
  "Like old photos of people you're mad at (psychological warfare)",
  "Complain to everyone except the person you're mad at"
];

const passiveAggressiveCosts = [
  { icon: "🧠", label: "Mental exhaustion", cost: "6 hours daily plotting" },
  { icon: "😴", label: "Sleep loss", cost: "Staying up creating stories" },
  { icon: "👥", label: "Confused friends", cost: "People walking on eggshells" },
  { icon: "💔", label: "Relationship damage", cost: "Problems never solved" }
];

const passiveAggressiveScenarios = [
  {
    context: "Roommate Ate Your Food",
    situation: "Your roommate ate your labeled food from the fridge",
    response: "Post story: 'Imagine eating food that isn't yours 🤡'",
    reality: "Roommate has no idea it's about them, problem continues"
  },
  {
    context: "Friend Got Job You Wanted",
    situation: "Your friend got the internship you applied for",
    response: "Comment 'So happy for you! 😊' but the emoji doesn't reach your eyes",
    reality: "You spend hours crafting the perfect passive-aggressive congratulations"
  },
  {
    context: "Crush Dating Someone Else",
    situation: "Your crush starts dating someone else",
    response: "Like all their old photos with their ex",
    reality: "You've now revealed you've been stalking their profile for months"
  }
];

const passiveAggressivePlan = [
  {
    day: "Day 1-2",
    phase: "Awareness Mode",
    task: "Screenshot passive-aggressive messages before sending",
    goal: "Notice how much energy you spend on indirect communication"
  },
  {
    day: "Day 3-4",
    phase: "Direct Message Practice",
    task: "Send ONE direct message instead of vague story",
    goal: "Practice direct communication",
    script: "I felt hurt when you canceled last minute"
  },
  {
    day: "Day 5-6",
    phase: "Sarcasm Detox",
    task: "Replace sarcastic responses with honest ones",
    goal: "Express real feelings",
    script: "I'm actually disappointed about this"
  },
  {
    day: "Day 7",
    phase: "Honesty Challenge",
    task: "Have one completely honest conversation",
    goal: "Clear the air directly",
    script: "Can we talk? I've been upset about [specific situation]"
  }
];

const PassiveAggressive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-passive-aggressive/5 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="passive-aggressive" className="text-lg px-4 py-2">
                  😏 Passive-Aggressive Communication
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-passive-aggressive to-passive-aggressive/70 bg-clip-text text-transparent">
                  Meet Kavya 
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  "Queen of Mixed Signals" 🙄
                </h2>
                <p className="text-lg text-muted-foreground">
                  Masters student who smiles while plotting revenge through strategic Instagram stories. 
                  Do you recognize these mind games? Let's decode passive-aggressive communication.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What is Passive-Aggressive Communication?</h3>
                <Card className="p-4 bg-passive-aggressive/10 border-passive-aggressive/20">
                  <p className="text-sm">
                    You're mad but express it through indirect actions, sarcasm, and strategic social media moves. You're playing 4D chess while others are playing checkers.
                  </p>
                  <div className="mt-3 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs font-semibold">💡 Tea Spill:</p>
                    <p className="text-xs">91% of Gen Z has been passive-aggressive on social media at least once!</p>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={kavyaImage} 
                alt="Kavya - Passive-Aggressive Communication Character"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-passive-aggressive text-passive-aggressive-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                😏 Hey, I'm Kavya!
              </div>
            </div>
          </div>

          {/* Personality Check */}
          <div className="mb-12">
            <PersonalityCheck
              title="Quick Personality Check"
              character="Kavya"
              traits={passiveAggressiveTraits}
              resultText="You're definitely channeling Kavya! Let's decode this together."
              variant="passive-aggressive"
            />
          </div>

          {/* Day in the Life Story */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📖 Day-in-the-Life: Kavya's Thursday Mind Games</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-purple-50 dark:bg-purple-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🌅 Morning (The Setup):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Best friend Nisha cancels movie plans last minute via text</strong></p>
                    <p><strong>Kavya's response:</strong> "No worries! 😊"</p>
                    <p><strong>Kavya's real thoughts:</strong> "I already bought the tickets and took time off work"</p>
                    <p><strong>Kavya's action:</strong> Screenshots the conversation to send to other friends</p>
                  </div>
                </div>

                <div className="p-4 bg-pink-50 dark:bg-pink-950 rounded-lg">
                  <h4 className="font-semibold mb-2">📱 Afternoon (The Instagram Strategy):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Kavya posts story:</strong> "Some people really don't value other people's time 🙃"</p>
                    <p><strong>Adds a poll:</strong> "Is it just me or do people make plans they don't intend to keep?"</p>
                    <p><strong>Posts another story:</strong> Having fun with "RELIABLE friends" at a café</p>
                    <p><strong>Strategic move:</strong> Makes sure Nisha can see she's active but doesn't reply to her texts</p>
                  </div>
                </div>

                <div className="p-4 bg-indigo-50 dark:bg-indigo-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🎬 Evening (The Plot Thickens):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Nisha calls:</strong> "Are you mad at me?"</p>
                    <p><strong>Kavya:</strong> "Why would I be mad? I said it's fine 🙂"</p>
                    <p><strong>Nisha:</strong> "Your stories seem like they're about me..."</p>
                    <p><strong>Kavya:</strong> "Not everything is about you. I was just sharing thoughts"</p>
                    <p><strong>Final move:</strong> Proceeds to like Nisha's ex-boyfriend's photos from 2019</p>
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
                    <li>• Geet (Jab We Met) when she's upset but won't say why</li>
                    <li>• Every saas-bahu serial where the saas smiles while planning revenge</li>
                    <li>• Poo (K3G) with her strategic silent treatments</li>
                  </ul>
                  
                  <h4 className="font-semibold">📺 Netflix/OTT:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Ginny (Ginny & Georgia) with her mom - says she's fine but clearly isn't</li>
                    <li>• Love is Blind contestants who say they're "happy for" their ex while clearly plotting</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">📱 Social Media Warfare:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Vague Story Queen: "Some people... you know who you are 👀"</li>
                    <li>• Strategic Liker: Likes everyone's posts except THAT person</li>
                    <li>• The Subtweet Specialist: Tweets quotes that are clearly about someone specific</li>
                    <li>• Read Receipt Manipulator: Reads messages but doesn't respond for exactly 4 hours</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScenarioGenerator
              title="Interactive Mind Games Simulator"
              scenarios={passiveAggressiveScenarios}
              variant="passive-aggressive"
            />
            
            <CostCalculator
              title="The Passive-Aggressive Energy Calculator"
              costs={passiveAggressiveCosts}
              variant="passive-aggressive"
            />
          </div>

          {/* Transformation Plan */}
          <div className="mb-12">
            <TransformationPlan
              title="The 7-Day Straight Talk Recovery Program"
              plan={passiveAggressivePlan}
              variant="passive-aggressive"
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
                <h3 className="text-xl font-semibold mb-4 text-passive-aggressive">🎯 Passive-Aggressive Recovery Program</h3>
                <div className="grid gap-4">
                  {passiveAggressivePlan.map((day, index) => (
                    <div key={index} className="p-4 bg-passive-aggressive/5 border border-passive-aggressive/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="passive-aggressive">{day.day}</Badge>
                        <span className="font-semibold">{day.phase}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{day.task}</p>
                      <p className="text-xs text-passive-aggressive font-medium">Goal: {day.goal}</p>
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
                <h3 className="text-xl font-semibold mb-4 text-passive-aggressive">✨ Kavya's Transformation Journey</h3>
                <div className="space-y-3">
                  {[
                    { phase: "Mind Games Master", description: "Exhausting herself with strategic social media warfare and indirect communication" },
                    { phase: "Awareness Dawn", description: "Realizes her energy is better spent on direct communication than plotting revenge" },
                    { phase: "Direct Communication", description: "Has honest conversation with Nisha instead of Instagram stories" },
                    { phase: "Strategic Clarity", description: "Channels her planning skills into productive, honest relationships" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-passive-aggressive/10 to-transparent rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-passive-aggressive text-passive-aggressive-foreground rounded-full text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{step.phase}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center p-4 bg-passive-aggressive/10 rounded-lg">
                  <p className="text-sm font-semibold mb-2">🎭 From Mind Games to Clear Communication</p>
                  <div className="flex justify-center gap-2 text-lg">
                    😏📱➡️💬✨
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

export default PassiveAggressive;