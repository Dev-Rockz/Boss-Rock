import React from 'react';

const ExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen p-12 bg-white box-border">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl text-gray-800 mb-2">Experience</h2>
        <p className="text-base text-gray-600">Mobile Developer Intern – Blenditoro Corp (June - August 2024)</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto">
        <p className="text-base leading-relaxed text-gray-700 mb-8">
          During my internship at Blenditoro Corp, I worked as a Mobile Developer Intern where I designed and developed mobile applications using Flutter. I gained hands-on experience collaborating in an agile team environment, implementing UI/UX designs, and connecting apps to real-time backend services.
        </p>

        {/* Achievements */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h3 className="text-xl mb-4 text-gray-800">🏆 Achievements</h3>
          <ul className="pl-6 text-gray-700 leading-relaxed list-disc">
            <li>Developed a task management app with real-time syncing using Firebase.</li>
            <li>Designed responsive UI for a food delivery app optimized for tablets and phones.</li>
            <li>Integrated Google Maps API for location tracking in a delivery tracking app.</li>
            <li>Reduced app load time by 30% by optimizing asset loading and network calls.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;