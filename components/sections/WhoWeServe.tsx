export default function WhoWeServe() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-4">
            Who We Serve
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight max-w-3xl mx-auto">
            Supporting Diverse Career Journeys
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            We provide tailored guidance and support for individuals at every stage 
            of their career journey and institutions committed to development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.id}
              className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm text-center hover:border-blue-500 transition-colors duration-300 group"
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-4xl">{audience.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{audience.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-7">{audience.description}</p>
              <div className="space-y-2">
                {audience.services.map((service, idx) => (
                  <div key={idx} className="text-sm text-slate-600 flex items-center justify-center">
                    <span className="text-green-600 mr-2">•</span>
                    {service}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            Whether you&apos;re just starting your career journey, transitioning to a new field, 
            or leading an organization&apos;s development initiatives, LSDB provides the guidance 
            and support you need to succeed.
          </p>
        </div>
      </div>
    </section>
  );
}

const audiences = [
  {
    id: 'students',
    icon: '🎓',
    title: 'Students',
    description: 'High school and college students exploring career options and developing foundational skills.',
    services: [
      'Career exploration',
      'Study skills development',
      'College preparation',
      'Internship guidance'
    ]
  },
  {
    id: 'graduates',
    icon: '👨‍🎓',
    title: 'Graduates',
    description: 'Recent graduates transitioning from education to employment and building professional careers.',
    services: [
      'Job search strategies',
      'Resume development',
      'Interview preparation',
      'Career pathway planning'
    ]
  },
  {
    id: 'professionals',
    icon: '💼',
    title: 'Professionals',
    description: 'Working professionals seeking career advancement, skills enhancement, or career transitions.',
    services: [
      'Career advancement',
      'Skills upgrading',
      'Leadership development',
      'Career change support'
    ]
  },
  {
    id: 'institutions',
    icon: '🏛️',
    title: 'Institutions',
    description: 'Educational institutions and organizations developing career and skills programs.',
    services: [
      'Program development',
      'Curriculum design',
      'Staff training',
      'Partnership building'
    ]
  }
];
