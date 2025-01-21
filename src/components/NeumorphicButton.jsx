import { motion } from "framer-motion";

function NeumorphicButton() {
  return (
    <motion.div
      // whileHover={{
      //   scale: 1.05,
      //   boxShadow:
      //     "inset 4px 4px 6px rgba(0,0,0,0.2), inset -4px -4px 6px rgba(255,255,255,0.7)",
      // }}
      whileTap={{
        // scale: 0.98,
        boxShadow:
          "inset 1px 1px 5px rgba(0,0,0,0.25), inset -1px -1px 5px rgba(255,255,255,0.8)",
      }}
      // className="flex items-center justify-center w-24 h-10 bg-[#F0F0F3] rounded-lg shadow-md cursor-pointer "
      className="shadow-neumo flex items-center justify-center w-24 h-12 rounded-lg cursor-pointer select-none"
    >
      <span className="flex items-center text-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 mr-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
        New
      </span>
    </motion.div>
  );
}
export default NeumorphicButton;
