export function InitPF1E() {
  if (typeof Babele !== "undefined") {
    Babele.get().register({
      module: "ru-ru",
      lang: "ru",
      dir: "compendium/pf1e",
    });
  } else {
    new Dialog({
      title: "Перевод библиотек",
      content: `<p>Для перевода библиотек системы Pathfinder требуется установить и активировать модуль <b>Babele</b><p>`,
      buttons: {
        done: {
          label: "Хорошо",
        },
      },
    }).render(true);
  }
}
