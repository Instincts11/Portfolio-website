export default class ScrollService {
  static scrollHandler = {
    scrollToHireMe: () => {
      const contactMeScreen = document.getElementById("Contact");
      if (contactMeScreen) contactMeScreen.scrollIntoView({ behavior: "smooth" });
    },
    scrollToHome: () => {
      const homeScreen = document.getElementById("Home");
      if (homeScreen) homeScreen.scrollIntoView({ behavior: "smooth" });
    },
  };
}
