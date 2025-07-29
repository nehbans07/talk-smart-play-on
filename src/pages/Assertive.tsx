import { Navigation } from "@/components/Navigation";
import { PersonalityCheck } from "@/components/PersonalityCheck";
import { CostCalculator } from "@/components/CostCalculator";
import { ScenarioGenerator } from "@/components/ScenarioGenerator";
import { TransformationPlan } from "@/components/TransformationPlan";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import aaravImage from "@/assets/aarav-assertive.jpg";

const assertiveTraits = [
  "Make eye contact during conversations",
  "Say 'I disagree because...' instead of 'You're wrong'",
  "Ask questions to understand others' perspectives",
  "Set boundaries without being rude"
];

const assertiveBenefits = [
  { icon: "💼", label: "Career boost", cost: "73% more leadership potential" },
  { icon: "❤️", label: "Better relationships", cost: "85% less unresolved conflicts" },
  { icon: "🧠", label: "Mental peace", cost: "No energy wasted on mind games" },
  { icon: "🎯", label: "Goal achievement", cost: "People want to help you" }
];

const assertiveScenarios = [
  {
    context: "Job Interview",
    situation: "'Why should we hire you over other candidates?'",
    response: "I bring [specific skills] and [specific experience]. I'm also curious about the team's biggest challenges right now and how this role addresses them.",
    reality: "Confident but not arrogant, shows interest in company too"
  },
  {
    context: "Friend Borrowing Money",
    situation: "'Can you lend me ₹5000? I'll pay back soon'",
    response: "I care about our friendship, which is why I'm honest about money. I can lend ₹2000 if you need it urgently, and let's set a specific date for payback.",
    reality: "Shows care, sets clear boundaries, prevents resentment"
  },
  {
    context: "Dating Red Flag",
    situation: "Date keeps checking phone during dinner",
    response: "I notice you're getting a lot of messages. Is everything okay? I was hoping we could focus on getting to know each other tonight.",
    reality: "Addresses issue directly but gives benefit of doubt"
  }
];

const assertivePlan = [
  {
    day: "Day 1-2",
    phase: "'I' Statement Revolution",
    task: "Replace 'You always...' with 'I feel...'",
    goal: "Take ownership of your emotions",
    script: "I feel rushed when meetings start without agenda"
  },
  {
    day: "Day 3-4",
    phase: "The Question Game",
    task: "Ask one clarifying question before responding in disagreements",
    goal: "Understand before being understood",
    script: "Help me understand your perspective on this"
  },
  {
    day: "Day 5-6",
    phase: "Boundary Setting Practice",
    task: "Set one small boundary without over-explaining",
    goal: "Be clear and concise",
    script: "That doesn't work for me"
  },
  {
    day: "Day 7",
    phase: "The Difficult Conversation",
    task: "Have one honest conversation you've been avoiding",
    goal: "Address issues directly and kindly",
    script: "I'd like to talk about [situation]. I feel [emotion] when [behavior]. Can we find a solution together?"
  }
];

const Assertive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-assertive/5 to-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="assertive" className="text-lg px-4 py-2">
                  👑 Assertive Communication
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-assertive to-assertive/70 bg-clip-text text-transparent">
                  Meet Aarav 
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                  "The Balanced King" ✨
                </h2>
                <p className="text-lg text-muted-foreground">
                  Final year student who gets things done while keeping everyone happy and heard. 
                  Ready to level up? Let's master assertive communication together.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">What is Assertive Communication?</h3>
                <Card className="p-4 bg-assertive/10 border-assertive/20">
                  <p className="text-sm">
                    You express yourself clearly and honestly while respecting others. You're the group's unofficial mediator and everyone's go-to person for advice.
                  </p>
                  <div className="mt-3 p-3 bg-primary/10 rounded-lg">
                    <p className="text-xs font-semibold">💡 Success Stats:</p>
                    <p className="text-xs">People with assertive communication skills are 40% more likely to get promoted and have 60% less relationship conflicts!</p>
                  </div>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aaravImage} 
                alt="Aarav - Assertive Communication Character"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-assertive text-assertive-foreground px-4 py-2 rounded-xl font-semibold shadow-lg">
                👑 I'm Aarav!
              </div>
            </div>
          </div>

          {/* Personality Check */}
          <div className="mb-12">
            <PersonalityCheck
              title="Quick Personality Check"
              character="Aarav"
              traits={assertiveTraits}
              resultText="You're already on the Aarav path! Let's level up together."
              variant="assertive"
            />
          </div>

          {/* Day in the Life Story */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📖 Day-in-the-Life: Aarav's Friday Wins</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🌅 Morning (Group Project Leadership):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Team meeting about presentation topic</strong></p>
                    <p><strong>Teammate 1:</strong> "Let's do AI and jobs"</p>
                    <p><strong>Teammate 2:</strong> "That's boring, let's do social media addiction"</p>
                    <p><strong>Aarav:</strong> "Both are interesting. Let me understand - what specifically about AI interests you? And what angle were you thinking for social media?"</p>
                    <p><strong>After discussion:</strong> "What if we combine them? AI's impact on social media and attention spans?"</p>
                    <p><strong>Result:</strong> Everyone feels heard, topic is even better than original ideas</p>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
                  <h4 className="font-semibold mb-2">📱 Afternoon (Dating App Conversation):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Match:</strong> "Want to meet tonight?"</p>
                    <p><strong>Aarav:</strong> "I'd love to meet, but tonight doesn't work for me. I'm free tomorrow evening or this weekend. What works better for you?"</p>
                    <p><strong>Match:</strong> "Tomorrow sounds perfect!"</p>
                    <p><strong>Result:</strong> Clear boundaries, mutual respect, successful date planned</p>
                  </div>
                </div>

                <div className="p-4 bg-teal-50 dark:bg-teal-950 rounded-lg">
                  <h4 className="font-semibold mb-2">🏠 Evening (Family Dinner Drama Resolution):</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Dad:</strong> "You should focus on engineering, not this startup idea"</p>
                    <p><strong>Old Aarav would:</strong> Either agree silently or argue aggressively</p>
                    <p><strong>New Aarav:</strong> "I understand you're concerned about my financial security. That matters to me too. Can I share my research on this market and my backup plan?"</p>
                    <p><strong>Result:</strong> Dad listens, still worried but respects the thoughtful approach</p>
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
                  <h4 className="font-semibold">🎭 Bollywood Gold:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Rani (Queen - second half): Clear about boundaries, respectful but firm</li>
                    <li>• Deepika (Piku): Handles family drama with clarity and compassion</li>
                    <li>• Arjun (Zindagi Na Milegi Dobara): Mediates friend conflicts effectively</li>
                  </ul>
                  
                  <h4 className="font-semibold">📺 Netflix Winners:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Otis (Sex Education - later seasons): Learns to communicate clearly about boundaries</li>
                    <li>• Devi (Never Have I Ever - season 3+): Growth in handling conflicts directly</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">📱 Social Media Behavior:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• The Thoughtful Commenter: "I see your point. Here's another perspective..."</li>
                    <li>• Boundary Setter: "I don't discuss politics online, but happy to chat in person"</li>
                    <li>• Conflict Resolver: Slides into DMs to clear up misunderstandings</li>
                    <li>• Supportive but Honest: "Love this for you! Have you considered [helpful suggestion]?"</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Interactive Components Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <ScenarioGenerator
              title="Interactive Success Simulator"
              scenarios={assertiveScenarios}
              variant="assertive"
            />
            
            <CostCalculator
              title="The Assertive Communication Success Calculator"
              costs={assertiveBenefits}
              variant="assertive"
            />
          </div>

          {/* Transformation Plan */}
          <div className="mb-12">
            <TransformationPlan
              title="The 7-Day Assertive Mastery Program"
              plan={assertivePlan}
              variant="assertive"
            />
          </div>

          {/* Communication Script Library */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📚 Assertive Communication Script Library</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="p-4 bg-assertive/10 rounded-lg">
                    <h4 className="font-semibold mb-2">For Setting Boundaries:</h4>
                    <ul className="space-y-2 text-xs">
                      <li>• "I'm not available for work calls after 8 PM, but I can address this first thing tomorrow"</li>
                      <li>• "I need to think about this decision. Can I get back to you by [specific time]?"</li>
                      <li>• "I'm not comfortable with that approach. How about we try [alternative]?"</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-assertive/10 rounded-lg">
                    <h4 className="font-semibold mb-2">For Disagreeing Respectfully:</h4>
                    <ul className="space-y-2 text-xs">
                      <li>• "I see it differently. My experience with [situation] suggests [viewpoint]"</li>
                      <li>• "That's an interesting perspective. I've found that [your experience]"</li>
                      <li>• "I respect your opinion and disagree because [specific reason]"</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-assertive/10 rounded-lg">
                    <h4 className="font-semibold mb-2">For Asking for What You Need:</h4>
                    <ul className="space-y-2 text-xs">
                      <li>• "I need [specific thing] to be successful in this project"</li>
                      <li>• "I would appreciate [specific behavior] because [specific reason]"</li>
                      <li>• "This is important to me because [explanation]. Can we find a way to make it work?"</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-assertive/10 rounded-lg">
                    <h4 className="font-semibold mb-2">For Giving Feedback:</h4>
                    <ul className="space-y-2 text-xs">
                      <li>• "I noticed [specific behavior]. The impact was [specific result]. Going forward, could we try [specific suggestion]?"</li>
                      <li>• "I appreciate [positive thing]. I'd love to see more of [specific improvement]"</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">📚 Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* 7-Day Program */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-assertive">👑 Assertive Mastery Accelerator</h3>
                <div className="grid gap-4">
                  {assertivePlan.map((day, index) => (
                    <div key={index} className="p-4 bg-assertive/5 border border-assertive/20 rounded-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant="assertive">{day.day}</Badge>
                        <span className="font-semibold">{day.phase}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{day.task}</p>
                      <p className="text-xs text-assertive font-medium">Goal: {day.goal}</p>
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
                <h3 className="text-xl font-semibold mb-4 text-assertive">✨ Aarav's Communication Mastery</h3>
                <div className="space-y-3">
                  {[
                    { phase: "Natural Mediator", description: "Already good at balanced communication but wants to refine his leadership skills" },
                    { phase: "Advanced Listening", description: "Masters the art of making others feel truly heard and understood" },
                    { phase: "Conflict Resolution Expert", description: "Becomes the go-to person for resolving team disputes and complex negotiations" },
                    { phase: "Communication Mentor", description: "Teaches others assertive communication, creating positive ripple effects in his network" }
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-r from-assertive/10 to-transparent rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-assertive text-assertive-foreground rounded-full text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">{step.phase}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center p-4 bg-assertive/10 rounded-lg">
                  <p className="text-sm font-semibold mb-2">👑 From Good Communicator to Communication Champion</p>
                  <div className="flex justify-center gap-2 text-lg">
                    🗣️➡️🤝➡️👑➡️🌟
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Character Evolution */}
          <Card className="mb-12 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">🌟 Multi-Character Crossover: The Friend Group Transformation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold">The Scenario: Planning a trip to Goa</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-passive/10 rounded-lg">
                      <p className="text-sm"><strong>Arjun (Passive):</strong> "I don't mind wherever you all want to go"</p>
                    </div>
                    <div className="p-3 bg-aggressive/10 rounded-lg">
                      <p className="text-sm"><strong>Priya (Aggressive):</strong> "Goa is overrated and expensive. Rishikesh is better"</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-passive-aggressive/10 rounded-lg">
                      <p className="text-sm"><strong>Kavya (Passive-Aggressive):</strong> "Sure, Goa sounds great if you like crowded tourist traps 🙃"</p>
                    </div>
                    <div className="p-3 bg-assertive/10 rounded-lg">
                      <p className="text-sm"><strong>Aarav (Assertive):</strong> "I'm excited about this trip! What's everyone hoping to get out of it? Beach time, adventure, or relaxation? That might help us choose the best spot"</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 dark:bg-green-950 rounded-lg">
                  <h4 className="font-semibold mb-2">The Result:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✅ Everyone shares their actual preferences</li>
                    <li>✅ They choose Goa for beaches + plan one day trip to nearby adventure spots</li>
                    <li>✅ Budget concerns addressed upfront</li>
                    <li>✅ Everyone feels heard and excited</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Assertive;