'use client'

import { motion } from 'framer-motion'
import { Smartphone, Activity, Shield, Bell, Cloud, Zap, TrendingUp, Users, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Activity,
    title: 'Smart Biomarker Detection',
    description: 'Real-time monitoring of hemoglobin, pH levels, and cancer biomarkers through advanced sensor technology.',
    benefit: 'Early disease detection'
  },
  {
    icon: Shield,
    title: 'Leak Prevention System',
    description: 'Intelligent sensors detect saturation levels and send alerts before leaks occur.',
    benefit: 'Confidence & comfort'
  },
  {
    icon: Smartphone,
    title: 'Connected Mobile App',
    description: 'Track health metrics, cycle patterns, and receive personalised insights and recommendations.',
    benefit: 'Data-driven health'
  },
  {
    icon: Bell,
    title: 'Proactive Alerts',
    description: 'Instant notifications for health anomalies and pad changes, keeping you informed and protected.',
    benefit: 'Peace of mind'
  },
  {
    icon: Cloud,
    title: 'Secure Cloud Storage',
    description: 'HIPAA-compliant data storage with end-to-end encryption for your health records.',
    benefit: 'Privacy & security'
  },
  {
    icon: Zap,
    title: 'Real-Time Processing',
    description: 'Sub-second analysis with edge computing for instant health insights and alerts.',
    benefit: 'Immediate feedback'
  },
  {
    icon: TrendingUp,
    title: 'Predictive Analytics',
    description: 'AI algorithms predict cycle patterns, fertility windows, and potential health issues.',
    benefit: 'Future planning'
  },
  {
    icon: Users,
    title: 'Healthcare Integration',
    description: 'Share data directly with your doctor for informed consultations and better care.',
    benefit: 'Better outcomes'
  },
  {
    icon: Sparkles,
    title: 'Personalised Insights',
    description: 'Machine learning adapts to your unique health profile for tailored recommendations.',
    benefit: 'Custom care'
  }
]

export default function SolutionSlide() {
  return (
    <div className="relative w-full h-full flex items-center overflow-hidden bg-gradient-to-br from-white via-binti-purple/5 to-binti-cyan/5">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-binti-purple/20 to-binti-cyan/20 blob" />
      <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-binti-magenta/20 to-binti-purple/20 blob" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8 w-full h-full flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl font-bold mb-2 bg-gradient-to-br from-binti-purple to-binti-magenta bg-clip-text text-transparent">
            The Binti Solution
          </h2>
          <p className="text-base text-gray-700">Smart menstrual pad + AI-powered health monitoring</p>
        </motion.div>

        <div className="grid grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-xl p-3 hover:shadow-2xl transition-all hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-binti-purple to-binti-magenta p-2 rounded-lg mb-2">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold mb-1 text-gray-900">{feature.title}</h3>
                <p className="text-xs text-gray-700 mb-2 leading-snug">{feature.description}</p>
                <div className="inline-block bg-gradient-to-r from-binti-cyan/20 to-binti-purple/20 text-binti-purple px-2 py-1 rounded-lg font-semibold text-xs">
                  ✓ {feature.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-4 text-center bg-gradient-to-r from-binti-purple to-binti-magenta text-white p-3 rounded-xl"
        >
          <p className="text-lg font-bold">
            The first integrated solution combining health diagnostics with leak prevention
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
