import React from 'react';

const Scholarships = () => {
  const collegeScholarships = [
    {
      name: "Merit Scholarship",
      eligibility: "Students securing above 90% marks in qualifying examination",
      amount: "Up to 50% tuition fee waiver",
      documents: ["Mark sheets of qualifying examination", "Character certificate", "Family income certificate"]
    },
    {
      name: "Sports Excellence Scholarship",
      eligibility: "Students with achievements in sports at state/national/international level",
      amount: "Up to 75% tuition fee waiver",
      documents: ["Sports certificates", "Recommendation letter from sports authority", "Character certificate"]
    },
    {
      name: "PKR Alumni Scholarship",
      eligibility: "Children of alumni who have demonstrated academic excellence",
      amount: "₹10,000 to ₹25,000 per year",
      documents: ["Parent's degree certificate from PKR", "Mark sheets", "Relationship proof"]
    },
    {
      name: "Single Girl Child Scholarship",
      eligibility: "Single girl child of the family with good academic record",
      amount: "25% tuition fee waiver",
      documents: ["Affidavit from parents", "Mark sheets", "Family income certificate"]
    },
    {
      name: "Financial Need-based Scholarship",
      eligibility: "Economically disadvantaged students with good academic performance",
      amount: "Varies based on financial need assessment",
      documents: ["Family income certificate", "BPL card (if applicable)", "Mark sheets", "Recommendation letter"]
    }
  ];
  
  const governmentScholarships = [
    {
      name: "Post-Matric Scholarship for SC/ST Students",
      provider: "Ministry of Social Justice and Empowerment",
      eligibility: "SC/ST students with family income less than ₹2.5 lakhs per annum",
      benefits: "Full tuition fees, maintenance allowance, and other allowances",
      website: "https://scholarships.gov.in"
    },
    {
      name: "Post-Matric Scholarship for OBC Students",
      provider: "Ministry of Social Justice and Empowerment",
      eligibility: "OBC students with family income less than ₹1.5 lakhs per annum",
      benefits: "Full tuition fees and maintenance allowance",
      website: "https://scholarships.gov.in"
    },
    {
      name: "Central Sector Scheme of Scholarship",
      provider: "Ministry of Education",
      eligibility: "Students in top 20 percentile in qualifying examination",
      benefits: "₹10,000 per annum for 3 years",
      website: "https://scholarships.gov.in"
    },
    {
      name: "Pragati Scholarship for Girl Students (AICTE)",
      provider: "AICTE",
      eligibility: "Girl students admitted to AICTE approved programs with family income less than ₹8 lakhs",
      benefits: "₹50,000 per annum",
      website: "https://www.aicte-india.org"
    },
    {
      name: "Tamil Nadu Chief Minister's Merit Scholarship",
      provider: "Government of Tamil Nadu",
      eligibility: "Tamil Nadu state students with high scores in higher secondary examination",
      benefits: "₹5,000 to ₹10,000 per annum",
      website: "https://www.tn.gov.in"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Scholarships & Financial Aid</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">College Scholarships</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            P.K.R. Arts College for Women is committed to supporting deserving students through various scholarship programs. Our aim is to ensure that financial constraints do not hinder the educational aspirations of talented students.
          </p>
          
          <div className="space-y-6">
            {collegeScholarships.map((scholarship, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-bold text-lg">{scholarship.name}</h3>
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="font-medium text-slate-700">Eligibility:</span> {scholarship.eligibility}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium text-slate-700">Amount:</span> {scholarship.amount}
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Required Documents:</span>
                    <ul className="list-disc pl-6 mt-1">
                      {scholarship.documents.map((doc, idx) => (
                        <li key={idx} className="text-sm">{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <a 
              href="#" 
              className="bg-slate-600 hover:bg-slate-700 text-white py-2 px-6 rounded-lg inline-block"
            >
              Download Scholarship Application Form
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Government Scholarships</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            In addition to the college scholarships, students can also apply for various government scholarships. The college provides guidance and support to eligible students in applying for these scholarships.
          </p>
          
          <div className="space-y-6">
            {governmentScholarships.map((scholarship, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-bold text-lg">{scholarship.name}</h3>
                  <p className="text-sm text-gray-600">Provider: {scholarship.provider}</p>
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <span className="font-medium text-slate-700">Eligibility:</span> {scholarship.eligibility}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium text-slate-700">Benefits:</span> {scholarship.benefits}
                  </div>
                  <div>
                    <span className="font-medium text-slate-700">Website:</span> 
                    <a href={scholarship.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 hover:text-blue-800">
                      {scholarship.website}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Scholarship Application Process</h2>
        </div>
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">How to Apply for College Scholarships</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Download the scholarship application form from the college website or collect it from the scholarship cell</li>
              <li>Fill in all required details accurately</li>
              <li>Attach all necessary supporting documents as mentioned in the form</li>
              <li>Submit the completed form to the Scholarship Cell before the deadline</li>
              <li>Attend the interview if called for (applicable for some scholarships)</li>
              <li>Check the notification board or college website for scholarship results</li>
            </ol>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-slate-700">How to Apply for Government Scholarships</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Visit the respective scholarship portal mentioned above</li>
              <li>Register and create a user account</li>
              <li>Fill in the online application form with accurate details</li>
              <li>Upload all required documents as specified</li>
              <li>Submit the application before the deadline</li>
              <li>Note down the application reference number for future tracking</li>
              <li>The college scholarship cell will verify your application when required</li>
            </ol>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">Scholarship Cell</h3>
            <p className="text-blue-800 mb-2">
              The college has a dedicated Scholarship Cell to assist students in applying for various scholarships. For any queries or guidance regarding scholarships, please contact:
            </p>
            <div className="text-blue-800">
              <p><span className="font-medium">Contact Person:</span> Dr. K. Selvi</p>
              <p><span className="font-medium">Email:</span> scholarships@pkrarts.org</p>
              <p><span className="font-medium">Phone:</span> +91 4285 222 225</p>
              <p><span className="font-medium">Location:</span> Administrative Block, Ground Floor, Room No. 12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scholarships;
