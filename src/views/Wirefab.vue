<template>
    <v-app>
        <v-content>
            <v-container>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                <v-row>
                    <!-- 前駆体直径記入フォーム -->
                    <v-col class="align-self-center d-flex">
                        <v-text-field
                            v-model="predia"
                            label="Precursor diameter"
                            :rules="validrule"
                            required
                        ></v-text-field>
                        <div class="align-self-center pa-5"> (mm) </div>
                    </v-col>
                </v-row>
                <!-- 前駆体長さ記入フォーム -->
                <v-row>
                    <v-col class="align-self-center d-flex">
                        <v-text-field
                            v-model="prelen"
                            label="Precursor length"
                            :rules="validrule"
                            required
                        ></v-text-field>
                        <div class="align-self-center pa-5"> (mm) </div>
                    </v-col>
                </v-row>
                <!-- 伸線後直径記入フォーム -->
                <v-row>
                    <v-col class="align-self-center d-flex">
                        <v-text-field
                            v-model="fabdia"
                            label="Precursor length"
                            :rules="validrule"
                            required
                        ></v-text-field>
                        <div class="align-self-center pa-5"> (mm) </div>
                    </v-col>
                </v-row>
                </v-form>
                <!-- 送信ボタン -->
                <v-row >
                    <v-col class="d-flex">
                        <v-btn 
                            color="success"
                            :disabled="!valid"
                            :loading="loading"
                            @click="pData"
                            > Submit </v-btn>
                    </v-col>
                </v-row>
                <v-dialog
                    v-model="dialog"
                    persistent :overlay="false"
                    max-width="500px"
                    transition="dialog-transition"
                >
                    <v-card>
                        <v-card-title primary-title>
                            RESLT
                        </v-card-title>
                        <v-card-text>
                            The length of the wire after fabrication is about
                            <span class="title">{{ fablen }}</span> mm !
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions>
                            <v-spacer></v-spacer>   
                            <v-btn
                                @click="dialog=false">Back
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-container>
        </v-content>
    </v-app>
</template>
<script>
import axios from 'axios'

export default {
    data: () => ({
        valid: true,
        dialog:  false,
        loading:  false,
        predia: '', /** 前駆体直径 */
        prelen: '', /** 前駆体長さ */
        fabdia: '', /** 伸線後直径 */
        fablen: '', /** 芯線後長さ APIから返ってくるデータ */
        /** バリデーションのルール */
        validrule: [
            v => !!v || 'Enter !',
            v => !!Number(v) || 'Enter number !' /** 数値のみ */
        ],

    }),
    methods: {
        pData () {
            const data = {
                "predia": this.predia,
                "prelen": this.prelen,
                "fabdia": this.fabdia,
            }
            /** if (this.validate() == undefined) */
            /** Post json data to API server */
            if (this.$refs.form.validate()){
            axios.post('/', data)
            .then((response) => {
                this.dialog = true
                this.loading = false
                this.fablen = response.data.Fablen
                console.log(this.validate())
                console.log(response)

            })}

        },
        validate(){
            this.$refs.form.validate()
        }
    }
}
</script>