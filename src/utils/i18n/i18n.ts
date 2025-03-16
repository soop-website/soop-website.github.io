import { getLang } from "../get-lang";
import {
    strings_en,
    strings_pt,
    type I18nKeys,
    type I18nStrings,
} from "./dictionary";

export function getString<K extends I18nKeys>(key: K): I18nStrings[K] {
    const lang = getLang();
    switch (lang) {
        case "pt":
            return strings_pt[key];
        default:
            return strings_en[key];
    }
    return "";
}
