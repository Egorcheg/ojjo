<template>
    <header class="CommonHeader">
        <div class="CommonHeader-container">
            <div class="CommonHeader-containerCol">
                <nav class="CommonHeader-nav">
                    <ul class="CommonHeader-navList">
                        <li class="CommonHeader-navListItem">
                            <RouterLink to="/test" class="CommonHeader-navListItemLink">Контрагентам</RouterLink>
                        </li>
                        <li class="CommonHeader-navListItem">
                            <RouterLink to="/test" class="CommonHeader-navListItemLink">Дизайнерам</RouterLink>
                        </li>
                        <li class="CommonHeader-navListItem">
                            <RouterLink to="/test" class="CommonHeader-navListItemLink">Вакансии</RouterLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="CommonHeader-logo">
                <img src="@/assets/pics/logo.svg" alt="" width="218" height="53"/>
            </div>
            <button class="CommonHeader-openMenu" @click="openMenu">
                <icon name="open-menu" size="50" color="#ffffff" class="CommonHeader-openMenuIcon" v-if="!isMobileMenuShow" />
                <icon name="close-menu" size="50" color="#ffffff" class="CommonHeader-openMenuIcon" v-else />
            </button>
            <div class="CommonHeader-containerCol">
                <label for="search" class="CommonHeader-search">
                    <icon name="search" :size="24" color="#ffffff" class="CommonHeader-searchIcon" />
                    <input id="search" type="text" class="CommonHeader-searchInput" placeholder="Поиск" />
                </label>
                <button class="CommonHeader-enter">Вход/Регистрация</button>
                <div class="CommonHeader-icons">
                    <button class="CommonHeader-iconsItem">
                        <icon name="profile" :size="24" color="#ffffff" class="CommonHeader-iconsItemIcon" />
                    </button>
                    <button class="CommonHeader-iconsItem">
                        <icon name="favorite" :size="18" color="#ffffff" class="CommonHeader-iconsItemIcon" />
                    </button>
                </div>
            </div>
        </div>

        <div class="CommonHeader-mobile" :class="{ show: isMobileMenuShow }" ref="mobileMenu">
            <nav class="CommonHeader-mobileNav">
                <ul class="CommonHeader-mobileNavList">
                    <li class="CommonHeader-mobileNavListItem">
                        <RouterLink to="/test" class="CommonHeader-mobileNavListItemLink">Контрагентам</RouterLink>
                    </li>
                    <li class="CommonHeader-mobileNavListItem">
                        <RouterLink to="/test" class="CommonHeader-mobileNavListItemLink">Дизайнерам</RouterLink>
                    </li>
                    <li class="CommonHeader-mobileNavListItem">
                        <RouterLink to="/test" class="CommonHeader-mobileNavListItemLink">Вакансии</RouterLink>
                    </li>
                    <li class="CommonHeader-mobileNavListItem">
                        <button class="CommonHeader-mobileNavListItemLink">Вход/Регистрация</button>
                    </li>
                </ul>
            </nav>
            <div class="CommonHeader-mobileIcons CommonHeader-icons">
                <button class="CommonHeader-iconsItem ">
                    <icon name="profile" :size="50" color="#ffffff" class="CommonHeader-iconsItemIcon" />
                </button>
                <button class="CommonHeader-iconsItem">
                    <icon name="favorite" :size="40" color="#ffffff" class="CommonHeader-iconsItemIcon" />
                </button>
            </div>
            <div class="CommonHeader-mobileSocial">
                <a href="#" target="_blank" class="CommonHeader-mobileSocialItem">
                    <icon name="youtube" :size="39" color="#ffffff" />
                </a>
                <a href="#" target="_blank" class="CommonHeader-mobileSocialItem">
                    <icon name="vk" :size="36" color="#ffffff" />
                </a>
                <a href="#" target="_blank" class="CommonHeader-mobileSocialItem">
                    <icon name="facebook" :size="40" color="#ffffff" />
                </a>
                <a href="#" target="_blank" class="CommonHeader-mobileSocialItem">
                    <icon name="telegram" :size="36" color="#ffffff" />
                </a>
                <a href="#" target="_blank" class="CommonHeader-mobileSocialItem">
                    <icon name="etsy" :size="24" color="#ffffff" />
                </a>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Icon from '@/components/ui/icons/icon.vue';

const isMobileMenuShow = ref(false);
const mobileMenu = ref(null);
function openMenu () {
    isMobileMenuShow.value = !isMobileMenuShow.value;
}
</script>

<style lang="less" scoped>
@r: .CommonHeader;

@{r} {
    width: 100%;
    height: 111px;
    background-color: @gray-2;

    @media @m-mobile {
        position: fixed;
        top: 0;
        left: 0;
        z-index: @z-header-mobile;
    }

    &-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: @container-desktop;
        height: 100%;
        margin: 0 auto;

        @media @m-tablet {
            width: @container-tablet;
        }

        @media @m-mobile {
            width: @container-mobile;
        }

        &Col {
            display: flex;
            align-items: center;

            @media @m-mobile {
                display: none;
            }
        }
    }

    &-nav {
        &List {
            display: flex;

            &Item {
                &:not(:last-child) {
                    margin-right: 40px;

                    @media @m-tablet {
                        margin-right: 20px;
                    }
                }
                
                &Link {
                    color: white;
                    text-decoration: none;
                    transition: opacity @e-hover @d-hover;
                    .typoNormal();
                    
                    &:hover {
                        opacity: 0.8;
                    }

                    &:active {
                        opacity: 0.6;
                    }
                }
            }
        }
    }

    &-logo {
        width: 216px;
        height: auto;

        @media @m-tablet {
            width: 160px;
        }

        @media @m-mobile {
            position: relative;
            z-index: @z-header-up-mobile-menu;
            width: 100%;
            max-width: 216px;
            margin-right: 40px;
        }

        img {
            width: 100%;
            height: auto;
        }
    }

    &-openMenu {
        display: none;

        @media @m-mobile {
            position: relative;
            z-index: @z-header-up-mobile-menu;
            display: block;
            width: 50px;
        }
    }

    &-search {
        position: relative;
        display: flex;
        align-items: center;
        width: 78px;
        height: 24px;
        margin-right: 40px;

        @media @m-tablet {
            display: none;
        }

        &Icon {
            position: absolute;
            width: 24px;
        }

        &Input {
            width: 100%;
            padding-left: 37px;
            color: white;
            background-color: transparent;
            border: none;

            &:focus {
                outline: none;
                border: none;
            }

            &::placeholder {
                color: white;
            }
        }
    }

    &-enter {
        margin-right: 40px;
        color: white;
        transition: opacity @e-hover @d-hover;
        .typoNormal();

        &:hover {
            opacity: 0.8;
        }

        &:active {
            opacity: 0.6;
        }

        @media @m-tablet {
            margin-right: 20px;
        }
    }

    &-icons {
        display: flex;
        align-items: center;

        &Item {
            width: 24px;
            transition: opacity @e-hover @d-hover;

            &:hover {
                opacity: 0.8;
            }

            &:active {
                opacity: 0.6;
            }

            &:not(:last-child) {
                margin-right: 25px;
            }

            &Icon {
                display: block !important;
            }
        }
    }

    &-mobile {
        position: fixed;
        top: 0;
        left: 0;
        z-index: @z-header-mobile-menu;
        display: none;
        width: 100%;
        height: 100%;
        background-color: @gray-2;
        transform: translateY(100%);
        transition: transform @e-hover @d-hover;

        @media @m-mobile {
            display: block;
        }

        &.show {
            transform: translateY(0);
        }

        &Nav {
            width: @container-mobile;
            margin: 142px auto 25px;
            padding-bottom: 35px;
            border-bottom: 1px solid white;

            &List {
                &Item {
                    &:not(:last-child) {
                        margin-bottom: 30px;
                    }

                    &Link {
                        color: white;
                        text-decoration: none;
                        .typoH3();
                    }
                }
            }
        }

        &Icons {
            width: @container-mobile;
            margin: 0 auto 25px;
            padding-bottom: 25px;
            border-bottom: 1px solid white;

            &Item {
                width: 50px;
            }
        }

        &Social {
            display: flex;
            width: @container-mobile;
            margin: 0 auto;

            &Item {
                display: flex;
                align-items: center;
                width: 39px;

                &:not(:last-child) {
                    margin-right: 20px;
                }
            }
        }
    }
}
</style>
