export default {
  base: '/',
  description: 'How to Play guide for werewolv.es',
  editBranch: 'site',
  files: 'src/**/*.{md,markdown,mdx}',
  menu: [
    {
      // anything not listed here will be sorted alphabetically after these entries
      name: 'General',
      menu: [
        'Basics',
        'Items',
        'Rules',
        'Victory Conditions',
        'Buttons & Abilities',
        'Tips',
        'Community Guidelines'
      ]
    },
    { name: 'The Village', menu: ['Village'] },
    { name: 'The Wolfpack', menu: ['Wolfpack'] },
    { name: 'The Coven', menu: ['Coven'] },
    { name: 'The Vampires', menu: ['Vampires'] },
    { name: 'The Undead', menu: ['Undead'] },
    { name: 'The Neutral', menu: ['Neutral'] },
    { name: 'The Bloodmoon Cult', menu: ['Bloodmoon Cult'] }
  ],
  public: '/static',
  title: 'werewolv.es'
};
