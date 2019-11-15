<template>
  <div class="bottom">
    <h4 class="textcenter">以下の内容でよろしければ、送信をお願いします</h4>
    <div class="flex">
      <div class="item">
        <div class="text">名前</div>
      </div>
      <div class="item2">
        <div>{{surname}} {{name}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">ふりがな</div>
      </div>
      <div class="item2">
        <div>{{surnamefurigana}} {{furigana}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">社名</div>
      </div>
      <div class="item2">
        <div>{{company}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text mailtext">メールアドレス</div>
      </div>
      <div class="item2">
        <div>{{email}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">郵便番号</div>
      </div>
      <div class="item2">
        <div>{{postnumber1}}-{{postnumber2}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">都道府県</div>
      </div>
      <div class="item2">
        <div>{{prefectures}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">住所</div>
      </div>
      <div class="item2">
        <div>{{city}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">電話番号</div>
      </div>
      <div class="item2">
        <div>{{phone}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">製品</div>
      </div>
      <div class="item2">
        <div>{{selected}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="item">
        <div class="text">お問い合わせ件名</div>
      </div>
      <div class="item2">
        <div>{{subject}}</div>
      </div>
    </div>

    <div class="flex">
      <div class="stringitem">
        <div class="text">お問い合わせ内容</div>
      </div>
      <div class="stringitem2">
        <div>{{string}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "stringComp",
  computed: mapGetters("String", {
    string: "getString",
    surname: "getSurName",
    name: "getName",
    surnamefurigana: "getSurnameFurigana",
    furigana: "getFurigana",
    company: "getCompany",
    email: "getEmail",
    postnumber1: "getPostnumber1",
    postnumber2: "getPostnumber2",
    prefectures: "getPrefectures",
    city: "getCity",
    phone: "getPhone",
    selected: "getSelected",
    subject: "getSubject"
  })
};
</script>



<style scoped>
@media screen and (max-width: 479px) {
  .mailtext {
    font-size: 13px;
  }
  .textcenter {
    text-align: center;
    font-size: 15px;
    margin: 30px 0px;
  }
  .error {
    color: red;
  }
  .flex {
    display: flex;
    justify-content: center;
  }
  .item {
    width: 160px;
    border: 0.1px solid;
    padding: 10px;
    background: #f5f5f5;
  }
  .item2 {
    width: 410px;
    padding: 10px;
    border: 0.1px solid;
    font-weight: bold;
  }
  .stringitem {
    width: 160px;
    padding: 70px 10px;
    border: 0.1px solid;
    background: #f5f5f5;
  }
  .stringitem2 {
    width: 410px;
    padding: 70px 10px;
    border: 0.1px solid;
    font-weight: bold;
  }
  .bottom {
    margin-bottom: 40px;
  }
}

@media screen and (min-width: 767px) {
  /*ウィンドウ幅が767px以上の場合に適用*/

  .textcenter {
    text-align: center;
  }
  .error {
    color: red;
  }
  .flex {
    display: flex;
    justify-content: center;
  }
  .item {
    width: 160px;
    border: 0.1px solid;
    padding: 10px;
    background: #f5f5f5;
  }
  .item2 {
    width: 410px;
    padding: 10px;
    border: 0.1px solid;
    font-weight: bold;
  }
  .stringitem {
    width: 160px;
    padding: 70px 10px;
    border: 0.1px solid;
    background: #f5f5f5;
  }
  .stringitem2 {
    width: 410px;
    padding: 70px 10px;
    border: 0.1px solid;
    font-weight: bold;
  }
  .bottom {
    margin-bottom: 40px;
  }
}
</style>
