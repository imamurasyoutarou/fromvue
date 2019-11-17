<template>
  <div class="center explanation">
    <div>
      下記フォーマットにご記入いただき、
      <br />「入力内容の確認」ボタンを押して内容をご確認のうえ、送信してください。
    </div>
    <div>お問い合わせの内容によっては、お時間を頂戴する場合がございます。</div>
    <div class="access">
      <div>お問い合わせには、受付時間内に対応させていただいております。</div>
      <div>イマップ株式会社 お客様相談室</div>
      <div>受付時間 9：00～17：30（土・日・祝日除く）</div>
      <div>TEL:0000-00-0000</div>
    </div>
  </div>
</template>

<style  scoped>
@media screen and (max-width: 479px) {
  .center {
    text-align: center;
  }
  .access {
    padding: 5px;
    margin-top: 10px;
    border: 2px solid;
  }
  .explanation {
    margin: 40px;
  }
}

@media screen and (min-width: 767px) {
  .access {
    padding: 10px;
    margin: 10px 318px;
    border: 2px solid;
  }
}
</style>
