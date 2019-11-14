<template>
  <div class="body">
    <div class="header">
      <HeadComp></HeadComp>
    </div>
    <div class="textarea">
      <component :is="isComponent"></component>
      <div class="center">
        <button v-on:click="buttonAction">{{button}}</button>
      </div>
    </div>
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
button {
  padding: 10px;
  font-weight: bold;
  background: Orange;
  color: white;
  border: #e1e1e1;
  font-size: 15px;
  width: 300px;
  text-align: center;
  margin: 70px;
}
.center {
  text-align: center;
}
</style>