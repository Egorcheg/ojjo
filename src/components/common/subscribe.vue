<template>
    <section class="CommonSubscribe">
        <div class="CommonSubscribe-header">
            <h3 class="CommonSubscribe-headerSubTitle">Полезные советы и персональные предложения</h3>
            <h2 class="CommonSubscribe-headerTitle">Эксклюзивная рассылка</h2>
        </div>
        <div class="CommonSubscribe-body">
            <ul class="CommonSubscribe-bodyList">
                <li class="CommonSubscribe-bodyListItem"><icon name="subscribe-arrow" :size="14" /> Личный менеджер</li>
                <li class="CommonSubscribe-bodyListItem"><icon name="subscribe-arrow" :size="14" /> Доставка и оформление</li>
                <li class="CommonSubscribe-bodyListItem"><icon name="subscribe-arrow" :size="14" /> Индивидуальный дизайн</li>
            </ul>
            <div class="CommonSubscribe-bodySubscribe">
                <form class="CommonSubscribe-bodySubscribeForm" v-if="!isSendForm">
                    <input type="text" class="CommonSubscribe-bodySubscribeFormInput" v-model="email" :class="{ error: isEmailError }" placeholder="Ваш e-mail" />
                    <button class="CommonSubscribe-bodySubscribeFormSubmit" @click="sendForm">Отправить</button>
                </form>
                <div class="CommonSubscribe-bodySubscribeSuccess" v-else>
                    <div class="CommonSubscribe-bodySubscribeSuccessText">
                        {{ successFormMessage }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref, inject} from 'vue';
import Icon from '@/components/ui/icons/icon.vue';

let validRegexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const email = ref('');
const isEmailError = ref(false);
const isSendForm = ref(false);
const successFormMessage = ref('');

const axios = inject('$api');

const sendForm = () => {
    event.preventDefault();
    isEmailError.value = false;

    if (!email.value.match(validRegexEmail)) {
        isEmailError.value = true;
        return;
    }

    axios.post('/subscribe', {
            email: email.value
        })
        .then(({ data }) => {
            successFormMessage.value = data.successText;
            isSendForm.value = data.status;
        })
        .catch(() => {
            console.log('error');
        });
};
</script>

<style lang="less" scoped>
@r: .CommonSubscribe;

@{r} {
    display: grid;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 468px;
    padding: 100px 0 120px;
    background-image: url('@/assets/pics/subscribe/bg-pattern.png');
    background-size: 28px 28px;
    background-repeat: repeat;

    @media @m-mobile {
        padding: 50px 35px 60px;
    }

    &-header {
        text-align: center;

        &SubTitle {
            margin-bottom: 15px;
            color: white;
            .typoH3();
        }

        &Title {
            color: white;
            .typoH1();
        }
    }

    &-body {
        display: inline-flex;
        margin-top: 60px;

        @media @m-tablet {
            flex-direction: column;
        }

        &List {
            margin-right: 80px;

            @media @m-tablet {
                margin-right: 0;
            }

            &Item {
                color: white;
                .typoH4();

                letter-spacing: 0;

                &:not(:last-child) {
                    margin-bottom: 15px;
                }

                svg {
                    width: 17px;
                    height: 17px;
                    margin-right: 20px;
                }
            }
        }

        &Subscribe {
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 453px;
            min-height: 118px;
            padding: 14px 15px;
            border: 1px solid white;

            @media @m-tablet {
                display: block;
                margin-top: 30px;
            }

            @media @m-mobile {
                width: 100%;
                min-width: 100%;
            }

            &Form {
                display: block;
                height: 100%;
                padding: 20px 22px;
                background-color: white;

                &Input {
                    width: 200px;
                    margin-right: 15px;
                    padding: 15px 20px 14px;
                    color: @gray-2;
                    border: 1px solid @gray-3;
                    transition: border-color @e-hover @d-hover;
                    .typoInput();

                    &::placeholder {
                        text-transform: uppercase;
                    }

                    &:focus {
                        outline: none;
                        box-shadow: none;
                    }

                    @media @m-mobile {
                        width: 100%;
                        margin-right: 0;
                        margin-bottom: 15px;
                    }

                    &.error {
                        border-color: @red;
                    }
                }

                &Submit {
                    padding: 14.5px 35px;
                    text-transform: uppercase;
                    background-color: @gray-2;
                    border: 1px solid white;
                    color: white;
                    transition: opacity @e-hover @d-hover;
                    user-select: none;
                    .typoInput();

                    &:hover {
                        opacity: 0.8;
                    }

                    &:active {
                        opacity: 0.6;
                    }

                    @media @m-mobile {
                        width: 100%;
                        text-align: center;
                    }
                }
            }

            &Success {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100%;
                width: 100%;

                &Text {
                    color: white;
                    .typoH3();
                }
            }
        }
    }
}
</style>
