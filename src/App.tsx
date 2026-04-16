import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Pencil, MessageSquare, Library, GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import LessonCard from "./components/LessonCard";
import ExerciseCard from "./components/ExerciseCard";
import AITutor from "./components/AITutor";
import { lessons } from "./data/lessons";
import { exercises } from "./data/exercises";

export default function App() {
  const [activeTab, setActiveTab] = useState('lessons');

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold tracking-tight">Integral Master</h1>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Badge variant="outline" className="font-mono text-[10px]">v1.0.0</Badge>
            <div className="h-4 w-[1px] bg-border" />
            <p className="text-xs text-muted-foreground italic">"Calculus is the language of the universe."</p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="bg-white border">
                  <TabsTrigger value="lessons" className="gap-2">
                    <BookOpen className="w-4 h-4" />
                    Lessons
                  </TabsTrigger>
                  <TabsTrigger value="exercises" className="gap-2">
                    <Pencil className="w-4 h-4" />
                    Exercises
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="gap-2">
                    <Library className="w-4 h-4" />
                    Resources
                  </TabsTrigger>
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                <TabsContent value="lessons" key="lessons">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {lessons.map((lesson) => (
                      <div key={lesson.id}>
                        <LessonCard lesson={lesson} />
                      </div>
                    ))}
                  </motion.div>
                </TabsContent>

                <TabsContent value="exercises" key="exercises">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-6"
                  >
                    <div className="bg-white p-6 rounded-xl border shadow-sm">
                      <h2 className="text-2xl font-bold mb-2">Practice Makes Perfect</h2>
                      <p className="text-muted-foreground mb-4">Try solving these integration problems. Remember to include the constant of integration (+ C)!</p>
                      <Separator className="mb-6" />
                      <div className="grid grid-cols-1 gap-6">
                        {exercises.map((ex) => (
                          <div key={ex.id}>
                            <ExerciseCard exercise={ex} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="resources" key="resources">
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <ResourceCard 
                      title="Khan Academy"
                      description="Comprehensive video lessons and practice for all levels of calculus."
                      url="https://www.khanacademy.org/math/calculus-1"
                      category="Video Lessons"
                    />
                    <ResourceCard 
                      title="Paul's Online Math Notes"
                      description="The gold standard for written math tutorials and practice problems."
                      url="https://tutorial.math.lamar.edu/Classes/CalcI/IntegrationIntro.aspx"
                      category="Study Guides"
                    />
                    <ResourceCard 
                      title="Wolfram Alpha"
                      description="A powerful computational engine to check your work and see step-by-step solutions."
                      url="https://www.wolframalpha.com/"
                      category="Tools"
                    />
                    <ResourceCard 
                      title="3Blue1Brown"
                      description="Visualizing the essence of calculus through beautiful animations."
                      url="https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr"
                      category="Visualization"
                    />
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>

          {/* Right Column: AI Tutor */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24">
              <AITutor />
              <div className="mt-6 p-4 bg-white rounded-xl border shadow-sm">
                <h3 className="font-bold flex items-center gap-2 mb-2">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  Your Progress
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span>Lessons Completed</span>
                    <span className="font-bold">0/3</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-0 transition-all duration-500" />
                  </div>
                  <p className="text-[10px] text-muted-foreground">Keep going! You're just starting your journey into the world of integration.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="font-bold">Integral Master</span>
          </div>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2024 Integral Master. Built for learners.</p>
        </div>
      </footer>
    </div>
  );
}

function ResourceCard({ title, description, url, category }: { title: string, description: string, url: string, category: string }) {
  return (
    <div className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition-all group">
      <div className="flex justify-between items-start mb-4">
        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">{category}</Badge>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
