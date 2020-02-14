export default {
  base: '/guides/',
  description: 'How to Play guide for werewolv.es',
  files: 'src/**/*.{md,markdown,mdx}',
  menu: [{
      name: 'General',
      menu: [
        'Online Werewolf Basics',
        'Items',
        'Rules',
        'Victory Conditions',
        'Buttons & Abilities',
        'Tips',
        'Community Guidelines'
      ]
    },
    'The Village',
    'The Wolfpack',
    'The Coven',
    'The Vampires',
    'The Undead',
    'The Neutral',
    'The Bloodmoon Cult'
  ],
  public: '/static',
  themeConfig: {
    initialColorMode: 'dark'
  },
  title: 'werewolv.es'
}