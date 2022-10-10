import React from "react";
import { motion } from "framer-motion"
function NotificationBar() {
  return (
    <motion.div>

    <div className="flex rounded-t-2xl rounded-tr-2xl opacity-60 brightness-100 flex-row items-center justify-center h-[5%]  bg-white">
      <div
        id="left"
        className="flex-1 flex flex-row items-center pl-2 gap-2 justify-start text-black"
      >
        <div>left</div>
        <div>left</div>
      </div>
      <div id="right" className="flex-1 flex items-center justify-end text-black">
        <div>right</div>
        <div>right</div>
      </div>
    </div>
    </motion.div>
  );
}

export default NotificationBar;
