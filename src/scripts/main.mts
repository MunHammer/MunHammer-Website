/*
This file is part of MunHammer's website.

MunHammer's website is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

MunHammer's website is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with MunHammer's website. If not, see <https://www.gnu.org/licenses/>.
*/
import {
  addTableOfContentsToHTML,
  generateTableOfContents,
} from "./table-of-contents.mjs";
import {
  replacePlaceholders,
  faviconizeElements,
  bookmarkHeadings,
} from "./placeholders.mjs";
async function main() {
  if (!(await replacePlaceholders()))
    console.error("Couldn't find elements required");
  bookmarkHeadings();
  faviconizeElements();
  addTableOfContentsToHTML(generateTableOfContents());
}
main();
