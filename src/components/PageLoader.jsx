import { motion } from "framer-motion";

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="h-24 w-24 rounded-full border-4 border-primary-200 border-t-primary-600"
        />

        {/* Inner Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-16 w-16 rounded-full border-4 border-accent-200 border-t-accent-500"
        />

        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="mt-8 text-center"
        >
          <img
            src="/logo.png"
            alt="Improx Data"
            className="h-20 w-auto animate-pulse"
          />
          <p className="text-slate-500 text-sm mt-2">Loading Experience...</p>
        </motion.div>
      </div>
    </div>
  );
}
