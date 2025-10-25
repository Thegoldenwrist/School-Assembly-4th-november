import React from 'react';
import type { SlideContent } from '../types';

interface SlideProps {
  slide: SlideContent;
  direction: 'left' | 'right' | null;
}

const Slide: React.FC<SlideProps> = ({ slide, direction }) => {
  const { title, content, image, component, backgroundColor, backgroundImage, textColor, titleClassName, imageClassName } = slide;
  
  // Animation classes
  const animationClass = direction === 'right' 
    ? 'animate-[slide-in-right_0.6s_ease-out]'
    : direction === 'left'
    ? 'animate-[slide-in-left_0.6s_ease-out]'
    : 'animate-[fade-in_0.5s_ease-in-out]';
    
  // Add animation keyframes to the document head
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes slide-in-right {
        from { transform: translateX(2rem); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes slide-in-left {
        from { transform: translateX(-2rem); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const backgroundStyle = backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {};

  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center transition-colors duration-500 bg-cover bg-center ${backgroundColor || 'bg-transparent'} ${textColor || 'text-gray-800'} ${animationClass}`}
      style={backgroundStyle}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/50" />}
      <div className="relative z-10 max-w-5xl w-full">
        <h1 className={`${titleClassName || 'text-6xl md:text-8xl font-extrabold'} mb-8 drop-shadow-lg`}>{title}</h1>
        
        {component}

        {content && !component && (
          <div className="space-y-4 text-4xl md:text-5xl font-medium">
            {Array.isArray(content) ? (
              <ul className="list-none space-y-4">
                {content.map((item, index) => (
                  <li key={index} className="drop-shadow-lg">{item}</li>
                ))}
              </ul>
            ) : (
              <p className="bg-white/20 backdrop-blur-sm p-6 rounded-lg shadow-md">{content}</p>
            )}
          </div>
        )}

        {image && (
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
            <img src={image} alt={title} className={`${imageClassName || 'w-64'} h-auto object-cover rounded-2xl shadow-2xl border-4 border-white`} />
            {content && <p className="text-3xl font-semibold">{content}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Slide;