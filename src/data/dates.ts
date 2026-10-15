// Key dates from the Ministry of Finance (docs/04). The timeline runs from 1 Oct 2026 to 1 Sep 2027.
import type { Lang } from '../i18n';

export const T0 = Date.UTC(2026, 9, 1);
export const T1 = Date.UTC(2027, 8, 1);
export const pct = (t: number) => (Math.max(0, Math.min(1, (t - T0) / (T1 - T0))) * 100).toFixed(2) + '%';

const MON: Record<string, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  ar: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'],
};

/** A UTC date as people write it in each language: 30 Oct 2026 · 2026年10月30日 · 30 أكتوبر 2026. */
export function fmtDate(t: number, lang: Lang | string): string {
  const d = new Date(t);
  const [y, m, day] = [d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate()];
  if (lang === 'zh') return `${y}年${m + 1}月${day}日`;
  return `${day} ${(MON[lang] ?? MON.en)[m]} ${y}`;
}

export type Milestone = { key: string; t: number; appoint: boolean };
/** Two revenue bands; labels come from the dictionary (t.dates.bands / t.dates.groups) in the same order. */
export const BANDS: { a: Milestone; g: Milestone }[] = [
  { a: { key: 'a1', t: Date.UTC(2026, 9, 30), appoint: true }, g: { key: 'g1', t: Date.UTC(2027, 0, 1), appoint: false } },
  { a: { key: 'a2', t: Date.UTC(2027, 2, 31), appoint: true }, g: { key: 'g2', t: Date.UTC(2027, 6, 1), appoint: false } },
];

/** Month ticks for the timeline axis; the first month and January also show the year. */
export function months(lang: Lang | string) {
  const out: { label: string; pos: string }[] = [];
  for (let y = 2026, m = 9; y < 2027 || m <= 7; ) {
    const mid = Date.UTC(y, m, 15);
    const year = m === 0 || (y === 2026 && m === 9);
    const label = lang === 'zh' ? (year ? `${y}年${m + 1}月` : `${m + 1}月`) : (MON[lang] ?? MON.en)[m].toUpperCase() + (year ? ` ${y}` : '');
    out.push({ label, pos: pct(mid) });
    if (m === 11) { y += 1; m = 0; } else { m += 1; }
  }
  return out;
}
