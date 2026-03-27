/*
    Object with translations.
    It shoud contain all texts from uniwersal components in all languages from config.ts/LOCALES.
    It shoudn't contain translations of page content.
*/
export const ui = {
  pl: {
    name: 'Astro Blog',
    nav: {
      home: 'Start',
      about: 'O nas',
      blog: 'Blog',
      nested: 'Zagnieżdżone',
    },
    footer: {
      copyright: 'Twoje imię tutaj. Wszelkie prawa zastrzeżone.',
      privacyPolicy: 'Polityka prywatności',
      cookies: 'Ciasteczka',
      termsOfService: 'Regulamin'
    },
    meta: {
      description: 'Witaj na mojej stronie!',
    },
    buttons: {
      accept: 'Akceptuj',
      reject: 'Odrzuć'
    },
    cookiesStatus: {
      unknown: 'Brak ustawień (użytkownik nie wybrał)',
      accepted: 'Ciasteczka zaakceptowane',
      rejected: 'Ciasteczka odrzucone'
    }
  },
  en: {
    name: 'Astro Blog',
    nav: {
      home: 'Home',
      about: 'About us',
      blog: 'Blog',
      nested: 'Nested',
    },
    footer: {
      copyright: 'Your name here. All rights reserved.',
      privacyPolicy: 'Privacy policy',
      cookies: 'Cookies',
      termsOfService: 'Terms of Service'
    },
    meta: {
      description: 'Welcome to my website!',
    },
    buttons: {
      accept: 'Accept',
      reject: 'Reject'
    },
    cookiesStatus: {
      unknown: 'No settings (user has not chosen)',
      accepted: 'Cookies accepted',
      rejected: 'Cookies rejected'
    }
  }
} as const;
