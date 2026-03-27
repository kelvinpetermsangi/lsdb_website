export default function WhyChooseLSDB() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            Why Choose LSDB
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight max-w-3xl mx-auto">
            Practical, People-Centered, Growth-Oriented
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            We combine evidence-based approaches with practical guidance to help 
            individuals and institutions achieve meaningful career and skills development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.id}
              className="relative group"
            >
              <div className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm h-full hover:border-blue-500 transition-colors duration-300">
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <span className="text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-7">{value.description}</p>
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Approach to Career Development</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Assessment & Understanding</h4>
                    <p className="text-slate-600 text-sm leading-7">
                      We begin by thoroughly understanding your unique situation, skills, 
                      goals, and challenges through comprehensive assessment tools.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Personalized Planning</h4>
                    <p className="text-slate-600 text-sm leading-7">
                      We develop customized action plans that align with your specific 
                      needs, timeline, and resources for maximum effectiveness.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Implementation & Support</h4>
                    <p className="text-slate-600 text-sm leading-7">
                      We provide ongoing guidance, resources, and support as you implement 
                      your plan, adjusting as needed to ensure success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Ready to Start Your Journey?</h3>
            <p className="mb-6 text-slate-600 leading-8">
              Whether you&apos;re an individual seeking career guidance or an institution 
              looking to develop skills programs, we&apos;re here to help you succeed.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">✓</span>
                </div>
                <span className="text-slate-700">Free initial consultation</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">✓</span>
                </div>
                <span className="text-slate-700">Flexible scheduling options</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">✓</span>
                </div>
                <span className="text-slate-700">Personalized approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-600">✓</span>
                </div>
                <span className="text-slate-700">Evidence-based methods</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    id: 'practical-guidance',
    icon: '🎯',
    title: 'Practical Guidance',
    description: 'We provide actionable, real-world advice that you can implement immediately to advance your career or develop skills.'
  },
  {
    id: 'professional-development',
    icon: '📚',
    title: 'Professional Development',
    description: 'Our programs focus on developing the skills and competencies needed for success in today\'s competitive job market.'
  },
  {
    id: 'informed-decisions',
    icon: '💡',
    title: 'Informed Decision-Making',
    description: 'We help you make career choices based on evidence, self-awareness, and realistic assessment of opportunities.'
  },
  {
    id: 'institutional-support',
    icon: '🤝',
    title: 'Institutional Support',
    description: 'We partner with organizations to develop effective career and skills programs that benefit both individuals and institutions.'
  }
];
