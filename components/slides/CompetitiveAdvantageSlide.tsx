import { motion } from 'framer-motion'
import { Shield, Zap, Award, TrendingUp } from 'lucide-react'

const advantages = [
  {
    icon: Shield,
    title: 'First-Mover Advantage',
    description: 'Only integrated solution combining health diagnostics with leak prevention',
    metrics: ['No direct competitors', '18-month lead time', 'Unique technology']
  },
  {
    icon: Zap,
    title: 'Superior Technology',
    description: 'Medical-grade sensors with AI-powered analytics',
    metrics: ['98.5% accuracy', 'Real-time processing', 'FDA pathway clear']
  },
  {
    icon: Award,
    title: 'Strong IP Portfolio',
    description: 'Proprietary biosensor technology and algorithms',
    metrics: ['Trade secrets', 'Exclusive partnerships', 'Proprietary algorithms']
  },
  {
    icon: TrendingUp,
    title: 'Market Validation',
    description: 'Strong demand signals and pre-orders',
    metrics: ['500+ waitlist', '87% purchase intent', 'B2B interest']
  }
]

export default function CompetitiveAdvantageSlide() {
  return (
    <div className="relative w-full h-full overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-binti-cyan/10 to-transparent" />
      <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-binti-purple/20 to-binti-magenta/20 blob" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8 w-full h-full flex flex-col">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6 text-gray-900"
        >
          Competitive Advantage
        </motion.h2>

        <div className="grid grid-cols-2 gap-6 mb-6">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-2 border-gray-200 p-4 hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-3 rounded-xl">
                  <advantage.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{advantage.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 mt-4">
                {advantage.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-binti-purple rounded-full" />
                    <span className="text-sm text-gray-600">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-6 bg-gradient-to-r from-binti-purple to-binti-magenta text-white rounded-2xl p-6"
        >
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm opacity-90">Direct Competitors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">18mo</div>
              <div className="text-sm opacity-90">Technology Lead</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">£8.2B</div>
              <div className="text-sm opacity-90">Addressable Market</div>
            </div>
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
