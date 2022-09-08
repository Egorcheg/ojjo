<template>
    <footer class="LayoutsFooter">
        <div class="LayoutsFooter-row">
            <div class="LayoutsFooter-col">
                <div class="LayoutsFooter-colHeader">
                    <h3 class="LayoutsFooter-colHeaderTitle">Полезные ссылки</h3>
                </div>
                <div class="LayoutsFooter-colBody">
                    <nav class="LayoutsFooter-nav">
                        <ul class="LayoutsFooter-navList">
                            <li class="LayoutsFooter-navListItem">
                                <RouterLink to="/delivery" class="LayoutsFooter-navListItemLink">Доставка</RouterLink>
                            </li>
                            <li class="LayoutsFooter-navListItem">
                                <RouterLink to="/payment" class="LayoutsFooter-navListItemLink">Оплата</RouterLink>
                            </li>
                            <li class="LayoutsFooter-navListItem">
                                <RouterLink to="/actions" class="LayoutsFooter-navListItemLink">Акции</RouterLink>
                            </li>
                            <li class="LayoutsFooter-navListItem">
                                <RouterLink to="/privacy-policy" class="LayoutsFooter-navListItemLink">Политика конфиденциальности</RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div class="LayoutsFooter-col">
                <div class="LayoutsFooter-colHeader">
                    <h3 class="LayoutsFooter-colHeaderTitle">Оплата</h3>
                </div>
                <div class="LayoutsFooter-colBody">
                    <div class="LayoutsFooter-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    </div>
                    <div class="LayoutsFooter-logos">
                        <div class="LayoutsFooter-logosItem">

                        </div>
                        <div class="LayoutsFooter-logosItem">

                        </div>
                    </div>
                </div>
            </div>
            <div class="LayoutsFooter-col">
                <div class="LayoutsFooter-colHeader">
                    <h3 class="LayoutsFooter-colHeaderTitle">Контакты</h3>
                </div>
                <div class="LayoutsFooter-colBody">
                    <ul class="LayoutsFooter-navList icons">
                        <li class="LayoutsFooter-navListItem icon">
                            <a href="tel:+78122345655" class="LayoutsFooter-navListItemLink"><icon name="phone" :size="20" color="#333333" /> 8 (812) 234-56-55</a>
                        </li>
                        <li class="LayoutsFooter-navListItem icon">
                            <a href="tel:+78122345655" class="LayoutsFooter-navListItemLink"><icon name="phone" :size="20" color="#333333" /> 8 (812) 234-56-55</a>
                        </li>
                        <li class="LayoutsFooter-navListItem icon">
                            <a href="mailto:ojjo@ojjo.ru" class="LayoutsFooter-navListItemLink"><icon name="mail" :size="20" color="#333333" /> ojjo@ojjo.ru</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="LayoutsFooter-col">
                <div class="LayoutsFooter-colHeader">
                    <h3 class="LayoutsFooter-colHeaderTitle">Социальные сети</h3>
                </div>
                <div class="LayoutsFooter-colBody">
                    <div class="LayoutsFooter-text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    </div>
                    <div class="LayoutsFooter-social">
                        <a href="#" target="_blank" rel="nofollow" class="LayoutsFooter-socialItem">
                            <icon name="youtube" :size="26" color="#333333" />
                        </a>
                        <a href="#" target="_blank" rel="nofollow" class="LayoutsFooter-socialItem">
                            <icon name="vk" :size="24" color="#333333" />
                        </a>
                        <a href="#" target="_blank" rel="nofollow" class="LayoutsFooter-socialItem">
                            <icon name="facebook" :size="26" color="#333333" />
                        </a>
                        <a href="#" target="_blank" rel="nofollow" class="LayoutsFooter-socialItem">
                            <icon name="telegram" :size="24" color="#333333" />
                        </a>
                        <a href="#" target="_blank" rel="nofollow" class="LayoutsFooter-socialItem">
                            <icon name="etsy" :size="16" color="#333333" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="LayoutsFooter-row border">
            <div class="LayoutsFooter-col fluid">
                <span class="LayoutsFooter-text">(c) 2020 OJJO jewelry</span>
                <span class="LayoutsFooter-text">Договор публичной оферты</span>
                <span class="LayoutsFooter-text">Контрагентам</span>
                <a href="#" target="_blank" rel="nofollow" class="LayoutsFooter-text text-underline">Сделано Figma.info</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import Icon from '@/components/ui/icons/icon.vue'
</script>

<style lang="less" scoped>
@r: .LayoutsFooter;

@{r} {
    width: @container-desktop;
    margin: 0 auto;
    padding-top: 80px;

    @media @m-tablet {
        width: @container-tablet;
        padding-top: 50px;
    }

    @media @m-mobile {
        width: @container-mobile;
    }

    &-row {
        display: flex;
        justify-content: space-between;

        @media @m-tablet {
            flex-wrap: wrap;
        }

        &:not(:last-child) {
            margin-bottom: 60px;

            @media @m-mobile {
                margin-bottom: 30px;
            }
        }

        &.border {
            padding: 20px 0;
            border-top: 1px solid @gray-2;
        }
    }

    &-col {
        width: 255px;

        @media @m-tablet {
            width: calc(50% - 15px);
            margin-top: 30px;
        }

        @media @m-mobile {
            width: 100%;
            margin-top: 15px;
        }

        &.fluid {
            display: flex;
            justify-content: space-between;
            width: 100%;

            @media @m-mobile {
                flex-direction: column;
            }
        }

        &Header {
            margin-bottom: 30px;
            padding-bottom: 10px;
            border-bottom: 1px solid @gray-2;
            
            &Title {
                text-transform: uppercase;
                .typoH4();
            }
        }
    }
    
    &-nav {
        &List {
            &.icons {
                @{r}-navList {
                    &ItemLink {
                        padding-left: 40px;
                    }
                }
            }

            &Item {
                &:not(:last-child) {
                    margin-bottom: 15px;
                }

                &Link {
                    position: relative;
                    display: inline-flex;
                    align-items: center;
                    text-decoration: none;
                    transition: opacity @e-hover @d-hover;

                    &:hover {
                        opacity: 0.8;
                    }

                    &:active {
                        opacity: 0.6;
                    }

                    svg {
                        position: absolute;
                        left: 0;
                        width: 26px;
                        height: 26px;
                    }
                }
            }
        }
    }

    &-social {
        display: flex;
        margin-top: 23px;

        &Item {
            display: flex;
            align-items: center;
            width: 24px;
            height: 24px;
            transition: opacity @e-hover @d-hover;

            &:hover {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
            }

            &:not(:last-child) {
                margin-right: 20px;
            }
        }
    }

    &-text {
        &:not(:last-child) {
            @media @m-mobile {
                margin-bottom: 5px;
            }
        }
    }
}
</style>
