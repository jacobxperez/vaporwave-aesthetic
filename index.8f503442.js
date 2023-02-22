/* @license
 * Rams <https://github.com/jacobxperez/rams/>
 * Copyright (C) 2023 Jacob Perez <jacobxperez@gmx.com>
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */
document.addEventListener("DOMContentLoaded",(()=>{(()=>{const t=document.querySelectorAll("[data-toggle]");function e(t,e,a){a.target!==t&&t.matches(e)&&t.removeAttribute("data-state")}t.forEach((function(t){t.addEventListener("click",(e=>{t.hasAttribute("data-state","active")?t.removeAttribute("data-state"):t.setAttribute("data-state","active"),e.stopPropagation()}))})),document.addEventListener("click",(a=>{t.forEach((t=>e(t,'[data-toggle="tooltip"]',a))),t.forEach((t=>e(t,'[data-toggle="pop"]',a)))}))})()}));