<template>
  <div class="body">
    <div class="header">
      <HeadComp></HeadComp>
    </div>
    <div class="textarea">
      <component :is="isComponent"></component>
      <div class="thanktext" v-if="count==2">
        <h3>お問い合わせいただき、誠にありがとうございました</h3>
        <h3>お問い合わせの内容は無事送信されました</h3>
        <h3>担当者がご確認の上、連絡差し上げます。ご連絡まで今しばらくおまちください</h3>
      </div>
      <div class="flex">
        <div class="center">
          <button class="mainbutton" v-on:click="buttonAction">{{button}}</button>
        </div>
        <div v-if="count==1">
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
@media screen and (min-width: 767px) {
  /*ウィンドウ幅が767px以上の場合に適用*/
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
  }
  .thanktext {
    text-align: center;
    margin: 80px;
  }
}
</style>