module.exports = {
  someSidebar: {
    'Getting Started': ['installation', 'theming', 'contributing'],
    Components: [
      'accordion', 
      'activityIndicator',
      {
        type: 'category',
        label: 'Avatar',
        items: ['avatarIcon', 'avatarImage', 'avatarText']
      },
      'badge',
      'button',
      'calendar',
      'checkbox',
      'chip',
      'collapsible',
      'dateTimePicker',
      'divider',
      {
        type: 'category',
        label: 'Drawer',
        items: ['drawerSection', 'drawerItem'],
      },
      'iconButton',
      {
        type: 'category',
        label: 'Menu',
        items: ['menu', 'menuItem'],
      },
      {
        type: 'category',
        label: 'Portal',
        items: ['portal', 'portalHost'],
      },
      'progressBar',
    ],
  },
};
