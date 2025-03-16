export type Language = "en" | "pt";

export function getLang(): Language {
    const lang = process.env.LANG;
    switch (lang) {
        case "en":
        case "pt":
            return lang;
        default:
            return "en";
    }
}

export function getHtmlLang(): string {
    const lang = getLang();
    switch (lang) {
        case "en":
            return "en";
        case "pt":
            return "pt-BR";
    }
    return "en";
}

export function getOutDir(): string {
    const baseOutDir = "dist";
    const lang = getLang();
    switch (lang) {
        case "en":
            return `${baseOutDir}/global`;
        case "pt":
            return `${baseOutDir}/br`;
    }
}

export function getPathForLang(path: string): string {
    const lang = getLang();
    let langPrefix = "en";
    switch (lang) {
        case "en":
            langPrefix = "global";
            break;
        case "pt":
            langPrefix = "br";
            break;
    }
    return `/${langPrefix}${path}`;
}

export function getLangSwitchPath(): string {
    const lang = getLang();
    switch (lang) {
        case "en":
            return "/br";
        case "pt":
            return "/global";
    }
}
