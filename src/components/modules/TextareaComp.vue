<template>
  <form>
    <div class="nameArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            名前
            <span class="required">必須</span>
            <span class="error">{{nameerror}}</span>
          </div>
        </div>

        <div>
          <input
            type="text"
            v-model="surname"
            placeholder="姓"
            @blur="surnameBlur()"
            class="nameinput"
          />
          <input
            type="text"
            v-model="name"
            placeholder="名"
            @blur="nameBlur()"
            class="nameinput"
          />
        </div>
      </div>
    </div>

    <div class="firiganaArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            ふりがな
            <span class="required">必須</span>
            <span class="error">{{firiganaerror}}</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="kana"
            v-model="surnamefirigana"
            placeholder="せい"
            title="ふりがな"
            @blur="surnamefiriganaBlur()"
            class="nameinput"
          />
          <input
            type="text"
            name="kana"
            v-model="firigana"
            placeholder="めい"
            title="ふりがな"
            @blur="firiganaBlur()"
            class="nameinput"
          />
        </div>
      </div>
    </div>

    <div class="companyArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            会社名
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <input type="text" class="inputStyle" v-model="company" />
        </div>
      </div>
    </div>

    <div class="mailArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            メールアドレス
            <span class="required">必須</span>
            <span class="error">{{emailerror}}</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="email"
            v-model="email"
            placeholder="localname@domain.com"
            title="メールアドレス"
            @blur="emailBlur()"
            class="inputStyle"
          />
        </div>
      </div>
    </div>

    <div class="postnumberArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            郵便番号
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="zip31"
            size="4"
            maxlength="3"
            v-model="postnumber1"
            class="postnumber1input"
          /> －
          <input
            type="text"
            name="zip32"
            size="5"
            maxlength="4"
            onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref31','addr31','addr31');"
            v-model="postnumber2"
            class="postnumber2input"
          />
        </div>
      </div>
    </div>

    <div class="prefecturesArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            都道府県
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            class="inputStyle"
            name="pref31"
            size="20"
            v-model="prefectures"
          />
        </div>
      </div>
    </div>

    <div class="addressArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            住所
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            class="inputStyle"
            name="addr31"
            size="40"
            v-model="city"
          />
        </div>
      </div>
    </div>

    <div class="phoneArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            電話番号
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="tel"
            v-model="phone"
            placeholder="090-1234-5678"
            title="電話番号"
            class="inputStyle"
          />
        </div>
      </div>
    </div>

    <div class="selectedArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            どの製品について
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <select name="prefecture" v-model="selected">
            <option value>Aサービスについて</option>
            <option>Bサービスについて</option>
            <option>Cサービスについて</option>
            <option>その他</option>
          </select>
        </div>
      </div>
    </div>

    <div class="subjectArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            お問い合わせ件名
            <span class="required">必須</span>
            <span class="error">{{subjecterror}}</span>
          </div>
        </div>
        <div>
          <input
            class="inputStyle"
            type="text"
            v-model="subject"
            @blur="subjectBlur()"
          />
        </div>
      </div>
    </div>

    <div class="impressionArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            お問い合わせ内容
            <span class="required">必須</span>
            <span class="error">{{impressionerror}}</span>
          </div>
        </div>
        <div>
          <textarea v-model="impression" @blur="impressionBlur()"></textarea>
        </div>
      </div>
    </div>

    <div class="ischeckedArea">
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        v-model="ischecked"
        class="checkbox"
      />
      <label for="agreement">個人情報の保持の同意</label>
    </div>
    <p class="error">{{error}}</p>
  </form>
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
    surnameBlur() {
      if (this.surname == false && this.name == false) {
        this.nameerror = "エラー";
      } else {
        this.nameerror = "";
      }
    },
    nameBlur() {
      if (this.surname == false && this.name == false) {
        this.nameerror = "エラー";
      } else {
        this.nameerror = "";
      }
    },
    surnamefiriganaBlur() {
      const reg = /^[ぁ-ん]+$/;
      if (
        !reg.test(this.surnamefirigana) ||
        (this.surnamefirigana == false && !reg.test(this.firigana)) ||
        this.firigana == false
      ) {
        this.firiganaerror = "エラー";
      } else {
        this.firiganaerror = "";
      }
    },
    firiganaBlur() {
      const reg = /^[ぁ-ん]+$/;
      if (
        !reg.test(this.surnamefirigana) ||
        (this.surnamefirigana == false && !reg.test(this.firigana)) ||
        this.firigana == false
      ) {
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
    surname: {
      get() {
        return this.$store.state.surname;
      },
      set(value) {
        this.$store.commit("updateSurName", value);
      }
    },
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("updateName", value);
      }
    },
    surnamefirigana: {
      get() {
        return this.$store.state.surnamefirigana;
      },
      set(value) {
        this.$store.commit("updateSurnameFirigana", value);
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
.margin {
  margin: 30px 0px 5px 0px;
}

.nameArea,
.firiganaArea,
.companyArea,
.mailArea,
.postnumberArea,
.prefecturesArea,
.addressArea,
.phoneArea,
.selectedArea,
.subjectArea,
.impressionArea {
  display: flex;
  justify-content: center;
}
.ischeckedArea {
  text-align: center;
  margin: 30px;
}
.required {
  padding: 3px;
  background-color: red;
  color: white;
  font-size: 1px;
}
.any {
  padding: 2.5px;
  border: 0.5px solid;
  color: black;
  font-size: 1px;
}
.box {
  padding: 2px;
  margin-right: 3px;
  background: #000;
}
.error {
  color: red;
  text-align: center;
}
.nameinput {
  padding: 10px;
  width: 300px;
}
.nameinput {
  padding: 10px;
  width: 300px;
  background: #f5f5f5;
  border: none;
}
.postnumber1input {
  padding: 10px;
  width: 230px;
  background: #f5f5f5;
  border: none;
}
.postnumber2input {
  padding: 10px;
  width: 350px;
  background: #f5f5f5;
  border: none;
}

.inputStyle {
  padding: 10px;
  width: 628px;
  font-size: 15px;
  background: #f5f5f5;
  border: none;
}
textarea {
  width: 645px;
  font-size: 100%;
  height: 250px;
  background: #f5f5f5;
  border: none;
}
select {
  padding: 10px;
  width: 650px;
  font-size: 15px;
  background: none transparent;
  -webkit-appearance: button;
  background: #f5f5f5;
  border: none;
}
</style>
