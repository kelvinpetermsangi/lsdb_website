import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
              🎯 Trusted Career & Skills Development Partner
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
              Building Skills & Careers for{' '}
              <span className="text-blue-600">Tomorrow&apos;s Workforce</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-8">
              LSDB helps individuals and institutions build skills, make informed career decisions, 
              and prepare for the world of work through practical guidance and professional development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Explore Our Services
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-3 text-lg font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Learn About Us
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">15+ Years</div>
                  <div className="text-sm text-slate-600">Of Experience</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl">👥</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">10,000+</div>
                  <div className="text-sm text-slate-600">Individuals Served</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 text-xl">🏛️</span>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Institution Partners</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual/Institutional Highlight */}
          <div className="relative">
            <div className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Featured Program</h3>
                <div className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-medium mb-4">
                  Career Readiness Initiative
                </div>
                <p className="text-slate-600 mb-6 text-sm leading-7">
                  Our comprehensive program helping students and graduates transition 
                  successfully from education to employment through skills development 
                  and career planning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600">📋</span>
                    </div>
                    <span className="text-slate-900">Personalized Career Assessment</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600">💼</span>
                    </div>
                    <span className="text-slate-900">Industry Mentorship</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-blue-600">🎓</span>
                    </div>
                    <span className="text-slate-900">Skills Certification</span>
                  </div>
                </div>
              </div>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center w-full px-6 py-3 font-medium rounded-md bg-green-50 text-green-700 border border-green-200 hover:bg-green-100 transition-colors whitespace-nowrap"
              >
                Learn More About Programs
              </Link>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
