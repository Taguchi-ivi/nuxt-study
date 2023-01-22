// サーバーのみで実行されるフック
// ここではサーバー固有の処理を記載
// たとえばAPIサーバーを作ったりできる。
// Doc:https://nuxtjs.org/ja/docs/configuration-glossary/configuration-servermiddleware/

export default function (req, res, next) {
    console.log('server Middleware!! terminalに出力')
    // req は Node.js の HTTP リクエストオブジェクトです
    console.log(req.url)

    // res は Node.js の HTTP レスポンスオブジェクトです

    // next は 次のミドルウェアを呼び出すための関数です。
    // ミドルウェアがエンドポイントでない場合、関数の最後で next を呼び出すのを忘れないでください！
    next()
}