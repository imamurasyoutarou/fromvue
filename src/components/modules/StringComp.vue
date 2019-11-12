<template>
  <div>
    <p>{{name}}</p>
    <p>{{firigana}}</p>
    <p>{{company}}</p>
    <p>{{email}}</p>
    <p>{{postnumber1}}-{{postnumber2}}</p>
    <p>{{prefectures}}</p>
    <p>{{city}}</p>
    <p>{{phone}}</p>
    <p>{{selected}}</p>
    <p>{{subject}}</p>
    <p>{{string}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "stringComp",
  computed: mapGetters("String", {
    string: "getString",
    name: "getName",
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
