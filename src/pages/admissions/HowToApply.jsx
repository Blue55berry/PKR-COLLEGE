import React from 'react';

const HowToApply = () => {
  const applicationSteps = [
    {
      title: "Check Eligibility",
      description: "Verify that you meet the eligibility criteria for your chosen program.",
      icon: "🔍"
    },
    {
      title: "Obtain Application Form",
      description: "Download the application form from the website or collect it from the college office.",
      icon: "📝"
    },
    {
      title: "Fill Application Form",
      description: "Complete all required fields in the application form with accurate information.",
      icon: "✏️"
    },
    {
      title: "Gather Documents",
      description: "Prepare all necessary documents like mark sheets, certificates, ID proof, etc.",
      icon: "📋"
    },
    {
      title: "Pay Application Fee",
      description: "Submit the application fee through online payment or at the college counter.",
      icon: "💳"
    },
    {
      title: "Submit Application",
      description: "Submit the completed application form with all required documents.",
      icon: "📤"
    },
    {
      title: "Entrance Test/Interview",
      description: "Attend entrance test or interview if required for the chosen program.",
      icon: "📝"
    },
    {
      title: "Admission Confirmation",
      description: "Upon selection, confirm your admission by paying the required fees.",
      icon: "✅"
    }
  ];

  const documents = [
    "Completed Application Form",
    "10th Standard Mark Sheet",
    "12th Standard Mark Sheet",
    "Transfer Certificate",
    "Conduct Certificate",
    "Community Certificate",
    "Passport Size Photographs (4 copies)",
    "Aadhar Card Copy",
    "Income Certificate (if applicable for scholarships)",
    "Sports/NCC/NSS Certificates (if applicable)"
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">How to Apply</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Application Process</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            The admission process at P.K.R. Arts College for Women is designed to be straightforward and transparent. Follow these steps to apply for your chosen program:
          </p>
          
          <div className="space-y-6">
            {applicationSteps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-slate-100 rounded-full w-10 h-10 flex items-center justify-center mr-4 flex-shrink-0">
                  <span className="text-lg">{step.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Step {index + 1}: {step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="#" 
              download 
              className="bg-slate-600 hover:bg-slate-700 text-white py-3 px-6 rounded-lg inline-flex items-center"
            >
              <span className="mr-2">📄</span>
              Download Application Form
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Required Documents</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            Please ensure you have the following documents ready before submitting your application:
          </p>
          
          <ul className="grid md:grid-cols-2 gap-2 mb-6">
            {documents.map((document, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
                </svg>
                <span>{document}</span>
              </li>
            ))}
          </ul>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Note</h3>
            <p className="text-yellow-800">
              All documents must be self-attested. Original documents must be presented for verification during the admission process.
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Important Dates</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Event</th>
                  <th className="py-3 px-4 text-left">Dates</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Issue of Application Forms</td>
                  <td className="py-3 px-4">March 15, 2025 onwards</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Last Date for Submission of Applications</td>
                  <td className="py-3 px-4">May 31, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Publication of Merit List</td>
                  <td className="py-3 px-4">June 10, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Counseling and Admission</td>
                  <td className="py-3 px-4">June 15-30, 2025</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Commencement of Classes</td>
                  <td className="py-3 px-4">July 10, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 italic">
              * Dates are subject to change. Please check the website regularly for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
