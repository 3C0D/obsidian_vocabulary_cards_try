interface i10n {
    [key: string]: string
}

export const userLang = navigator.language || 'en';

export const i10n: { iKnow: i10n, repeat: i10n, total: i10n, parseError: i10n, cards: i10n, reload: i10n } = {
    iKnow: {
        "en": "I know",
        "ru": "Знаю",
        "es": "Yo sé",
        "fr": "Je sais"
    },
    repeat: {
        "en": "Repeat",
        "ru": "Повторить",
        "es": "Repetir",
        "fr": "Répéter"
    },
    total: {
        "en": "Total cards",
        "ru": "Всего карточек",
        "es": "Total de tarjetas",
        "fr": "Total de cartes"

    },
    cards: {
        "en": "cards",
        "ru": "карточек",
        "es": "tarjetas",
        "fr": "cartes"
    },
    parseError: {
        "en": "Parse error",
        "ru": "Ошибка обработки",
        "es": "Parse error",
        "fr": "Erreur de parsing"
    }  ,
    reload: {
        "en": "Sync with leaf content",
        "fr": "Synchroniser avec le contenu de page",
        "ru": "Синхронизировать с содержимым листа",
        "es": "Sincronizar con el contenido de hoja"
    }  

}
