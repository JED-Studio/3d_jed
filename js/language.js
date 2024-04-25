document.addEventListener("DOMContentLoaded", function() {
    const langButtons = document.querySelectorAll("[data-btn]");
    const allLangs = ["ru", "en"];
    let currentLang = localStorage.getItem("currentLang") || "ru";

    const homeTexts = {
      "home_page-title": {
        ru: "Домашняя страница",
        en: "Homepage"
      },
      "home_page-1": {
        ru: "Портфолио",
        en: "Portfolio"
      },
      "home_page-2": {
        ru: "Пакеты",
        en: "Packages"
      },
      "home_page-3": {
        ru: "Оставить заявку",
        en: "Submit your application"
      },
      "home_page-4": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-5": {
        ru: "ИСПОЛЬЗУЕМЫЕ ПРОГРАММЫ",
        en: "PROGRAMS USED"
      },
      "home_page-6": {
        ru: "ПОРТФОЛИО",
        en: "PORTFOLIO"
      },
      "home_page-7": {
        ru: "Американский бренд",
        en: "American brand"
      },
      "home_page-8": {
        ru: "Google Pixel 8 Pro",
        en: "Google Pixel 8 Pro"
      },
      "home_page-9": {
        ru: "Проект для Xiaomi для ее нового смартфона Poco M3",
        en: "A project for Xiaomi for its new Poco M3 smartphone"
      },
      "home_page-10": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-11": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-12": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-13": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-14": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-15": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-16": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-17": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-18": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-19": {
        ru: "Первый параграф",
        en: "First paragraph"
      },
      "home_page-20": {
        ru: "Первый параграф",
        en: "First paragraph"
      },














    };

    function changeLang(lang) {
      currentLang = lang;
      localStorage.setItem("currentLang", lang);

      for (const key in homeTexts) {
        const elem = document.querySelector(`[data-lang="${key}"]`);
        if (elem) {
          elem.textContent = homeTexts[key][currentLang];
        }
      }
    }

    changeLang(currentLang);

    langButtons.forEach(button => {
      button.addEventListener("click", () => {
        const lang = button.dataset.btn;
        changeLang(lang);
      });
    });
  });


 