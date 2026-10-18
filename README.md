# Invobay 官网

Astro 静态站点（`astro@7.3.8`，Node 22）。设计稿与说明在私有主仓库 `zysncb/Invobay`（`design/canvas/project/website/`、`docs/ui/06-UI设计稿说明.md`）；官网从那里迁出，本仓库公开，只放官网。

```bash
npm ci
npm run dev       # http://localhost:4321
npm run build     # 输出到 dist/
npm run preview
```

## 页面

| 路径 | 设计稿 | 说明 |
|---|---|---|
| `/` | E00 | 首页 7 屏，截止日期倒计时按访问当天实时计算 |
| `/service-providers` | W01 | 合作 ASP 列表、排序筛选、对比表 |
| `/service-providers/asp-alpha` | W01·1 | ASP 详情 |
| `/pricing` | W02 | 套餐、加购、额度说明、价格问答 |
| `/guides/emaratax-onboarding` | W03 | EmaraTax 开户指南，网址可复制，附税局官方链接 |
| `/about` | W08 | 关于我们：项目介绍与所属公司 OceanAstra，入口在页脚 Company 栏 |
| `/legal` | W04 | 条款 `#terms`、隐私 `#privacy`、Cookie `#cookies`（正文待律师提供） |
| `/contact` | W05 | 按团队发邮件（暂不含 AI 客服） |
| `/waitlist` | — | SaaS 未上线前，所有“注册 / 登录 / 选 ASP / 购买”按钮都到这里留邮箱，`?intent=` 记录来源 |
| `404` | W06 | 找不到页面 |

## 多语言

- 英文在根路径（`/pricing`），中文在 `/zh/`（`/zh/pricing`），阿拉伯语在 `/ar/`（`/ar/pricing`）。
- 页面文件在 `src/pages/[...lang]/`，每个页面按 `src/i18n/index.ts` 的 `LIVE` 生成各语言版本。
- 文案全部在字典里：`src/i18n/en.ts`、`zh.ts`、`ar.ts`，三者结构必须一致。改文案只改字典，不改页面。
- 插图和首屏流转图里的文字在 `src/i18n/art.ts` 按语言替换；EmaraTax 自己的界面文字在示意图里保持英文。
- 顶栏和页脚有语言切换；页面带 `hreflang`，中文页使用 Noto Sans SC，阿拉伯语页使用 IBM Plex Sans Arabic 和 Noto Kufi Arabic。
- 法律页的中文版、阿拉伯语版都注明“如与英文版不一致，以英文版为准”。
- 阿拉伯语页从右到左（`dir="rtl"`）：样式用逻辑属性（`margin-inline`、`inset-inline-start` 等），箭头图标自动镜像；首屏流转图和示意图保持从左到右，里面的阿拉伯语文字自动按从右到左排。
- 阿拉伯语文案（现代标准阿拉伯语，西式数字）正式公开前需请母语人士审校。

## 设置（在 GitHub 仓库里填，不要写进代码）

Settings → Secrets and variables → Actions → **Variables** 页签：

| 变量 | 作用 | 默认 |
|---|---|---|
| `PUBLIC_WAITLIST_ENDPOINT` | 等候名单表单提交地址，例如 Formspree 表单的 `https://formspree.io/f/xxxxxxx`。这个地址本来就会出现在网页里，不是密钥 | 空：表单显示“暂未开放”，按钮不可点 |
| `PUBLIC_ALLOW_INDEXING` | 设为 `true` 才允许搜索引擎收录 | 空：全站 `noindex`，`robots.txt` 禁止抓取 |

改了变量要重新部署才生效：Actions → Deploy website → Run workflow。

## 部署到 GitHub Pages

工作流在 `.github/workflows/deploy.yml`：推送到 `main` 时自动构建并发布，也可以在 Actions 页手动运行。

1. 仓库 Settings → Pages → Build and deployment → Source 选 **GitHub Actions**。本仓库必须保持公开：免费账号的私有仓库不能用 Pages。
2. 同一页 Custom domain 填 `invobay.com`，保存后等 DNS 检查通过，再勾选 **Enforce HTTPS**。
3. 在域名商处添加 DNS 记录：
   - 根域名 `invobay.com`：4 条 A 记录 `185.199.108.153`、`185.199.109.153`、`185.199.110.153`、`185.199.111.153`（可再加 4 条 AAAA：`2606:50c0:8000::153`、`2606:50c0:8001::153`、`2606:50c0:8002::153`、`2606:50c0:8003::153`）。
   - `www`：CNAME 指向 `zysncb.github.io`。
4. 建议在 GitHub 个人 Settings → Pages 里验证 invobay.com 这个域名，防止被别人的 Pages 占用。
5. 网站是公开可访问的（默认不被搜索引擎收录）；GitHub Pages 不能设访问密码。

## 安全联系方式

`public/.well-known/security.txt` 按 RFC 9116 提供安全问题的联系方式，内容指向 `support@invobay.com`。`public/` 下的文件原样拷贝到 `dist/`，所以它发布在 `https://invobay.com/.well-known/security.txt`；Pages 由 Actions 部署（`upload-pages-artifact`），不跑 Jekyll，以点开头的目录能正常发布。

**`Expires` 为 2027-10-18，到期前必须续期** —— 过期的 security.txt 等于没有。部署后确认：

```bash
curl -I https://invobay.com/.well-known/security.txt
```

## 两个站点的内容同步

公司官网（[oceanastra.net](https://oceanastra.net)，仓库 `zysncb/OceanAstra-Website`）把 Invobay 列在业务线 02「行业管理方案」里，两个站点对同一件事的说法必须一致：

- **公司事实**（法人名、执照号、发照机关、地址、邮箱）以 `OceanAstra-Website/content/company.json` 为准，逐字一致。本仓库里这些事实出现在 `src/config.ts` 的 `COMPANY.about` 和三份字典的 `about.companyText`。
- **Invobay 的产品说法**以本仓库 `src/i18n/en.ts` 为准。
- 任何一边改了这两类内容，另一边同步改。公司官网的 README 也写了同一条规则。

## 上线前要替换的占位内容

- `src/config.ts`：`EMAILS` 已全部填真实地址（合作、客服、API 申请、法务）；不设销售邮箱（2026-10-14）。以后新增团队邮箱可先写 `[XXX EMAIL]` 占位，填真实地址后自动变成可点击、可复制。
- `src/config.ts`：`OFFICIAL.mofEinvoicing` 的网址是按财政部网站结构推断的，请在浏览器里打开确认。
- `/contact` 的 `[OFFICE ADDRESS]`；`/legal` 的 `[DATE]` 和各节正文。
- `/pricing` 的额度包价格 `[PRICE]`。
- ASP Alpha / Bravo / Charlie 及其数据都是示例。
