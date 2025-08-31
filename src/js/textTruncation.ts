/**
 * Функция для обрезания текста с добавлением многоточия
 * @param text - исходный текст
 * @param maxLength - максимальная длина текста
 * @returns обрезанный текст с "..." если превышает максимальную длину
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
}

/**
 * Основная функция для инициализации обрезания текста в описаниях новостей
 */
export default function initTextTruncation(): void {
  // Конфигурация только для описаний
  const textConfig = {
    description: {
      selector: ".smallnews__content__news__item__description",
      maxLength: 80,
    },
  };

  // Обрабатываем описания новостей
  Object.entries(textConfig).forEach(([type, config]) => {
    const elements = document.querySelectorAll<HTMLElement>(config.selector);

    if (elements.length === 0) return;

    elements.forEach((element) => {
      // Проверяем, не был ли текст уже обработан
      if (element.classList.contains("text-truncated")) {
        return;
      }

      // Получаем оригинальный текст до любых изменений
      const originalText = element.textContent || "";

      // Обрезаем текст если он слишком длинный
      if (originalText.length > config.maxLength) {

        // Сначала сохраняем оригинальный текст в data-атрибут
        element.setAttribute("data-original-text", originalText);

        // Затем обрезаем текст
        const truncatedText = truncateText(originalText, config.maxLength);
        element.textContent = truncatedText;

        // Добавляем атрибут title для показа полного текста при наведении
        // element.setAttribute("title", originalText);

        // Добавляем класс для стилизации
        element.classList.add("text-truncated");

      }
    });
  });
}

/**
 * Функция для обновления обрезания текста (например, при динамическом изменении содержимого)
 */
export function updateTextTruncation(): void {
  initTextTruncation();
}

/**
 * Функция для восстановления оригинального текста
 * @param element - элемент, для которого нужно восстановить текст
 */
export function restoreOriginalText(element: HTMLElement): void {
  const originalText = element.getAttribute("data-original-text");
  if (originalText) {
    element.textContent = originalText;
    element.classList.remove("text-truncated");
  }
}

// Автоматический запуск при загрузке DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initTextTruncation);
} else {
  initTextTruncation();
}
