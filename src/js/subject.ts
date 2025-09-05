// Функция для инициализации переключения языков в блоке subjects
export default function SubjectLanguage(): void {
  const rusButton = document.querySelector(".subject__languages-item.item_rus");
  const engButton = document.querySelector(".subject__languages-item.item_eng");
  const rusList = document.querySelector(".subjects__list.list-rus");
  const engList = document.querySelector(".subjects__list.list-eng");

  if (!rusButton || !engButton || !rusList || !engList) {
    console.warn("Не найдены элементы для переключения языков");
    return;
  }

  // Функция для плавного переключения между списками
  const switchLists = (showList: HTMLElement, hideList: HTMLElement): void => {
    // Сначала скрываем текущий список
    hideList.style.opacity = "0";
    hideList.style.visibility = "hidden";

    // Небольшая задержка для плавности
    setTimeout(() => {
      hideList.style.display = "none";

      // Показываем новый список
      showList.style.display = "grid";
      showList.style.opacity = "0";
      showList.style.visibility = "visible";

      // Сбрасываем анимацию для карточек
      const cards = showList.querySelectorAll(".subjects__list-item");
      cards.forEach((card) => {
        (card as HTMLElement).style.animation = "none";
        (card as HTMLElement).offsetHeight; // Принудительный reflow
        (card as HTMLElement).style.animation = "";
      });

      // Принудительно вызываем reflow для корректной анимации
      showList.offsetHeight;

      // Анимируем появление
      showList.style.opacity = "1";
    }, 200);
  };

  // Функция переключения на русский язык
  const switchToRussian = (): void => {
    // Убираем активный класс с английской кнопки
    engButton.classList.remove("active");
    // Добавляем активный класс к русской кнопке
    rusButton.classList.add("active");

    // Плавно переключаем списки
    switchLists(rusList as HTMLElement, engList as HTMLElement);
  };

  // Функция переключения на английский язык
  const switchToEnglish = (): void => {
    // Убираем активный класс с русской кнопки
    rusButton.classList.remove("active");
    // Добавляем активный класс к английской кнопке
    engButton.classList.add("active");

    // Плавно переключаем списки
    switchLists(engList as HTMLElement, rusList as HTMLElement);
  };

  // Добавляем обработчики событий
  rusButton.addEventListener("click", switchToRussian);
  engButton.addEventListener("click", switchToEnglish);
}
