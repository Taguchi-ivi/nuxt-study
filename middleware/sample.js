
// サーバで1回,クライアントではページ遷移毎
// ルーティング制御、つまり「認証されていないユーザーはこのページにはいかせないぞ！」的な処理も書けるわけです。
// middlewareディレクトリ内の順序:nuxt.confing.js > layout > page
// Doc:https://nuxtjs.org/ja/docs/directory-structure/middleware/#ルーターミドルウェア

// export default function (context) {
//     // userAgentプロパティをコンテキストに追加します
//     context.userAgent = process.server
//     ? context.req.headers['user-agent']
//     : navigator.userAgent
// }