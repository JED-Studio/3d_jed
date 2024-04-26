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
        ru: "3D-движение для Xiaomi и ее смартфона Redmi Note",
        en: "3D Motion for Xiaomi and its Redmi Note smartphone"
      },
      "home_page-11": {
        ru: "Марка игровых наушников Dexp Storm Pro 7.1",
        en: "Brand of gaming headphones Dexp Storm Pro 7.1"
      },
      "home_page-12": {
        ru: "ЭТАПЫ РАБОТЫ",
        en: "STAGES OF WORK"
      },
      "home_page-13": {
        ru: "КОНЦЕПТ",
        en: "THE CONCEPT"
      },
      "home_page-14": {
        ru: "Мы выявим все особенности продукта, целевую аудиторию и задачи ролика для написания трех разных версий сценария",
        en: "We will identify all the features of the product, the target audience and the objectives of the video for writing three different versions of the script"
      },
      "home_page-15": {
        ru: "АНИМАЦИЯ",
        en: "ANIMATION"
      },
      "home_page-16": {
        ru: "На основе раскадровки, показанной на этапе концепта, мы создадим 3D ролик со всеми анимациями",
        en: "Based on the storyboard shown at the concept stage, we will create a 3D video with all the animations"
      },
      "home_page-17": {
        ru: "МАТЕРИАЛЫ",
        en: "MATERIALS"
      },
      "home_page-18": {
        ru: "Этап, на котором вы увидете готовый ролик с материалами и светом в финальном качестве",
        en: "The stage where you will see the finished video with materials and light in the final quality"
      },
      "home_page-19": {
        ru: "ФИНАЛ",
        en: "FINAL"
      },
      "home_page-20": {
        ru: "Красиво уложу все по папкам, вышлю ссылку на облако Подарю чек лист со способами использования проекта",
        en: "I'll put everything in folders beautifully, send a link to the cloud, and give you a checklist with ways to use the project"
      },
      "home_page-21": {
        ru: "ВСЕ РАБОТЫ",
        en: "ALL WORKS"
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


 