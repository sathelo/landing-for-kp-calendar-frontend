<template>
  <div class="popup" @click.self="closeModal">
    <div class="popup-inner">
      <div class="popup-close btn btn--outline" @click="closeModal">
        <img :src="getStaticUrl('closed-ico.svg')" alt="close-modal" class="popup-close__img" />
      </div>

      <div class="popup-header">
        <div class="popup-header__info">
          <div class="popup-header__date">
            {{ data.date.getDate() }}
            {{ $store.state.bunker.monthNames[data.date.getMonth()].toUpperCase() }}
          </div>
          <div class="popup-header__title">{{ data.title }}</div>
          <div class="popup-header__subtitle">{{ data.subtitle }}</div>
          <a :href="data.link" target="_blank" class="popup-header__btn btn btn--primary"
            >Посмотреть фильм</a
          >
        </div>
        <img :src="getStaticUrl(data.img)" alt="popup-header-photo" class="popup-header__img" />
      </div>

      <div class="popup-main">
        <div class="popup-main__container">
          <div class="popup-main__info popup-main-info">
            <div class="popup-main-info__title">Дебетовая карта ВТБ</div>
            <div class="popup-main-info__subtitle">
              Оформите прямо сейчас бесплатную картус&nbsp;кешбэком&nbsp;2% в&nbsp;топ-категориях
            </div>
            <div class="popup-main-info__btn">
              <a
                href="https://online.vtb.ru/debit-card/step1/multicard-ready?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_issue_card_cpc_rf_p1_feb_apr
"
                target="_blank"
                class="popup-main-info__design btn btn--primary"
                @click="clickHandler"
              >
                Оформить карту
              </a>
              <a
                href="https://www.vtb.promo/daily?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_button_more_cpc_rf_p1_feb_apr
"
                target="_blank"
                class="popup-main-info__more btn btn--ghost"
                @click="clickHandler"
                >Подробнее</a
              >
            </div>
          </div>
          <img
            :src="getStaticUrl('card.png')"
            alt="popup-main-photo"
            class="popup-main-info__img"
          />
        </div>
        <div class="popup-main__cards popup-main-cards">
          <div
            v-for="(card, index) in frameCards"
            :key="index"
            class="popup-main-cards__card popup-main-cards-card"
          >
            <div class="popup-main-cards-card__title">{{ card.title }}</div>
            <div class="popup-main-cards-card__subtitle">{{ card.subtitle }}</div>
          </div>
        </div>
      </div>

      <div class="popup-footer">
        <div class="popup-footer__title">С&nbsp;картой ВТБ вам доступно</div>
        <div class="popup-footer__cards popup-footer-cards">
          <div
            v-for="(card, index) in footerCards"
            :key="index"
            class="popup-footer-cards__card popup-footer-cards-card"
          >
            <div class="popup-footer-cards-card__title">{{ card.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'popup-block',
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    frameCards() {
      return this.$store.state.bunker.frameCards;
    },
    footerCards() {
      return this.$store.state.bunker.footerCards;
    },
  },
  mounted() {
    document.body.style.overflow = 'hidden';
  },
  destroyed() {
    document.body.style.overflow = '';
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    clickHandler(e) {
      console.log(e);
    },
  },
};
</script>

<style src="./popup.less" lang="less" />
