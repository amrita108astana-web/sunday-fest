// Настройки сайта.
// DOCS_WEBAPP_URL — адрес веб-приложения Google Apps Script (apps-script/README.md), заканчивается на /exec.
// Пока пусто — правки блюд и цен на сайте не сохраняются, а кнопка «Отправить в Google Docs» попросит адрес в настройках (⚙).
window.CONFIG = {
  // Скрипт в аккаунте amrita108astana@gmail.com: https://script.google.com/d/1N4QcDcssFtwdvxB0IrkDxpZSrP2DD-bkjzSFB5cJG7rCIV_61gbEKYNt/edit
  DOCS_WEBAPP_URL: "https://script.google.com/macros/s/AKfycbzhPr5YA2ib5NVG5iG2QeI1b7ofWA3sjhs7A_oa0PCtEqbAAXdPc2h20d-XN8rLhmij/exec",
  DEFAULT_GUESTS: 50,
  // Правки блюд и продуктов, сделанные на сайте до этого момента, не учитываются — всё как в исходных файлах.
  SITE_EDITS_RESET: ""
};
