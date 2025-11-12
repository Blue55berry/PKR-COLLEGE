import React from 'react';

const PrincipalsDesk = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-slate-700">Principal's Desk</h1>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8">
        <div className="md:flex">
          <div className="md:w-1/3 p-6 flex flex-col items-center bg-slate-50">
            <div className="w-48 h-48 rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img src="/images/principal.jpg" alt="Dr. R. Mallika" className="w-full h-full object-cover" />
            </div>
            <h2 className="text-xl font-bold text-center">Dr. R. Mallika</h2>
            <p className="text-gray-600 text-center">Principal</p>
            <p className="text-sm text-gray-500 text-center mt-1">Ph.D., M.Phil., M.A.</p>
            <div className="mt-4 w-full">
              <div className="border-t border-gray-300 pt-4">
                <p className="text-sm text-gray-600 mb-1">
                  <span className="font-medium">Email:</span> principal@pkrarts.org
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-medium">Phone:</span> +91 4285 222 222
                </p>
              </div>
            </div>
          </div>
          
          <div className="md:w-2/3 p-6">
            <h3 className="text-2xl font-bold mb-6 text-slate-700">Principal's Message</h3>
            
            <div className="prose max-w-none">
              <p className="mb-4">
                Dear Students, Parents, and Well-wishers,
              </p>
              
              <p className="mb-4">
                It gives me immense pleasure to welcome you to P.K.R. Arts College for Women, an institution dedicated to empowering women through quality education. As we navigate the challenges of the 21st century, our commitment to providing holistic education that blends academic excellence with character building remains steadfast.
              </p>
              
              <p className="mb-4">
                At P.K.R. Arts College, we believe that education is not merely about acquiring knowledge but about transforming lives. Our mission is to nurture young women into confident, competent, and compassionate individuals who can make significant contributions to society and emerge as leaders in their chosen fields.
              </p>
              
              <p className="mb-4">
                We take pride in our qualified and dedicated faculty, state-of-the-art infrastructure, and a conducive learning environment that encourages critical thinking, creativity, and innovation. Our curriculum is designed to provide a perfect balance of theoretical knowledge and practical skills, preparing students for successful careers and meaningful lives.
              </p>
              
              <p className="mb-4">
                The college offers a wide range of academic programs across various disciplines, along with numerous co-curricular and extracurricular activities that help in the all-round development of students. We also emphasize values, ethics, and social responsibility, nurturing students to become responsible citizens who can contribute positively to society.
              </p>
              
              <p className="mb-4">
                As we move forward, we remain committed to our vision of becoming a premier institution for women's education, known for academic excellence, innovation, and social impact. We invite you to join us in this journey of transformation and growth.
              </p>
              
              <p className="mt-8">
                Warm regards,<br />
                <span className="font-bold">Dr. R. Mallika</span><br />
                Principal
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-slate-600 text-white p-4">
          <h2 className="text-xl font-semibold">Principal's Achievements</h2>
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Academic & Research Contributions</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Over 25 years of experience in teaching and academic administration</li>
            <li>Published more than 30 research papers in national and international journals</li>
            <li>Authored 3 books on contemporary literature and women's studies</li>
            <li>Supervised 15 Ph.D. scholars and 25 M.Phil. students</li>
            <li>Recipient of the Best Educator Award from the State Government</li>
            <li>Member of various academic and research bodies at the university level</li>
            <li>Led several funded research projects on women empowerment and education</li>
          </ul>
          
          <h3 className="text-lg font-semibold mb-4 text-slate-700">Leadership & Administrative Expertise</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Instrumental in securing NAAC 'A' Grade accreditation for the college</li>
            <li>Established new academic programs and research centers</li>
            <li>Enhanced infrastructure and technology integration in teaching-learning</li>
            <li>Strengthened industry-academia partnerships and placement opportunities</li>
            <li>Promoted international collaborations and exchange programs</li>
            <li>Initiated various student welfare and scholarship schemes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PrincipalsDesk;
