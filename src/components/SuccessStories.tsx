import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GraduationCap, BookOpen, Award } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Jessica M.",
      country: "🇺🇸 United States",
      grade: "A-",
      subject: "Psychology",
      story:
        "I was struggling with my research methods assignment and found their service through a friend. The tutor helped me understand statistical analysis better and I improved my grade significantly.",
      university: "Arizona State University",
      previousGrade: "C+",
      improvement: "+1.5 Letter Grades",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Alex R.",
      country: "🇬🇧 United Kingdom",
      grade: "2:1",
      subject: "Business Studies",
      story:
        "The essay writing support really helped me structure my arguments better. My professor commented on the improved clarity and depth of my analysis.",
      university: "University of Manchester",
      previousGrade: "2:2",
      improvement: "From 2:2 to 2:1",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Sophie L.",
      country: "🇦🇺 Australia",
      grade: "B+",
      subject: "Engineering",
      story:
        "Math was never my strong suit, but the step-by-step explanations helped me grasp complex calculus concepts. I actually started enjoying the subject!",
      university: "University of Sydney",
      previousGrade: "C",
      improvement: "From C to B+",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Ryan K.",
      country: "🇨🇦 Canada",
      grade: "B+",
      subject: "Computer Science",
      story:
        "The programming assignment help was exactly what I needed. They didn't just give me answers but taught me how to think through problems logically.",
      university: "University of British Columbia",
      previousGrade: "C+",
      improvement: "+1 Letter Grade",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Maria S.",
      country: "🇪🇸 Spain",
      grade: "A-",
      subject: "Literature",
      story:
        "As an international student, academic writing in English was challenging. Their feedback helped me improve my writing style and critical analysis skills.",
      university: "University of Barcelona",
      previousGrade: "B-",
      improvement: "+1 Letter Grade",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "Tom H.",
      country: "🇳🇿 New Zealand",
      grade: "B+",
      subject: "Economics",
      story:
        "The economics tutoring sessions were really helpful. Complex theories became much clearer and I felt more confident during exams.",
      university: "University of Auckland",
      previousGrade: "C+",
      improvement: "+1 Letter Grade",
      color: "from-teal-500 to-teal-600",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-2 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-pink-200/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-blue-200/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-8">
            <span className="text-purple-700 font-bold text-lg flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Success Stories
            </span>{" "}
            From Around The World
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real students, real results. See how our expert assistance has
            transformed academic journeys worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card
              key={index}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white/90 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 p-1 rainbow-border"
            >
              <div className="bg-white rounded-lg">
                <CardContent className="p-6 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        {story.name}
                      </h3>
                      <p className="text-sm text-gray-600">{story.country}</p>
                      <p className="text-sm text-gray-500 font-medium">
                        {story.university}
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge
                        className={`bg-gradient-to-r ${story.color} text-white mb-2`}
                      >
                        {story.grade}
                      </Badge>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Improvement Badge */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 border border-green-200">
                    <div className="flex items-center space-x-2">
                      <GraduationCap className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">
                        Improvement: {story.improvement}
                      </span>
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="flex items-center space-x-2">
                    <BookOpen className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-600">
                      {story.subject}
                    </span>
                  </div>

                  {/* Story */}
                  <blockquote className="text-gray-700 leading-relaxed text-sm italic">
                    "{story.story}"
                  </blockquote>

                  {/* Bottom decoration */}
                  <div
                    className={`h-1 bg-gradient-to-r ${story.color} rounded-full`}
                  ></div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Story?
            </h3>
            <p className="text-xl text-purple-100 mb-6 max-w-2xl mx-auto">
              Join 1,800+ happy students who have achieved their academic goals
              with our expert guidance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">92%</div>
                <div className="text-purple-100 text-sm">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">12+</div>
                <div className="text-purple-100 text-sm">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">1.8K+</div>
                <div className="text-purple-100 text-sm">Happy Students</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">24/7</div>
                <div className="text-purple-100 text-sm">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
