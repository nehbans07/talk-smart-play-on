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


          {/* Additional Resources */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📚 Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* 7-Day Program */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-passive">🌱 Passive to Powerful Program</h3>
                <div className="grid gap-4">
                  {[
                    { day: "Day 1", phase: "Voice Recognition", task: "Notice when you stay silent when you have opinions", goal: "Awareness of passive patterns" },
                    { day: "Day 2-3", phase: "Small Choices", task: "Make ONE decision in a group setting (restaurant, movie)", goal: "Practice expressing preferences", script: "I'd prefer [option] because..." },
                    { day: "Day 4-5", phase: "Opinion Sharing", task: "Share one idea in meetings/classes", goal: "Build confidence in speaking up", script: "I have a different perspective on this..." },
                    { day: "Day 6-7", phase: "Boundary Setting", task: "Say no to one request that overburdens you", goal: "Practice healthy boundaries", script: "I won't be able to take this on, but here's what I can do..." }
                  ].map((day, index) => (
                    <div key={index} className="p-4 bg-passive/5 border border-passive/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="passive">{day.day}</Badge>
                        <span className="font-semibold">{day.phase}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{day.task}</p>
                      <p className="text-xs text-passive font-medium">Goal: {day.goal}</p>
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
                <h3 className="text-xl font-semibold mb-4 text-passive">✨ Arjun's Confidence Journey</h3>
                <div className="space-y-3">
                  {[
                    { phase: "Silent Observer", description: "Always agreeable, never shares real opinions, lets others decide everything" },
                    { phase: "Tentative Voice", description: "Starts expressing small preferences like restaurant choices or movie picks" },
                    { phase: "Idea Contributor", description: "Shares valuable insights in group projects and work meetings" },
                    { phase: "Confident Leader", description: "Becomes go-to person for balanced decisions because people trust his judgment" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-passive/10 to-transparent rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-passive text-passive-foreground rounded-full text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{step.phase}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center p-4 bg-passive/10 rounded-lg">
                  <p className="text-sm font-semibold mb-2">🌟 From Invisible to Invaluable</p>
                  <div className="flex justify-center gap-2 text-lg">
                    😶➡️🗣️➡️🌟
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

export default Passive;