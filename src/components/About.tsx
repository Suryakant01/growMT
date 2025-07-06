import React from 'react';

const aboutData = {
  imageUrl:
    'https://quilted-libra-91f.notion.site/image/attachment%3Afcdeffc3-7fce-4ca7-a4ea-a0888f182399%3Aimage.png?table=block&id=21f4db5d-d615-8076-8a1c-fd184ea4e5df&spaceId=e434db5d-d615-814a-b090-0003034cd63a&width=2000&userId=&cache=v2',
  imageAlt:
    'A portrait of Dr. Jennifer Hahm, a woman with dark shoulder-length hair, smiling warmly. She is wearing a dark blue sweater and is standing in front of a white arched background.',
  title: 'About Dr. Jennifer Hahm',
  paragraphs: [
    'Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.',
    "My therapeutic approach is primarily psychodynamic and humanistic, enriched by influences from positive psychology, existentialism, family systems theory, acceptance and commitment concepts, and mindfulness practices.",

"I believe in the power of the therapeutic relationship to foster healing and growth. I strive to create a safe, non-judgmental space where you can explore your thoughts, feelings, and behaviors. Together, we will work to understand your unique experiences and develop strategies to help you achieve your goals.",],
};

const About: React.FC = () => {
  return (
    <section className="bg-white font-serif">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-20 lg:py-24">
        <h2 className="text-3xl text-[#7e7e6b] mb-8 font-serif text-center lg:text-left">
          {aboutData.title}
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-24">
          {/* Text Paragraphs */}
          <div className="flex-1 order-2 lg:order-1">
            <div className="space-y-6 text-[#7e7e6b] font-medium leading-loose font-serif ">
              {aboutData.paragraphs.map((text, index) => (
                <p key={index}>{text}</p>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 order-1 lg:order-2 w-full max-w-sm lg:max-w-none">
            <img
              src={aboutData.imageUrl}
              alt={aboutData.imageAlt}
              className="w-full h-auto rounded-md"
              loading="lazy"
            />
          </div>
        </div>

        {/* Separator */}
        <div className="pt-20 lg:pt-24">
          <hr className="border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default About;
