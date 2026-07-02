import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'Vintage Storefront Website',
    description: 'Jun. 2025 - Present. Developed a full-stack e-commerce platform featuring authentication, inventory management, and secure online payments. Designed scalable backend infrastructure using AWS services and integrated Stripe for payment processing. Built an administrative dashboard for inventory management, order tracking, and customer operations. Generated over $1,000 in sales while supporting hundreds of monthly visitors.',
    tech: ['React', 'TypeScript', 'AWS', 'Stripe', 'Vercel'],
  },
  {
    title: 'F1 Qualifying Predictor',
    description: 'Trained Random Forest model on telemetry and driver-team interaction features to predict Formula 1 qualifying lap times. Achieved R² = 0.94 through feature engineering and hyperparameter tuning with GridSearchCV. Model surfaces non-obvious driver-team performance patterns via feature importance analysis.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'GridSearchCV'],
    github: 'https://github.com/vikthevar/F1QualifyingPredictor'
  },
  {
    title: 'Heimdall – Accessibility Voice Assistant',
    description: 'Built local-first AI assistant enabling visually impaired users to control computers via natural language. Integrated Whisper.cpp (STT), YOLOv8 (UI detection), Tesseract (OCR), and Ollama (intent parsing) into real-time pipeline with <500ms end-to-end latency. Architected AWS-backed persistence layer (S3 + DynamoDB) for screenshots and user preferences under Free Tier constraints.',
    tech: ['Python', 'Whisper.cpp', 'YOLOv8', 'Ollama', 'AWS S3', 'DynamoDB'],
    github: 'https://github.com/vikthevar/Heimdall'
  },
  {
    title: 'ReThread – Sustainable Fashion Extension',
    description: 'Built Chrome extension using Gemini Vision API for reverse image search, redirecting users from fast fashion to secondhand marketplaces. Designed matching pipeline combining visual embeddings and textual metadata, achieving 85% product identification accuracy. Won 2nd overall out of 200+ participants at DevLabs hackathon.',
    tech: ['JavaScript', 'Chrome APIs', 'Gemini Vision', 'Image Embeddings'],
    github: 'https://github.com/vikthevar/ReThread'
  },
  {
    title: 'VisionAssist – Wearable Obstacle Detection',
    description: 'Engineered Raspberry Pi-based wearable delivering real-time haptic feedback from ultrasonic sensor array. Optimized sensor fusion and filtering algorithms to achieve 95% obstacle detection accuracy with sub-200ms response time, enabling safe navigation for visually impaired users.',
    tech: ['Python', 'Raspberry Pi', 'Sensor Fusion', 'Real-time Systems'],
    github: 'https://github.com/vikthevar/VisionAssist'
  }
]
