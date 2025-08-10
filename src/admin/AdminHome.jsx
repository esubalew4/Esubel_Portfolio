import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SignOut from "./auth/SignOut";
import { FaBars } from "react-icons/fa6";
import { motion } from "framer-motion";
import { MdOutlineUpload } from "react-icons/md";
import { IoIosList } from "react-icons/io";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <FaBars
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-2 cursor-pointer md:hidden"
      />
      <motion.div
        animate={{ x: isOpen ? 0 : "-144px" }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 bottom-0 left-0 w-36 bg-gray-800 flex flex-col py-2 justify-between z-1"
      >
        <div className="adminList flex flex-col text-sm">
          {/* logo */}
          <div className="mb-6 flex justify-end mr-4 md:mr-0 md:justify-center">
            <h1 className="text-xl">
              Esubel <span className="text-red-600">.</span>
            </h1>
          </div>
          <NavLink to={"/admin/addproject"}>
            {" "}
            <MdOutlineUpload className="text-amber-600  rounded-sm p-0.5 text-2xl" />{" "}
            Add Project
          </NavLink>
          <NavLink to={"/admin/projectlist"}>
            <IoIosList className="text-lime-600  rounded-sm p-0.5 text-2xl" />{" "}
            Project List
          </NavLink>
        </div>
        <SignOut />
      </motion.div>
    </>
  );
};

const AdminHome = () => {
  return (
    <div className="text-white">
      <Sidebar />
    </div>
  );
};

export default AdminHome;
