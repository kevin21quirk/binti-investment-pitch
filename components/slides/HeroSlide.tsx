import { motion } from 'framer-motion'

export default function HeroSlide() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-start overflow-hidden bg-white pt-20">
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-binti-cyan/30 to-binti-purple/30 blob" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-binti-magenta/40 to-binti-purple/30 blob" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-binti-purple/40 to-binti-magenta/40 blob" style={{ animationDelay: '4s' }} />
      
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-2/3 mx-auto"
      >
        <div className="bg-gradient-to-r from-binti-purple to-binti-magenta p-16 rounded-3xl shadow-2xl">
          <div className="text-center">
            <div className="text-9xl font-bold text-white mb-4">Binti.</div>
            <div className="text-5xl text-white/90">Flow. Tech.</div>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-10 text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed text-center mt-8"
      >
        Revolutionising women&apos;s health through intelligent menstrual monitoring and AI-powered diagnostics.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute bottom-12 right-12 flex items-center gap-3"
      >
        <div className="text-right">
          <div className="text-3xl font-bold text-gray-900">Binti.</div>
          <div className="text-sm text-gray-600">Flow. Tech.</div>
        </div>
      </motion.div>
    </div>
  )
}
