import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import { FaHospital } from "react-icons/fa";
import { BsClipboard2Plus } from "react-icons/bs";
import { IoPerson } from "react-icons/io5";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can set options like duration here
  }, []);
  return (
    <>
      <section
        id="about-me"
        className=" dark:bg-[#1f2327] dark:text-white border-b border-gray-200 dark:border-gray-700"
      >
        <div className="about-top h-96 bg-cover bg-center">
          <h1 className="font-extrabold mx-4 md:mx-16 p-4 text-4xl md:text-6xl text-blue-800" >
            About me
          </h1>
          <div className="mx-6 md:mx-20 flex items-center">
            <Link to={"/"}>
              <h1 className="ml-2 font-bold text-blue-700 text-lg"> Home\</h1>
            </Link>{" "}
            <span className=" font-semibold ml-[2px]">about</span>
          </div>
        </div>
        <div className="container mx-auto px-8 lg:px-16">
        <div className="  grid grid-cols-1 lg:grid-cols-2 gap-2 py-16">
          <div className=" shadow-md" data-aos="fade-left">
            <img
              src="./drvishal2.jpg"
              alt="Cardiac Surgeon img"
              className="w-full rounded-2xl md:rounded-tl-[70px] md:rounded-tr-2xl md:rounded-b-md object-cover shadow-lg"
            />
          </div>
          {/* Descriptin */}
          <div className="p-1 py-4 md:p-10" data-aos="fade-right">
            <h2 className="text-2xl md:text-4xl font-bold text-gray dark:text-white-800 mb-4">
              <div>About Me</div>
              <div>M.Ch. - CTV Surgery</div>
              <div>Senior Cardiac Surgeon</div>
            </h2>
            <p className="text-lg text-gray-600 mb-4 dark:text-white">
              Hi, I'm  <span className="font-doctor">Dr. Vishal Agarwal</span>, a board-certified cardiac surgeon with
              over 15 years of experience. I specialize in minimally invasive
              heart surgeries and have successfully performed over 7000
              surgeries to date. My goal is to provide the highest quality care
              to my patients and help them lead healthier.
            </p>
          </div>
        </div>
        <div className="" data-aos="fade-up">
          <div className=" flex justify-start items-center gap-2 mb-2">
            <div className="p-3 border-[1px] text-blue-700 text-xl md:text-2xl border-blue-700 rounded-full bg-white dark:bg-[#1f2327]">
              {" "}
              <FaBook />{" "}
            </div>
            <span className="font-bold text-xl md:text-3xl">
              Educational Qualifications:-
            </span>
          </div>
          <div className="p-1">
            <div className="text-lg font-semibold ">
              <div className="mb-1"> ⨀ M.ch. (C.T.V.S.) </div>
              <div className="mb-2 text-gray-600 dark:text-gray-200">
                College: G.S.V.M. Medical College, Kanpur
              </div>
            </div>
            <div className="text-lg font-semibold ">
              <div className=" mb-1">⨀ M.S. (General Surgery)</div>
              <div className="mb-2 text-gray-600 dark:text-gray-200">
                {" "}
                University: Aurangabad University
              </div>
            </div>
            <div className="text-lg font-semibold">
              <div className=" mb-1">⨀ M.B.B.S.</div>
              <div className="text-gray-600 dark:text-gray-200">
                University: Aurangabad University
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10" data-aos="fade-up">
          <div className=" flex justify-start items-center gap-2 mb-2">
            <div className="p-3 border-[1px] text-blue-700 text-xl md:text-2xl border-blue-700 rounded-full bg-white dark:bg-[#1f2327]">
              {" "}
              <FaHospital />{" "}
            </div>
            <span className="font-bold text-xl md:text-3xl">Experience</span>
          </div>
          <div className="p-1">
            <div className="text-lg font-semibold ">
              <div className="mb-1"> ⨀ Additional Director & HOD - CTVS </div>
              <div className="mb-2 text-gray-600 dark:text-gray-200">
                At Fortis Escorts, Faridabad.
              </div>
            </div>
            <div className="text-lg font-semibold ">
              <div className=" mb-1">⨀ Director - CTVS</div>
              <div className="mb-2 text-gray-600 dark:text-gray-200">
                {" "}
                At Aakash Healthcare Private Limited, Dwarka.
              </div>
            </div>
            <div className="text-lg font-semibold">
              <div className=" mb-1">⨀ HOD - CTVS</div>
              <div className="text-gray-600 dark:text-gray-200">
                At Paras Hospital, Gurgaon.
              </div>
            </div>
            <div className="text-lg font-semibold">
              <div className=" mb-1">⨀ Ex-Medical Director, HOD - CTVS</div>
              <div className="text-gray-600 dark:text-gray-200">
                At Gangasheel Advanced Super Speciality Hospital, Bareilly.
              </div>
            </div>
            <div className="text-lg font-semibold">
              <div className=" mb-1">⨀ Senior Consultant</div>
              <div className="text-gray-600 dark:text-gray-200">
                At Yashoda Super Speciality Hospital, Ghaziabad.
              </div>
            </div>
            <div className="text-lg font-semibold">
              <div className=" mb-1">⨀ Consultant</div>
              <div className="text-gray-600 dark:text-gray-200">
                Sigma Group of Hospitals, Hyderabad.
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-10" data-aos="fade-up">
          <div className=" flex justify-start items-center gap-2 mb-2">
            <div className="p-3 border-[1px] text-blue-700 text-xl md:text-2xl border-blue-700 rounded-full bg-white dark:bg-[#1f2327]">
              {" "}
              <BsClipboard2Plus />{" "}
            </div>
            <span className="font-bold text-xl md:text-3xl">
              Workshop/Conferences attended
            </span>
          </div>
          <div className="p-1">
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Performed and started Open Heart Surgery Programme (OPCABG).
              <div> At Yashoda Super Speciality Hospital, Ghaziabad.</div>
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Performed first Bentall Procedure with CABG of Pan Paras Group.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Operated first case of ROSS Procedure at Pan Paras Group.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Operated total Intra cardiac Repair of Complex HOD
              Cor-Triatriatum with Ostium Primum ASD with Service MR with LSVC
              draining into LA.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Endo - Vascular Abdominal Aorta Stenting for dissection of
              descending aorta.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Performed first composite CABG with AVR in Western (U.P.).
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Performed and started Programme of Awake Open Heart Surgeryin
              Western (U.P.).
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Performed first Paediatric Open Heart Surgery with On Table
              Extubation under ultra fast Extubation procedure.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Performed India's first case out of the total 11 cases, in the
              world, of OAV + Server AR + Anamalous RCA.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Got the privilege in marking Paras the 3rd Center in North India
              to perform Cardiac Surgery at Satellite Center in Vicinity like
              Columbia Asia Hospital, Gurgaon, ORG Hospital, Faridabad, Rama
              Medical College, Hapur, KME Hospitals, Meerut and Gangasheel
              Hospital, Bareilly.
            </div>
            <div className=" text-gray-600 dark:text-gray-200 text-md mb-2">
              » Beating Heart CABG Performed on a patient with 13 - 15%
              enjection fraction.
            </div>
          </div>
        </div>
        <div className="   mt-10" data-aos="fade-up">
          <div className=" flex justify-start items-center gap-2 mb-2">
            <div className="p-3 border-[1px] text-blue-700 text-xl md:text-2xl border-blue-700 rounded-full bg-white dark:bg-[#1f2327]">
              {" "}
              <IoPerson />{" "}
            </div>
            <span className="font-bold text-xl md:text-3xl">Key Expertise</span>
          </div>
          <div className="p-1">
           {/* area of interst */}
            <div className="font-semibold font-serif">Area of Intrest</div>
            <div className=" text-gray-500 dark:text-gray-200 text-md mb-2">
            ✓ TAR - OPCAB (Total Arterial) Re-vascularization beating heart Surgery.
            </div>
            <div className=" text-gray-500 dark:text-gray-200 text-md mb-2">
            ✓ Minimally Invasive Cardiac Surgery.
            </div>
            <div className=" text-gray-500 dark:text-gray-200 text-md mb-2">
            ✓ Hybrid Company Re-vascularization Off Pump CABG.
            </div>
            <div className=" text-gray-500 dark:text-gray-200 text-md mb-2">
            ✓ Mitral Valve Repair & Replacement Re-do Cardiac Surgery.
            </div>
            <div className=" text-gray-500 dark:text-gray-200 text-md mb-2">
            ✓ Surgery for Adult Congenital Heart Disease.✓ Mitral Valve Repair & Replacement Re-do Cardiac Surgery.
            </div>
            {/* membership */}
            <div className="font-semibold font-serif">Membership </div>
            <div className=" text-gray-500 dark:text-gray-200 text-md mb-2">
            ✓ IACTVS - Indian Association of Thoracic and Cardiovascular Surgeon.
            </div>
         
          </div>
        </div>
        </div>
      </section>
    </>
  );
};

export default About;
