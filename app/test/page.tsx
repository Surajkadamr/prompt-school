"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import {
  Brain,
  ArrowLeft,
  Play,
  Target,
  Lightbulb,
  CheckCircle,
  TrendingUp,
  Sparkles,
  Trophy,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function PromptTestPage() {
  const [challenge, setChallenge] = useState({ question: "", requirements: [] as string[] });
  const [userPrompt, setUserPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [improvedPrompt, setImprovedPrompt] = useState("")
  const [testResults, setTestResults] = useState({
    creativity: 0,
    clarity: 0,
    effectiveness: 0,
    specificity: 0,
    overall: 0,
  })
  const [keyImprovements, setKeyImprovements] = useState<string[]>([])

  useEffect(() => {
    const fetchChallenge = async () => {
      const response = await fetch('/api/generate-challenge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: 'You are an AI assistant. Generate one creative challenge for a user to practice writing an effective AI prompt. Return the response as a JSON object with two keys: "question" (a string describing the challenge maximum 1 line question) and "requirements" (an array of 3-5 strings outlining what the user\'s prompt must achieve). The theme should be interesting and of easy difficulty.' }),
      });
      const data = await response.json();
      console.log('Received data from API:', data);
      if (response.ok && data.challenge) {
        // The AI response is now the challenge object itself
        setChallenge(data.challenge);
      }
    };
    fetchChallenge();
  }, []);

  const handleRunTest = async () => {
    if (!userPrompt.trim()) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/analyze-prompt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userPrompt ,challenge:challenge}),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze prompt');
      }

      const data = await response.json();
      const { analysis } = data;

      if (analysis) {
        setImprovedPrompt(analysis.improvedPrompt);
        setTestResults({
          creativity: analysis.scores.creativity,
          clarity: analysis.scores.clarity,
          effectiveness: analysis.scores.effectiveness,
          specificity: analysis.scores.specificity,
          overall: analysis.overallScore,
        });
        setKeyImprovements(analysis.keyImprovements);
        setShowResults(true);
      }
    } catch (error) {
      console.error("Error analyzing prompt:", error);
      // Optionally, show an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  const resetTest = () => {
    setUserPrompt("")
    setShowResults(false)
    setImprovedPrompt("")
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600"
    if (score >= 80) return "text-blue-600"
    if (score >= 70) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 90) return "bg-green-500"
    if (score >= 80) return "bg-blue-500"
    if (score >= 70) return "bg-yellow-500"
    return "bg-red-500"
  }

  const highlightChanges = (text: string) => {
    // Simulate highlighting improvements - in real implementation, this would come from backend
    const improvements = [
      "expert",
      "years of experience",
      "Clear structure",
      "Specific examples",
      "Engaging tone",
      "Actionable insights",
      "clear headings and bullet points",
    ]

    let highlightedText = text
    improvements.forEach((improvement) => {
      const regex = new RegExp(`(${improvement})`, "gi")
      highlightedText = highlightedText.replace(regex, '<mark class="bg-yellow-200 px-1 rounded">$1</mark>')
    })

    return highlightedText
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm sticky top-0 z-50 font-mono bg-white/80 border-b">
        <Link href="/" className="flex items-center justify-center">
          <ArrowLeft className="h-5 w-5 text-gray-600 mr-2" />
          <Brain className="h-8 w-8 text-purple-600" />
          <span className="ml-2 text-gray-900 text-xl font-bold">Prompt-School</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Badge className="bg-purple-100 text-purple-700">
            <Sparkles className="h-3 w-3 mr-1" />
            Testing
          </Badge>
        </div>
      </header>

      <main className="flex-1 font-mono">
        {!showResults ? (
          <section className="w-full py-5">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <Badge className="bg-purple-100 text-xs text-purple-700 mb-4 px-2 py-2">
                  <Target className="h-2 w-2 mr-2" />
                  Daily Challenge
                </Badge>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Today&apos;s
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    {" "}
                    Prompt Challenge
                  </span>
                </h1>
                
                {/* Challenge Card */}
                <Card className="max-w-3xl mx-auto mb-8 shadow-lg border-2 border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-purple-600 rounded-full p-3">
                        <Lightbulb className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Your Challenge</h2>
                    <div className="bg-white p-6 rounded-lg border-l-4 border-purple-600 text-left">
                      <p className="text-base text-gray-800 leading-relaxed">
                        <strong>{challenge.question || "Loading challenge..."}</strong>
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <strong className="text-xs text-gray-600">Requirements:</strong>
                        <ul className="list-disc list-inside text-xs text-gray-600 mt-2">
                          {challenge.requirements.length > 0 ? (
                            challenge.requirements.map((req, index) => <li key={index}>{req}</li>)
                          ) : (
                            <li>Loading requirements...</li>
                          )}
                        </ul>
                      </div>
                      <div className="hidden md:flex text-xs items-center justify-center gap-6 mt-6 text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>Est. 5-10 minutes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="h-4 w-4" />
                          <span>Difficulty: Intermediate</span>
                        </div>
                      </div>
                      </div>
                    </CardContent>
                  </Card>
                
                
              </div>

              {/* Test Interface */}
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-xl text-gray-900 flex items-center justify-center gap-2">
                    <Target className="h-6 w-6 text-purple-600" />
                    Enter Your Prompt
                  </CardTitle>
                  <p className="text-gray-600 text-sm">Write your response to the challenge above</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Textarea
                      placeholder="Example: Write a creative story about a time traveler who accidentally changes history..."
                      value={userPrompt}
                      onChange={(e) => setUserPrompt(e.target.value)}
                      className="min-h-[200px] resize-none text-sm border-2 border-gray-200 focus:border-purple-500 transition-colors"
                    />
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm text-gray-500">{userPrompt.length} characters</span>
                      <span className="text-sm text-gray-500">
                        {userPrompt.length >= 20 ? "✓ Good length" : "Minimum 20 characters"}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      onClick={handleRunTest}
                      disabled={!userPrompt.trim() || userPrompt.length < 20 || isLoading}
                      className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                      size="lg"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Analyzing Your Prompt...
                        </>
                      ) : (
                        <>
                          <Sparkles className="mr-3 h-5 w-5" />
                          Analyze My Prompt
                        </>
                      )}
                    </Button>
                  </div>

                  {userPrompt.length > 0 && userPrompt.length < 20 && (
                    <div className="text-center">
                      <Badge variant="outline" className="text-yellow-600 border-yellow-300">
                        Please write a longer prompt for better analysis
                      </Badge>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Features Preview */}
              
            </div>
          </section>
        ) : (
          /* Results Section */
          <section className="w-full py-16">
            <div className="container px-4 md:px-6 mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <Badge className="bg-green-100 text-green-700 mb-4 px-4 py-2">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Analysis Complete
                </Badge>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Prompt Analysis</h1>
                <p className="text-gray-600 text-lg">Here&apos;s how your prompt performed and how to improve it</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {/* Original vs Improved */}
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-700">Your Original Prompt</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <p className="text-gray-800 leading-relaxed">{userPrompt}</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-lg border-2 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-lg text-green-700 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        AI-Improved Version
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                        <div
                          className="text-gray-800 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: highlightChanges(improvedPrompt) }}
                        />
                      </div>
                      <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-800 flex items-center gap-2">
                          <span className="w-4 h-4 bg-yellow-200 rounded"></span>
                          Highlighted areas show AI improvements to your prompt
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Scores */}
                <div className="space-y-6">
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                        <Trophy className="h-5 w-5 text-yellow-600" />
                        Performance Scores
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Overall Score */}
                      <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <div className="text-4xl font-bold text-gray-900 mb-2">{testResults.overall}%</div>
                        <div className="text-gray-600">Overall Score</div>
                        <div className="mt-2">
                          <Badge
                            className={`${testResults.overall >= 85 ? "bg-green-100 text-green-700" : testResults.overall >= 75 ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"}`}
                          >
                            {testResults.overall >= 85
                              ? "Excellent"
                              : testResults.overall >= 75
                                ? "Good"
                                : "Needs Improvement"}
                          </Badge>
                        </div>
                      </div>

                      {/* Individual Scores */}
                      <div className="space-y-4">
                        {Object.entries(testResults)
                          .filter(([key]) => key !== "overall")
                          .map(([key, score]) => (
                            <div key={key} className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium text-gray-700 capitalize">{key}</span>
                                <span className={`text-sm font-bold ${getScoreColor(score)}`}>{score}%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full transition-all duration-1000 ${getScoreBgColor(score)}`}
                                  style={{ width: `${score}%` }}
                                ></div>
                              </div>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Key Improvements */}
                  <Card className="shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg text-gray-900 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-blue-600" />
                        Key Improvements Made
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {keyImprovements.map((improvement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="text-center space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={resetTest}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold"
                    size="lg"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Test Another Prompt
                  </Button>
                  <Button variant="outline" size="lg" className="px-8 py-3 text-lg" asChild>
                    <Link href="/">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to Home
                    </Link>
                  </Button>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg max-w-2xl mx-auto">
                  <h3 className="font-semibold text-blue-900 mb-2">💡 Pro Tip</h3>
                  <p className="text-blue-800 text-sm">
                    Copy the improved version and use it in your AI conversations for better results. The highlighted
                    changes show exactly what makes prompts more effective!
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
