import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
            Take the Next Step
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
            Start Your Career & Skills Development Journey
          </h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-8">
            Whether you&apos;re an individual seeking career guidance or an institution 
            looking to develop skills programs, we&apos;re here to help you succeed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {actions.map((action, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500"
              >
                <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <span className="text-3xl">{action.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{action.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-7">{action.description}</p>
                <Link
                  href={action.link}
                  className="btn btn-outline w-full justify-center"
                >
                  {action.buttonText}
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-200">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto leading-8">
              Contact us today for a free initial consultation to discuss how 
              we can help you achieve your career or skills development goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-md border-2 border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-600">
                <strong className="font-semibold">Quick Start:</strong> Call us at{' '}
                <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-800 hover:underline">
                  +1 (234) 567-890
                </a>{' '}
                or email{' '}
                <a href="mailto:info@lsdb.org" className="text-blue-600 hover:text-blue-800 hover:underline">
                  info@lsdb.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const actions = [
  {
    icon: '📞',
    title: 'Schedule a Consultation',
    description: 'Book a free initial consultation to discuss your career or skills development needs.',
    link: '/contact',
    buttonText: 'Book Now'
  },
  {
    icon: '📋',
    title: 'Explore Services',
    description: 'Learn about our comprehensive career guidance and skills development services.',
    link: '/services',
    buttonText: 'View Services'
  },
  {
    icon: '🏛️',
    title: 'Partner With Us',
    description: 'For institutions seeking to develop career and skills programs for students or staff.',
    link: '/contact',
    buttonText: 'Institutional Inquiry'
  }
];
