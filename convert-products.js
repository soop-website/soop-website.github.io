import yaml from "js-yaml";
import fs from "fs";
import path from "path";

//parameters
const productsFolder = "products";
const productsFiles = ["pt", "en"];
const outputFolder = "product_data";

//find all product folders
const folders = getDirectories(productsFolder);
console.log(folders);

for (const productFile of productsFiles) {
    //convert all folders
    const products = folders.map((folder) =>
        convertFolder(folder, productFile)
    );

    //write js file
    const jsContent = `export const products = [${products.join(", ")}];`;
    writeFile(`${outputFolder}/products_${productFile}.gen.js`, jsContent);
}

function convertFolder(folder, filename) {
    const input = fs.readFileSync(
        path.join(productsFolder, folder, `${filename}.yaml`),
        "utf8"
    );
    const output = parseMarkup(input, folder);
    return output;
}

function parseMarkup(markupText, productPage) {
    const productObj = yaml.load(markupText);
    productObj.page = productPage;
    const productObjStr = JSON.stringify(productObj);

    return productObjStr;
}

//any sorting can be done here
function getDirectories(source) {
    return fs
        .readdirSync(source, { withFileTypes: true })
        .filter((dirent) => dirent.isDirectory())
        .map((dirent) => dirent.name);
}

function writeFile(path, content) {
    fs.writeFileSync(path, content);
}
