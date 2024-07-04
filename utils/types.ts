import translation from "./i18n/en.json" with { type: "json" };

type Translation = typeof translation;

type State = {
	translation: Translation;
	lang: "en" | "de";
	dark: boolean;
};

export type { State, Translation };
