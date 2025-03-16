export type Language = "en" | "pt";

export function getLang(): Language {
    const lang = import.meta.env.LANG;
    switch (lang) {
        case "en":
        case "pt":
            return lang;
        default:
            return "en";
    }
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
