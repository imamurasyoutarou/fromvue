<template>
  <div>
    お問い合わせフォーム
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <p></p>
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
  methods: mapActions("Form", {
    buttonAction: "buttonAction"
  }),
  computed: mapGetters("Form", {
    button: "getButton",
    isComponent: "getComponent"
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