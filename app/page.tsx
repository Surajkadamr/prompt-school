"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  Zap,
  Shield,
  BookOpen,
} from "lucide-react"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"
import "@/components/ui/progress.tsx"

export default function PromptSchoolLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm sticky top-0 z-50 font-mono bg-[rgba(251,246,255,1)]">
        <Link href="/" className="flex items-center justify-center">
          <Brain className="h-8 w-8 text-black" />
          <span className="ml-2 text-gray-900 text-lg lg:text-xl  font-bold">Prompt-School</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            Features
          </Link>
          <Link href="#tests" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            Tests
          </Link>

          <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors">
            About
          </Link>
        </nav>
        <div className="ml-auto lg:ml-6 flex items-center gap-4">
          <Button className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
            <Link href="/test">Start Testing</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-10 md:py-16 bg-gradient-to-b from-purple-50 to-white lg:py-20">
          <div className="container px-4 mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center px-2">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge variant="destructive" className="bg-purple-100 text-purple-700 hover:bg-purple-100 font-mono">
                    🚀 Master AI Prompting Skills
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 font-mono">
                    How Good Are
                    <span className="block text-purple-600">Your AI Prompts?</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-lg leading-relaxed font-mono">
                    Get an instant score, see detailed analysis, and learn to craft prompts that deliver perfect results.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" asChild>
                    <Link href="/test">
                      Take Your First Test
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto overflow-hidden rounded-xl bg-gradient-to-br from-purple-100 to-purple-200 lg:order-last">
                <div className="w-full h-full backdrop-blur-sm rounded-xl p-6 shadow-2xl bg-white">
                  <div className="space-y-6 font-mono">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Prompting Dashboard</h3>
                      <Badge className="bg-green-100 text-green-700">Active</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Card className="py-1">
                        <CardContent className="p-3 ">
                          <div className="text-xl font-bold text-purple-600">89%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </CardContent>
                      </Card>
                      <Card className="py-1">
                        <CardContent className="p-3">
                          <div className="text-xl font-bold text-blue-600">24</div>
                          <div className="text-xs text-gray-600">Tests Completed</div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>73%</span>
                      </div>
                      <Progress value={73} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* Horizontal Scrolling Quotes Section */}
        <section className="w-full bg-gradient-to-b from-gray-50 to-white font-mono py-16 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-purple-100 text-purple-700 mb-4">Industry Insights</Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                What Industry Leaders Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The future of AI interaction is prompting - hear from the visionaries shaping tomorrow
              </p>
            </div>
            <div className="relative">
              <div className="flex animate-scroll space-x-8">
                <Card className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white py-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">SA</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-sm text-gray-900">Sam Altman</div>
                        <div className="text-xs text-purple-600">CEO, OpenAI</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs italic leading-relaxed">
                      {`"Prompting is becoming the most important skill of the 21st century. Those who master it will
                      shape the future of AI."`}
                    </p>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-blue-50 to-white py-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">EM</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-sm text-gray-900">Elon Musk</div>
                        <div className="text-xs text-blue-600">CEO, Tesla & xAI</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs italic leading-relaxed">
                      {`"The ability to communicate effectively with AI through prompting will be as fundamental as coding
                      was in the past decade."`}
                    </p>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-green-50 to-white py-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">SP</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-sm text-gray-900">Sundar Pichai</div>
                        <div className="text-xs text-green-600">CEO, Google</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs italic leading-relaxed">
                      {`"Prompt engineering is the bridge between human creativity and AI capability. It's the skill that
                      will define the next generation of innovators."`}
                    </p>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-yellow-50 to-white py-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">SN</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-sm text-gray-900">Satya Nadella</div>
                        <div className="text-xs text-yellow-600">CEO, Microsoft</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs italic leading-relaxed">
                      {`"In the age of AI, prompting is not just a skill—it's a superpower that will amplify human
                      potential exponentially."`}
                    </p>
                  </CardContent>
                </Card>

                <Card className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-orange-50 to-white py-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">JH</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-sm text-gray-900">Jensen Huang</div>
                        <div className="text-xs text-orange-600">CEO, NVIDIA</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs italic leading-relaxed">
                      {`"Prompting is the new programming. Every professional will need to master this art to stay
                      relevant in the AI-driven economy."`}
                    </p>
                  </CardContent>
                </Card>

                {/* Duplicate for seamless loop */}
                <Card className="flex-shrink-0 w-80 border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-purple-50 to-white py-2">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-base">SA</span>
                      </div>
                      <div className="ml-3">
                        <div className="font-semibold text-sm text-gray-900">Sam Altman</div>
                        <div className="text-xs text-purple-600">CEO, OpenAI</div>
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs italic leading-relaxed">
                      {`"Prompting is becoming the most important skill of the 21st century. Those who master it will
                      shape the future of AI."`}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-20 bg-gray-50 font-mono">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                {`World's smartest prompt testing platform`}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comprehensive platform helps you master AI prompting through interactive tests and real-time
                feedback.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Target className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Precision Testing</h3>
                  <p className="text-gray-600 text-sm">
                    Advanced algorithms evaluate your prompting skills with precision and provide detailed feedback.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Progress Tracking</h3>
                  <p className="text-gray-600 text-sm">
                    Monitor your improvement over time with detailed analytics and performance metrics.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <Users className="h-10 w-10 text-green-600 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Community Learning</h3>
                  <p className="text-gray-600 text-sm">
                    Learn from a community of prompt engineers and share your knowledge with others.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="w-full py-16 md:py-24 bg-white font-mono">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700">Advanced Analytics</Badge>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-gray-900">
                  Detailed Performance Insights
                </h2>
                <p className="text-gray-600 text-base">
                  Get comprehensive analytics on your prompting performance. Track your strengths, identify areas for
                  improvement, and see how you compare to other users.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Real-time performance tracking</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Detailed skill breakdown</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span>Personalized recommendations</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <Card className="shadow-xl">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">Performance Overview</h3>
                        <BarChart3 className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Creativity</span>
                          <div className="flex items-center gap-2">
                            <Progress value={85} className="w-[100px]" />
                            <span className="text-sm font-medium">85%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Clarity</span>
                          <div className="flex items-center gap-2">
                            <Progress value={92} className="w-[100px]" />
                            <span className="text-sm font-medium">92%</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Effectiveness</span>
                          <div className="flex items-center gap-2">
                            <Progress value={78} className="w-[100px]" />
                            <span className="text-sm font-medium">78%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Purple CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-mono">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to master AI prompting?</h2>
              <p className="text-purple-100 text-lg">
                Join thousands of users who have improved their prompting skills with our comprehensive testing
                platform. Start your journey today and become a prompting expert.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
                <div className="space-y-4">
                  <div className="text-left">
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                    />
                  </div>
                  <Button size="lg" className="w-full bg-white text-purple-600 hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="w-full py-16 md:py-24 bg-gray-50 font-mono">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                Everything you need to succeed
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Zap className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="font-semibold mb-2">Instant Feedback</h3>
                <p className="text-gray-600 text-sm">Get immediate results and suggestions for improvement</p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Secure Platform</h3>
                <p className="text-gray-600 text-sm">
                  Your data and progress are protected with enterprise-grade security
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibent mb-2">Learning Resources</h3>
                <p className="text-gray-600 text-sm">Access comprehensive guides and tutorials</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24 bg-white font-mono">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">What our users say</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {`"Prompt-School transformed my AI interaction skills. The tests are challenging and the feedback is
                    incredibly detailed."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">SJ</span>
                    </div>
                    <div>
                      <div className="font-semibold">Sarah Johnson</div>
                      <div className="text-sm text-gray-600">AI Researcher</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-[rgba(250,204,21,1)]" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {`"The progress tracking feature is amazing. I can see exactly how I'm improving and where I need to
                    focus."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">MC</span>
                    </div>
                    <div>
                      <div className="font-semibold">Mike Chen</div>
                      <div className="text-sm text-gray-600">Product Manager</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    {`"Best investment I've made for my career. The certification helped me land my dream job in AI."`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-semibold">ER</span>
                    </div>
                    <div>
                      <div className="font-semibold">Emily Rodriguez</div>
                      <div className="text-sm text-gray-600">Data Scientist</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section 2 */}

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-mono">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What will you create today?</h2>
              <p className="text-purple-100 text-lg">
                Start your prompting journey today and unlock the full potential of AI interaction.
              </p>
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8">
                Get Started Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 font-mono">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center mb-4">
                <Brain className="h-6 w-6 text-purple-400" />
                <span className="ml-2 text-lg font-bold">Prompt-School</span>
              </div>
              <p className="text-gray-400 text-sm">
                Master AI prompting with our comprehensive testing platform and join the future of AI interaction.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Tests
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Analytics
                  </Link>
                </li>
                <li></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Prompt-School. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
