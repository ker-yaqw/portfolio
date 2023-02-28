window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    const btnDarkMode = document.querySelector(".dark-mode-btn");

    // 1. Проверка темной темы на уровне системных настроек
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ) {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
        }

    // 2. Проверка темной темы в localStorage
        if (localStorage.getItem('darkMode') === 'dark') {
            btnDarkMode.classList.add("dark-mode-btn--active");
            document.body.classList.add("dark");
        } else if (localStorage.getItem("darkMode") === "light") {
            btnDarkMode.classList.remove("dark-mode-btn--active");
            document.body.classList.remove("dark");
        }

    // Если меняются системные настройки, меняем тему
    window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (event) => {
            const newColorScheme = event.matches ? "dark" : "light";

            if (newColorScheme === "dark") {
                btnDarkMode.classList.add("dark-mode-btn--active");
                document.body.classList.add("dark");
                localStorage.setItem("darkMode", "dark");
            } else {
                btnDarkMode.classList.remove("dark-mode-btn--active");
                document.body.classList.remove("dark");
                localStorage.setItem("darkMode", "light");
            }
        });

    // Включение ночного режима по кнопке
    btnDarkMode.onclick = function () {
        btnDarkMode.classList.toggle("dark-mode-btn--active");
        const isDark = document.body.classList.toggle("dark");

        if (isDark) {
            localStorage.setItem("darkMode", "dark");
        } else {
            localStorage.setItem("darkMode", "light");
        }
    };
    
    // Humburger-Menu
    
    const humburger = document.querySelector('.humburger');
    const navMenu = document.querySelector ('.navigation-list');

    humburger.addEventListener('click',() => {
        humburger.classList.toggle('humburger--active');
        navMenu.classList.toggle('navigation-list--active');
        document.body.classList.toggle('hidden');
    });

    //sticky

  const navigation = document.querySelector('.navigation');

  window.onscroll = () => {
      let scroll = window.scrollY;
      console.log(scroll);
      if(scroll >= 280){
          navigation.classList.add('sticky');
      }else {
          navigation.classList.remove('sticky');
      } 
  };


  const cards = document.querySelectorAll('.project'),
        projectBtn = document.querySelector('.project-btn');

        
        cards.forEach(card => {
            card.classList.add('animate__animated', 'animate__fadeInUp');
        });        
        try {
            projectBtn.addEventListener('click',() => {
                cards.forEach(card => {
                    card.classList.remove('project--hidden');
                    card.classList.add('project--visible');
                    card.classList.add('animate__animated', 'animate__fadeInUp');
                });
                projectBtn.remove();  
              
            });   
        }catch{console.log('error')};  
});