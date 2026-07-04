export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  accentColor: 'cyan' | 'purple' | 'green' | 'orange'
  techStack: string[]
}

export const services: Service[] = [
  {
    id: 'wordpress',
    title: 'WordPress Development',
    description:
      'Desenvolvimento e sustentação de sites WordPress de alta performance. Temas customizados, plugins e otimização com Elementor e Divi.',
    features: [
      'Temas customizados do zero',
      'Customização Elementor & Divi',
      'Otimização de performance',
      'Sustentação e manutenção',
      'WooCommerce',
    ],
    icon: 'wordpress',
    accentColor: 'cyan',
    techStack: ['WordPress', 'PHP', 'Elementor', 'Divi', 'WooCommerce'],
  },
  {
    id: 'laravel',
    title: 'Laravel & PHP',
    description:
      'Aplicações web robustas e APIs escaláveis com Laravel. Arquitetura limpa, autenticação, filas e integração com bancos de dados.',
    features: [
      'APIs RESTful',
      'Autenticação & Autorização',
      'Filas e Jobs',
      'Blade Templates',
      'Integrações externas',
    ],
    icon: 'laravel',
    accentColor: 'purple',
    techStack: ['Laravel', 'PHP', 'MySQL', 'Redis', 'Docker'],
  },
  {
    id: 'react-nextjs',
    title: 'React & Next.js',
    description:
      'Interfaces modernas e performáticas com React e Next.js. SSR, SSG, App Router e integração com qualquer backend.',
    features: [
      'App Router (Next.js 15)',
      'Server Components',
      'Interfaces responsivas',
      'Integração com APIs',
      'SEO otimizado',
    ],
    icon: 'react',
    accentColor: 'green',
    techStack: ['React', 'Next.js', 'TypeScript', 'CSS Modules', 'REST APIs'],
  },
  {
    id: 'performance',
    title: 'Performance & SEO',
    description:
      'Auditoria e otimização de performance para sites WordPress e Laravel. Core Web Vitals, cache, imagens e SEO técnico.',
    features: [
      'Audit Core Web Vitals',
      'Otimização de cache',
      'Compressão de assets',
      'SEO técnico',
      'Lighthouse 90+',
    ],
    icon: 'performance',
    accentColor: 'orange',
    techStack: ['Lighthouse', 'WP Rocket', 'GTmetrix', 'PageSpeed', 'Cache'],
  },
]

export interface Skill {
  name: string
  level: number
  category: string
}

export const skills: Skill[] = [
  { name: 'WordPress', level: 95, category: 'CMS' },
  { name: 'PHP', level: 90, category: 'Backend' },
  { name: 'Laravel', level: 85, category: 'Backend' },
  { name: 'React', level: 80, category: 'Frontend' },
  { name: 'Next.js', level: 78, category: 'Frontend' },
  { name: 'MySQL', level: 82, category: 'Database' },
  { name: 'Git', level: 85, category: 'Tools' },
  { name: 'Docker', level: 70, category: 'DevOps' },
  { name: 'CSS / Sass', level: 80, category: 'Frontend' },
  { name: 'TypeScript', level: 72, category: 'Frontend' },
]
