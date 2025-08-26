import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      university: "Stanford University",
      subject: "Engineering",
      rating: 5,
      comment:
        "Absolutely fantastic service! The writer understood my requirements perfectly and delivered exceptional work. My professor was impressed with the quality and depth of research.",
      image: "AR",
    },
    {
      name: "Sophie Martin",
      university: "London School of Economics",
      subject: "Economics",
      rating: 5,
      comment:
        "I was struggling with my dissertation and Assignments Center saved me! Their expert guidance and 24/7 support made all the difference. Highly recommend to any student.",
      image: "SM",
    },
    {
      name: "David Kim",
      university: "MIT",
      subject: "Computer Science",
      rating: 5,
      comment:
        "The technical accuracy and programming expertise shown in my assignment was outstanding. They explained complex algorithms in a way that helped me understand better.",
      image: "DK",
    },
    {
      name: "Isabella Brown",
      university: "University of Sydney",
      subject: "Medicine",
      rating: 5,
      comment:
        "As a medical student, I needed precision and accuracy. Assignments Center delivered beyond my expectations with well-researched, properly cited work.",
      image: "IB",
    },
    {
      name: "Mohammed Ali",
      university: "University of Dubai",
      subject: "Business",
      rating: 5,
      comment:
        "Professional, reliable, and always on time. They helped me maintain my GPA throughout my MBA program. Customer service is exceptional!",
      image: "MA",
    },
    {
      name: "Lisa Wang",
      university: "University of Toronto",
      subject: "Psychology",
      rating: 5,
      comment:
        "The depth of psychological analysis in my research paper was remarkable. It helped me understand the subject better and I scored my highest grade ever!",
      image: "LW",
    },
  ];

  return (
    <section className="py-20 rainbow-bg-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-purple-700 font-semibold text-lg">
              Student Reviews
            </span>
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Students Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our students have to
            say about their experience with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 h-full hover:bg-white/90 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-white/20 relative">
                <Quote className="absolute top-6 right-6 h-8 w-8 text-purple-300" />

                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-purple-600 text-sm">
                      {testimonial.subject}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {testimonial.university}
                    </p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
