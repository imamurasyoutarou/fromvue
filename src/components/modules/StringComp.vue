<template>
  <div>
    <div>
      <div>名前</div>
      <div>{{surname}} {{name}}</div>
    </div>

    <div>
      <div>ふりがな</div>
      <div>{{surnamefirigana}} {{firigana}}</div>¥
    </div>

    <div>
      <div>社名</div>
      <div>{{company}}</div>
    </div>

    <div>
      <p>メールアドレス：{{email}}</p>
    </div>

    <div>
      <p>郵便番号：{{postnumber1}}-{{postnumber2}}</p>
    </div>

    <div>
      <p>都道府県：{{prefectures}}</p>
    </div>

    <div>
      <p>住所：{{city}}</p>
    </div>
    <div>
      <p>電話番号：{{phone}}</p>
    </div>

    <div>
      <p>製品：{{selected}}</p>
    </div>

    <div>
      <p>お問い合わせ件名：{{subject}}</p>
    </div>

    <div>
      <p>お問い合わせ内容{{string}}</p>
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
    surnamefirigana: "getSurnameFirigana",
    firigana: "getFirigana",
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
.error {
  color: red;
}
</style>
