<template>
  <div class="body">
    <div class="header">
      <HeadComp></HeadComp>
    </div>
    <div class="textarea">
      <div class="center explanation" v-if="count==0">
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
      <component :is="isComponent"></component>
      <div class="thanktext" v-if="count==2">
        <h3>
          お問い合わせいただき、
          <br />誠にありがとうございました
        </h3>
        <h3>
          お問い合わせの内容は
          <br />無事送信されました
        </h3>
        <h3>
          担当者がご確認の上、
          <br />連絡差し上げます。
          <br />今しばらくおまちください
        </h3>
      </div>
      <div class="flex">
        <div class="center">
          <button class="mainbutton" v-on:click="buttonAction">{{button}}</button>
        </div>
        <div v-if="count==1" class="center2">
          <button
            class="editbutton"
            v-on:click="editbuttonAction"
          >{{editbutton}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp";
import TextareaComp from "@/components/modules/TextareaComp";
import StringComp from "@/components/modules/StringComp";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Form",
  methods: mapActions("Form", {
    buttonAction: "buttonAction",
    editbuttonAction: "editbuttonAction"
  }),
  computed: mapGetters("Form", {
    button: "getButton",
    isComponent: "getComponent",
    editbutton: "geteditButton",
    count: "getCount"
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
};
</script>

<style scoped>
@media screen and (max-width: 479px) {
  /*ウィンドウ幅が最大479pxまでの場合に適用*/
  .explanation {
    margin: 40px;
  }

  .access {
    padding: 5px;
    margin-top: 10px;
    border: 2px solid;
  }

  .thanktext {
    text-align: center;
    margin: 52px;
    font-size: 15px;
  }
  .header {
    background: Orange;
    padding: 20px;
    color: white;
    text-align: center;
    border-bottom: 1px solid;
    border-color: black;
  }
  .mainbutton {
    padding: 10px;
    font-weight: bold;
    background: Orange;
    color: white;
    border: #e1e1e1;
    font-size: 15px;
    width: 282px;
    text-align: center;
    border-radius: 18px;
    cursor: pointer;
    margin-bottom: 50px;
  }

  .editbutton {
    padding: 10px;
    margin-top: 10px;
    background: #c5c0c0;
    font-weight: bold;
    border: #e1e1e1;
    font-size: 15px;
    width: 282px;
    color: grey;
    text-align: center;
    border-radius: 18px;
    cursor: pointer;
  }
  .center {
    text-align: center;
  }
  .center2 {
    text-align: center;
  }
}

@media screen and (min-width: 767px) {
  /*ウィンドウ幅が767px以上の場合に適用*/
  .access {
    padding: 10px;
    margin: 10px 318px;

    border: 2px solid;
  }
  .textarea {
    margin-top: 50px;
  }
  .header {
    background: Orange;
    padding: 20px;
    color: white;
    text-align: center;
    border-bottom: 1px solid;
    border-color: black;
  }
  .mainbutton {
    padding: 10px;
    font-weight: bold;
    background: Orange;
    color: white;
    border: #e1e1e1;
    font-size: 15px;
    width: 300px;
    text-align: center;
    border-radius: 18px;
    cursor: pointer;
    margin-bottom: 50px;
  }
  .center {
    text-align: center;
  }
  .flex {
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
  }
  .editbutton {
    padding: 10px;
    margin-left: 12px;
    background: #c5c0c0;
    font-weight: bold;
    border: #e1e1e1;
    font-size: 15px;
    width: 300px;
    text-align: center;
    cursor: pointer;
  }
  .thanktext {
    text-align: center;
    margin: 80px;
    font-size: 25px;
  }
}
</style>