import { addLocaleData } from 'react-intl';
import enLanguage from './entries/en';
import koLanguage from './entries/ko';
import esLanguage from './entries/es';
import viLanguage from './entries/vi';
import zhLanguage from './entries/zh-cn';

const appLocales = {
  en: enLanguage,
  ko: koLanguage,
  es: esLanguage,
  vi: viLanguage,
  zh: zhLanguage
};

addLocaleData(appLocales.en.data);
addLocaleData(appLocales.ko.data);
addLocaleData(appLocales.es.data);
addLocaleData(appLocales.vi.data);
addLocaleData(appLocales.zh.data);

const DEFAULT_LOCALE = 'en';

const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages =
    locale !== DEFAULT_LOCALE
      ? formatTranslationMessages(DEFAULT_LOCALE, enLanguage.messages)
      : {};
  const flattenFormattedMessages = (formattedMessages, key) => {
    const formattedMessage =
      !messages[key] && locale !== DEFAULT_LOCALE
        ? defaultFormattedMessages[key]
        : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  };
  return Object.keys(messages).reduce(flattenFormattedMessages, {});
};

const translationMessages = {
  en: formatTranslationMessages('en', enLanguage.messages),
  vi: formatTranslationMessages('vi', viLanguage.messages)
};

// exports.appLocales = appLocales;
// exports.AppLocale = AppLocale;
// exports.formatTranslationMessages = formatTranslationMessages;
// exports.translationMessages = translationMessages;
// exports.DEFAULT_LOCALE = DEFAULT_LOCALE;

export {
  appLocales,
  formatTranslationMessages,
  translationMessages,
  DEFAULT_LOCALE
};
