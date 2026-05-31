function replacePLaceholders(): boolean {
  // The heading
  const HEADING = `
    <h1 id="title">MunHammer.com</h1>
    <nav>
      <a href="/"><img src="images/pfp.gif" alt="Moving Scribbles" height="90" width="90"></a>
      <a href="/">Main</a>
      <a href="about.html">About</a>
      <a href="https://github.com/MunHammer/MunHammer-Website">Source code</a>
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
          <li><a href="about.html">About</a></li>
        </ul>
      </div>
      <div class="footer-column" id="links">
        <h5>Links</h5>
        <ul>
          <li><a href="https://github.com/MunHammer">Github</a></li>
          <li><a href="https://discord.gg/FYSayAvfnp">Discord Server</a></li>
          <li><a href="https://www.reddit.com/user/RichRoof7927/">Reddit</a></li>
        </ul>
      </div>
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
