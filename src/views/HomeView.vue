<template>
    <section class="HomeViewProducts">
        <div class="HomeViewProducts-filters">
            <v-select
                ref="select"
                class="HomeViewProducts-filtersSelect"
                :options="dataSelectBrand"
                label="label"
                :reduce="country => country.value"
                placeholder="Бренд"
                v-on:update:modelValue="getFilterProductList"
                v-model="selectedBrand"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes" class="HomeViewProducts-filtersSelectIndicator"></span>
                </template>
            </v-select>
            <v-select
                class="HomeViewProducts-filtersSelect"
                :options="dataSelectPrice"
                label="label"
                :reduce="country => country.value"
                placeholder="Цена"
                v-on:update:modelValue="getFilterProductList"
                v-model="selectedPrice"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes" class="HomeViewProducts-filtersSelectIndicator"></span>
                </template>
            </v-select>
            <v-select
                class="HomeViewProducts-filtersSelect"
                :options="dataSelectDefault"
                label="label"
                :reduce="country => country.value"
                placeholder="Для кого"
                v-on:update:modelValue="getFilterProductList"
                v-model="selectedForWhom"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes" class="HomeViewProducts-filtersSelectIndicator"></span>
                </template>
            </v-select>
            <v-select
                class="HomeViewProducts-filtersSelect"
                :options="dataSelectDefault"
                label="label"
                :reduce="country => country.value"
                placeholder="Коллекция"
                v-on:update:modelValue="getFilterProductList"
                v-model="selectedCollection"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes" class="HomeViewProducts-filtersSelectIndicator"></span>
                </template>
            </v-select>
            <v-select
                class="HomeViewProducts-filtersSelect"
                :options="dataSelectDefault"
                label="label"
                :reduce="country => country.value"
                placeholder="Сезон"
                v-on:update:modelValue="getFilterProductList"
                v-model="selectedSeason"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes" class="HomeViewProducts-filtersSelectIndicator"></span>
                </template>
            </v-select>
            <v-select
                class="HomeViewProducts-filtersSelect"
                :options="dataSelectDefault"
                label="label"
                :reduce="country => country.value"
                placeholder="Событие"
                v-on:update:modelValue="getFilterProductList"
                v-model="selectedEvent"
            >
                <template #open-indicator="{ attributes }">
                    <span v-bind="attributes" class="HomeViewProducts-filtersSelectIndicator"></span>
                </template>
            </v-select>
        </div>
        <div class="HomeViewProducts-list">
            <RouterLink :to="'/products/' + item.id" class="HomeViewProducts-listItem" v-for="(item, index) in productsList" :key="index">
                <div class="HomeViewProducts-listItemPreview">
                    <img v-lazy="item.image" :alt="item.title" />
                </div>
                <div class="HomeViewProducts-listItemCategory">{{ item.product_type }}</div>
                <div class="HomeViewProducts-listItemTitle">{{ item.title }}</div>
                <div class="HomeViewProducts-listItemPrice">{{ formatPrice(item.price) }} ₽</div>
            </RouterLink>
        </div>
        <button class="HomeViewProducts-more" @click="getShowMoreProducts" v-if="isShowMoreProducts">Показать ещё</button>
    </section>
    <section class="HomeViewDesc">
        <div class="HomeViewDesc-text" :class="{ isAccordionShow }">
            <div class="HomeViewDesc-textAccordion">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.</p>
            </div>
            <transition
                name="accordion"
                @before-enter="accordionBeforeEnter"
                @before-leave="accordionBeforeLeave"
                @enter="accordionEnter"
                @leave="accordionLeave"
            >
                <div class="HomeViewDesc-textAccordion more" v-show="isAccordionShow">
                    <div class="HomeViewDesc-textAccordionContent">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, lorem eu commodo porttitor erat. Amet mauris cursus bibendum in egestas. Nulla porttitor amet quam elit, mauris. Tortor egestas dignissim augue suspendisse rutrum pretium lobortis dolor. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed. Commodo sagittis at amet faucibus faucibus id. Bibendum placerat convallis gravida eu quisque et augue. Sed dignissim amet ut vitae at ornare sed.</p>
                    </div>
                </div>
            </transition>
            <button class="HomeViewDesc-textToggle" @click="accordionToggle">{{ isAccordionShow ? 'Свернуть' : 'Читать полностью' }}</button>
        </div>
        <div class="HomeViewDesc-icons">
            <div class="HomeViewDesc-iconsItem item1">
                <div class="HomeViewDesc-iconsItemSvg">
                    <icon name="delivery" :size="70" />
                </div>
                <div class="HomeViewDesc-iconsItemLabel">Бесплатная доставка</div>
            </div>
            <div class="HomeViewDesc-iconsItem item2">
                <div class="HomeViewDesc-iconsItemSvg">
                    <icon name="list" :size="70" />
                </div>
                <div class="HomeViewDesc-iconsItemLabel">Индивидуальный дизайн</div>
            </div>
            <div class="HomeViewDesc-iconsItem item3">
                <div class="HomeViewDesc-iconsItemSvg">
                    <icon name="ribbon-design" :size="70" />
                </div>
                <div class="HomeViewDesc-iconsItemLabel">Бесплатная примерка</div>
            </div>
            <div class="HomeViewDesc-iconsItem item4">
                <div class="HomeViewDesc-iconsItemSvg">
                    <icon name="jewelry" :size="70" />
                </div>
                <div class="HomeViewDesc-iconsItemLabel">Личный подход</div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue';
import { RouterLink } from 'vue-router';
import Icon from '@/components/ui/icons/icon.vue';

const axios = inject('$api');

const dataSelectBrand = [{ label: 'Тест', value: { product_type: 'Cult Products' } }];
const dataSelectPrice = [{ label: '20 000', value: { price: '20000' } }];
const dataSelectDefault = [{ label: 'Тест', value: { test: 'test' } }];

const page = ref(1);
const limit = ref(10);
const productsList = ref([]);
const isShowMoreProducts = ref(true);
function getProductList (params, isFilter = false) {
    axios.get('/products', {
        params
    })
        .then(({data}) => {
            if (data && data.length > 0) {
                if (isFilter) {
                    productsList.value =  [ ...data ];
                    isShowMoreProducts.value = data.length >= limit.value;
                } else {
                    productsList.value =  [ ...productsList.value, ...data ];
                }

                isShowMoreProducts.value = data.length >= limit.value;
            } else {
                isShowMoreProducts.value = false;
            }
        })
}
getProductList({ _limit: limit.value, _page: page.value });

const selectedBrand = ref('');
const selectedPrice = ref('');
const selectedForWhom = ref('');
const selectedCollection = ref('');
const selectedSeason = ref('');
const selectedEvent = ref('');
function getFilterProductList (filterValue) {
    page.value = 1;

    let params = {
        _limit: 10,
        _page: 1
    };

    if (filterValue) {
        params = { ...params, ...filterValue  };
    }

    getProductList(params, true);
}

function getShowMoreProducts () {
    getProductList({ _limit: limit.value, _page: ++page.value });
}

function formatPrice (price) {
    return new Intl.NumberFormat("ru").format(price)
}

const isAccordionShow = ref(false);
const accordionToggle = () => {
    isAccordionShow.value = !isAccordionShow.value;
}
const accordionBeforeEnter = (el) => {
    el.style.height = '0';
}
const accordionBeforeLeave = (el) => {
    el.style.height = el.scrollHeight + 'px';
}
const accordionEnter = (el) => {
    el.style.height = el.scrollHeight + 'px';
}
const accordionLeave = (el) => {
    el.style.height = '0';
}
</script>

<style lang="less" scoped>
@r: .HomeView;

@{r} {
    &Products {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 1140px;
        margin: 0 auto 150px;

        @media @m-tablet {
            width: @container-tablet;
        }

        @media @m-mobile {
            width: @container-mobile;
            margin: 0 auto 75px;
        }

        &-filters {
            display: flex;
            justify-content: space-between;
            width: 100%;
            margin-bottom: 60px;

            @media @m-tablet {
                flex-wrap: wrap;
                margin-bottom: 30px;
            }

            &Select {
                width: 160px;
                border-bottom: 1px solid @gray-3;

                @media @m-tablet {
                    width: 216px;
                    margin-bottom: 30px;
                }

                @media @m-mobile {
                    width: 100%;
                }

                &Indicator {
                    width: 0;
                    height: 0;
                    border-left: 6px solid transparent;
                    border-right: 6px solid transparent;
                    border-top: 8px solid @gray-2;
                }
            }
        }

        &-list {
            display: flex;
            flex-wrap: wrap;
            width: 100%;

            &Item {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 350px;
                margin: 0 15px;
                padding: 35px;
                text-decoration: none;

                @media @m-tablet {
                    width: 324px;
                    padding: 35px 22px;
                }

                @media @m-mobile {
                    width: 100%;
                    margin: 0;
                    padding: 0;
                }

                &:not(:last-child) {
                    @media @m-mobile {
                        margin-bottom: 30px;
                    }
                }

                &:hover {
                    @{r}Products-listItemPreview img {
                        transform: scale(1.1);
                    }
                }

                &Preview {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 280px;
                    height: 220px;
                    user-select: none;
                    overflow: hidden;

                    @media @m-mobile {
                        width: 100%;
                        max-width: 250px;
                        height: 180px;
                    }

                    img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        transition: transform @e-hover @d-hover;
                    }
                }

                &Category {
                    margin-top: 25px;
                    text-align: center;
                    .typoNormalLarge();
                }

                &Title {
                    margin-top: 10px;
                    text-align: center;
                    .typoH2();
                }

                &Price {
                    display: inline-block;
                    margin: 15px auto 0;
                    padding: 9px 19px;
                    color: white;
                    background-color: @gray-2;
                    border: 1px solid white;
                }
            }
        }

        &-more {
            margin-top: 60px;
            padding: 14px 34px;
            color: white;
            text-transform: uppercase;
            background-color: @gray-2;
            border: 1px solid white;
            transition: opacity @e-hover @d-hover;
            .typoH4(@lineHeight: 21px);

            &:hover {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
            }
        }
    }

    &Desc {
        display: flex;
        width: 920px;
        margin: 0 auto 150px;

        @media @m-tablet {
            flex-wrap: wrap;
            justify-content: center;
            width: @container-tablet;
        }

        @media @m-mobile {
            width: @container-mobile;
            margin: 0 auto 75px;
        }

        &-text {
            position: relative;
            align-self: self-start;
            width: 540px;
            margin-right: 103px;
            padding-bottom: 25px;

            @media @m-tablet {
                width: 100%;
                margin-right: 0;
                margin-bottom: 60px;
            }

            &:after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(180deg, rgba(249, 249, 249, 0) 0%, #F9F9F9 82.29%);
                transition: opacity @e-hover @d-hover;
            }

            &.isAccordionShow {
                &:after {
                    opacity: 0;
                }
            }

            &Accordion {
                overflow: hidden;
                transition: height @e-hover @d-hover;
                .typoNormalLarge();

                p {
                    &:not(:last-child) {
                        margin-bottom: 25px;
                    }
                }

                &Content {
                    padding: 25px 0;
                }
            }

            &Toggle {
                position: absolute;
                bottom: 0;
                left: 0;
                z-index: 10;
                border-bottom: 1px dashed @gray-2;
                color: @gray-2;
                text-transform: uppercase;
                transition: opacity @e-hover @d-hover;
                .typoH4();

                &:hover {
                    opacity: 0.8;
                }

                &:active {
                    opacity: 0.6;
                }
            }
        }

        &-icons {
            display: flex;
            flex-wrap: wrap;
            align-self: self-start;
            justify-content: space-between;
            width: 277px;

            &Item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                width: 107px;
                margin-bottom: 30px;

                &Label {
                    margin-top: 15px;
                    .typoNormalLarge();
                }

                &Svg {
                    width: 70px;
                }
            }
        }
    }
}
</style>
