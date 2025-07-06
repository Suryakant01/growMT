import React from 'react';

// Define the type for each focus item's data
interface FocusItemProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  isGrayscale?: boolean;
}

// Store the data in an array for easy mapping and management
const focusItemsData: FocusItemProps[] = [
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/25a4d543-1f55-46b7-ba06-c571a0c2b806/pexels-tima-miroshnichenko-6011667.jpg',
    imageAlt: "A close-up, black and white photo of a healthcare provider's hands resting on a counter.",
    title: 'Therapy for Healthcare Providers and Students',
    description: "The care you provide for others may be driving you to seek therapy, whether due to burnout, compassion fatigue, imposter syndrome, people-pleasing tendencies, or perfectionism. Whether you're in pre-professional school, undergoing training, or reflecting on a long career in healthcare, we can address the unique stressors of your professional environment along with any challenges you may be facing in other areas of your life.",
    isGrayscale: true,
  },
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/11e69e15-d9e7-4182-aeb0-aacd9fc81e02/pexels-raphael-brasileiro-1687007.jpg',
    imageAlt: "A person's hands gently cupping a vibrant orange flower against a dark background.",
    title: 'Therapy for Trauma and Grief',
    description: "Life's challenges, whether a difficult childhood, a traumatic event or series of events, or the loss of someone or something deeply meaningful, can lead to profound experiences of trauma and grief. Therapy offers a supportive space to process these experiences, care for yourself amidst painful thoughts and emotions, and work toward a sense of grounding and meaning.",
    isGrayscale: false,
  },
  {
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/64d3ecd6f85a702f7881b802/eeca6997-7fd7-4376-b0a4-df60a0f368e5/pexels-polina-tankilevitch-8202906.jpg',
    imageAlt: "Close-up of a person's hands holding a small, folded American flag.",
    title: 'Therapy for Second Generation Individuals In Immigrant Families',
    description: "Second-generation individuals in immigrant families, born in the U.S. to at least one parent born abroad, often navigate the complexities of multiple cultures and diverse expectations. This experience can bring challenges such as feeling like a foreigner in your own country and navigating strained family relationships. Therapy offers a supportive space to explore and process this unique aspect of your identity.",
    isGrayscale: false,
  },
];

const AreasOfFocus: React.FC = () => {
  return (
    <section className="bg-[#F5F4F0] font-serif">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <h2 className="text-4xl text-center text-stone-800 mb-16 lg:mb-20">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 md:gap-x-10 lg:gap-x-16">
          {focusItemsData.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              
              {/* Circular Image Container */}
              <div className="w-64 h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt}
                  className={`w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105 ${
                    item.isGrayscale ? 'filter grayscale' : ''
                  }`}
                  width="300"
                  height="300"
                  loading="lazy"
                />
              </div>

              {/* Text Content */}
              <div className="mt-8">
                <h3 className="text-2xl text-stone-800">
                  {item.title}
                </h3>
                <p className="mt-4 text-base text-stone-600 leading-relaxed max-w-sm">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasOfFocus;