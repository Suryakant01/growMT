import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden
     border-x-[60px] border-white">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/path-to-poster-image.jpg"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/safarnama-c075f.appspot.com/o/Assets%2Fvid.mp4?alt=media&token=7b50a0fa-cd2e-4fab-90ee-c2dea6c5205a" type="video/mp4" />
        <source src="/path-to-your-video.webm" type="video/webm" />
        {/* Fallback for browsers that don't support video */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><defs><linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23004d7a;stop-opacity:1" /><stop offset="50%" style="stop-color:%23008793;stop-opacity:1" /><stop offset="100%" style="stop-color:%23005f5f;stop-opacity:1" /></linearGradient></defs><rect width="1200" height="800" fill="url(%23ocean)"/><path d="M0,400 Q300,350 600,400 T1200,400 L1200,800 L0,800 Z" fill="%23ffffff" opacity="0.1"/><path d="M0,500 Q400,450 800,500 T1200,500 L1200,800 L0,800 Z" fill="%23ffffff" opacity="0.05"/></svg>')`
          }}
        />
      </video>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0  bg-opacity-20" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            <span className="block">Psychological Care for</span>
            <span className="block">Change, Insight, and Well-Being</span>
          </h1>
        </div>
        
        {/* Subheading */}
        <div className="mb-12 max-w-4xl mx-auto">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-white font-normal leading-relaxed">
            Offering individual psychotherapy for adults via telehealth in Michigan and{' '}
            <a 
              href="https://psypact.org/mpage/psypactmap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:no-underline transition-all duration-300"
            >
              most U.S. states
            </a>
            {' '}through PSYPACT participation
          </h2>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeVPdE8FDjGrnmAJ8kAXzXUTrOz780udwG6noNWHbShZuuIgw/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
};

export default HeroSection;