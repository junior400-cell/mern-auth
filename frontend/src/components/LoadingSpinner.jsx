import { motion } from "framer-motion";


const LoadingSpinner = () => {
  return (
    <div className="mim-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative overflow-hidden">
        {/* simple Loading spinner */}
        <motion.div  
        className="w-16 h-16 border-4 border-t-4 border-t-gray-500 border-green-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{duration: 1, repeat: Infinity, ease: "linear"}}
        />
    </div>
  )
}

export default LoadingSpinner;