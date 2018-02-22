const GlobalConfigs = {
  pageTitle: "Azino777 бонус без депозита",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://playdo.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://playdo.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://playdo.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://playdo.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://playdo.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://playdo.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "light-blue lighten-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



