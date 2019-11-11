<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <TextareaComp></TextareaComp>
    <StringComp></StringComp>
    <button v-on:click="buttonAction">{{button}}</button>
  </div>
</template>

<script>
import HeadComp from "@/components/modules/HeadComp";
import TextareaComp from "@/components/modules/TextareaComp";
import StringComp from "@/components/modules/StringComp";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      button: "確認"
    };
  },
  methods: mapActions("Form", {
    buttonAction: "buttonAction"
  }),
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
};
</script>

<style>
</style>