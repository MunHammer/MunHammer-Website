/*
This file is part of MunHammer's website.

MunHammer's website is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MunHammer's website is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MunHamer's website. If not, see <https://www.gnu.org/licenses/>.
*/
export async function replacePlaceholders(): Promise<boolean> {
  // The heading
  const HTML = await fetch("/placeholders.html").then((response) =>
    response.text(),
  );
  const doc = new DOMParser().parseFromString(HTML, "text/html");
  const HEADING_0 = doc.querySelector("h2");
  const HEADING_1 = doc.querySelector("nav");
  const headerElement = document.getElementById("header");
  if (!HEADING_0 || !HEADING_1 || !headerElement) return false;
  headerElement.insertAdjacentHTML(
    "afterbegin",
    HEADING_0.outerHTML + HEADING_1.outerHTML,
  );
  // The footer
  const FOOTER = doc.querySelector("footer");
  if (!FOOTER) return false;
  const body = document.querySelector("body");
  body?.insertAdjacentHTML("beforeend", FOOTER.outerHTML);
  return true;
}

export function bookmarkHeadings() {
  const path = window.location.pathname;
  document.querySelectorAll("main h2, main h3").forEach((heading) => {
    heading.insertAdjacentHTML("beforeend", '<div class="section"> §</div>');
    heading.outerHTML = `<a href=${path}#${heading.id}>${heading.outerHTML}</a>`;
  });
}

export function getDomainFaviconURL(linkurl: string) {
  if (!linkurl.startsWith("ht")) return null;
  const url = new URL(linkurl);
  try {
    return `https://www.google.com/s2/favicons?domain=${url.hostname}`;
  } catch (e) {
    return "https://www.google.com/s2/favicons?domain=example.com";
  }
}
export function faviconizeElements() {
  const urls = document.querySelectorAll("a");
  urls.forEach(function (url) {
    const href = url.getAttribute("href");
    if (!url.getAttribute("target") || !href) return;
    const faviconURL = getDomainFaviconURL(href);
    if (!faviconURL) return;
    url.outerHTML =
      `
      <img src="${faviconURL}" alt="Favicon of ${url.href}" class="favicon">
    ` + url.outerHTML;
  });
}
