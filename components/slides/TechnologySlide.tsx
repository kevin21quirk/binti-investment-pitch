import { motion } from 'framer-motion'
import { Microscope, Zap, Shield, Brain } from 'lucide-react'

const techFeatures = [
  {
    icon: Microscope,
    title: 'Biomarker Detection',
    specs: [
      'Hemoglobin: 7-15 g/dL range',
      'pH levels: 3.8-4.5 detection',
      'CA-125 & HE4 cancer markers',
      'Glucose monitoring'
    ],
    accuracy: '98.5%'
  },
  {
    icon: Brain,
    title: 'AI Analytics Engine',
    specs: [
      'Pattern recognition algorithms',
      'Predictive health modeling',
      'Personalised insights',
      'Anomaly detection'
    ],
    accuracy: '96.2%'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    specs: [
      'Sub-second data analysis',
      'Bluetooth Low Energy 5.0',
      'Edge computing capability',
      'Cloud sync & backup'
    ],
    accuracy: '<500ms'
  },
  {
    icon: Shield,
    title: 'Medical-Grade Security',
    specs: [
      'HIPAA compliant',
      'End-to-end encryption',
      'Secure data storage',
      'Privacy-first design'
    ],
    accuracy: 'ISO 27001'
  }
]

export default function TechnologySlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-binti-purple/10 to-binti-cyan/10 blob" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8 w-full h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-3"
        >
          <h2 className="text-3xl font-bold mb-2 text-gray-900">Technology Stack</h2>
          <p className="text-base text-gray-600">Medical-grade sensors meet AI-powered analytics</p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-white rounded-xl border-2 border-gray-200 p-3 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 rounded-lg">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-bold text-gray-900 mb-1">{feature.title}</h3>
                  <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-0.5 rounded text-xs font-semibold">
                    {feature.accuracy} accuracy
                  </div>
                </div>
              </div>
              
              <ul className="space-y-1">
                {feature.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <div className="w-1.5 h-1.5 bg-binti-purple rounded-full" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 grid grid-cols-3 gap-3"
        >
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-3 border-2 border-blue-200">
            <div className="text-2xl font-bold text-blue-600 mb-1">8-12hrs</div>
            <div className="text-sm text-gray-700 font-semibold">Battery Life</div>
            <div className="text-xs text-gray-600">Continuous monitoring</div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 border-2 border-purple-200">
            <div className="text-2xl font-bold text-purple-600 mb-1">0.5mm</div>
            <div className="text-sm text-gray-700 font-semibold">Sensor Thickness</div>
            <div className="text-xs text-gray-600">Ultra-thin & comfortable</div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border-2 border-green-200">
            <div className="text-2xl font-bold text-green-600 mb-1">95%</div>
            <div className="text-sm text-gray-700 font-semibold">Leak Prediction</div>
            <div className="text-xs text-gray-600">10-15 min advance warning</div>
          </div>
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
