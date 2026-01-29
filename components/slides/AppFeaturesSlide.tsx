import { motion } from 'framer-motion'
import { Activity, Droplet, Brain, LineChart } from 'lucide-react'

export default function AppFeaturesSlide() {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-[600px] h-full bg-gradient-to-r from-binti-cyan/10 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Smart Pad Integration
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-700 mb-8"
        >
          The app connects to Binti&apos;s smart menstrual pad via Bluetooth to collect real-time health data
        </motion.p>

        <div className="grid grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-binti-purple/10 to-binti-magenta/10 p-6 rounded-2xl border-2 border-binti-purple/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-binti-purple to-binti-magenta p-3 rounded-xl">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">pH Levels</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Monitor vaginal pH to detect infections, bacterial vaginosis, and hormonal imbalances in real-time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-binti-cyan/10 to-binti-purple/10 p-6 rounded-2xl border-2 border-binti-cyan/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-binti-cyan to-blue-500 p-3 rounded-xl">
                <Droplet className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fluid Volume & Flow</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Track menstrual flow patterns to identify abnormalities like menorrhagia or oligomenorrhea.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-binti-magenta/10 to-pink-500/10 p-6 rounded-2xl border-2 border-binti-magenta/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-binti-magenta to-pink-500 p-3 rounded-xl">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Biological Markers</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Detect cancer biomarkers, hemoglobin levels, and other critical health indicators from menstrual blood.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-6 rounded-2xl border-2 border-green-500/30"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl">
                <LineChart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Predictive Analytics</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              AI-powered insights predict cycle patterns, fertility windows, and potential health issues before they escalate.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border-2 border-purple-500/20"
        >
          <p className="text-center text-lg text-gray-700">
            <span className="font-bold text-binti-purple">Bluetooth Low Energy 5.0</span> ensures seamless, secure data transmission with minimal battery consumption
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 right-8 flex items-center gap-3">
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-900">Binti.</div>
          <div className="text-xs text-gray-600">Flow. Tech.</div>
        </div>
      </div>
    </div>
  )
}
