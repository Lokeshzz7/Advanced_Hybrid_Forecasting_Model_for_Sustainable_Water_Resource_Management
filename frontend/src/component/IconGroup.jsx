import React from 'react';

const IconGroup = () => {
  const icons = [
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/201125e63a82de931cc397f62675df8860522fd3bd1ba85b08d14831707d8a8f?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859', width: 'w-[79px]', aspect: 'aspect-[1.98]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/16be519ace082f911bad2d6ad63eb6ff0b0c1e6945ce35c91c856f8bf3a58236?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859', width: 'w-[79px]', aspect: 'aspect-[1.98]' },
    { src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1cc459fc95598158b880cd54fb5eb57c24fe8de189b24ca72b38d18ec44e56fa?placeholderIfAbsent=true&apiKey=5e3805d6b94248fdab855530b81db859', width: 'w-[101px]', aspect: 'aspect-[2.53]' },
  ];

  return (
    <div className="flex gap-4 self-start mt-5 ml-20 max-md:ml-2.5">
      {icons.map((icon, index) => (
        <img
          key={index}
          loading="lazy"
          src={icon.src}
          alt=""
          className={`object-contain shrink-0 ${icon.aspect} rounded-[40px] ${icon.width}`}
        />
      ))}
    </div>
  );
};

export default IconGroup;