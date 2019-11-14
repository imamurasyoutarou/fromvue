import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

const Form = {
    namespaced: true,
    state: {
        button: ["確認", "送信", "戻る"],
        editbutton: "編集",
        component: ["TextareaComp", "StringComp"]
    },
    mutations: {},
    actions: {
        buttonAction({ commit, state, rootState }) {
            console.log("buttonAction")
            if (rootState.errorFlag &&
                rootState.errorFlag2 &&
                rootState.errorFlag3 &&
                rootState.errorFlag4 &&
                rootState.errorFlag5) {
                commit('setStepCount', null, { root: true })//rootへのアクセス
            }
            if (rootState.stepCount == 2) {
                //お問い合わせ内容の送信
                console.log(rootState.name)
                console.log(rootState.firigana)
                console.log(rootState.company)
                console.log(rootState.email)
                console.log(rootState.postnumber1)
                console.log(rootState.postnumber2)
                console.log(rootState.prefectures)
                console.log(rootState.city)
                console.log(rootState.phone)
                console.log(rootState.subject)
                console.log(rootState.impression)
            } if (rootState.stepCount == 3) {
                //ページのリセット
                router.push('/')
                rootState.stepCount = 0
                rootState.impression = ''
                rootState.surname = ''
                rootState.name = ''
                rootState.surnamefirigana = ''
                rootState.company = ''
                rootState.email = ''
                rootState.postnumber1 = ''
                rootState.postnumber2 = ''
                rootState.prefectures = ''
                rootState.city = ''
                rootState.phone = ''
                rootState.subject = ''
                rootState.ischecked = false
                rootState.errorFlag = false
                rootState.errorFlag2 = false
                rootState.errorFlag3 = false
                rootState.errorFlag4 = false
                rootState.errorFlag5 = false
                rootState.ischecked = false
            }
        }, editbuttonAction({ commit, state, rootState }) {
            if (rootState.stepCount == 1) {
                commit('setDownCount', null, { root: true })
            }
        }

    },
    //ボタンの繊維
    getters: {
        getButton(state, getters, rootState) {
            return state.button[rootState.stepCount]
        },
        getComponent(state, getters, rootState) {
            return state.component[rootState.stepCount]
        },
        geteditButton(state, getters, rootState) {
            if (rootState.stepCount == 1) {
                return state.editbutton
            } else {
                return null
            }
        }, getCount(state, getters, rootState) {
            return rootState.stepCount
        }
    }
}

//ヘッダーの繊維
const Head = {
    state: {
        title: ["お問い合わせフォーム", "確認画面", "送信完了"]
    },
    mutations: {},
    actions: {},
    getters: {
        getTitle(state, getters, rootState) {
            return state.title[rootState.stepCount]
        }
    }
}

const Textarea = {
    namespaced: true,
    state: {
        errorMsg: "必須項目の入力漏れがあります",
    },
    getters: {
        getError(state, getters, rootState) {
            if (rootState.errorFlag &&
                rootState.errorFlag2 &&
                rootState.errorFlag3 &&
                rootState.errorFlag4 &&
                rootState.errorFlag5 &&
                rootState.errorFlag6 &&
                rootState.errorFlag7 &&
                rootState.ischecked) {
                return null
            } else {
                return state.errorMsg
            }
        }
    }
}

const String = {
    namespaced: true,//名前空間を有効にする
    getters: {
        getString(state, getters, rootState) {
            return rootState.impression
        },
        getSurName(state, getters, rootState) {
            return rootState.surname
        },
        getName(state, getters, rootState) {
            return rootState.name
        },
        getSurnameFirigana(state, getters, rootState) {
            return rootState.surnamefirigana
        },
        getFirigana(state, getters, rootState) {
            return rootState.firigana
        },
        getCompany(state, getters, rootState) {
            return rootState.company
        },
        getEmail(state, getters, rootState) {
            return rootState.email
        },
        getPostnumber1(state, getters, rootState) {
            return rootState.postnumber1
        },
        getPostnumber2(state, getters, rootState) {
            return rootState.postnumber2
        },
        getPrefectures(state, getters, rootState) {
            return rootState.prefectures
        },
        getCity(state, getters, rootState) {
            return rootState.city
        },
        getPhone(state, getters, rootState) {
            return rootState.phone
        },
        getSelected(state, getters, rootState) {
            return rootState.selected
        },
        getSubject(state, getters, rootState) {
            return rootState.subject
        },

    }
}


export default new Vuex.Store({
    state: {
        editbutton: null,
        stepCount: 0,
        impression: "",
        errorFlag: false,//trueなら通過
        errorFlag2: false,//trueなら通過
        errorFlag3: false,//trueなら通過
        errorFlag4: false,//trueなら通過
        errorFlag5: false,//trueなら通過
        errorFlag6: false,//trueなら通過
        errorFlag7: false,//trueなら通過
        name: '',
        surname: '',
        surnamefirigana: '',
        firigana: '',
        company: '',
        email: '',
        postnumber1: '',
        postnumber2: '',
        prefectures: '',
        city: '',
        phone: '',
        selected: '',
        subject: '',
        ischecked: false
    },
    mutations: {
        setStepCount(state) {
            console.log("rootsetStepCount")
            state.stepCount++
        },
        setDownCount(state) {
            console.log("rootsetDownCount")
            state.stepCount--
        },
        updateSurName(state, value) {
            state.surname = value
            if (state.surname) {
                state.errorFlag6 = true
            } else {
                state.errorFlag6 = false
            }
        },
        updateName(state, value) {
            state.name = value
            if (state.name) {
                state.errorFlag = true
            } else {
                state.errorFlag = false
            }
        },
        updateSurnameFirigana(state, value) {
            state.surnamefirigana = value
            if (state.surnamefirigana) {
                state.errorFlag7 = true
            } else {
                state.errorFlag7 = false
            }
        },
        updateFirigana(state, value) {
            state.firigana = value
            if (state.firigana) {
                state.errorFlag2 = true
            } else {
                state.errorFlag2 = false
            }
        },
        updateCompany(state, value) {
            state.company = value
        },
        updateEmail(state, value) {
            state.email = value
            if (state.email) {
                state.errorFlag3 = true
            } else {
                state.errorFlag3 = false
            }
        },
        updatePostnumber1(state, value) {
            state.postnumber1 = value
        },
        updatePostnumber2(state, value) {
            state.postnumber2 = value
        },
        updatePrefectures(state, value) {
            state.prefectures = value
        },
        updateCity(state, value) {
            state.city = value
        },
        updatePhone(state, value) {
            state.phone = value
        },
        updateSelected(state, value) {
            state.selected = value
        },
        updateSubject(state, value) {
            state.subject = value
            if (state.subject) {
                state.errorFlag4 = true
            } else {
                state.errorFlag4 = false
            }
        },
        updateImpression(state, value) {
            state.impression = value
            if (state.impression) {
                state.errorFlag5 = true
            } else {
                state.errorFlag5 = false
            }
        },
        updateisChecked(state, value) {
            state.ischecked = value
        }
    },
    modules: {
        Form,
        Head,
        Textarea,
        String,
    }
})
