import React, { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileImg from "./vinay_profile.jpg";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50 to-blue-50 text-gray-900 font-sans">

      {/* Hero Section */}
      <section data-aos="fade-down" className="bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6 text-center">
        <img src={profileImg} alt="Vinay A S" className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-white shadow-xl" />
        <h1 className="text-5xl font-extrabold mb-2 tracking-wide">Vinay A S</h1>
        <p className="text-xl font-medium">AWS Data Engineer | AWS Devops Engineer | Devops | CI|CD | Linux | Cloud Automation</p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {[
            "summary",
            "skills",
            "experience",
            "projects",
            "strengths",
            "certifications",
            "education",
            "keywords",
            "contact"
          ].map((section) => (
            <a key={section} href={`#${section}`} className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-200 transition duration-300 capitalize">
              {section}
            </a>
          ))}
        </div>
        <a href="/VinayAS_Resume.pdf" download className="mt-6 inline-block bg-white text-indigo-900 px-6 py-3 rounded-full font-bold shadow-md hover:bg-indigo-100 transition">⬇️ Download Resume</a>
      </section>

      {/* Summary */}
      <section id="summary" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-white rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-4 text-purple-800 border-b-4 border-purple-300 pb-2">🧾 Professional Summary</h2>
        <p className="text-lg text-gray-800 leading-relaxed">
          Result-oriented AWS Data Engineer with 3 years of experience designing, building, and maintaining scalable data pipelines and cloud infrastructure. Proficient in ETL, automation, big data, and AWS services like S3, Redshift, Glue, Lambda, and EMR. Strong collaboration skills with proven contributions to high-impact data engineering projects.
        </p>
      </section>
      
      {/* Education */}
      <section id="education" data-aos="fade-left" className="p-8 max-w-5xl mx-auto bg-gradient-to-r from-yellow-100 via-white to-yellow-50 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-yellow-800 border-b-4 border-yellow-400 pb-2">🎓 Education</h2>
        <ul className="space-y-4 text-gray-800">
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong>BE (Electronics & Instrumentation)</strong><br />
            Siddaganga Institution of Technology – 2020 – 7.35 CGPA
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong>Diploma</strong><br />
            Department of Technical Education, Aryabharathi Polytechnic – 2017 – 61%
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <strong>SSLC</strong><br />
            Karnataka Secondary Education Examination Board – 2011 – 64%
          </li>
        </ul>
      </section>

      {/* Skills */}
      <section id="skills" data-aos="fade-up" className="p-8 max-w-5xl mx-auto bg-gradient-to-br from-blue-50 via-white to-sky-100 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-blue-800 border-b-4 border-blue-300 pb-2">🧠 Technical Skills</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-800">
          <li><strong>Cloud:</strong> AWS (S3, EC2, Redshift, Glue, Lambda, EMR, RDS, CloudWatch, IAM)</li>
          <li><strong>Programming:</strong> Python, SQL, PySpark, Shell Scripting</li>
          <li><strong>ETL Tools:</strong> AWS Glue, Apache Airflow</li>
          <li><strong>Big Data:</strong> Hadoop, Spark, EMR</li>
          <li><strong>Databases:</strong> Redshift, MySQL, PostgreSQL, DynamoDB</li>
          <li><strong>DevOps Tools:</strong> Git, Jenkins, CloudFormation, Terraform </li>
          <li><strong>Visualization:</strong> Amazon QuickSight, Tableau </li>
          <li><strong>OS:</strong> Linux (RedHat, Ubuntu), Windows</li>
        </ul>
      </section>

      {/* Experience */}
      <section id="experience" data-aos="fade-right" className="p-8 max-w-5xl mx-auto bg-gradient-to-br from-green-50 to-white rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-green-700 border-b-4 border-green-400 pb-2">💼 Experience</h2>
        <div className="mb-6">
          <p className="font-semibold text-lg">Data Engineer – Ahana System and Solutions (Jun 2022 – Jun 2024)</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Built data pipelines using Python, SQL</li>
            <li>Used AWS Glue, Redshift, DynamoDB, Lambda</li>
            <li>Monitored with CloudWatch and Airflow</li>
            <li>Managed Infra via CloudFormation</li>
          </ul>
        </div>
        <div className="mb-6">
          <p className="font-semibold text-lg">Linux Administrator – astTECS Pvt Ltd (2021 – 2022)</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Managed Linux servers, user accounts</li>
            <li>Worked with CRON, YUM, RPM tools</li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-lg">Production Associate – Wistron Communication (2020 – 2021)</p>
          <p className="pl-6 text-gray-700">Worked on manufacturing and process optimization</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-aos="zoom-in" className="p-8 max-w-5xl mx-auto bg-gradient-to-tr from-pink-50 via-white to-rose-100 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-pink-700 border-b-4 border-pink-400 pb-2">🚀 Projects</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Data Lake Implementation</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Used S3, Glue, Redshift</li>
            <li>Structured & unstructured data</li>
            <li>Lifecycle policies for optimization</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Real-Time Data Processing</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Kinesis, Lambda, Redshift</li>
            <li>Log streaming and dashboards</li>
          </ul>
        </div>
      </section>

      {/* Strengths */}
      <section id="strengths" data-aos="fade-up" className="p-8 max-w-5xl mx-auto bg-gradient-to-tr from-green-100 to-white rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-green-800 border-b-4 border-green-400 pb-2">💪 Strengths</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>Cloud workflow automation</li>
          <li>Linux troubleshooting & scripting</li>
          <li>ETL optimization</li>
          <li>Team collaboration</li>
        </ul>
      </section>

      {/* Certifications */}
      <section id="certifications" data-aos="fade-up" className="p-8 max-w-5xl mx-auto bg-gradient-to-l from-purple-100 via-white to-violet-100 rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-purple-700 border-b-4 border-purple-400 pb-2">📜 Certifications</h2>
        <ul className="list-disc pl-6 text-gray-800 space-y-2">
          <li>AWS Certified Solutions Architect – Associate</li>
          <li>AWS Certified Data Analytics – Specialty (In Progress)</li>
        </ul>
      </section>


      {/* Keywords */}
      <section id="keywords" data-aos="fade-right" className="p-8 max-w-5xl mx-auto bg-gradient-to-br from-indigo-100 to-white rounded-xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-indigo-800 border-b-4 border-indigo-400 pb-2">🔖 Keywords</h2>
        <p className="text-gray-800 leading-relaxed">
          AWS Data Engineer, ETL, Redshift, S3, Glue, Lambda, EMR, PySpark, SQL, CloudFormation, Airflow, Automation, Data Lake, CloudWatch, Python
        </p>
      </section>

      {/* Contact */}
      <section id="contact" data-aos="fade-up" className="bg-gradient-to-r from-gray-900 via-indigo-800 to-purple-800 text-white p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">📬 Get in Touch</h2>
        <p className="mb-2">📧 vinayas27ei@gmail.com</p>
        <p>📞 +91 6361987834</p>
        <p>📍 Bengaluru, India</p>
        <div className="flex justify-center gap-6 mt-6">
          <a href="https://github.com/vinaas27/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/vinay-a-s-721310211/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition"><FaLinkedin size={30} /></a>
          <a href="mailto:vinayas27ei@gmail.com" className="hover:text-yellow-300 transition"><MdEmail size={30} /></a>
          <a href="tel:6361987834" className="hover:text-yellow-300 transition"><MdPhone size={30} /></a>
        </div>
      </section>
    </main>
  );
}
