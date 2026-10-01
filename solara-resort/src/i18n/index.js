import { en } from './en.js';
import { km } from './km.js';

export const dictionaries = { en, km };

export function getTranslation(lang, path, fallback = '') {
  const dict = dictionaries[lang] || dictionaries.en;
  if (!path) return fallback;

  const parts = path.split('.');
  let current = dict;
  for (const part of parts) {
    if (current && typeof current === 'object' && part in current) {
      current = current[part];
    } else {
      // fallback to English if missing in target lang
      let enCurrent = dictionaries.en;
      for (const p of parts) {
        if (enCurrent && typeof enCurrent === 'object' && p in enCurrent) {
          enCurrent = enCurrent[p];
        } else {
          return fallback || path;
        }
      }
      return enCurrent || fallback || path;
    }
  }

  return current !== undefined ? current : fallback || path;
}
