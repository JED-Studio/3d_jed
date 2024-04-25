document.addEventListener("DOMContentLoaded", function() {
    const langButtons = document.querySelectorAll("[data-btn]");
    const allLangs = ["ru", "en", "de"];
    let currentLang = localStorage.getItem("currentLang") || "ru";

    const homeTexts = {
      "home_page-title": {
        ru: "Домашняя страница",
        en: "Homepage",
        de: "Startseite",
      },
      "home_page-1": {
        ru: "Первый параграф",
        en: "First paragraph",
        de: "Erster Paragraph",
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