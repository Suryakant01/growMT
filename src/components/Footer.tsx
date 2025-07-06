import React from 'react';

// A simple SVG icon component for social media links
const SocialIcon: React.FC<{ href: string; 'aria-label': string; children: React.ReactNode }> = ({ href, 'aria-label': ariaLabel, children }) => (
  <a href={href} aria-label={ariaLabel} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#2A4B40] transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F4F0] font-sans pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content in a bordered box */}
        <div className="bg-white border border-[#2A4B40]/50 rounded-lg shadow-sm p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
            
            {/* Column 1: Brand & Contact Info */}
            <div className="md:col-span-1">
              <h3 className="text-3xl font-serif text-[#2A4B40]">Dr. Jennifer Hahm, Ph.D.</h3>
              <p className="mt-1 text-gray-600">Licensed Psychologist</p>
              <address className="mt-6 text-gray-600 not-italic space-y-2">
                <p><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Email:</strong> contact@drhahm.com</p>
                <p><strong>Location:</strong> Serving Michigan & Illinois (Virtual)</p>
              </address>
            </div>
            
            {/* Column 2: Navigation */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800">Quick Links</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-[#2A4B40] transition-colors">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2A4B40] transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2A4B40] transition-colors">Areas of Focus</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2A4B40] transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Column 3: Call to Action & Social */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-gray-800">Get Started</h4>
              <p className="mt-4 text-gray-600">Ready to take the next step in your wellness journey?</p>
              <a href="/contact" className="inline-block mt-4 bg-[#2A4B40] text-white py-2 px-6 rounded-lg font-semibold hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2A4B40]">
                Request Consultation
              </a>
              <div className="mt-6 flex space-x-4">
                  <SocialIcon href="#" aria-label="LinkedIn Profile">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </SocialIcon>
                   <SocialIcon href="#" aria-label="Psychology Today Profile">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.57,14.857a4.33,4.33,0,0,0-4.329-4.329,1.082,1.082,0,0,0,0,2.164,2.164,2.164,0,1,1,0,4.329A2.164,2.164,0,1,1,12.75,12.75V3.429A3.429,3.429,0,1,0,5.893,5.893H8.057a1.082,1.082,0,0,0,0-2.164H5.893A5.6,5.6,0,0,1,9.321,0,5.553,5.553,0,0,1,14.914,3.429V12.75a4.329,4.329,0,1,0,5.656,2.107Z"/></svg>
                  </SocialIcon>
              </div>
            </div>

          </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;