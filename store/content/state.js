const state = () => ({
  isAppReady: false,
  isStoreReady: false,
  isChartDataReady: false,
  textPanelText: [
    {
      title: 'wash hands',
      copy: 'Keep washing your hands regularly',
    },

    {
      title: 'cover face',
      copy: 'Wear a face covering in enclosed spaces',
    },

    {
      title: 'make space',
      copy: 'Stay at least 2 metres apart, wear face covering',
    },
  ],
  covidData: [],
  statContent: [
    {
      containerClasses:
        'flex items-center justify-center flex-col lg:flex-row row-span-2 shadow-md bg-pink-ud rounded-lg p-6',
      iconClasses: 'fill-current text-roseRed-ud max-h-28',
      headingClasses:
        'text-center font-serif font-bold leading-none text-5xl md:text-6xl lg:text-7xl text-roseRed-ud',
      bodyClasses:
        'text-center font-sans font-normal text-darkGrey-50-ud md:text-1xl',
      iconName: 'alert-circle',
      headingText: '',
      bodyText: 'New Cases Yesterday',
    },

    {
      containerClasses:
        'flex items-center justify-center flex-col md:flex-row lg:flex-row shadow-md bg-lightGrey-50-ud rounded-lg p-6',
      iconClasses: 'fill-current text-black-50-ud max-h-28',
      headingClasses:
        'text-center font-serif font-bold leading-none text-5xl lg:text-6xl',
      bodyClasses: 'text-center font-sans font-normal text-darkGrey-50-ud',
      iconName: 'trending-up',
      headingText: '',
      bodyText: 'increase from previous day',
    },
    {
      containerClasses:
        'flex items-center justify-center flex-col md:flex-row lg:flex-row shadow-md bg-lightGrey-50-ud rounded-lg p-6',
      iconClasses: 'fill-current text-black-50-ud max-h-28',
      headingClasses:
        'text-center font-serif font-bold leading-none text-5xl lg:text-6xl',
      bodyClasses: 'text-center font-sans font-normal text-darkGrey-50-ud',
      iconName: 'calendar',
      headingText: '',
      bodyText: 'Average of last 7 days',
    },
  ],
})

export default state
