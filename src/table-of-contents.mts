/*
This file is part of MunHammer's website.

MunHammer's website is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MunHammer's website is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with Foobar. If not, see <https://www.gnu.org/licenses/>.
*/
class TableOfContents {
  name: string;
  descendants: TableOfContents[] | null;
  root: boolean;
  constructor(name: string, root: boolean) {
    this.name = name;
    this.root = root;
    this.descendants = null;
  }
  addDescendant(descendant: TableOfContents) {
    if (this.descendants === null) {
      this.descendants = [];
    }
    this.descendants.push(descendant);
  }
  toHTML() {
    let html = this.root ? `<div><h3>${this.name}</h3>` : `<h4>${this.name}</h4>`;
    if (this.descendants !== null) {
      this.descendants.forEach((descendant) => {
        html += descendant.toHTML();
      })
    }
    if (this.root) {
      html += "</div>"
    }
    return html
  }
}

export function generateTableOfContents() {
  let contents: TableOfContents[] = [];
  document.querySelectorAll("h2,h3").forEach((heading_raw) => {
    let heading = heading_raw as HTMLHeadingElement;
    if (heading.nodeName == "H2") {
      contents.push(new TableOfContents(heading.innerText, true))
    } else {
      contents.at(-1)?.addDescendant(new TableOfContents(heading.innerText, false))
    }
    console.log(heading_raw.nodeName)
  })
  return contents;
}
export function addTableOfContentsToHTML(contentElements: TableOfContents[]) {
  const content = document.querySelector("#content");
  content?.insertAdjacentHTML("afterbegin", "<div id=\"tableOfContents\"><h2>Table Of Contents</h2><nav></nav></div>")
  const contents = document.querySelector("#tableOfContents nav");
  contentElements.forEach((baseHeading) => {
    contents?.insertAdjacentHTML("beforeend", baseHeading.toHTML());
  })
}
