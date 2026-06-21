export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  tagColor: 'cyan' | 'purple' | 'green' | 'orange'
  githubUrl: string
  language: string
  languageColor: string
  featured: boolean
  year: string
  metrics: {
    label: string
    value: string
  }[]
}

export const projects: Project[] = [
  {
    id: 'ttrpg-social',
    title: 'TTRPG Social',
    description:
      'Plataforma social full-stack para jogadores de RPG de Mesa. Comunidade para criar, compartilhar e gerenciar campanhas e personagens.',
    longDescription:
      'Aplicação web robusta construída com Laravel, Blade Templates e Docker. Permite que jogadores de RPG criem perfis, participem de grupos, gerenciem campanhas e interajam em uma comunidade dedicada.',
    tags: ['Laravel', 'PHP', 'Blade', 'Docker', 'MySQL'],
    tagColor: 'purple',
    githubUrl: 'https://github.com/JoaoVBRodrigues/ttrpg-social',
    language: 'PHP + Laravel',
    languageColor: '#8b5cf6',
    featured: true,
    year: '2024',
    metrics: [
      { label: 'Linguagem', value: 'PHP' },
      { label: 'Framework', value: 'Laravel' },
      { label: 'Infra', value: 'Docker' },
    ],
  },
  {
    id: 'news-center',
    title: 'News Center',
    description:
      'Portal de notícias completo em PHP com painel administrativo, categorias, gerenciamento de conteúdo e interface responsiva.',
    longDescription:
      'Portal de notícias de grande porte desenvolvido em PHP puro com mais de 1.4MB de código. Sistema completo com CRUD, categorias, paginação e área administrativa.',
    tags: ['PHP', 'MySQL', 'CSS', 'MVC'],
    tagColor: 'orange',
    githubUrl: 'https://github.com/JoaoVBRodrigues/News-Center',
    language: 'PHP Puro',
    languageColor: '#ff6b35',
    featured: true,
    year: '2024',
    metrics: [
      { label: 'Linguagem', value: 'PHP' },
      { label: 'Tamanho', value: '1.4MB' },
      { label: 'Padrão', value: 'MVC' },
    ],
  },
  {
    id: 'prompt-engineer',
    title: 'Prompt Engineer',
    description:
      'Aplicação Laravel com tema personalizado (Blade) para engenharia e gerenciamento de prompts de IA. Interface limpa e funcional.',
    longDescription:
      'Sistema desenvolvido em Laravel com templates Blade customizados. Permite criar, categorizar e testar prompts de IA de forma organizada, com interface responsiva e autenticação.',
    tags: ['Laravel', 'PHP', 'Blade', 'AI', 'Shell'],
    tagColor: 'cyan',
    githubUrl: 'https://github.com/JoaoVBRodrigues/Prompt-Engineer',
    language: 'PHP + Blade',
    languageColor: '#00d4ff',
    featured: false,
    year: '2025',
    metrics: [
      { label: 'Linguagem', value: 'PHP' },
      { label: 'Template', value: 'Blade' },
      { label: 'Deploy', value: 'Shell' },
    ],
  },
  {
    id: 'gallery-project',
    title: 'Gallery Project',
    description:
      'Sistema de galeria de imagens em PHP com upload, organização em álbuns e visualização responsiva.',
    longDescription:
      'Projeto de galeria de imagens completo em PHP. Funcionalidades de upload de imagens, organização por álbuns, visualização lightbox e painel de administração.',
    tags: ['PHP', 'MySQL', 'CSS', 'Upload'],
    tagColor: 'green',
    githubUrl: 'https://github.com/JoaoVBRodrigues/Gallery-Project',
    language: 'PHP',
    languageColor: '#39ff14',
    featured: false,
    year: '2024',
    metrics: [
      { label: 'Linguagem', value: 'PHP' },
      { label: 'Feature', value: 'Upload' },
      { label: 'DB', value: 'MySQL' },
    ],
  },
]
