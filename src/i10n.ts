interface i10n {
    [key: string]: string
}

export const userLang = navigator.language || 'en';
// export const userLang = 'en';

export const i10n: { iKnow: i10n, repeat: i10n, total: i10n, parseError: i10n, cards: i10n, reload: i10n, empty: i10n, noContext: i10n, nothingToClean: i10n, statsCleaned: i10n, random: i10n, next: i10n, clean: i10n, invert: i10n, normal: i10n, tableSwitch: i10n, cardSwitch: i10n, derivateTime: i10n, explanationTime: i10n, disableConfirmationButtons: i10n } = {
    iKnow: {
        "en": "I know",
        "ru": "Знаю",
        "es": "Yo sé",
        "fr": "Je sais",
        "zh": "我知道"
    },
    repeat: {
        "en": "Repeat",
        "ru": "Повторить",
        "es": "Repetir",
        "fr": "Répéter",
        "zh": "重复"
    },
    total: {
        "en": "Total cards",
        "ru": "Всего карточек",
        "es": "Total de tarjetas",
        "fr": "Total de cartes",
        "zh": "卡片总数"
    },
    cards: {
        "en": "cards",
        "ru": "карточек",
        "es": "tarjetas",
        "fr": "cartes",
        "zh": "卡片"
    },
    parseError: {
        "en": "Parse error",
        "ru": "Ошибка обработки",
        "es": "Parse error",
        "fr": "Erreur de parsing",
        "zh": "解析错误"
    },
    reload: {
        "en": "Sync with leaf content",
        "fr": "Synchroniser avec le contenu de page",
        "ru": "Синхронизировать с содержимым листа",
        "es": "Sincronizar con el contenido de hoja",
        "zh": "同步叶子内容"
    },
    empty: {
        "en": "No card",
        "ru": "Нет карточки",
        "es": "No hay tarjeta",
        "fr": "Pas de carte",
        "zh": "没有卡片"
    },
    noContext: {
        "en": "Open and close the codeBlock to update",
        "ru": "Открыть и закрыть кодовый блок для обновления",
        "es": "Abrir y cerrar el código de bloque para actualizar",
        "fr": "Ouvrir et fermer le bloc de code pour mettre à jour",
        "zh": "打开并关闭代码块以更新"
    },
    nothingToClean: {
        "en": "Nothing to clean",
        "ru": "Нечего очистить",
        "es": "Nada que limpiar",
        "fr": "Rien à nettoyer",
        "zh": "没有清理的内容"
    },
    statsCleaned: {
        "en": "Stats cleaned",
        "ru": "Статистика очищена",
        "es": "Estadísticas limpiadas",
        "fr": "Statistiques nettoyées",
        "zh": "统计已清理"
    },
    random: {
        "en": "Mode: Random",
        "ru": "Режим: Случайная",
        "es": "Modo: Aleatoria",
        "fr": "Mode: Aléatoire",
        "zh": "模式: 随机"
    },
    next: {
        "en": "Mode: Next",
        "ru": "Режим: Следующая",
        "es": "Modo: Siguiente",
        "fr": "Mode: Suivante",
        "zh": "模式: 下一个"
    },
    clean: {
        "en": "Clean up old stats",
        "ru": "Очистить статистику",
        "es": "Limpiar estadísticas antiguas",
        "fr": "Nettoyer les statistiques",
        "zh": "清理旧统计"
    },
    invert: {
        "en": "Show inverted",
        "ru": "Показывать инвертированные",
        "es": "Mostrar invertido",
        "fr": "Afficher inversé",
        "zh": "显示反转"
    },
    normal: {
        "en": "Show normal",
        "ru": "Показывать обычные",
        "es": "Mostrar normal",
        "fr": "Afficher normal",
        "zh": "显示正常"
    },
    tableSwitch: {
        "en": "Switch to voca-table",
        "ru": "Переключить в voca-table",
        "es": "Cambiar a voca-table",
        "fr": "Changer en voca-table",
        "zh": "切换到voca-table"
    },
    cardSwitch: {
        "en": "Switch to voca-card",
        "ru": "Переключить в voca-card",
        "es": "Cambiar a voca-card",
        "fr": "Changer en voca-card",
        "zh": "切换到voca-card"
    },
    derivateTime: {
        "en": "Time to show the expression (in seconds)",
        "ru": "Время для отображения выражения (в секундах)",
        "es": "Tiempo para mostrar la expresión (en segundos)",
        "fr": "Temps pour montrer l'expression (en secondes)",
        "zh": "显示表达式的时间(秒)"
    },
    explanationTime: {
        "en": "Time to show the explanation (in seconds)",
        "ru": "Время для отображения объяснения (в секундах)",
        "es": "Tiempo para mostrar la explicación (en segundos)",
        "fr": "Temps pour montrer l'explication (en secondes)",
        "zh": "显示解释的时间(秒)"
    },
    disableConfirmationButtons: {
        "en": "Disable if you want confirmation buttons still enabled, in automatic mode",
        "ru": "Отключить, если вы хотите, чтобы кнопки подтверждения остались включёнными в режиме автоматической",
        "es": "Deshabilitar si quieres que los botones de confirmación permanezcan activos en el modo automático",
        "fr": "Désactiver si vous souhaitez que les boutons de confirmation restent actifs, dans le mode automatique"
    }
}