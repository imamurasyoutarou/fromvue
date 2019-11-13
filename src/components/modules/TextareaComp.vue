<template>
  <from>
    <p class="error">{{error}}</p>
    <p>名前</p>
    <input type="text" v-model="name" @blur="nameBlur()" />
    <p class="error">{{nameerror}}</p>
    <p>ふりがな</p>
    <input
      type="text"
      name="kana"
      v-model="firigana"
      placeholder="せいめい"
      title="ふりがな"
      @blur="firiganaBlur()"
    />
    <p class="error">{{firiganaerror}}</p>
    <p>社名</p>
    <input type="text" v-model="company" />
    <p>メールアドレス</p>
    <input
      type="text"
      name="email"
      v-model="email"
      placeholder="localname@domain.com"
      title="メールアドレス"
      @blur="emailBlur()"
    />
    <p class="error">{{emailerror}}</p>
    <p>郵便番号</p>
    <input
      type="text"
      name="zip31"
      size="4"
      maxlength="3"
      v-model="postnumber1"
    /> －
    <input
      type="text"
      name="zip32"
      size="5"
      maxlength="4"
      onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref31','addr31','addr31');"
      v-model="postnumber2"
    />
    <p>住所</p>
    <!-- ▼住所入力フィールド(都道府県) -->
    <p>都道府県</p>
    <input type="text" name="pref31" size="20" v-model="prefectures" />
    <p>住所</p>
    <input type="text" name="addr31" size="40" v-model="city" />
    <p>電話番号</p>
    <input
      type="text"
      name="tel"
      v-model="phone"
      style="ime-mode:disabled"
      placeholder="090-1234-5678"
      title="電話番号"
    />
    <p>どの製品について</p>
    <select name="prefecture" v-model="selected">
      <option value>Aサービスについて</option>
      <option>Bサービスについて</option>
      <option>Cサービスについて</option>
      <option>その他</option>
    </select>
    <p>お問い合わせ件名</p>
    <input type="text" v-model="subject" @blur="subjectBlur()" />
    <p class="error">{{subjecterror}}</p>
    <p>お問い合わせ内容</p>
    <textarea v-model="impression" @blur="impressionBlur()"></textarea>
    <p class="error">{{impressionerror}}</p>
    <p></p>
    <input
      type="checkbox"
      name="agreement"
      id="agreement"
      v-model="ischecked"
      required
    />
    <label for="agreement">個人情報の保持の同意</label>
  </from>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "textareaComp",
  data() {
    return {
      nameerror: "",
      firiganaerror: "",
      emailerror: "",
      subjecterror: "",
      impressionerror: ""
    };
  },
  methods: {
    nameBlur() {
      if (this.name == false) {
        this.nameerror = "エラー";
      } else {
        this.nameerror = "";
      }
    },
    firiganaBlur() {
      const reg = /^[ぁ-ん]+$/;
      if (!reg.test(this.firigana) || this.firigana == false) {
        this.firiganaerror = "エラー";
      } else {
        this.firiganaerror = "";
      }
    },
    emailBlur() {
      const reg = /^\S+@\S+\.\S+$/;
      if (!reg.test(this.email) || this.email == false) {
        this.emailerror = "エラー";
      } else {
        this.emailerror = "";
      }
    },
    subjectBlur() {
      if (this.subject == false) {
        this.subjecterror = "エラー";
      } else {
        this.subjecterror = "";
      }
    },
    impressionBlur() {
      if (this.impression == false) {
        this.impressionerror = "エラー";
      } else {
        this.impressionerror = "";
      }
    }
  },

  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      }
    },
    firigana: {
      get() {
        return this.$store.state.firigana;
      },
      set(value) {
        this.$store.commit("updateFirigana", value);
      }
    },
    company: {
      get() {
        return this.$store.state.company;
      },
      set(value) {
        this.$store.commit("updateCompany", value);
      }
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      }
    },
    postnumber1: {
      get() {
        return this.$store.state.postnumber1;
      },
      set(value) {
        this.$store.commit("updatePostnumber1", value);
      }
    },
    postnumber2: {
      get() {
        return this.$store.state.postnumber2;
      },
      set(value) {
        this.$store.commit("updatePostnumber2", value);
      }
    },
    prefectures: {
      get() {
        return this.$store.state.prefectures;
      },
      set(value) {
        this.$store.commit("updatePrefectures", value);
      }
    },
    city: {
      get() {
        return this.$store.state.city;
      },
      set(value) {
        this.$store.commit("updateCity", value);
      }
    },
    phone: {
      get() {
        return this.$store.state.phone;
      },
      set(value) {
        this.$store.commit("updatePhone", value);
      }
    },
    selected: {
      get() {
        return this.$store.state.selected;
      },
      set(value) {
        this.$store.commit("updateSelected", value);
      }
    },
    subject: {
      get() {
        return this.$store.state.subject;
      },
      set(value) {
        this.$store.commit("updateSubject", value);
      }
    },
    impression: {
      get() {
        return this.$store.state.impression;
      },
      set(value) {
        this.$store.commit("updateImpression", value);
      }
    },
    ischecked: {
      get() {
        return this.$store.state.ischecked;
      },
      set(value) {
        this.$store.commit("updateisChecked", value);
      }
    },
    ...mapGetters("Textarea", {
      error: "getError"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
</style>
