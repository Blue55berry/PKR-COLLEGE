import React from 'react';

const VisionMission = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Vision & Mission</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Our Vision</h2>
        </div>
        <div className="p-6">
          <p className="mb-4 text-lg">
            "To empower women through quality education that promotes academic excellence, personal growth, and social responsibility."
          </p>
          
          <p className="mb-4">
            At P.K.R. Arts College for Women, we envision creating a learning environment that fosters intellectual curiosity, critical thinking, and innovation among women. We aim to develop confident, competent, and compassionate individuals who can make significant contributions to society and emerge as leaders in their chosen fields.
          </p>
          
          <p className="mb-4">
            We strive to be recognized as a premier institution for women's education, known for academic excellence, value-based education, and holistic development of students.
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Our Mission</h2>
        </div>
        <div className="p-6">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              <span className="font-medium">Provide Quality Education:</span> Offer academic programs of the highest standards that blend theoretical knowledge with practical skills and foster a culture of continuous learning and improvement.
            </li>
            <li>
              <span className="font-medium">Promote Research and Innovation:</span> Encourage research, critical thinking, and innovation among faculty and students to address real-world challenges and contribute to the advancement of knowledge.
            </li>
            <li>
              <span className="font-medium">Develop Leadership Skills:</span> Cultivate leadership qualities, teamwork, and communication skills that prepare students to excel in their professional careers and personal lives.
            </li>
            <li>
              <span className="font-medium">Instill Ethical Values:</span> Impart values of integrity, respect, social responsibility, and ethical conduct to develop responsible citizens who contribute positively to society.
            </li>
            <li>
              <span className="font-medium">Foster Inclusivity:</span> Create an inclusive environment that celebrates diversity, promotes equality, and provides opportunities for all students, regardless of their socio-economic background.
            </li>
            <li>
              <span className="font-medium">Build Global Perspective:</span> Expose students to global perspectives, diverse cultures, and international collaborations to prepare them for the challenges of a globalized world.
            </li>
            <li>
              <span className="font-medium">Ensure Holistic Development:</span> Focus on the overall development of students through co-curricular and extracurricular activities that nurture their talents and interests.
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Core Values</h2>
        </div>
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Excellence</h3>
              <p className="text-gray-700">
                Striving for the highest standards in all our academic and administrative endeavors.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Integrity</h3>
              <p className="text-gray-700">
                Upholding ethical principles, honesty, and transparency in all our actions.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-700">
                Embracing creativity and innovative approaches in teaching, learning, and problem-solving.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Inclusivity</h3>
              <p className="text-gray-700">
                Creating a welcoming environment that respects diversity and promotes equal opportunities.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Empowerment</h3>
              <p className="text-gray-700">
                Enabling women to discover their potential and develop the confidence to pursue their aspirations.
              </p>
            </div>
            
            <div className="border rounded-lg p-4 bg-gray-50">
              <h3 className="font-bold text-lg mb-2">Social Responsibility</h3>
              <p className="text-gray-700">
                Contributing to the betterment of society through education, outreach, and community service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
