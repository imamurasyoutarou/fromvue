<template>
  <form>
    <h2 class="customertext">お客様情報</h2>
    <div class="nameArea">
      <div>
        <div class="namemargin">
          <div>
            <span class="box"></span>
            名前
            <span class="required">必須</span>
            <p class="error">{{nameerror}}</p>
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

    <div class="furiganaArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            ふりがな
            <span class="required">必須</span>
            <p class="error">{{furiganaerror}}</p>
          </div>
        </div>
        <div>
          <input
            type="text"
            name="kana"
            v-model="surnamefurigana"
            placeholder="せい"
            title="ふりがな"
            @blur="surnamefuriganaBlur()"
            class="nameinput"
          />
          <input
            type="text"
            name="kana"
            v-model="furigana"
            placeholder="めい"
            title="ふりがな"
            @blur="furiganaBlur()"
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
            <p class="error emailerror">{{emailerror}}</p>
          </div>
        </div>
        <div>
          <input
            type="email"
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

    <div class="mailArea">
      <div>
        <div class="margin">
          <div>
            <span class="box"></span>
            メールアドレス確認用
            <span class="required">必須</span>
            <p class="error checkemailerror">{{checkemailerror}}</p>
          </div>
        </div>
        <div>
          <input
            type="email"
            name="email"
            v-model="checkemail"
            title="メールアドレス"
            @blur="checkemailBlur()"
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
            <p class="note">※入力しますと都道府県・住所が自動入力されます</p>
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
            placeholder="000"
          /> －
          <input
            type="text"
            name="zip32"
            size="5"
            maxlength="4"
            onKeyUp="AjaxZip3.zip2addr('zip31','zip32','pref31','addr31','addr31');"
            v-model="postnumber2"
            class="postnumber2input"
            placeholder="0000"
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
            placeholder="福岡県"
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
            type="tel"
            name="tel"
            v-model="phone"
            placeholder="080-1234-5678"
            title="電話番号"
            class="inputStyle"
          />
        </div>
      </div>
    </div>
    <h2 class="customertext">お問い合わせ内容</h2>
    <div class="selectedArea">
      <div>
        <div class="selectedmargin">
          <div>
            <span class="box"></span>
            どの製品について
            <span class="any">任意</span>
          </div>
        </div>
        <div>
          <select name="prefecture" v-model="selected">
            <option value>選択してください</option>
            <option>Aサービスについて</option>
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
            <p class="error">{{subjecterror}}</p>
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
            <p class="error">{{impressionerror}}</p>
          </div>
        </div>
        <div>
          <textarea v-model="impression" @blur="impressionBlur()"></textarea>
        </div>
      </div>
    </div>

    <div class="ischeckedArea">
      <div class="textcenter">
        <div>当社プライバシーポリシーに</div>
        <div>同意頂ける場合は「同意する」に</div>
        <div>チェックを付けてください</div>
      </div>
      <input
        type="checkbox"
        name="agreement"
        id="agreement"
        v-model="ischecked"
        class="checkbox"
      />
      <label for="agreement">同意する</label>
    </div>
    <h4 class="errortext bottom">{{error}}</h4>
  </form>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "textareaComp",
  data() {
    return {
      //エラーメッセージ
      nameerror: "",
      furiganaerror: "",
      emailerror: "",
      checkemailerror: "",
      subjecterror: "",
      impressionerror: ""
    };
  },
  //inputタグから離れた時に入力の値が正しいかを判定
  methods: {
    surnameBlur() {
      if (this.surname == false && this.name == false) {
        this.nameerror = "未入力になってます";
      } else {
        this.nameerror = "";
      }
    },
    nameBlur() {
      if (this.surname == false && this.name == false) {
        this.nameerror = "未入力になってます";
      } else {
        this.nameerror = "";
      }
    },
    surnamefuriganaBlur() {
      const reg = /^[あ-ん゛゜ぁ-ぉゃ-ょー「」、]+/;
      if (!reg.test(this.surnamefurigana)) {
        return (this.furiganaerror = "全角ひらがな以外が入力されています");
      } else {
        return (this.furiganaerror = "");
      }
    },
    furiganaBlur() {
      const reg = /^[あ-ん゛゜ぁ-ぉゃ-ょー「」、]+/;
      if (!reg.test(this.furigana)) {
        this.furiganaerror = "全角ひらがな以外が入力されています";
      } else {
        this.furiganaerror = "";
      }
    },
    emailBlur() {
      const reg = /^\S+@\S+\.\S+$/;
      if (!reg.test(this.email) || this.email == false) {
        this.emailerror = "「メールアドレス」は正しい書式で記入してください。";
      } else {
        this.emailerror = "";
      }
    },
    checkemailBlur() {
      if (this.email !== this.checkemail) {
        this.checkemailerror =
          "「メールアドレス」と確認用メールアドレスが一致しません。";
      } else {
        this.checkemailerror = "";
      }
    },
    subjectBlur() {
      if (this.subject == false) {
        this.subjecterror = "未入力になってます";
      } else {
        this.subjecterror = "";
      }
    },
    impressionBlur() {
      if (this.impression == false) {
        this.impressionerror = "未入力になってます";
      } else {
        this.impressionerror = "";
      }
    }
  },

  computed: {
    //storeに値を送信
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
    surnamefurigana: {
      get() {
        return this.$store.state.surnamefurigana;
      },
      set(value) {
        this.$store.commit("updateSurnameFurigana", value);
      }
    },
    furigana: {
      get() {
        return this.$store.state.furigana;
      },
      set(value) {
        this.$store.commit("updateFurigana", value);
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
    checkemail: {
      get() {
        return this.$store.state.checkemail;
      },
      set(value) {
        this.$store.commit("updateCheckemail", value);
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
    // storeから値を受け取る
    ...mapGetters("Textarea", {
      error: "getError"
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.errortext {
  text-align: center;
  color: red;
}
.customertext {
  text-align: center;
  margin-bottom: 30px;
}
.note {
  color: grey;
}
.margin {
  margin: 30px 0px 10px 0px;
}

.box {
  padding: 2px;
  margin-right: 3px;
  background: #000;
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

.nameinput {
  padding: 10px;
  font-size: 15px;
  background: #f5f5f5;
  border: none;
}

.postnumber1input {
  padding: 10px;
  font-size: 15px;
  background: #f5f5f5;
  border: none;
}
.postnumber2input {
  padding: 10px;
  font-size: 15px;
  background: #f5f5f5;
  border: none;
}

.inputStyle {
  padding: 10px;
  font-size: 15px;
  background: #f5f5f5;
  border: none;
}
textarea {
  font-size: 100%;
  font-size: 15px;
  background: #f5f5f5;
  border: none;
}
select {
  padding: 10px;
  font-size: 15px;
  background: none transparent;
  -webkit-appearance: button;
  background: #f5f5f5;
  border: none;
}
.error {
  color: red;
  font-size: 13px;
}
.emailerror {
  font-size: 12px;
}
.checkemailerror {
  font-size: 11px;
}
.ischeckedArea {
  margin: 30px;
  text-align: center;
}
.checkbox {
  margin: 20px 0px;
}

form {
  margin: 35px;
}
.customertext {
  margin-top: 50px;
}

.note {
  font-size: 10px;
}
.namemargin,
.selectedmargin {
  margin: 0px 0px 10px 0px;
}

.nameinput {
  width: 130px;
}
.postnumber1input {
  width: 80px;
}
.postnumber2input {
  width: 158px;
}

.inputStyle {
  width: 282px;
}
textarea {
  width: 296px;
  height: 250px;
}
select {
  width: 300px;
}

@media screen and (min-width: 767px) {
  /*ウィンドウ幅が767px以上の場合に適用*/

  .namemargin,
  .selectedmargin {
    margin: 30px 0px 10px 0px;
  }

  .customertext {
    margin-top: 50px;
  }

  .note {
    font-size: 12px;
  }

  .nameArea,
  .furiganaArea,
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

  .nameinput {
    width: 300px;
  }

  .postnumber1input {
    width: 230px;
  }
  .postnumber2input {
    width: 350px;
  }

  .inputStyle {
    width: 628px;
  }
  textarea {
    width: 645px;
    height: 250px;
  }
  select {
    width: 650px;
  }
  .bottom {
    margin: 40px;
    font-size: 18px;
  }
  .error {
    color: red;

    font-size: 13px;
  }
}
</style>
