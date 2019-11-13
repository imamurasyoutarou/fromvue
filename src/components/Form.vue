<template>
  <div>
    <h1>画像</h1>
    <HeadComp class="header"></HeadComp>
    <component :is="isComponent"></component>
    <p></p>
    <button v-on:click="buttonAction">{{button}}</button>
    <div v-if="count==1">
      <button v-on:click="editbuttonAction">{{editbutton}}</button>
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
.header {
  background-color: #e1e1e1;
  width: 700;
}
</style>