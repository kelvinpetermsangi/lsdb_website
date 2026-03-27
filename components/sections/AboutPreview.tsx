import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-50">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image/Visual Placeholder */}
          <div className="relative">
            <div className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm">
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-green-50 rounded-lg mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <div className="text-slate-900 font-semibold">LSDB Institutional Excellence</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-slate-600">Expert Advisors</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">100+</div>
                  <div className="text-sm text-slate-600">Programs Developed</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-slate-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">95%</div>
                  <div className="text-sm text-slate-600">Satisfaction Rate</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
              About LSDB
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
              Guiding Careers, Developing Skills, Building Futures
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-8">
              The Learning & Skills Development Bureau (LSDB) is a trusted organization 
              dedicated to helping individuals and institutions navigate career pathways, 
              develop essential skills, and achieve professional growth.
            </p>
            <p className="text-slate-600 mb-8 leading-8">
              Since our establishment, we have been committed to providing practical, 
              evidence-based guidance that empowers people to make informed career decisions 
              and institutions to develop effective learning and development programs.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Our Mission</h4>
                  <p className="text-slate-600 text-sm leading-7">
                    To empower individuals and institutions through career guidance, 
                    skills development, and professional growth opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Our Vision</h4>
                  <p className="text-slate-600 text-sm leading-7">
                    A world where everyone has access to the guidance and skills needed 
                    to build fulfilling careers and contribute meaningfully to society.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Our Values</h4>
                  <p className="text-slate-600 text-sm leading-7">
                    Integrity, professionalism, practical guidance, and commitment to 
                    lifelong learning and development.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
              >
                Learn More About Us
              </Link>
              <Link
                href="/team"
                className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}