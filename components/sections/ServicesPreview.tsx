import Link from 'next/link';
import { services } from '@/data/services';

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight max-w-3xl mx-auto">
            Comprehensive Career & Skills Development
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-8">
            We provide practical, evidence-based services to help individuals and 
            institutions navigate career pathways and develop essential skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-[2rem] p-6 sm:p-7 lg:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-500"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <span className="text-3xl">{service.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 text-sm leading-7">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-600">
                    <span className="text-green-600 mr-2 mt-1">•</span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <Link
                  href={`/services#${service.id}`}
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Learn more
                  <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-3 font-medium rounded-md border border-blue-600 text-blue-600 hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
