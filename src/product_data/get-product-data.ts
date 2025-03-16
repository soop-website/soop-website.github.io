import type { Language } from "../utils/get-lang.js";
import { products as products_en } from "./products_en.gen.js";
import { products as products_pt } from "./products_pt.gen.js";

export function getProductData(productId: string, language: Language) {
    if (language === "pt") {
        return products_pt.find((product) => product.page === productId);
    }
    return products_en.find((product) => product.page === productId);
}

export function getAllProducts(language: Language) {
    return language === "pt" ? products_pt : products_en;
}

export function getAllProductIds() {
    return products_en.map((product) => product.page);
}

export function getLatestProducts(amount: number, language: Language) {
    const products = language === "pt" ? products_pt : products_en;
    return products.slice(-amount);
}
