import React from 'react';

const Eligibility = () => {
  const undergradPrograms = [
    {
      program: "B.A. English",
      eligibility: "10+2 with minimum 50% marks in English",
      duration: "3 years"
    },
    {
      program: "B.A. Tamil",
      eligibility: "10+2 with minimum 50% marks",
      duration: "3 years"
    },
    {
      program: "B.Com",
      eligibility: "10+2 with minimum 50% marks in Commerce/Business Studies",
      duration: "3 years"
    },
    {
      program: "B.Sc. Mathematics",
      eligibility: "10+2 with minimum 50% marks in Mathematics",
      duration: "3 years"
    },
    {
      program: "B.Sc. Computer Science",
      eligibility: "10+2 with minimum 50% marks in Mathematics/Computer Science",
      duration: "3 years"
    },
    {
      program: "B.Sc. Physics",
      eligibility: "10+2 with minimum 50% marks in Physics and Mathematics",
      duration: "3 years"
    },
    {
      program: "B.Sc. Chemistry",
      eligibility: "10+2 with minimum 50% marks in Chemistry",
      duration: "3 years"
    }
  ];
  
  const postgradPrograms = [
    {
      program: "M.A. English",
      eligibility: "Bachelor's degree in English with minimum 50% marks",
      duration: "2 years"
    },
    {
      program: "M.Com",
      eligibility: "B.Com or related degree with minimum 50% marks",
      duration: "2 years"
    },
    {
      program: "M.Sc. Mathematics",
      eligibility: "B.Sc. Mathematics with minimum 50% marks",
      duration: "2 years"
    },
    {
      program: "M.Sc. Computer Science",
      eligibility: "B.Sc. Computer Science/BCA/B.Sc. IT with minimum 50% marks",
      duration: "2 years"
    }
  ];
  
  const researchPrograms = [
    {
      program: "M.Phil. English",
      eligibility: "Master's degree in English with minimum 55% marks",
      duration: "1 year"
    },
    {
      program: "M.Phil. Commerce",
      eligibility: "Master's degree in Commerce with minimum 55% marks",
      duration: "1 year"
    },
    {
      program: "Ph.D. English",
      eligibility: "Master's degree in English with minimum 55% marks",
      duration: "3-5 years"
    },
    {
      program: "Ph.D. Commerce",
      eligibility: "Master's degree in Commerce with minimum 55% marks",
      duration: "3-5 years"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Eligibility Criteria</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">General Eligibility Requirements</h2>
        </div>
        <div className="p-6">
          <p className="mb-6">
            P.K.R. Arts College for Women admits students based on merit and in accordance with the guidelines set by the affiliating university and government regulations. The following are the general eligibility criteria for different levels of programs:
          </p>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Undergraduate Programs</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Candidates must have passed 10+2 (Higher Secondary) examination</li>
                <li>Minimum 50% aggregate marks in relevant subjects</li>
                <li>Reservation policies as per government norms are applicable</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Postgraduate Programs</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Candidates must have a bachelor's degree in the relevant discipline</li>
                <li>Minimum 50% aggregate marks at the undergraduate level</li>
                <li>Entrance test may be required for certain programs</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Research Programs</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Candidates must have a master's degree in the relevant discipline</li>
                <li>Minimum 55% aggregate marks at the postgraduate level</li>
                <li>Entrance test and interview are mandatory</li>
                <li>UGC-NET/SLET/SET qualified candidates may be given preference</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Program-Specific Eligibility</h2>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Undergraduate Programs</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Eligibility</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {undergradPrograms.map((program, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{program.program}</td>
                    <td className="py-3 px-4">{program.eligibility}</td>
                    <td className="py-3 px-4">{program.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Postgraduate Programs</h3>
          <div className="overflow-x-auto mb-8">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Eligibility</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {postgradPrograms.map((program, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{program.program}</td>
                    <td className="py-3 px-4">{program.eligibility}</td>
                    <td className="py-3 px-4">{program.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Research Programs</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Program</th>
                  <th className="py-3 px-4 text-left">Eligibility</th>
                  <th className="py-3 px-4 text-left">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {researchPrograms.map((program, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium">{program.program}</td>
                    <td className="py-3 px-4">{program.eligibility}</td>
                    <td className="py-3 px-4">{program.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Relaxations & Reservations</h2>
        </div>
        <div className="p-6">
          <p className="mb-4">
            The college follows the reservation policies as per government norms. The following relaxations and reservations are applicable:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Category-wise Reservations</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Scheduled Caste (SC): 15%</li>
                <li>Scheduled Tribe (ST): 7.5%</li>
                <li>Other Backward Classes (OBC): 27%</li>
                <li>Economically Weaker Section (EWS): 10%</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Special Provisions</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Persons with Disabilities (PwD): 5% horizontal reservation</li>
                <li>Sports Quota: As per government norms</li>
                <li>NCC/NSS Certificate holders: Additional weightage</li>
                <li>Single Girl Child: Special consideration</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-gray-600 italic">
              * Relaxation in marks: 5% relaxation in minimum eligibility marks for SC/ST/OBC/PwD candidates as per government norms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eligibility;
