import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-green-100 z-50">
      
      <div className="flex flex-col items-center gap-6">

        {/* LOGO / TEXT */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-green-800"
        >
          ayasya's portfolio
        </motion.h1>

        {/* LOADING BAR */}
        <div className="w-40 h-2 bg-green-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{
              duration: 2,
              ease: 'easeInOut',
            }}
            className="h-full bg-gradient-to-r from-green-400 to-green-600"
          />
        </div>

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-green-700 text-sm"
        >
          Loading amazing things...
        </motion.p>

      </div>
    </div>
  );
}