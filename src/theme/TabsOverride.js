const TabsOverride = {
  Tabs: {
    baseStyle: {
      tabpanel: {
        padding: '0px',
      },
    },
    variants: {
      unstyled: {
        tab: {
          color: 'rgba(50, 129, 206, 0.5)',
          fontSize: '24px',
          fontWeight: 'bold',
          padding: 0,
          marginRight: 70,
          '&:hover': {
            color: '#3281CE',
          },
          _selected: {
            color: '#3281CE',
            boxShadow: 'none',
          },
        },
      },
    },
  },
};

export default TabsOverride;
