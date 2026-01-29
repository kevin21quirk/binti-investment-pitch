import { motion } from 'framer-motion'
import { Target, Rocket, Globe, Heart, Zap, Users, TrendingUp, Shield } from 'lucide-react'

const visionPoints = [
  {
    icon: Globe,
    title: 'Global Leadership',
    description: 'Become the world\'s leading platform for menstrual health monitoring and diagnostics'
  },
  {
    icon: Heart,
    title: 'Women\'s Empowerment',
    description: 'Empower women with real-time data and insights about their reproductive health'
  },
  {
    icon: Zap,
    title: 'Healthcare Revolution',
    description: 'Transform preventive healthcare through continuous, non-invasive health monitoring'
  }
]

const missionPoints = [
  {
    icon: Shield,
    title: 'Smart Protection',
    description: 'Deliver intelligent leak prevention with 95% accuracy and 10-15 minute advance warnings'
  },
  {
    icon: TrendingUp,
    title: 'Health Insights',
    description: 'Provide AI-powered health analytics detecting biomarkers, pH levels, and potential health issues'
  },
  {
    icon: Users,
    title: 'Accessible Technology',
    description: 'Make advanced health monitoring affordable and accessible to women globally, starting with UK, Kenya, and India'
  }
]

export default function VisionMissionSlide() {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[600px] h-full bg-gradient-to-l from-binti-magenta/20 to-transparent" />
      <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-br from-binti-cyan/30 to-binti-purple/30 blob" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-gradient-to-br from-binti-purple/40 to-binti-magenta/40 blob" style={{ animationDelay: '3s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-binti-purple via-binti-magenta to-binti-cyan bg-clip-text text-transparent"
        >
          Vision & Mission
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-6 bg-gradient-to-r from-binti-purple/10 to-transparent p-6 rounded-2xl border-2 border-binti-purple/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-binti-purple to-binti-magenta p-3 rounded-xl"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {visionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                  className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-binti-purple/20 to-binti-magenta/20 p-2 rounded-lg w-fit mb-2">
                    <Icon className="w-6 h-6 text-binti-purple" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{point.title}</h4>
                  <p className="text-xs text-gray-600 leading-snug">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="bg-gradient-to-r from-binti-magenta/10 to-transparent p-6 rounded-2xl border-2 border-binti-magenta/20"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div 
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="bg-gradient-to-br from-binti-magenta to-binti-cyan p-3 rounded-xl"
            >
              <Rocket className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {missionPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 + index * 0.15 }}
                  className="bg-white rounded-xl p-4 border-2 border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-br from-binti-magenta/20 to-binti-cyan/20 p-2 rounded-lg w-fit mb-2">
                    <Icon className="w-6 h-6 text-binti-magenta" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 mb-1">{point.title}</h4>
                  <p className="text-xs text-gray-600 leading-snug">{point.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="mt-4 bg-gradient-to-r from-binti-cyan/10 to-binti-purple/10 rounded-xl p-4 border-2 border-binti-cyan/20 text-center"
        >
          <p className="text-lg font-semibold text-gray-900">
            <span className="text-binti-purple">Pioneering Fem-Tech Innovation</span> to create a world where every woman has access to proactive, data-driven health monitoring
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
