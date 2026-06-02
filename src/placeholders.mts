/*
This file is part of MunHammer's website.

MunHammer's website is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MunHammer's website is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Foobar. If not, see <https://www.gnu.org/licenses/>.
*/
export function replacePlaceholders(): boolean {
  // The heading
  const HEADING = `
    <h2 id="title">MunHammer.com</h2>
    <nav>
      <a href="/"><img src="images/pfp.gif" alt="Moving Scribbles" height="90" width="90"></a>
      <a href="/">Main</a>
      <a href="/about.html">About</a>
      <a href="https://github.com/MunHammer/MunHammer-Website" target="_blank" rel="noopener noreferrer">Source code</a>
      <a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" target="_blank" rel="noopener noreferrer">License - GNU GPL-3.0</a>
    </nav>
  `;
  const headerElement = document.getElementById("header");
  if (headerElement) {
    headerElement.insertAdjacentHTML("afterbegin", HEADING);
  } else {
    return false;
  }
  // The footer
  const FOOTER = `
    <footer>
      <nav>
        <div class="footer-column" id="site_map">
          <h5>Site map</h5>
          <ul>
            <li><a href="/">Main</a></li>
            <li><a href="/about.html">About</a></li>
          </ul>
        </div>
        <div class="footer-column" id="links">
          <h5>Links</h5>
          <ul>
            <li><a href="https://github.com/MunHammer" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://discord.gg/FYSayAvfnp" target="_blank" rel="noopener noreferrer">Discord Server</a></li>
            <li><a href="https://www.reddit.com/user/RichRoof7927/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
          </ul>
        </div>
        <h5><a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" target="_blank" rel="noopener noreferrer">License - GNU GPL-3.0</a></h5>
      </nav>
    </footer>
  `;
  const body = document.querySelector("body");
  body?.insertAdjacentHTML("beforeend", FOOTER);
  return true;
}

export function bookmarkHeadings() {
    const path = window.location.pathname;
  document.querySelectorAll("main h2, main h3").forEach((heading) => {
    heading.insertAdjacentHTML("beforeend", "<div class=\"section\"> §</div>")
    heading.outerHTML = `<a href=${path}#${heading.id}>${heading.outerHTML}</a>`
  })
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
