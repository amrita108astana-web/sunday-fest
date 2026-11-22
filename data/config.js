// Настройки сайта.
// DOCS_WEBAPP_URL — адрес веб-приложения Google Apps Script (apps-script/README.md), заканчивается на /exec.
// Пока пусто — правки блюд и цен на сайте не сохраняются, а кнопка «Отправить в Google Docs» попросит адрес в настройках (⚙).
window.CONFIG = {
  // Скрипт ставится в аккаунте amrita108astana@gmail.com (apps-script/README.md); его адрес /exec — сюда.
  DOCS_WEBAPP_URL: "",
  DEFAULT_GUESTS: 50,
  // Правки блюд и продуктов, сделанные на сайте до этого момента, не учитываются — всё как в исходных файлах.
  SITE_EDITS_RESET: ""
};
