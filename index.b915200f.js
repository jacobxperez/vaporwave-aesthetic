/* @license
 * Rams <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
(()=>{const t=document.querySelectorAll("[data-toggle]");t.forEach((function(t){t.addEventListener("click",(e=>{t.hasAttribute("data-state","active")?t.removeAttribute("data-state"):t.setAttribute("data-state","active"),e.stopPropagation()}))})),document.addEventListener("click",(e=>{t.forEach((t=>function(t,e){(e.target!==t&&t.matches('[data-toggle~="pop"]')||t.matches('[data-toggle~="tooltip"]'))&&t.removeAttribute("data-state")}(t,e)))}))})();