import { Navigation } from "@/components/Navigation";
import { PersonalityCheck } from "@/components/PersonalityCheck";
import { CostCalculator } from "@/components/CostCalculator";
import { ScenarioGenerator } from "@/components/ScenarioGenerator";
import { TransformationPlan } from "@/components/TransformationPlan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import arjunImage from "@/assets/arjun-passive.jpg";

const passiveTraits = [
  "Avoid eye contact during disagreements",
  "Say 'whatever you want' even when you have preferences",
  "Apologize for things that aren't your fault",
  "Let others make decisions for you"
];

const passiveCosts = [
  { icon: "🍕", label: "Food you didn't want", cost: "₹2,000/month" },
  { icon: "⏰", label: "Time wasted", cost: "5 hours/week" },
  { icon: "😔", label: "Emotional cost", cost: "Daily frustration" },
  { icon: "🎯", label: "Missed opportunities", cost: "Jobs, relationships" }
];

const passiveScenarios = [
  {
    context: "Dating App",
    situation: "Match asks: 'What kind of movies do you like?'",
    response: "I watch anything, what about you?",
    reality: "You hate action movies but will sit through 3 hours of explosions"
  },
  {
    context: "Job Interview",
    situation: "'Do you have any questions for us?'",
    response: "No, I think you covered everything",
    reality: "You have 10 important questions but don't want to seem pushy"
  },
  {
    context: "Family WhatsApp Group",
    situation: "Cousin shares political post you disagree with",
    response: "Leaves on read",
    reality: "You have strong opinions but avoid family drama"
  }
];

const passivePlan = [
  {
    day: "Day 1-2",
    phase: "Awareness Phase",
    task: "Track 'I don't mind' moments",
    goal: "Just notice, don't change yet"
  },
  {
    day: "Day 3-4",
    phase: "Baby Steps",
    task: "Make ONE small preference known",
    goal: "Express a simple choice",
    script: "I'd prefer [X], but I'm open to other options too"
  },
  {
    day: "Day 5-6",
    phase: "Opinion Sharing",
    task: "Share one thought in group conversation",
    goal: "Voice your perspective",
    script: "I think [opinion] because [reason]"
  },
  {
    day: "Day 7",
    phase: "Boundary Setting",
    task: "Say no to ONE thing you don't want",
    goal: "Practice saying no kindly",
    script: "That doesn't work for me, but how about [alternative]?"
  }
];

const Passive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-passive/5 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="passive" className="text-lg px-4 py-2">
                  🤐 Passive Communication
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-passive to-passive/70 bg-clip-text text-transparent">
                  Meet Arjun 
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  "The Silent Sufferer" 😶
                </h2>
                <p className="text-lg text-muted-foreground">
                  College student who says "it's fine" when group mates dump all work on him. 
                  Sound familiar? Let's dive into the world of passive communication.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What is Passive Communication?</h3>
                <Card className="p-4 bg-passive/10 border-passive/20">
                  <p className="text-sm">
                    You avoid saying what you really think or feel. You're the "it's okay" person when it's really NOT okay! 😅
                  </p>
                  <div className="mt-3 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs font-semibold">💡 Fun Fact:</p>
                    <p className="text-xs">68% of people struggle with being too passive in at least one area of their life!</p>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={arjunImage} 
                alt="Arjun - Passive Communication Character"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-passive text-passive-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                👋 Hi, I'm Arjun!
              </div>
            </div>
          </div>

          {/* Personality Check */}
          <div className="mb-12">
            <PersonalityCheck
              title="Quick Personality Check"
              character="Arjun"
              traits={passiveTraits}
              resultText="You might be Arjun! Keep reading."
              variant="passive"
            />
          </div>

          {/* Day in the Life Story */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📖 Day-in-the-Life: Arjun's Tuesday</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🌅 Morning (WhatsApp Group Chat):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Classmate:</strong> "Let's meet at 7 AM for project discussion"</p>
                    <p><strong>Arjun's thoughts:</strong> "That's way too early!"</p>
                    <p><strong>Arjun types:</strong> "Sure, works for me 😊"</p>
                    <p><strong>Others:</strong> Multiple people complain it's early</p>
                    <p><strong>Result:</strong> Meeting moved to 10 AM, but Arjun already woke up at 6:30</p>
                  </div>
                </div>

                <div className="p-4 bg-orange-50 dark:bg-orange-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🍕 Lunch (Choosing Restaurant):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Friend:</strong> "Where should we eat?"</p>
                    <p><strong>Arjun:</strong> "I don't mind, you choose"</p>
                    <p><strong>Friend picks expensive place Arjun can't afford</strong></p>
                    <p><strong>Arjun's thoughts:</strong> "There goes my week's budget"</p>
                    <p><strong>What Arjun says:</strong> Nothing</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold mb-2">📚 Evening (Group Study):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Team discusses project topic Arjun hates</strong></p>
                    <p><strong>Arjun:</strong> Nods silently while dying inside</p>
                    <p><strong>Teammate:</strong> "Arjun, you seem to agree with everything!"</p>
                    <p><strong>Arjun:</strong> "Yeah, it all sounds good"</p>
                    <p><strong>Reality:</strong> He has amazing ideas but never shares them</p>
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
                    <li>• Rani (Queen - first half): Agrees to everything her fiancé says</li>
                    <li>• Piku's aunt: Always says "whatever you think is best"</li>
                  </ul>
                  
                  <h4 className="font-semibold">📺 Netflix Shows:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Devi's mom in Never Have I Ever (Season 1): Doesn't speak up about her own needs</li>
                    <li>• Otis in Sex Education (early episodes): Avoids confronting his mom about boundaries</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">📱 Social Media Behavior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• The Ghost Reactor: Likes everyone's posts but never comments opinions</li>
                    <li>• "I don't mind" person in group chats for restaurant choices</li>
                    <li>• Story viewer but never responds to "this or that" polls</li>
                    <li>• The Serial Agreeer: Comments "so true!" on conflicting opinions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScenarioGenerator
              title="Real-Life Scenario Generator"
              scenarios={passiveScenarios}
              variant="passive"
            />
            
            <CostCalculator
              title="The Passive Communication Cost Calculator"
              costs={passiveCosts}
              variant="passive"
            />
          </div>

          {/* Transformation Plan */}
          <div className="mb-12">
            <TransformationPlan
              title="The 7-Day Passive Recovery Program"
              plan={passivePlan}
              variant="passive"
            />
          </div>

          {/* Character Evolution */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">✨ Character Evolution: Arjun's Glow-Up Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  "Week 1: Arjun starts small - chooses the restaurant once",
                  "Week 2: Shares an idea in group project",
                  "Week 3: Says no to 7 AM meeting, suggests 10 AM instead",
                  "Week 4: Gets selected as team leader because people finally heard his great ideas!"
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-passive/10 rounded-lg">
                    <Badge variant="passive">Week {index + 1}</Badge>
                    <span className="text-sm">{step.split(': ')[1]}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm font-semibold mb-4">Track your progress like Arjun!</p>
                <div className="flex justify-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <span key={star} className="text-2xl">⭐</span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Passive;