/*
This file is part of MunHammer's website.

MunHammer's website is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MunHammer's website is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MunHammer's website. If not, see <https://www.gnu.org/licenses/>.
*/
class Pair {
  title: String;
  path: String;
  blurb: String;
  date: String;
  constructor(title: String, path: String, blurb: String, date: String) {
    this.title = title;
    this.path = path;
    this.blurb = blurb;
    this.date = date;
  }
  toHTML() {
    return `<a href="${this.path}" id="${this.title}"><div class="post"><h2>${this.title}</h2><sub>${this.date}</sub><p>${this.blurb}</p></div><a>`;
  }
}
async function getPages() {
  return (await (await fetch("/blog/list.txt")).text())
    .split("\n")
    .map((line) => line.split(","))
    .filter((pair) => pair.length == 4)
    .map(
      (pair) =>
        new Pair(
          pair[0] as String,
          pair[1] as String,
          pair[2] as String,
          pair[3] as String,
        ),
    );
}
function generatePages(pages: Pair[]) {
  let html = '<div id="posts">';
  pages.forEach((page) => {
    html += page.toHTML();
    console.log(page.toHTML());
  });
  html += "</div>";
  return html;
}
function addPages(pages: Pair[]) {
  document
    .getElementsByTagName("main")[0]
    ?.insertAdjacentHTML("afterbegin", generatePages(pages));
}
async function main() {
  const BLOG_PAGES = await getPages();
  addPages(BLOG_PAGES);
}
main();
