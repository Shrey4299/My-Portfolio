import React from "react";
import { BiCheck } from "react-icons/bi";

function Services() {
  return (
    <section className="md:h-screen px-7 md:px-28 py-10 mb-28" id="service">
      <div className="flex flex-col items-center mb-8">
        <div className="text-slate-300 text-sm">What makes me unique</div>
        <div className="text-blue-400 text-3xl">My Experience</div>
      </div>
      <div className="grid grid-row-2 md:grid-cols-2 gap-8">
        {/* Folksmedia */}
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Folksmedia | Bangalore</h3>
            <h3 className="text-[#1f1f38] text-sm text-center">(Feb 2024 — Present)</h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Implemented core features, including payroll processing, financial management, and HR information systems using Python,
                FastAPI, and Django.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Utilized AWS Cognito and AWS Rekognition for user verification, identification, and authentication processes, with backend
                support from RDS Postgres, S3, and DynamoDB.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Built an advanced geo-continuous location tracking system for a division, along with recording employee breaks for accurate
                time tracking using Celery.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Designed scalable, API-driven data ingestion pipelines to manage large data volumes and optimized search and categorization
                of movies and shows.
              </p>
            </li>
          </ul>
        </article>

        {/* SocialSeller */}
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">SocialSeller | Raipur</h3>
            <h3 className="text-[#1f1f38] text-sm text-center">(July 2023 — Feb 2024)</h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Developed a high-performance e-commerce backend system for resellers using Python, Node.js, and Sequelize with PostgreSQL.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Integrated technologies like FCM, WebSockets, Google Phone Auth, Nodemailer, and Webhooks for enhanced functionality.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Designed and implemented a multi-tenant e-commerce architecture with integrated Razorpay, Cashfree, and Shiprocket for
                scalable transactions and delivery.
              </p>
            </li>
          </ul>
        </article>

        {/* BigBasket */}
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">BigBasket | Bangalore</h3>
            <h3 className="text-[#1f1f38] text-sm text-center">(Jan 2023 — June 2023)</h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Designed and developed a website using Django and Django Rest Framework integrated with Google Drive & Spreadsheet API.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Automated the tracking of all test cases tested using Google Apps Script, allowing higher authorities to create
                project-specific spreadsheets.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Implemented a unified report dashboard using MongoDB for seamless analysis and monitoring of mobile, web, and API testing
                results.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Performed testing of BigBasket’s extended search feature using RestAssured and automated web and mobile UI testing using
                Selenium, Appium, and TestNG.
              </p>
            </li>
          </ul>
        </article>

        {/* Leads4needs */}
        <article className="bg-indigo-900 border-[1px] border-blue-400 transition ease-in-out delay-150 hover:bg-transparent hover:border-indigo-900 overflow-hidden rounded-b-3xl">
          <div className="bg-blue-400 p-8 rounded-b-3xl shadow-2xl overflow-hidden">
            <h3 className="text-[#1f1f38] text-md text-center">Leads4needs | Noida</h3>
            <h3 className="text-[#1f1f38] text-sm text-center">(June 2022 — November 2022)</h3>
          </div>
          <ul className="p-8">
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Developed & optimized web applications using Node.js and React.js, also responsible for debugging & maintaining existing
                code.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Optimized website loading time by up to 70% through performance enhancements, achieving improved user experience.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Utilized React Hooks for state management, integrated APIs, and implemented third-party libraries, enhancing website
                functionality.
              </p>
            </li>
            <li className="flex gap-4 mb-3">
              <BiCheck className="text-blue-400 mt-1" />
              <p className="text-sm">
                Performed functional testing in React and was actively involved in bug & defect tracking and reporting in JIRA.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services;
