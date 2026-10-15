// Text inside the generated illustrations (data/art.json and the hero scene) per language.
// EmaraTax's own screen labels stay in English in the guide drawings: that is what people see on EmaraTax.
import type { Lang } from './index';

const ART: Partial<Record<Lang, Record<string, string>>> = {
  zh: {
    // hero scene
    'Your ASP': '你的 ASP',
    "Buyer's ASP": '买方 ASP',
    'You issue the invoice': '你开出发票',
    'Your ASP validates it': '你的 ASP 校验',
    "Buyer's ASP receives it": '买方 ASP 接收',
    'Buyer gets it': '买方收到发票',
    'FTA gets the tax data': '税局收到税务数据',
    'Checked by Invobay': '已由 Invobay 检查',
    Reported: '已报送',
    Delivered: '已送达',
    'HOW A UAE E-INVOICE TRAVELS': '一张阿联酋电子发票的流转',
    FTA: '税局',
    // guide thumbnail and managed onboarding
    'GUIDE · EMARATAX': '指南 · EMARATAX',
    Authorization: '授权',
    signed: '已签署',
    'EmaraTax onboarding': 'EmaraTax 开户',
    'in progress': '进行中',
    'Participant ID': '参与方 ID',
    pending: '待生成',
    'Members also get our mobile and desktop apps to view and issue invoices anywhere.': '会员还可以使用我们的手机和电脑应用，随时随地查看和开具发票。',
    // devices
    'Invoices this month': '本月发票',
    '99.2% accepted': '受理率 99.2%',
    'Customer A': '客户 A',
    'Customer B': '客户 B',
    'Customer C': '客户 C',
    'Today, 10:02': '今天 10:02',
    'Today, 09:41': '今天 09:41',
    Yesterday: '昨天',
    Accepted: '已受理',
    Validated: '已校验',
    '51 of 51 fields': '51 项字段全部通过',
    'Accepted by your ASP': '你的 ASP 已受理',
    'in 1.2 seconds': '用时 1.2 秒',
    'Reported to FTA': '已报送税局',
    done: '完成',
    'in 1.2 seconds, reported to the FTA': '用时 1.2 秒，已报送税局',
    // guide drawings: our notes only
    illustration: '示意图',
    'Then approve in the UAE PASS app on your phone': '然后在手机上的 UAE PASS 应用里确认',
    'Your ASP’s site · illustration': '你的 ASP 网站 · 示意图',
    'Your onboarding': '你的开户进度',
    'Company details confirmed': '公司信息已确认',
    'Contract signed': '合同已签署',
    'Connection tested': '连接已测试',
    '0235 + your 10-digit TIN': '0235 + 你的 10 位 TIN',
    'The ASP you chose': '你选择的 ASP',
  },
  ar: {
    // hero scene
    'Your ASP': 'مزوّدك',
    "Buyer's ASP": 'مزوّد المشتري',
    'You issue the invoice': 'تُصدر الفاتورة',
    'Your ASP validates it': 'يتحقّق منها مزوّدك',
    "Buyer's ASP receives it": 'يستلمها مزوّد المشتري',
    'Buyer gets it': 'تصل إلى المشتري',
    'FTA gets the tax data': 'تتلقّى الهيئة البيانات الضريبية',
    'Checked by Invobay': 'تحقّقت منها Invobay',
    Reported: 'تم الرفع',
    Delivered: 'تم التسليم',
    'HOW A UAE E-INVOICE TRAVELS': 'رحلة الفاتورة الإلكترونية في الإمارات',
    FTA: 'الهيئة',
    // guide thumbnail and managed onboarding
    'GUIDE · EMARATAX': 'دليل · إمارات تاكس',
    Authorization: 'التفويض',
    signed: 'موقّع',
    'EmaraTax onboarding': 'التسجيل على إمارات تاكس',
    'in progress': 'قيد التنفيذ',
    'Participant ID': 'رقم المشارك',
    pending: 'قيد الانتظار',
    'Members also get our mobile and desktop apps to view and issue invoices anywhere.': 'يحصل الأعضاء أيضًا على تطبيقاتنا للهاتف وسطح المكتب لعرض الفواتير وإصدارها من أي مكان.',
    // devices
    'Invoices this month': 'فواتير هذا الشهر',
    '99.2% accepted': 'نسبة القبول 99.2%',
    'Customer A': 'العميل A',
    'Customer B': 'العميل B',
    'Customer C': 'العميل C',
    'Today, 10:02': 'اليوم، 10:02',
    'Today, 09:41': 'اليوم، 09:41',
    Yesterday: 'أمس',
    Accepted: 'مقبولة',
    Validated: 'تم التحقّق',
    '51 of 51 fields': '51 من 51 حقلًا',
    'Accepted by your ASP': 'قبلها مزوّدك',
    'in 1.2 seconds': 'خلال 1.2 ثانية',
    'Reported to FTA': 'رُفعت إلى الهيئة',
    done: 'تم',
    'in 1.2 seconds, reported to the FTA': 'خلال 1.2 ثانية، ورُفعت إلى الهيئة',
    // guide drawings: our notes only
    illustration: 'رسم توضيحي',
    'Then approve in the UAE PASS app on your phone': 'ثم وافق في تطبيق UAE PASS على هاتفك',
    'Your ASP’s site · illustration': 'موقع مزوّدك · رسم توضيحي',
    'Your onboarding': 'تسجيلك',
    'Company details confirmed': 'تم تأكيد بيانات الشركة',
    'Contract signed': 'تم توقيع العقد',
    'Connection tested': 'تم اختبار الاتصال',
    '0235 + your 10-digit TIN': '0235 + رقم التعريف الضريبي (10 أرقام)',
    'The ASP you chose': 'المزوّد الذي اخترته',
  },
};

/** Arabic texts are wrapped in an RTL isolate (U+2067…U+2069): the drawings are laid out LTR,
 *  and without it numbers and punctuation in an Arabic label land on the wrong side. */
function swap(html: string, map: Record<string, string>, lang: Lang) {
  return html.replace(/>([^<>]+)</g, (m, text: string) => {
    const key = text.trim();
    if (map[key] === undefined) return m;
    return m.replace(key, lang === 'ar' ? `\u2067${map[key]}\u2069` : map[key]);
  });
}

/** Illustrations from data/art.json in a language. */
export function artText(html: string, lang: Lang): string {
  const map = ART[lang];
  return map ? swap(html, map, lang) : html;
}

/** Rough text width for resizing label pills: CJK characters are about one em wide, Latin about half.
 *  Arabic letters run about 0.42 em in IBM Plex Sans Arabic, its marks take no width, and its Latin is a little wider. */
function measure(text: string, size: number, lang: Lang) {
  const latin = lang === 'ar' ? 0.6 : 0.54;
  let w = 0;
  for (const ch of text) {
    if (/[\u064B-\u065F\u0670\u2066-\u2069]/.test(ch)) continue;
    w += /[\u0600-\u06FF]/.test(ch) ? size * 0.42 : /[⺀-鿿＀-￯]/.test(ch) ? size : ch === ' ' ? size * 0.28 : /[A-Z0-9]/.test(ch) ? size * 0.62 : size * latin;
  }
  return w;
}

/** The hero scene in a language: labels translated, and each pill (a rect followed by its text) resized to fit. */
export function sceneText(html: string, lang: Lang): string {
  const map = ART[lang];
  if (!map) return html;
  const out = swap(html, map, lang);
  // A pill is <g ...><rect x=".." width=".." ...> … <text x=".." … font-size="..">label</text></g>.
  return out.replace(/(<g[^>]*><rect [^>]*?x="([\d.]+)"[^>]*?width=")([\d.]+)("[^>]*>)((?:(?!<\/g>).)*?<text x="([\d.]+)"[^>]*font-size="([\d.]+)"[^>]*>([^<]+)<\/text><\/g>)/gs,
    (_m, head: string, x: string, _w: string, rest: string, tail: string, tx: string, size: string, label: string) => {
      const width = Math.round(parseFloat(tx) - parseFloat(x) + measure(label, parseFloat(size), lang) + 14);
      return head + width + rest + tail;
    });
}
