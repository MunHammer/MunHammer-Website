/*
This file is part of MunHammer's website.

MunHammer's website is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MunHammer's website is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Foobar. If not, see <https://www.gnu.org/licenses/>.
*/
function replacePLaceholders(): boolean {
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
  `
  const headerElement = document.getElementById("header");
  if (headerElement) {
    headerElement.innerHTML = HEADING + headerElement.innerHTML;
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
          <li><a href="https://github.com/MunHammer" target="_blank" rel="noopener noreferrer">Github</a></li>
          <li><a href="https://discord.gg/FYSayAvfnp" target="_blank" rel="noopener noreferrer">Discord Server</a></li>
          <li><a href="https://www.reddit.com/user/RichRoof7927/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
        </ul>
      </div>
      <h5><a href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text" target="_blank" rel="noopener noreferrer">License - GNU GPL-3.0</a></h5>
    </nav>
  `
  const footerElement = document.getElementById("footer");
  if (footerElement) {
    footerElement.innerHTML = FOOTER;
  } else {
    return false
  }
  return true;
}
function main() {
  if (!replacePLaceholders()) {
    console.error("Couldn't find elements required")
  }

}
main();
