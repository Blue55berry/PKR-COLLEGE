import React, { useState } from 'react';

const FeeStructure = () => {
  const [activeTab, setActiveTab] = useState("ug");
  
  const ugFees = [
    {
      program: "B.A. English",
      tuition: "₹25,000",
      development: "₹5,000",
      examination: "₹3,000",
      others: "₹2,000",
      total: "₹35,000"
    },
    {
      program: "B.A. Tamil",
      tuition: "₹22,000",
      development: "₹5,000",
      examination: "₹3,000",
      others: "₹2,000",
      total: "₹32,000"
    },
    {
      program: "B.Com",
      tuition: "₹27,000",
      development: "₹5,000",
      examination: "₹3,000",
      others: "₹2,000",
      total: "₹37,000"
    },
    {
      program: "B.Sc. Mathematics",
      tuition: "₹28,000",
      development: "₹5,000",
      examination: "₹3,000",
      others: "₹2,000",
      total: "₹38,000"
    },
    {
      program: "B.Sc. Computer Science",
      tuition: "₹32,000",
      development: "₹6,000",
      examination: "₹3,000",
      others: "₹4,000",
      total: "₹45,000"
    },
    {
      program: "B.Sc. Physics",
      tuition: "₹30,000",
      development: "₹6,000",
      examination: "₹3,000",
      others: "₹3,000",
      total: "₹42,000"
    },
    {
      program: "B.Sc. Chemistry",
      tuition: "₹30,000",
      development: "₹6,000",
      examination: "₹3,000",
      others: "₹3,000",
      total: "₹42,000"
    }
  ];
  
  const pgFees = [
    {
      program: "M.A. English",
      tuition: "₹30,000",
      development: "₹6,000",
      examination: "₹4,000",
      others: "₹3,000",
      total: "₹43,000"
    },
    {
      program: "M.Com",
      tuition: "₹32,000",
      development: "₹6,000",
      examination: "₹4,000",
      others: "₹3,000",
      total: "₹45,000"
    },
    {
      program: "M.Sc. Mathematics",
      tuition: "₹35,000",
      development: "₹7,000",
      examination: "₹4,000",
      others: "₹3,000",
      total: "₹49,000"
    },
    {
      program: "M.Sc. Computer Science",
      tuition: "₹40,000",
      development: "₹8,000",
      examination: "₹4,000",
      others: "₹5,000",
      total: "₹57,000"
    }
  ];
  
  const researchFees = [
    {
      program: "M.Phil. English",
      tuition: "₹40,000",
      development: "₹8,000",
      examination: "₹5,000",
      others: "₹4,000",
      total: "₹57,000"
    },
    {
      program: "M.Phil. Commerce",
      tuition: "₹40,000",
      development: "₹8,000",
      examination: "₹5,000",
      others: "₹4,000",
      total: "₹57,000"
    },
    {
      program: "Ph.D. English",
      tuition: "₹50,000",
      development: "₹10,000",
      examination: "₹8,000",
      others: "₹7,000",
      total: "₹75,000"
    },
    {
      program: "Ph.D. Commerce",
      tuition: "₹50,000",
      development: "₹10,000",
      examination: "₹8,000",
      others: "₹7,000",
      total: "₹75,000"
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Fee Structure</h1>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Program Fees (2025-26)</h2>
        </div>
        <div className="p-6">
          <div className="flex border-b mb-6">
            <button 
              className={`py-2 px-6 ${activeTab === "ug" ? "border-b-2 border-slate-600 font-semibold text-slate-700" : "text-gray-500"}`}
              onClick={() => setActiveTab("ug")}
            >
              Undergraduate
            </button>
            <button 
              className={`py-2 px-6 ${activeTab === "pg" ? "border-b-2 border-slate-600 font-semibold text-slate-700" : "text-gray-500"}`}
              onClick={() => setActiveTab("pg")}
            >
              Postgraduate
            </button>
            <button 
              className={`py-2 px-6 ${activeTab === "research" ? "border-b-2 border-slate-600 font-semibold text-slate-700" : "text-gray-500"}`}
              onClick={() => setActiveTab("research")}
            >
              Research
            </button>
          </div>
          
          <div className="overflow-x-auto">
            {activeTab === "ug" && (
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Tuition Fee</th>
                    <th className="py-3 px-4 text-left">Development Fee</th>
                    <th className="py-3 px-4 text-left">Examination Fee</th>
                    <th className="py-3 px-4 text-left">Other Charges</th>
                    <th className="py-3 px-4 text-left font-bold">Total (Per Year)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {ugFees.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{fee.program}</td>
                      <td className="py-3 px-4">{fee.tuition}</td>
                      <td className="py-3 px-4">{fee.development}</td>
                      <td className="py-3 px-4">{fee.examination}</td>
                      <td className="py-3 px-4">{fee.others}</td>
                      <td className="py-3 px-4 font-bold">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
            {activeTab === "pg" && (
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Tuition Fee</th>
                    <th className="py-3 px-4 text-left">Development Fee</th>
                    <th className="py-3 px-4 text-left">Examination Fee</th>
                    <th className="py-3 px-4 text-left">Other Charges</th>
                    <th className="py-3 px-4 text-left font-bold">Total (Per Year)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {pgFees.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{fee.program}</td>
                      <td className="py-3 px-4">{fee.tuition}</td>
                      <td className="py-3 px-4">{fee.development}</td>
                      <td className="py-3 px-4">{fee.examination}</td>
                      <td className="py-3 px-4">{fee.others}</td>
                      <td className="py-3 px-4 font-bold">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
            {activeTab === "research" && (
              <table className="min-w-full bg-white">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-3 px-4 text-left">Program</th>
                    <th className="py-3 px-4 text-left">Tuition Fee</th>
                    <th className="py-3 px-4 text-left">Development Fee</th>
                    <th className="py-3 px-4 text-left">Examination Fee</th>
                    <th className="py-3 px-4 text-left">Other Charges</th>
                    <th className="py-3 px-4 text-left font-bold">Total (Per Year)</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {researchFees.map((fee, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">{fee.program}</td>
                      <td className="py-3 px-4">{fee.tuition}</td>
                      <td className="py-3 px-4">{fee.development}</td>
                      <td className="py-3 px-4">{fee.examination}</td>
                      <td className="py-3 px-4">{fee.others}</td>
                      <td className="py-3 px-4 font-bold">{fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Additional Fees</h2>
        </div>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Particulars</th>
                  <th className="py-3 px-4 text-left">Amount</th>
                  <th className="py-3 px-4 text-left">Frequency</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Admission Fee</td>
                  <td className="py-3 px-4">₹2,000</td>
                  <td className="py-3 px-4">One time (at admission)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">ID Card Fee</td>
                  <td className="py-3 px-4">₹200</td>
                  <td className="py-3 px-4">One time (at admission)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Library Fee</td>
                  <td className="py-3 px-4">₹1,000</td>
                  <td className="py-3 px-4">Annual</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Laboratory Fee (for Science Programs)</td>
                  <td className="py-3 px-4">₹3,000</td>
                  <td className="py-3 px-4">Annual</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Computer Lab Fee</td>
                  <td className="py-3 px-4">₹2,000</td>
                  <td className="py-3 px-4">Annual</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Sports & Cultural Activities Fee</td>
                  <td className="py-3 px-4">₹1,000</td>
                  <td className="py-3 px-4">Annual</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Caution Deposit (Refundable)</td>
                  <td className="py-3 px-4">₹5,000</td>
                  <td className="py-3 px-4">One time (at admission)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Payment Information</h2>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Fee Payment Schedule</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-3 px-4 text-left">Installment</th>
                  <th className="py-3 px-4 text-left">Due Date</th>
                  <th className="py-3 px-4 text-left">Percentage of Total Fees</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">First Installment</td>
                  <td className="py-3 px-4">At the time of admission</td>
                  <td className="py-3 px-4">60%</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium">Second Installment</td>
                  <td className="py-3 px-4">November 30, 2025</td>
                  <td className="py-3 px-4">40%</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Payment Methods</h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-base mb-2">Online Payment</h4>
              <p className="text-sm text-gray-600">Pay fees online using Credit Card, Debit Card, Net Banking, or UPI</p>
              <button className="mt-3 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm">
                Pay Online
              </button>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-base mb-2">Bank Transfer</h4>
              <p className="text-sm text-gray-600">Direct bank transfer to the college account</p>
              <div className="mt-2 text-sm">
                <p><span className="font-medium">Account Name:</span> PKR Arts College</p>
                <p><span className="font-medium">Account No:</span> 123456789012</p>
                <p><span className="font-medium">IFSC Code:</span> ABCD0123456</p>
              </div>
            </div>
            
            <div className="border rounded-lg p-4">
              <h4 className="font-bold text-base mb-2">Demand Draft</h4>
              <p className="text-sm text-gray-600">DD in favor of "PKR Arts College for Women" payable at Gobichettipalayam</p>
              <p className="mt-2 text-xs text-gray-500">Submit DD at the college fee counter along with student details.</p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notes</h3>
            <ul className="list-disc pl-6 space-y-1 text-yellow-800">
              <li>Late payment attracts a fine of ₹100 per day</li>
              <li>Fee structure is subject to change as per college management decision</li>
              <li>All fees are non-refundable except caution deposit</li>
              <li>Fee concession is available for deserving students as per college policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
