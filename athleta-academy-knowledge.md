# ATHLETA ACADEMY OKINAWA サイト運用ナレッジ

最終更新: 2026年7月9日

---

## 1. プロジェクト概要

**サイト名**: ATHLETA ACADEMY OKINAWA（アスレタアカデミー沖縄）
**公開URL**: https://www.athleta-academy-okinawa.com/
**目的**: 沖縄のブラジル式サッカースクールの集客用ランディングページ（LP）

| 項目 | 内容 |
|---|---|
| GitHubリポジトリ | `MotokiHiga/thleta-academy-lp` |
| ホスティング | Vercel（GitHub連携、mainブランチへのpushで自動デプロイ） |
| ドメイン管理 | お名前.com（onamae.com） |
| フロントエンド | Vite + React (TypeScript) + Tailwind CSS |
| コード生成元 | Figma AI（Figma Make） |
| GitHub操作方法 | ブラウザUIのみ（ターミナル・CLI不使用） |

---

## 2. リポジトリ構成
thleta-academy-lp/
├── index.html                  # タイトル・meta・OGP・GA4タグ設定
├── package.json                 # 依存パッケージ定義
├── vite.config.ts               # Viteビルド設定（Figmaアセット解決含む）
├── api/
│   └── send-inquiry.ts          # お問い合わせフォーム送信用サーバーレス関数
├── public/                       # 静的ファイル配信フォルダ（画像等）
│   └── summer-camp.jpg          # サマーキャンプ告知ポップアップ画像
├── src/
│   └── app/
│       ├── App.tsx               # トップページ本体（各セクションを読込む親ファイル）
│       └── components/
│           ├── Hero.tsx
│           ├── About.tsx
│           ├── CoachProfile.tsx
│           ├── Programs.tsx
│           ├── Testimonials.tsx
│           ├── FAQ.tsx
│           ├── ApplicationForm.tsx      # 無料体験申込フォーム
│           ├── Footer.tsx
│           └── SummerCampPopup.tsx      # サマーキャンプ告知ポップアップ
├── favicon.ico ほか各種アイコン画像（ルート直下）
└── guidelines / src/app/assets / src/app/styles 等
### 重要な構造上の注意点

- コンポーネントの実体は `src/app/components/`（`src/components/` ではない）
- トップページの組み立ては `src/app/App.tsx`（`page.tsx` ではなく `App.tsx` という名前）
- `favicon.ico` など一部の静的ファイルは歴史的経緯でルート直下にも存在するが、**新規に追加する静的ファイル（画像等）は必ず `public/` フォルダに置くこと**（後述）

---

## 3. GitHub運用ルール（ブラウザUI限定）

- 全ての編集・作成・削除は GitHub のブラウザ画面から行う（CLI・ローカル環境は使用しない）
- ファイル編集は「鉛筆アイコン」→ 内容修正 →「Commit changes」→ mainブランチへ直接コミット
- 新規ファイルは「Add file → Create new file」（テキスト）または「Add file → Upload files」（画像等バイナリ）
- **バイナリファイル（画像など）は「Create new file」では作成できない**（テキスト入力のみのため、中身が空の1バイトファイルになってしまう）。必ず「Add file → Upload files」を使う
- **空のフォルダはGit上に存在できない**。フォルダの中身を全て削除すると、フォルダ自体も一覧から消える（データ破損ではない）
- 新規フォルダに複数ファイル・特定フォルダ構成でアップロードしたい場合、PC上で事前にフォルダ構造を作ってからフォルダごとドラッグ＆ドロップすると、GitHub側でパスを自動認識してくれる
- コミット後、Vercelが自動でビルド・デプロイを実行する（反映まで数十秒〜数分）

---

## 4. デプロイ・インフラ構成

- **GitHub → Vercel 自動デプロイ**（mainブランチ連携）
- 本番ドメイン: `www.athleta-academy-okinawa.com`（お名前.comで管理、DNSレコードは個別追加方式でVercelに接続。ネームサーバー自体はVercelに委譲していない）
- Vercel専用URL（動作確認用）: `thleta-academy-lp.vercel.app` 系のプレビューURLも都度発行される
- ビルドツール: Vite（`publicDir` の既定値は `public/` フォルダ。ここに置いたファイルのみ本番ビルドにそのままコピーされる）
- Vite設定ファイル `vite.config.ts` にはFigma生成時の特殊プラグイン（`figmaAssetResolver`）や `@` エイリアス設定あり。**Tailwindプラグインは実際には未使用だが削除しないこと**（コメントで明記あり）
- **注意**: Vercelの契約プランは現在「Hobby（無料）」。Hobbyプランは規約上、商用利用（事業サイトの運用）が禁止されている。本サイトは生徒募集を行う事業サイトのため、規約上のリスクとして認識し、余裕のあるタイミングでPro（有料）プランへの切り替えを検討すること

---

## 5. 実施済み作業ログ

### 5-1. SEO・OGPタグ修正
- `index.html` の `<title>` を「Landing page mockup」（Figma初期値）から「ATHLETA ACADEMY OKINAWA | アスレタアカデミー沖縄」に変更
- `<meta name="description">` と OGPタグ（`og:title` / `og:description` / `og:url`）を追加
- Google Search Console でのインデックス再登録を推奨（反映を早めるため）

### 5-2. サマーキャンプ告知ポップアップ実装
- `src/app/components/SummerCampPopup.tsx` を新規作成（default export）
- `public/summer-camp.jpg` に告知画像をアップロード（**public直下必須**。ルート直下ではViteビルドに含まれず404になる）
- `App.tsx` にimport文と `<SummerCampPopup />` タグを追加
  - default exportのコンポーネントは `import SummerCampPopup from './components/SummerCampPopup';`（波カッコなし）でimportする点に注意
- 挙動: 初回表示時に0.8秒後にポップアップ表示、画像タップで `#contact`（お問い合わせセクション）へ遷移、`sessionStorage` で同一セッション中の再表示を抑制

### 5-3. お問い合わせフォームのメール送信機能実装

**課題**: 既存の `ApplicationForm.tsx` は送信処理が未実装のダミー（`// Simulate form submission` のコメントあり）で、実際にはどこにも通知が届いていなかった。

**採用した構成**（無料枠で完結、外部フォームサービス非依存）:
[ユーザー] → フォーム送信
↓
[ApplicationForm.tsx] fetch('/api/send-inquiry')
↓
[Vercel Serverless Function: api/send-inquiry.ts]
↓
[Resend API] （メール送信専門の無料サービス、月3,000通まで無料）
↓
[3つの宛先へ一斉送信]

brazilian.soccer.club@gmail.com
renyan.h0530@gmail.com
moto.higa@gmail.com
**実装手順**:
1. Resend（https://resend.com）で無料アカウント作成、APIキー発行
2. Vercelの「Settings → Environments → Production → Environment Variables」に `RESEND_API_KEY` を登録し、Redeploy実行
3. `api/send-inquiry.ts` を新規作成（Resend SDKを使い、フォームデータをメール本文に整形して送信）
4. `package.json` の `dependencies` に `"resend": "4.0.1"` を追加
5. `package.json` の `devDependencies` に `"@types/node": "20.14.9"` を追加（`process.env` を使うために必要。無いとビルドエラー `TS2580: Cannot find name 'process'` が発生する）
6. `ApplicationForm.tsx` の `handleSubmit` を `fetch('/api/send-inquiry', {...})` を呼ぶ非同期処理に書き換え

**つまずきポイントと解決**:
- Resend無料プラン・独自ドメイン未認証の状態では、送信元が仮アドレス（`onboarding@resend.dev`）の場合、**Resendアカウント登録者本人以外のメールアドレスには送信できない**（403エラー）
- 解決策: 独自ドメイン（`athleta-academy-okinawa.com`）をResendに登録し、DNS認証（DKIM用TXTレコード1件、SPF用MXレコード1件・TXTレコード1件）をお名前.comのDNSレコード設定に追加
- 認証完了後、`send-inquiry.ts` の送信元（from）を `onboarding@resend.dev` から `info@athleta-academy-okinawa.com`（認証済みドメインのアドレス）に変更することで、任意の宛先へ送信可能になった

**お名前.comでのDNSレコード追加時の注意**:
- TXTレコードの値（VALUE）は長い文字列になるため、Resend画面で省略表示（`[...]`）されている箇所は必ずクリックして全文をコピーする
- ホスト名の入力欄は `resend._domainkey` のようにドメイン部分を除いた部分のみ入力すればよい（ドメイン名は自動補完される）
- レコード追加確認画面で、既存のVercel関連レコード（AレコードやCNAMEレコード）が一覧に残っていることを確認してから確定する（消えていた場合、サイト表示に影響するリスクがあるため要注意）

### 5-4. Google Analytics 4（GA4）導入

**実施日**: 2026年7月9日

**目的**: サイトのアクセス状況（訪問数、流入経路、無料体験申込フォームへの到達状況など）を計測するため

**設定内容**:
- GA4プロパティ名: `ATHLETA ACADEMY OKINAWA`
- ストリームID: `15226590364`
- 測定ID: `G-L7N7SHC55S`
- ビジネス目標: 「Generate leads（見込み客の獲得）」「Understand web and/or app traffic（トラフィック把握）」を選択

**実装方法**:
- `index.html` の `</head>` タグ直前にgtag.jsのトラッキングコードを追加
- GitHubブラウザUIで直接編集・コミット、Vercelが自動デプロイ
- Realtimeレポートでの動作確認済み（計測成功）

**今後の確認方法**:
- GA4管理画面 → 「Reports」→「Realtime」で即時のアクセス状況を確認
- 「Reports」→「Engagement」→「Pages and screens」で、どのページがよく見られているか確認可能
- 無料体験申込フォームの送信完了をコンバージョンイベントとして計測したい場合は、別途設定が必要（今後の検討事項）

---

## 6. トラブルシューティング早見表

| 症状 | 主な原因 | 確認・対処方法 |
|---|---|---|
| 画像がサイトに反映されない（404） | ルート直下に置いてしまい `public/` フォルダに入っていない | GitHubで `public/ファイル名` のパスになっているか確認。無ければ再アップロード |
| ビルドエラー `Cannot find name 'process'` | `@types/node` が `devDependencies` に無い | `package.json` に `"@types/node"` を追加 |
| import時にコンポーネントが見つからないエラー | default export と named export（`{ }` の有無）の不一致 | export側の書き方に合わせてimport文を修正 |
| フォーム送信してもメールが届かない | Resend無料プラン・未認証ドメインの宛先制限（403） | Resendの「Logs」でステータスコードを確認。403なら独自ドメイン認証を実施 |
| package.json編集後にビルド失敗 | JSON構文エラー（括弧の数が合っていない等） | `{` と `}` の対応関係を目視確認してからコミット |

---

## 7. 今後の運用における推奨フロー

1. **コード修正時**: GitHubの該当ファイルを鉛筆アイコンで編集 → 変更箇所のみ最小限に修正 → 編集画面のスクリーンショットで事前確認 → Commit
2. **画像追加時**: 必ず `public/` フォルダにアップロード（ルート直下は避ける）
3. **環境変数（APIキー等）を追加する場合**: コードに直書きせず、Vercelの Environment Variables に登録 → Redeployで反映
4. **依存パッケージ（npm package）を追加する場合**: `package.json` の `dependencies`（本番でも必要なもの）または `devDependencies`（ビルド時のみ必要なもの）に追記し、JSON構文を崩さないよう注意
5. **本番反映の確認**: Vercelダッシュボードの「Deployments」でステータスが `Ready` になっているか確認 → 実際に本番URLへアクセスして目視確認

---

## 8. 関連アカウント・サービス一覧

| サービス | 用途 | 備考 |
|---|---|---|
| GitHub | ソースコード管理 | `MotokiHiga/thleta-academy-lp`、ブラウザUI操作のみ |
| Vercel | ホスティング・自動デプロイ | mainブランチ連携、Environment Variables管理、現在Hobbyプラン（要確認） |
| お名前.com | ドメイン管理・DNS設定 | `athleta-academy-okinawa.com` |
| Resend | メール送信API | 無料プラン（月3,000通）、独自ドメイン認証済み |
| Gemini | AI画像生成 | サイト・販促素材用の画像生成に使用 |
| Google Analytics 4 | アクセス解析 | 無料、測定ID: `G-L7N7SHC55S` |

---

## 9. 今後の検討事項（未対応）

- お問い合わせフォームのバリデーションメッセージ・UI改善
- 送信済みお問い合わせデータの保存（現状はメール通知のみで、データベースやスプレッドシートへの保存は未実装）
- LINE公式アカウントとの連携（インフォメーション自動返信等）
- サマーキャンプ以外の季節イベント告知ポップアップの汎用化（複数イベントの出し分け）
- Vercel Hobbyプランの商用利用規約リスクへの対応（Proプランへの切り替え検討）
- GA4での無料体験申込フォーム送信をコンバージョンイベントとして設定
