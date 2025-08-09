import React from 'react';

const FreeConsultation = () => {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#f9f7f2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white  overflow-hidden border border-[#e6e0d0]">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-4" style={{ color: '#3a3a2c' }}>
                  Want a Free Safari Consultation?
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                  <p className="text-lg" style={{ color: '#8c8479' }}>
                    Talk to our tour consultants:
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" style={{ color: '#c2a75c' }} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <a 
                        href="mailto:safaris@safaripartnersafrica.com" 
                        className="text-lg hover:underline"
                        style={{ color: '#3a3a2c' }}
                      >
                        safaris@safaripartnersafrica.com
                      </a>
                    </div>
                    <span className="hidden md:block text-gray-300">|</span>
                    <div className="flex items-center">
                     
                      
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="#contact"
                  className="px-8 py-3 font-bold text-lg uppercase tracking-wider inline-block"
                  style={{ 
                    backgroundColor: '#c2a75c', 
                    color: '#3a3a2c',
                  }}
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;