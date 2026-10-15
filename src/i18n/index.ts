// Languages of the website. English lives at the root, the others under /zh/ and /ar/.
import en from './en';
import zh from './zh';
import ar from './ar';

export const LANGS = ['en', 'zh', 'ar'] as const;
export type Lang = (typeof LANGS)[number];
export type Dict = typeof en;

/** Languages whose pages are built. */
export const LIVE: Lang[] = ['en', 'zh', 'ar'];

export const META: Record<Lang, { name: string; short: string; html: string; og: string; dir: 'ltr' | 'rtl' }> = {
  en: { name: 'English', short: 'EN', html: 'en', og: 'en_AE', dir: 'ltr' },
  zh: { name: '中文', short: '中文', html: 'zh-Hans', og: 'zh_CN', dir: 'ltr' },
  ar: { name: 'العربية', short: 'ع', html: 'ar', og: 'ar_AE', dir: 'rtl' },
};

const DICTS: Partial<Record<Lang, Dict>> = { en, zh, ar };

/** The language of a path: /zh/pricing → zh, /pricing → en. */
export function langOf(pathname: string): Lang {
  const seg = pathname.split('/')[1];
  return (LIVE as string[]).includes(seg) && seg !== 'en' ? (seg as Lang) : 'en';
}

/** The same path without its language prefix: /zh/pricing/ → /pricing/. */
export function stripLang(pathname: string): string {
  const lang = langOf(pathname);
  if (lang === 'en') return pathname;
  const rest = pathname.slice(lang.length + 1);
  return rest === '' ? '/' : rest;
}

/** A site path in a language: ('zh', '/pricing') → /zh/pricing; hashes and queries are kept; external links pass through. */
export function localize(lang: Lang, path: string): string {
  if (lang === 'en' || !path.startsWith('/')) return path;
  return path === '/' ? `/${lang}/` : path.startsWith('/#') || path.startsWith('/?') ? `/${lang}${path}` : `/${lang}${path}`;
}

/** getStaticPaths for pages under src/pages/[...lang]/: one copy per live language, English without a prefix. */
export function langPaths() {
  return LIVE.map((l) => ({ params: { lang: l === 'en' ? undefined : l } }));
}

/** Everything a component needs: the language, its dictionary and helpers for links. */
export function useI18n(url: URL) {
  const lang = langOf(url.pathname);
  const t = DICTS[lang] ?? en;
  const p = (path: string) => localize(lang, path);
  const w = (intent?: string) => p(intent ? `/waitlist?intent=${encodeURIComponent(intent)}` : '/waitlist');
  return { lang, t, p, w, meta: META[lang] };
}
