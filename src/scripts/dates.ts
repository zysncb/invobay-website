// Live countdown for the key dates: runs in the browser so the page is right on the day it is read.
// The page language comes from <html lang>; its texts are in TEXT below.
import { BANDS, fmtDate, pct } from '../data/dates';

const DAY = 86400000;

type Texts = {
  today: (date: string) => string;
  appoint: (d: number) => string;
  live: (d: number) => string;
  groups: string[];
  closingDone: string;
  closing: (group: string, appoint: boolean, d: number) => string;
};

/** Arabic counted noun: يوم واحد، يومان، 3–10 أيام، 11 يومًا فأكثر. */
const arDays = (n: number) => (n === 1 ? 'يوم واحد' : n === 2 ? 'يومان' : n <= 10 ? `${n} أيام` : `${n} يومًا`);

const TEXT: Record<string, Texts> = {
  en: {
    today: (date) => `TODAY · ${date}`,
    appoint: (d) => (d > 1 ? `${d} days left` : d === 1 ? '1 day left' : d === 0 ? 'Due today' : 'Overdue: appoint now'),
    live: (d) => (d > 1 ? `in ${d} days` : d === 1 ? 'Tomorrow' : d === 0 ? 'Starts today' : 'In force'),
    groups: ['Revenue AED 50M or more', 'Revenue under AED 50M'],
    closingDone: 'E-invoicing is now mandatory across the UAE. Start today.',
    closing: (g, appoint, d) => {
      const days = d === 1 ? '1 day' : `${d} days`;
      if (d === 0) return g + (appoint ? ': the deadline to appoint your ASP is today.' : ': e-invoicing becomes mandatory today.');
      return g + (appoint ? `: ${days} left to appoint your ASP.` : `: e-invoicing becomes mandatory in ${days}.`);
    },
  },
  zh: {
    today: (date) => `今天 · ${date}`,
    appoint: (d) => (d > 0 ? `还剩 ${d} 天` : d === 0 ? '今天截止' : '已逾期：请尽快指定'),
    live: (d) => (d > 1 ? `${d} 天后` : d === 1 ? '明天' : d === 0 ? '今天起' : '已生效'),
    groups: ['年营收 5000 万迪拉姆及以上', '年营收低于 5000 万迪拉姆'],
    closingDone: '阿联酋已全面强制使用电子发票，现在就开始吧。',
    closing: (g, appoint, d) => {
      if (d === 0) return g + (appoint ? '：今天是指定 ASP 的截止日。' : '：今天起强制使用电子发票。');
      return g + (appoint ? `：距指定 ASP 截止还有 ${d} 天。` : `：${d} 天后强制使用电子发票。`);
    },
  },
  ar: {
    today: (date) => `اليوم · ${date}`,
    appoint: (d) => (d > 0 ? `متبقٍّ ${arDays(d)}` : d === 0 ? 'آخر يوم اليوم' : 'تأخّرت: عيّن مزوّدك الآن'),
    live: (d) => (d > 1 ? `بعد ${arDays(d)}` : d === 1 ? 'غدًا' : d === 0 ? 'تبدأ اليوم' : 'سارية'),
    groups: ['الإيرادات 50 مليون درهم فأكثر', 'الإيرادات أقل من 50 مليون درهم'],
    closingDone: 'أصبحت الفوترة الإلكترونية إلزامية في الإمارات. ابدأ اليوم.',
    closing: (g, appoint, d) => {
      if (d === 0) return g + (appoint ? ': اليوم آخر موعد لتعيين مزوّدك.' : ': تصبح الفوترة الإلكترونية إلزامية اليوم.');
      return g + (appoint ? `: متبقٍّ ${arDays(d)} لتعيين مزوّدك.` : `: تصبح الفوترة الإلكترونية إلزامية بعد ${arDays(d)}.`);
    },
  },
};

export function liveDates(lang = 'en') {
  const tx = TEXT[lang] ?? TEXT.en;
  const now = new Date();
  const today = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate());
  const all = BANDS.flatMap((b, i) => [{ ...b.a, group: tx.groups[i] }, { ...b.g, group: tx.groups[i] }]);
  const next = all.filter((m) => m.t >= today).sort((x, y) => x.t - y.t)[0];
  const chips: Record<string, { text: string; state: string }> = {};
  for (const m of all) {
    const d = Math.round((m.t - today) / DAY);
    chips[m.key] = { text: m.appoint ? tx.appoint(d) : tx.live(d), state: m.appoint && d < 0 ? 'late' : next && m.key === next.key ? 'hot' : '' };
  }
  const closing = next ? tx.closing(next.group, next.appoint, Math.round((next.t - today) / DAY)) : tx.closingDone;
  return { todayPos: pct(today), todayLabel: tx.today(fmtDate(today, lang)), chips, closing };
}

export function applyLiveDates(root: ParentNode = document) {
  const lang = document.documentElement.lang.split('-')[0] || 'en';
  const v = liveDates(lang);
  root.querySelectorAll<HTMLElement>('[data-today-root]').forEach((el) => el.style.setProperty('--today', v.todayPos));
  root.querySelectorAll<HTMLElement>('[data-today-label]').forEach((el) => (el.textContent = v.todayLabel));
  root.querySelectorAll<HTMLElement>('[data-chip]').forEach((el) => {
    const c = v.chips[el.dataset.chip!];
    if (!c) return;
    el.textContent = c.text;
    el.dataset.state = c.state;
  });
  root.querySelectorAll<HTMLElement>('[data-closing]').forEach((el) => (el.textContent = v.closing));
}
