interface UniversityElement extends HTMLElement {
  classList: DOMTokenList;
}

interface UniversityHeaderElement extends HTMLElement {
  querySelector(selector: string): HTMLElement | null;
}

export default function faculties() {
  const facultiesContainer = document.querySelector<HTMLElement>(".faculties");
  if (!facultiesContainer) return null;

  // Находим все заголовки институтов внутри multy-university
  const universityHeaders =
    facultiesContainer.querySelectorAll<UniversityHeaderElement>(
      ".multy-university .faculties__content__faculty__university__header"
    );

  if (universityHeaders.length === 0) return null;

  // Функция для переключения состояния института
  const toggleUniversity = (header: UniversityHeaderElement): void => {
    const university = header.closest(
      ".faculties__content__faculty__university"
    ) as UniversityElement;
    if (!university) return;

    const isExpanded = university.classList.contains("expanded");
    const button = header.querySelector("button") as HTMLButtonElement;

    if (isExpanded) {
      // Сворачиваем
      university.classList.remove("expanded");
      if (button) {
        button.setAttribute("aria-label", "Развернуть институт");
      }
    } else {
      // Разворачиваем
      university.classList.add("expanded");
      if (button) {
        button.setAttribute("aria-label", "Свернуть институт");
      }
    }
  };

  // Добавляем обработчики кликов
  universityHeaders.forEach((header) => {
    header.addEventListener("click", () => toggleUniversity(header));

    // Добавляем обработчик для клавиши Enter (доступность)
    header.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleUniversity(header);
      }
    });
  });

  // Устанавливаем атрибуты для доступности
  universityHeaders.forEach((header) => {
    header.setAttribute("tabindex", "0");
    header.setAttribute("role", "button");
    header.setAttribute("aria-expanded", "false");
  });

  return {
    // Публичный метод для программного управления состоянием
    toggleUniversity: (universityId: string, expanded?: boolean) => {
      const university = facultiesContainer.querySelector<UniversityElement>(
        `[data-university-id="${universityId}"]`
      );
      if (!university) return false;

      const header = university.querySelector<UniversityHeaderElement>(
        ".faculties__content__faculty__university__header"
      );
      if (!header) return false;

      if (expanded !== undefined) {
        // Устанавливаем конкретное состояние
        if (expanded) {
          university.classList.add("expanded");
          header.setAttribute("aria-expanded", "true");
        } else {
          university.classList.remove("expanded");
          header.setAttribute("aria-expanded", "false");
        }
      } else {
        // Переключаем состояние
        toggleUniversity(header);
      }

      return university.classList.contains("expanded");
    },

    // Метод для получения текущего состояния
    getUniversityState: (universityId: string): boolean => {
      const university = facultiesContainer.querySelector<UniversityElement>(
        `[data-university-id="${universityId}"]`
      );
      return university?.classList.contains("expanded") || false;
    },

    // Метод для разворачивания всех институтов
    expandAll: (): void => {
      universityHeaders.forEach((header) => {
        const university = header.closest(
          ".faculties__content__faculty__university"
        ) as UniversityElement;
        if (university && !university.classList.contains("expanded")) {
          toggleUniversity(header);
        }
      });
    },

    // Метод для сворачивания всех институтов
    collapseAll: (): void => {
      universityHeaders.forEach((header) => {
        const university = header.closest(
          ".faculties__content__faculty__university"
        ) as UniversityElement;
        if (university && university.classList.contains("expanded")) {
          toggleUniversity(header);
        }
      });
    },
  };
}
