import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, GraduationCap, BookOpen, Award } from "lucide-react";

const SuccessStories = () => {
  const stories = [
    {
      name: "Sarah Johnson",
      country: "🇺🇸 United States",
      grade: "A+",
      subject: "Psychology",
      story:
        "Thanks to Assignments Center, I was able to maintain my GPA while working part-time. Their expert guidance helped me understand complex psychological theories and research methodologies.",
      university: "Harvard University",
      previousGrade: "B-",
      improvement: "+2 Letter Grades",
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "James Mitchell",
      country: "🇬🇧 United Kingdom",
      grade: "First Class",
      subject: "Business Studies",
      story:
        "The dissertation help I received was exceptional. My supervisor was impressed with the quality of research and analysis. I couldn't have achieved this without their support.",
      university: "Oxford University",
      previousGrade: "2:2",
      improvement: "From 2:2 to First Class",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Emma Thompson",
      country: "🇦🇺 Australia",
      grade: "HD",
      subject: "Engineering",
      story:
        "Complex mathematical problems became manageable with their step-by-step guidance. I not only passed but excelled in my most challenging subjects.",
      university: "University of Melbourne",
      previousGrade: "P",
      improvement: "From Pass to HD",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Michael Chen",
      country: "🇨🇦 Canada",
      grade: "A",
      subject: "Computer Science",
      story:
        "Their programming assignment help was a game-changer. I learned coding best practices and improved my problem-solving skills significantly.",
      university: "University of Toronto",
      previousGrade: "C+",
      improvement: "+3 Letter Grades",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Priya Sharma",
      country: "🇮🇳 India",
      grade: "O",
      subject: "Medicine",
      story:
        "Medical school is tough, but with their research paper assistance, I was able to publish my work in a peer-reviewed journal during my studies.",
      university: "AIIMS Delhi",
      previousGrade: "A",
      improvement: "From A to Outstanding",
      color: "from-pink-500 to-pink-600",
    },
    {
      name: "David Wilson",
      country: "🇿🇦 South Africa",
      grade: "Distinction",
      subject: "Law",
      story:
        "Their legal research assistance helped me understand complex case studies and legal precedents. I graduated with honors thanks to their support.",
      university: "University of Cape Town",
      previousGrade: "Merit",
      improvement: "From Merit to Distinction",
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
              Join thousands of students who have achieved academic excellence
              with our expert guidance.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">98%</div>
                <div className="text-purple-100 text-sm">Success Rate</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">50+</div>
                <div className="text-purple-100 text-sm">Countries</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-yellow-300">10K+</div>
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
