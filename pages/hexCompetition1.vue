<template>
    <div class="competition1">
        <section ref="pageSection">
            <!-- <client-only>
                <lottie-vue-player v-if="isLoadedImage" :src="`https://assets10.lottiefiles.com/packages/lf20_tzjfwgud.json`"
                    :theme="options.theme"
                    :player-size="options.playerSize"
                    :player-controls="true"
                    style="width: 100%; height:400px">
                </lottie-vue-player>
            </client-only> -->
            
            <header class="header">
                <div class="header__content">
                    <div>
                        <img class="header__logo" src="@/assets/img/hex_logo.png" alt="">
                    </div>
                    <div>
                        <ul class="header__list">
                            <li class="header__item">
                                關卡任務
                            </li>
                            <li class="header__item">
                                競賽說明
                            </li>
                            <li class="button header__item">
                                立即報名
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div v-show="!isLoadedImage" class="wand">
                <div class="wand__item" ref="wand"></div>
                <div class="wand__text">
                    努力加載中...
                </div>
            </div>
            <section v-show="isLoadedImage">
                <div class="covering" ref="coveringContainer">
                    <img class="covering__img covering__img__top" ref="coveringImage1" src="@/assets/img/paper_1.png"
                        alt="">
                    <img class="covering__img covering__img__down__left" ref="coveringImage2"
                        src="@/assets/img/paper_2.png" alt="">
                    <img class="covering__img covering__img__down__right" ref="coveringImage3"
                        src="@/assets/img/paper_3.png" alt="">
                </div>

                <div class="banner">
                    <div class="banner__content__wrapper">
                        <div class="banner__content__background"></div>
                        <div class="banner__content">
                            <div>
                                <div class="banner__title text-family-Garamond">
                                    THE F2E
                                    <span class="button">
                                        4th
                                    </span>
                                </div>
                                <div class="banner__subtitle">
                                    前端工程師和介面設計師，攜手合作拿獎金
                                </div>
                                <div class="banner__text">
                                    羨慕別人的酷酷網頁動畫？
                                    滿足不了同事的許願？
                                    動畫技能樹太雜無從下手？
                                </div>
                            </div>
                            <div
                                style="display: flex; align-items: end; justify-content: center; flex-direction: column;">
                                <div class="banner__information">
                                    <div>
                                        報名總人數 <span class="banner__number text-family-Garamond">1158</span>人
                                    </div>
                                    <div>
                                        個人賽人數 <span class="banner__number text-family-Garamond">1052</span>人
                                    </div>
                                    <div>
                                        團體賽人數 <span class="banner__number text-family-Garamond">41</span>人
                                    </div>
                                </div>
                            </div>
                            <div class="banner__label">
                                <img src="@/assets/img/label.png" alt="">
                            </div>
                        </div>
                        <div class="banner__hacker">
                            <img src="@/assets/img/hacker.png" ref="hacker" alt="">
                            <div class="banner_prize">
                                <span>
                                    個人獎
                                    <span class="text-family-Garamond banner_money">$3,000</span>
                                </span>
                                <span>
                                    團體獎
                                    <span class="text-family-Garamond banner_money">$10,000</span>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="game" ref="gameContainer">
                    <div class="list">
                        <div class="list__item list__item--introduction" style="margin-top: 4rem">
                            <div class="list__item__content" style="background-image: none;">
                                <div>
                                    <img src="@/assets/img/hexSchool.png" alt="">
                                    <div style="margin: 4rem 0px">
                                        年度最強合作，三大關卡來襲
                                    </div>
                                    <div class="list__item_divider" style="margin-bottom: 5px;"></div>

                                    <div class="list__item_divider"></div>
                                </div>

                            </div>
                        </div>
                        <div class="list__item">
                            <div class="list__item__title">
                                <div class="font-weight-bolder list__item__title__text">
                                    視差滾動 Parallax Scrolling
                                </div>
                                <div>
                                    <img src="@/assets/img/block_studio.png" alt="">
                                </div>
                            </div>
                            <div class="list__item__content">
                                <div class="list__item__detail">
                                    <div class="list__item__img">
                                        <img src="@/assets/img/parallax_scrolling.png" alt="">
                                    </div>
                                    <div style="flex: 1;">
                                        <div class="list__item_information">
                                            <div class="font-weight-bolder list__item__text">
                                                The F2E 活動網站設計
                                            </div>
                                            <div class="font-weight-bold list__item__description">
                                                請參考本屆官網的首頁視差滾動技巧，並請您重新 redesign 本頁面來設計。
                                            </div>
                                            <div class="list__item__button">
                                                <div class="button button-border button-brown">
                                                    關卡攻略
                                                </div>
                                                <div class="button">
                                                    投稿
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list__item">
                            <div class="list__item__title">
                                <div class="font-weight-bolder list__item__title__text">
                                    線上簽署 Canvas
                                </div>
                                <div>
                                    <img src="@/assets/img/kdan_mobile.png" alt="">
                                </div>
                            </div>
                            <div class="list__item__content">
                                <div class="list__item__detail">
                                    <div class="list__item__img">
                                        <img src="@/assets/img/pdf.png" alt="">
                                    </div>
                                    <div style="flex: 1;">
                                        <div class="list__item_information">
                                            <div class="font-weight-bolder list__item__text">
                                                今晚，我想來點點簽
                                            </div>
                                            <div class="font-weight-bold list__item__description">
                                                每次要 PDF 簽名都要列印出來再掃描好麻煩，自幹一個 Web 版本的簽名服務吧！
                                            </div>
                                            <div class="list__item__button">
                                                <div class="button button-border button-brown">
                                                    關卡攻略
                                                </div>
                                                <div class="button">
                                                    投稿
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list__item">
                            <div class="list__item__title">
                                <div class="font-weight-bolder list__item__title__text">
                                    Scrum JS draggable
                                </div>
                                <div>
                                    <img src="@/assets/img/titansoft.png" alt="">
                                </div>
                            </div>
                            <div class="list__item__content">
                                <div class="list__item__detail">
                                    <div class="list__item__img">
                                        <img src="@/assets/img/scrum.png" alt="">
                                    </div>
                                    <div style="flex: 1;">
                                        <div class="list__item_information">
                                            <div class="font-weight-bolder list__item__text">
                                                Scrum 新手村
                                            </div>
                                            <div class="font-weight-bold list__item__description">
                                                設計關卡內容與網頁互動效果，透過頁面關卡來呈現知識點，讓挑戰者藉由你設計的內容更了解 Scrum。
                                            </div>
                                            <div class="list__item__button">
                                                <div class="button button-border button-brown">
                                                    關卡攻略
                                                </div>
                                                <div class="button">
                                                    投稿
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="timeline">
                        <div class="section__title font-weight-bolder">
                            賽程時間
                        </div>
                        <ul class="timeline__mean">
                            <li class="timeline__item timeline__item--first">
                                <div class="timeline__item__title font-weight-normal">
                                    開始報名
                                </div>
                                <div class="timeline__dotted" style="background-color: #951205;"></div>
                                <div class="timeline_item__description">
                                    10/13(四) 早上 11:00
                                    <br>
                                    至 11/6(日) 晚上 23:59
                                </div>
                            </li>
                            <li class="timeline__item">
                                <div class="timeline__item__title font-weight-normal">
                                    開賽
                                </div>
                                <div class="timeline__dotted"></div>
                                <div class="timeline_item__description">
                                    UI組、團體組開賽 10/31
                                    <br>
                                    前端組開賽 11 /7
                                </div>
                            </li>
                            <li class="timeline__item">
                                <div class="timeline__item__title font-weight-normal">
                                    登陸作品
                                </div>
                                <div class="timeline__dotted"></div>
                                <div class="timeline_item__description">
                                    10/31(一) 中午 12:00
                                    <br>
                                    至11/28(一) 中午 12:00
                                </div>
                            </li>
                            <li class="timeline__item">
                                <div class="timeline__item__title font-weight-normal">
                                    線上直播
                                </div>
                                <div class="timeline__dotted"></div>
                                <div class="timeline_item__description">
                                    <br>
                                    11/3 至 11/24(每週四)

                                </div>
                            </li>
                        </ul>
                        <ul class="timeline__mean">
                            <li class="timeline__item timeline__item--first">
                                <div class="timeline__item__title font-weight-normal">
                                    初選
                                </div>
                                <div class="timeline__dotted"></div>
                                <div class="timeline_item__description">
                                    <br>
                                    12/05(五)
                                </div>
                            </li>
                            <li class="timeline__item">
                                <div class="timeline__item__title font-weight-normal">
                                    決選
                                </div>
                                <div class="timeline__dotted"></div>
                                <div class="timeline_item__description">
                                    <br>
                                    12/05(五)
                                </div>
                            </li>
                        </ul>
                        <div class="timeline__item__title font-weight-normal" style="padding:4rem 0px">
                            初選:將由六角學院前端、UI 評審進行第一波篩選，並於 12/5(五)公布初選佳作名單。
                            <br>
                            決選：由三大企業針對該企業主題進行入圍獎最後篩選，並於 12/23(五)公布企業得獎名單。
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="prize">
                        <div class="section__title font-weight-bolder" style="margin-bottom: 2rem;">
                            獎項
                        </div>
                        <ul class="list">
                            <li class="list_item">
                                <div class="list_item__img">
                                    <img src="@/assets/img/copper.png" alt="">
                                    <div class="list_item__money font-weight-bolder">
                                        $10,000 (3名)
                                    </div>
                                </div>

                                <div class="font-weight-normal">
                                    每個關卡各 1 組
                                </div>
                            </li>
                            <li class="list_item">
                                <div class="list_item__img">
                                    <img src="@/assets/img/gold.png" alt="">
                                    <div class="list_item__money font-weight-bolder">
                                        $3000 (6名)
                                    </div>
                                </div>

                                <div class="font-weight-normal">
                                    每個關卡各 2 名，設計 1 名、前端 1 名
                                </div>
                            </li>
                            <li class="list_item">
                                <div class="list_item__img">
                                    <img src="@/assets/img/silver.png" alt="">
                                    <div class="list_item__money font-weight-bolder">
                                        數位獎狀(60名)
                                    </div>
                                </div>
                                <div class="font-weight-normal">
                                    每個關卡個人組十位、團體組十組
                                </div>
                            </li>
                            <li class="list_item list_item--no-img">
                                <div class="font-weight-normal">
                                    以上皆提供完賽數位獎狀
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="container">
                    <div class="live">
                        <div :style="{ 'visibility': (isShowLiveDetailInformation) ? 'visible' : 'hidden' }">
                            <div class="section__title font-weight-bolder" style="margin-bottom: 2rem;">
                                各界大神直播分享
                            </div>
                            <div class="list">
                                <div class="list__item">
                                    <img src="@/assets/img/李明.gif" alt="">
                                    <div class="list__item__content">
                                        <div class="list__item__title font-weight-bolder">
                                            網站的動態趨勢
                                        </div>
                                        <div class="list__item__name font-weight-bolder">
                                            李明
                                            <br>
                                            版塊設計創辦人兼總監
                                        </div>
                                        <div class="list__item__time font-weight-bolder">
                                            11/03(四)20:00 ~ 21:30
                                        </div>
                                    </div>
                                </div>
                                <div class="list__item">
                                    <img src="@/assets/img/leo.gif" alt="">
                                    <div class="list__item__content">
                                        <div class="list__item__title font-weight-bolder">
                                            jQuery 也可以做到的互動效果
                                        </div>
                                        <div class="list__item__name font-weight-bolder">
                                            Leo
                                            <br>
                                            Angular Taiwan 傳教士
                                        </div>
                                        <div class="list__item__time font-weight-bolder">
                                            11/10(四)20:00 ~ 21:30
                                        </div>
                                    </div>
                                </div>
                                <div class="list__item">
                                    <img src="@/assets/img/邱繼緯.gif" alt="">
                                    <div class="list__item__content">
                                        <div class="list__item__title font-weight-bolder">
                                            網頁可以拖拖拉拉draggable.js 介紹
                                        </div>
                                        <div class="list__item__name font-weight-bolder">
                                            邱繼緯
                                            <br>
                                            前端工程師
                                        </div>
                                        <div class="list__item__time font-weight-bolder">
                                            11/17(四)20:00 ~ 21:30
                                        </div>
                                    </div>
                                </div>
                                <div class="list__item">
                                    <img src="@/assets/img/吳哲宇.gif" alt="">
                                    <div class="list__item__content">
                                        <div class="list__item__title font-weight-bolder">
                                            互動式網頁設計工程師該具備哪些技能？
                                        </div>
                                        <div class="list__item__name font-weight-bolder">
                                            吳哲宇
                                            <br>
                                            墨雨互動設計創辦人
                                        </div>
                                        <div class="list__item__time font-weight-bolder">
                                            11/24(四)20:00 ~ 21:30
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="live__button" v-if="!isShowLiveDetailInformation"
                            @click="isShowLiveDetailInformation = true">
                            <div>
                                <div class="live__button__title font-weight-bolder">
                                    意想不到的好康
                                </div>
                                <div class="live__button__text">
                                    <div class="font-weight-bolder ">
                                        請點擊
                                    </div>
                                    <div class="live__button__wand" ref="wand2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="background-color: white;">
                    <div class="container">
                        <div class="logo">
                            <div class="logo__item">
                                <img src="@/assets/img/jira.png" alt="">
                            </div>
                            <div class="logo__item">
                                <img src="@/assets/img/confluence.png" alt="">
                            </div>
                            <div class="logo__item">
                                <img src="@/assets/img/miro.png" alt="">
                            </div>
                            <div class="logo__item">
                                <img src="@/assets/img/dotted_sign.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="footer">
                    <div class="container">
                        <div class="footer__title font-weight-bolder">
                            贊助單位
                        </div>
                        <div class="list">
                            <div class="list__item">
                                <img src="@/assets/img/block_studio.png" alt="">
                            </div>
                            <div class="list__item">
                                <img src="@/assets/img/kdan_mobile.png" alt="">
                            </div>
                            <div class="list__item">
                                <img src="@/assets/img/titansoft.png" alt="">
                            </div>
                        </div>
                        <div class="footer__text font-weight-normal">
                            六角日報 © Code: Alex / Design: KT
                        </div>
                    </div>

                </footer>

            </section>
        </section>
        <star-cursor-effect></star-cursor-effect>
        <div class="scroll-tip-animation" ref="scrollTip" :style="{ 'display': (isPageAnimationFinish) ? 'none' : '' }">
        </div>


    </div>
</template>


<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@800&family=Noto+Sans+TC:wght@300;400;500;700&display=swap');

$textColor : #38241B;
$backgroundColor: #38241B;
$buttonColor: #951205;
$maxContentWidth: 1213px;
$headerHeight: 62px;
$fontSize: (
    1: 3rem,
    //16 * 3 = 48
    2: 2.5rem,
    // 40
    3: 2.25rem,
    // 36
    4: 2rem,
    // 32
    5: 1.75rem,
    //28
    6: 1.5rem,
    // 24
    7: 1.25rem,
    //20
    8: 1rem,
    //16
    9: 0.75rem,
    //12
);
$fontColorWhite: white;

* {
    font-family: 'Noto Sans TC', sans-serif;
}

ul {
    list-style-type: none;
    padding-left: 0px;
    margin: 0px;
}

img {
    -webkit-user-drag: none;
    max-width: 100%;
}

.text-family-Garamond {
    font-family: 'EB Garamond', 'Noto Sans TC';
    font-weight: 800;
}

.competition1 {
    background-image: url('@/assets/img/background_loading.jpg');
    background-position: 50% 50%;
    background-size: cover;
    background-repeat: repeat;
    background-color: #DCC9A9;
    position: relative;
    cursor: url('@/assets/img/mouse.png') 0 0, pointer;

}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 1.75rem;
}

.section__title {
    background-color: $backgroundColor;
    text-align: center;
    font-size: 3.5rem;
    color: $fontColorWhite;
    padding: 2.5rem 0px;
}

.button {
    background-color: $buttonColor;
    border-radius: 1em;
    text-align: center;
}

.button-brown {
    border-color: $backgroundColor;
    background-color: $backgroundColor;
}

.button-border {
    border-width: 1px;
    border-style: solid;
    background-color: transparent;
}

.header {
    background-color: $backgroundColor;
    width: 100%;
    height: $headerHeight;
    padding: 0px 2.25rem;

    .header__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: $maxContentWidth;
        margin: 0 auto;
        height: 100%;

        .header__list {
            display: flex;
            font-size: map-get($fontSize, "7");
            ;

            .header__item {
                padding: 0.5rem 1.5rem;
                color: $fontColorWhite;
            }
        }
    }

    .header__logo {
        width: 145px;
    }

}


.banner {
    background-image: url("@/assets/img/banner_background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    height: calc(100vh - $headerHeight);
    padding: 3rem 2.25rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @include breakpoint-xl {
        // display: none;
    }

    .banner__content__wrapper {
        max-width: $maxContentWidth;
        position: relative;
        overflow: hidden;
        margin: 0 auto;
        width: 100%;
    }

    .banner__content__background {
        background-image: url("@/assets/img/background_main.jpg");
        padding-bottom: 49.216%;
        background-size: contain;
        background-repeat: no-repeat;

        @include breakpoint-md {
            background-image: url("@/assets/img/background_main_mobile.jpg");
            padding-bottom: 122.554%;

        }
    }

    .banner__content {
        position: absolute;
        left: 0px;
        top: 0px;
        bottom: 0px;
        padding: 2.5rem;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    .banner__title {
        font-size: 5rem; //80
        display: flex;
        align-items: center;
        margin-bottom: 1.25rem;

        @include breakpoint-custom(650px) {
            font-size: 4rem;
            margin-top: 30px;
        }

        @include breakpoint-sm {
            font-size: 3rem;
        }

        span {
            font-size: map-get($fontSize, 3);
            padding: 0.5rem 2rem;
            color: $fontColorWhite;
            margin-left: 10px;
            border-radius: 14px;

            @include breakpoint-custom(650px) {
                font-size: map-get($fontSize, 5);
            }
        }

    }

    .banner__subtitle {
        font-size: map-get($fontSize, 2);
        max-width: 350px;
        font-weight: 900;
        line-height: 4rem;
        margin-bottom: 20px;

        @include breakpoint-lg {
            max-width: 237px;
        }

        @include breakpoint-md {
            max-width: 100%;
        }
    }

    .banner__text {
        max-width: 290px;
        font-size: map-get($fontSize, 6);

        @include breakpoint-xl {
            display: none;
        }
    }

    .banner__hacker {
        position: absolute;
        bottom: 0px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 100%;
        display: flex;
        justify-content: center;

        img {
            max-width: 50%;

            @include breakpoint-xl {
                max-width: 40%
            }

            @include breakpoint-md {
                max-width: 100%;
            }

            @include breakpoint-sm {
                max-width: 80%;
            }
        }
    }

    .banner_prize {
        position: absolute;
        bottom: 10px;
        font-weight: 400;
        font-size: map-get($fontSize, 5);
        color: $fontColorWhite;
        display: flex;

        @include breakpoint-sm {
            flex-direction: column;
        }

        &>span {
            padding: 0 5px;
        }

        .banner_money {
            color: $buttonColor;
            font-size: 4rem;
        }
    }

    .banner__information {
        font-size: map-get($fontSize, 5);

        &>div {
            margin-bottom: 10px;

            @include breakpoint-lg {
                margin-bottom: 0px;
            }
        }

        .banner__number {
            font-size: map-get($fontSize, 1);
            display: inline-block;
            min-width: 105px;
            text-align: right;

        }

        @include breakpoint-md {
            display: none;
        }
    }

    .banner__label {
        position: absolute;
        top: -0px;
        right: 0px;

        img {
            width: 20rem;

            @include breakpoint-lg {
                width: 16rem;
            }
        }

    }
}

.game {
    .list {
        display: grid;
        color: $textColor;
        grid-template-columns: 1fr;
        padding: 1.75rem;
        grid-column-gap: 1rem;

        @include breakpoint-lg {
            grid-template-columns: 1fr 1fr;
        }

        @include breakpoint-md {
            grid-template-columns: 1fr;
        }

        .list__item__title__text {
            @include breakpoint-lg {
                display: none;
            }
        }

        .list__item {
            max-width: 1200px;
            margin: 0 auto;
            width: 100%;
            position: relative;
            font-size: map-get($fontSize, 2);
            margin-bottom: 3rem;
        }

        .list__item_divider {
            border-bottom: 4px solid #38241B;

            @include breakpoint-lg {
                display: none;
            }
        }

        .list__item__title {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: $fontColorWhite;
            padding: 1rem 38px 0px;
            background-color: $backgroundColor;

            @include breakpoint-lg {
                justify-content: center;
            }

            img {
                max-width: 212px;

                @include breakpoint-lg {
                    max-width: 100%;
                }
            }
        }

        .list__item__content {
            background-image: url("@/assets/img/item_background.png");
            background-size: 100% 100%;
            min-height: 454px;
            background-repeat: no-repeat;
            display: flex;
            align-items: center;
            max-width: 100%;
            padding: 0 4rem;

            @include breakpoint-lg {
                align-items: stretch;
                padding: 4rem;
            }

            @include breakpoint-md {
                min-height: 360px;
            }
        }

        .list__item--introduction .list__item__content {
            padding: 0px;
            min-height: 250px;

            @include breakpoint-lg {
                height: 100%;
                align-items: center;
            }

            &>div {
                flex: 1;
                text-align: center;
            }
        }

        .list__item__detail {
            display: flex;
            margin-top: 2.5rem;
        }

        .list__item__img {
            flex: 0 1 325px;

            @include breakpoint-lg {
                display: none;
            }
        }

        .list__item_information {
            display: flex;
            flex-direction: column;

            padding: 0 2rem;
            height: 100%;
        }

        .list__item__text {
            margin-bottom: 2rem;

        }

        .list__item__description {
            font-size: map-get($fontSize, 5);
        }

        .list__item__button {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: auto -1.25rem -1.25rem;

            .button {
                padding: 0.75rem 2.125rem;
                min-width: 4em;
                box-sizing: content-box;
                margin: 0 1.25rem 1.25rem;
            }
        }
    }
}

.timeline {

    .timeline__mean {
        padding: 2.25rem;
        overflow: auto;
        white-space: nowrap;

        &::-webkit-scrollbar {
            width: 5px;
            height: 8px;
            background-color: #EFDDC3;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb {
            background: $backgroundColor;
            border-radius: 4px;
        }
    }

    .timeline__item {
        display: inline-block;
        width: 280px;
        text-align: center;
        height: 210px;
    }

    .timeline__item__title {
        margin-bottom: 1.25rem;
        font-size: map-get($fontSize, 5);
        line-height: 1.5em;
    }

    .timeline__dotted {
        width: 50px;
        height: 50px;
        display: inline-block;
        background-color: #3C221B;
        transform: rotate(45deg);
        transform-origin: center center;
        position: relative;


        &:before {
            content: "";
            display: block;
            position: absolute;
            z-index: 1;
            width: 230px;
            height: 2px;
            background-color: #3C221B;
            left: 0px;
            transform-origin: left center;
            bottom: 0px;
            transform: rotate(-45deg) translateX(-100%);
        }

    }

    .timeline__item--first .timeline__dotted {
        z-index: 2;

        &::before {
            display: none;
        }
    }


    .timeline_item__description {
        margin-top: 2rem;
        line-height: 1.25em;
        font-size: map-get($fontSize, 6);
    }
}

.prize {
    .list {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;

        @include breakpoint-lg {
            grid-template-columns: 1fr 1fr;
        }

        @include breakpoint-md {
            grid-template-columns: 1fr;
            gap: 4rem;
        }
    }

    .list_item {
        display: grid;
        font-size: map-get($fontSize, 5);
        line-height: 1.25em;
        grid-template-rows: auto 1fr;
        text-align: center;

        &.list_item--no-img {
            display: block;
            text-align: center;
            grid-column-start: 1;
            grid-column-end: 4;
            margin: 4rem 0;
            font-size: map-get($fontSize, 3);

            @include breakpoint-lg {
                grid-column-start: unset;
                grid-column-end: unset;
                align-self: center;
            }
        }
    }

    .list_item__img {
        position: relative;
    }

    .list_item__money {
        color: $fontColorWhite;
        padding: 0.5rem 1.25rem;
        white-space: nowrap;
        background: #951205;
        position: absolute;
        bottom: 10px;
        left: 50%;
        border-radius: 10px;
        transform: translate(-50%, -100%);
    }
}

.live {
    position: relative;

    .list {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;

        @include breakpoint-custom (860px) {
            grid-template-columns: 1fr;
        }

        .list__item {
            text-align: center;
            position: relative;

            // min-width: 350px;
            img {
                width: 100%;
            }

            @include breakpoint-custom (860px) {
                max-width: 500px;
                margin: 0 auto;
            }
        }

        .list__item__content {
            position: absolute;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
        }

        .list__item__name {
            color: $backgroundColor;

        }

        .list__item__title {
            color: #000000;
            font-size: 3rem;
            padding: 29px 37px;
            height: 2.3em;
            line-height: 1.15em;
            box-sizing: content-box;
            display: flex;
            align-items: center;

            @include breakpoint-custom (400px) {
                font-size: 2.5rem;
            }
        }

        .list__item__name {
            margin-top: auto;
            width: 171px;
            height: 44px;
            color: $fontColorWhite;
            background-image: url(@/assets/img/author_background.png);
            background-size: cover;
            font-size: map-get($fontSize, 8);
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.5em;
        }

        .list__item__time {
            font-size: map-get($fontSize, 5);
            padding: 25px 0px 35px;
        }

    }

    .live__button {
        position: absolute;
        right: 0px;
        left: 0px;
        top: 0px;
        bottom: 0px;
        text-align: center;
    }

    .live__button__title {
        font-size: 4.5rem;
        color: $backgroundColor;
        margin-bottom: 1.5rem;
    }

    .live__button__text {
        font-size: 4.5rem;
        color: $buttonColor;
        display: flex;
        justify-content: center;

        @include breakpoint-sm {
            flex-direction: column;
        }
    }

    .live__button__wand {
        width: 200px;

        @include breakpoint-md {
            width: 150px;
        }
    }
}

.logo {
    display: grid;
    grid-template-columns: repeat(4, auto);
    justify-content: space-between;
    align-items: center;
    row-gap: 1.5rem;
    column-gap: 3rem;

    @include breakpoint-xl {
        justify-content: center;
        grid-template-columns: repeat(2, auto);
    }

    @include breakpoint-sm {
        grid-template-columns: repeat(1, auto);
    }
}

.covering {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    z-index: 10;
    top: 0px;
    left: 0px;

    .covering__img {
        position: absolute;

        &.covering__img__top {
            top: -5%;
            left: 0px;
            width: 100%;
            z-index: 2;

            @include breakpoint-xl {
                top: -2%;
                scale: 1.1;
            }

            @include breakpoint-lg {
                scale: 2.1;
                top: 13%;
            }
        }

        &.covering__img__down__left {
            bottom: -60%;
            left: -7%;
            z-index: 3;
            scale: 1.3;

            @include breakpoint-lg {
                scale: 1.8;
            }

            @include breakpoint-md {
                scale: 2.5;
            }
        }

        &.covering__img__down__right {
            bottom: -47%;
            right: -13%;
            z-index: 1;
            scale: 1.1;

            @include breakpoint-xxl {
                bottom: -15%;
                right: -25%;
            }

            @include breakpoint-lg {
                scale: 1.5;
                bottom: 0;
            }
        }
    }
}

.footer {
    background-color: $backgroundColor;

    .footer__title {
        text-align: center;
        font-size: 3.5rem;
        color: $fontColorWhite;
        margin-bottom: 3rem;
    }

    .list {
        display: grid;
        grid-template-columns: repeat(3, auto);
        justify-content: space-between;

        @include breakpoint-lg {
            grid-template-columns: repeat(1, auto);
            justify-content: center;
        }
    }

    .list__item {
        margin-bottom: 3rem;
    }

    .footer__text {
        text-align: center;
        color: $fontColorWhite;
        font-size: map-get($fontSize, 8);
    }
}

.scroll-tip-animation {
    position: fixed;
    width: 35px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
}

.wand {
    height: calc(100vh - $headerHeight);
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .wand__item {
        width: 200px;
    }

    .wand__text {
        text-align: center;
        color: $textColor;
        font-size: 24px;
    }


}
</style>

<script setup lang="ts">
import { ref, onMounted, Ref } from 'vue'

const { $gsap, $lottie } = useNuxtApp()
const runtimeConfig = useRuntimeConfig()
useHead({
    link: [
        {
            title: "六角第一周"
        },
        {
            rel: "preload",
            as: "image",
            href: runtimeConfig.app.baseURL + "data/wand_loading.json"
        }
    ]
})

definePageMeta({
    layout: "no-layout",
});

// const options: any = {
//     minimizable: false,
//     playerSize: "standard",
//     backgroundColor: '#fff',
//     backgroundStyle: 'color',
//     theme: {
//         controlsView: "standard",
//         active: "light",
//         light: {
//             color: '#3D4852',
//             backgroundColor: '#fff',
//             opacity: '0.7',
//         },
//         dark: {
//             color: '#fff',
//             backgroundColor: '#202020',
//             opacity: '0.7',
//         }
//     }
// }

const scrollTip = ref<HTMLDivElement | null>(null);
const wand = ref<HTMLDivElement | null>(null);
const wand2 = ref<HTMLDivElement | null>(null);
const gameContainer = ref<HTMLDivElement | null>(null);
const isPageAnimationFinish = ref<boolean>(false);

const isShowLiveDetailInformation = ref<boolean>(false);

const isLoadedImage = ref<boolean>(false);
const isShowCoverContainer = ref<boolean>(true);
const coveringContainer = ref<HTMLImageElement>(null);
const coveringImage1 = ref<HTMLImageElement | null>(null)
const coveringImage2 = ref<HTMLImageElement | null>(null)
const coveringImage3 = ref<HTMLImageElement | null>(null)

const coveringImages: Ref[] = [coveringImage1, coveringImage2, coveringImage3];

const pageSection = ref<HTMLDivElement | null>(null);
const hacker = ref<HTMLDivElement | null>(null);

onMounted(() => {
    $lottie.loadAnimation({
        container: scrollTip.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: runtimeConfig.app.baseURL + "data/scroll_down.json"
    })
    $lottie.loadAnimation({
        container: wand.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: runtimeConfig.app.baseURL + "data/wand_loading.json"
    })

    $lottie.loadAnimation({
        container: wand2.value,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: runtimeConfig.app.baseURL + "data/wand_loading.json"
    })

    //等待三張banner圖片都已經載入之後，並且等待時間超過0.5s時才會出現，以及要用complete來判斷，因為瀏覽器會有cache，這要就不會有load事件
    Promise.all([...coveringImages.map((item) => {
        return new Promise((resolve, reject) => {
            if (item.value.complete) {
                resolve(item.value.complete)
            }
            else {
                item.value.addEventListener("load", function () {
                    resolve(item.value.complete)
                })
            }
        })
    }),
    new Promise((resolve, reject) => {
        setTimeout(resolve, 500);
    })
    ]).then(() => {
    }).catch((error: Error) => {
        console.log(error)
    }).finally(() => {
        isLoadedImage.value = true;

        //banner animation by gsap
        const tl = $gsap.timeline({
            scrollTrigger: {
                toggleActions: "restart none reverse none",
                trigger: pageSection.value,
                start: "top top",
                scrub: 1,
                pin: true,
                end: () => {
                    return "+=" + window.innerHeight * 1.5
                },
                onLeave: () => {
                    isShowCoverContainer.value = false;
                    //game section animation
                    if (!isPageAnimationFinish.value) {
                        const children = gameContainer.value.querySelectorAll('.list__item:not(.list__item--introduction)')
                        children.forEach((child) => {
                            $gsap.from(child, {
                                x: -100,
                                opacity: 0,
                                duration: 0.5,
                                ease: "power4.in",
                                scrollTrigger: {
                                    trigger: child,
                                    start: "top center",
                                }
                            })
                        })
                        isPageAnimationFinish.value = true
                    }
                },
                onEnterBack: () => {
                    isShowCoverContainer.value = true;
                }
            },
        })
        tl.to(coveringImage1.value, {
            yPercent: '-100'
        }).to(coveringImage2.value, {
            yPercent: '100'
        },).to(coveringImage3.value, {
            yPercent: '100'
        },).from(hacker.value, {
            yPercent: "80"
        })
    })
    watch(isShowCoverContainer, (value) => {
        if (value) {
            $gsap.to(coveringContainer.value, {
                opacity: 1,
                display: "block"
            })
        }
        else {
            $gsap.to(coveringContainer.value, {
                opacity: 0,
                display: "none"
            })
        }

    })
})
</script>