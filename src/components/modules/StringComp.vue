<template>
  <p>{{string}}</p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "stringComp",
  computed: mapGetters("String", {
    string: "getString"
  })
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
