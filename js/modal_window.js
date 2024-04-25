document.addEventListener("DOMContentLoaded", function() {

const openModal = (triggerSelector, modalDataSelector) => { // объявляем функцию открытия модального окна, которая принимает в качестве параметров селекторы кнопки и соответствующего модального окна
  const trigger = document.querySelector(triggerSelector) // ищем кнопку по переданному селектору
  const modal = document.querySelector(modalDataSelector) // ищем модальное окно по переданному селектору
  if (!trigger || !modal) return // если такая кнопка или модальное окно не найдены, то прекращаем работу функции
  trigger.addEventListener('click', e => { // при клике на кнопку
    e.preventDefault() // предотвращаем браузерные действия
    modal.classList.add('modal_active') // отображаем модальное окно, добавив ему активный класс
    document.body.style.overflow = 'hidden';
  })
}
openModal('.buttons__button_1', '.modal[data-modal="mod_1"]') // Запускаем функцию и передаем селекторы для первого модального окна

openModal('.buttons__button_2', '.modal[data-modal="mod_2"]') // Запускаем функцию и передаем селекторы для второго модального окна
openModal('.buttons__button_3', '.modal[data-modal="mod_3"]')
openModal('.buttons__button_4', '.modal[data-modal="mod_4"]')
openModal('.buttons__button_5', '.modal[data-modal="mod_5"]')


openModal('.buttons__button_6', '.modal[data-modal="mod_6"]') 
openModal('.buttons__button_7', '.modal[data-modal="mod_7"]') 
openModal('.buttons__button_8', '.modal[data-modal="mod_8"]') 
openModal('.buttons__button_9', '.modal[data-modal="mod_9"]') 
openModal('.buttons__button_10', '.modal[data-modal="mod_10"]')
openModal('.buttons__button_11', '.modal[data-modal="mod_11"]')
openModal('.buttons__button_12', '.modal[data-modal="mod_12"]')
openModal('.buttons__button_13', '.modal[data-modal="mod_13"]')
openModal('.buttons__button_14', '.modal[data-modal="mod_14"]')
openModal('.buttons__button_15', '.modal[data-modal="mod_15"]')
openModal('.buttons__button_16', '.modal[data-modal="mod_16"]')
openModal('.buttons__button_17', '.modal[data-modal="mod_17"]')
openModal('.buttons__button_18', '.modal[data-modal="mod_18"]')
openModal('.buttons__button_19', '.modal[data-modal="mod_19"]')
openModal('.buttons__button_20', '.modal[data-modal="mod_20"]')
openModal('.buttons__button_21', '.modal[data-modal="mod_21"]')

const closeModal = () => { // объявляем функцию закрытия модального окна
  const modals = document.querySelectorAll('.modal') // ищем все модальные окна
  if (!modals) return // если их нет, то прекращаем выполнение функции
  modals.forEach(el => { // если есть, то для каждого из них
    el.addEventListener('click', e => { // при клике
      if (e.target.closest('.modal__close')) { // если клик был клик на кнопке закрытия
        el.classList.remove('modal_active') // то скрываем модальное окно, удаляя активный класс
        document.body.style.overflow = 'auto';
      }
      if (!e.target.closest('.modal__body')) { // если клик был за пределами контентной части модального окна, то есть на затемненную область
        el.classList.remove('modal_active') // то тоже скрываем модальное окно, удаляя активный класс
        document.body.style.overflow = 'auto';
      }
    })
  })
}
closeModal() 

});