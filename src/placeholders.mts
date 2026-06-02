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
  `;
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.innerHTML = FOOTER;
  } else {
    return false;
  }
  return true;
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
