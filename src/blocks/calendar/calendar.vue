<template>
  <div>
    <div class="calendar">
      <div class="calendar__container">
        <div class="calendar-logo">
          <a
            href="https://www.vtb.promo/daily?code=media_kinopoisk_dbdk&utm_source=kinopoisk&utm_medium=media&utm_campaign=media_dbdk_kinopoisk_link_logo_cpc_rf_p1_feb_apr
"
            target="_blank"
          >
            <img
              class="calendar-logo__vtb"
              :src="getStaticUrl('logo-vtb.svg')"
              alt="calendar-logo-vtb"
            />
          </a>
          <a href="https://www.kinopoisk.ru/?utm_referrer=www.google.com" target="_blank">
            <img
              class="calendar-logo__kp"
              :src="getStaticUrl('logo-kp.svg')"
              alt="calendar-logo-kp"
            />
          </a>
        </div>
        <div class="calendar__photo" />
        <div class="calendar-main">
          <div class="calendar-main__title">{{ title }}</div>
          <div class="calendar-main__subtitle">{{ subtitle }}</div>
        </div>

        <div class="calendar-dates">
          <div
            v-for="(date, dateIndex) in currentDates"
            :key="dateIndex"
            class="calendar-dates__container"
          >
            <div
              v-for="data in date"
              :key="$store.state.bunker.dates.indexOf(data)"
              :class="{
                'btn--hidden': hasHidden(data.date),
              }"
              class="calendar-dates__btn calendar-dates-btn"
              @click="hasHidden(data.date) ? null : clickDate(data)"
            >
              <img
                v-if="hasHidden(data.date)"
                :src="getStaticUrl('closed.svg')"
                alt="calendar-dates-btn-closed"
                class="calendar-dates-btn__img"
              />
              <div class="calendar-dates-btn__info">
                <div class="calendar-dates-btn__date">{{ data.date.getDate() }}</div>
                <div class="calendar-dates-btn__month">
                  {{ $store.state.bunker.monthNames[data.date.getMonth()].toLowerCase() }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="calendar-footer">
          <div class="calendar-footer__text">{{ footer.text }}</div>
          <div class="calendar-footer__nav calendar-footer-nav">
            <a
              v-for="(link, index) in footer.links"
              :key="index"
              :href="link.link"
              target="_blank"
              class="calendar-footer-nav__link btn--underlining"
            >
              {{ link.line }}
            </a>
            <div class="calendar-footer-nav__rating">18+</div>
          </div>
        </div>
      </div>
      <div class="calendar-present">
        <img
          class="calendar-present__photo"
          :src="getStaticUrl('presentBig.png')"
          alt="presentBig-photo"
        />
        <img
          class="calendar-present__photo"
          :src="getStaticUrl('presentSmall.png')"
          alt="presentBig-photo"
        />
      </div>
    </div>
    <popup-block v-if="isModal" :data="infoModal" @closeModal="closeModal" />
  </div>
</template>

<script>
import lodash from 'lodash';

export default {
  name: 'calendar-block',
  data() {
    return {
      isMobile: false,
      infoModal: Object,
      isModal: false,
      isActive: false,
      title: 'Праздник каждый день',
      subtitle:
        'День шепота, День спонтанности, День рождения видеомагнитофона\u00A0\u2013 окунитесь в\u00A0календарь ежедневных поводов улыбнуться, а\u00A0решение повседневных задач доверьте банку ВТБ.',
    };
  },
  computed: {
    currentDates() {
      return this.isMobile ? [this.dates] : this.datesChunk;
    },
    currentDate() {
      return this.$store.getters.currentDate;
    },
    dates() {
      return this.$store.state.bunker.dates.map((date) => ({ ...date, date: new Date(date.date) }));
    },
    datesChunk() {
      return this.chunk(this.dates, this.dates.length / 2);
    },
    footer() {
      return this.$store.state.bunker.footer;
    },
  },
  mounted() {
    this.currentDate = new Date(); // Можно удалить и получить с бункера текущую дату
    window.addEventListener('resize', this.resizeHandler);
    this.resizeHandler();
  },
  destroyed() {
    window.removeEventListener('resize', this.resizeHandler);
  },
  methods: {
    clickDate(data) {
      this.isModal = !this.isModal;
      this.isActive = !this.isActive;
      this.infoModal = data;
    },
    hasHidden(date) {
      return this.currentDate - date <= 0;
    },
    hasActive(dataId) {
      return this.isActive === dataId;
    },
    closeModal() {
      this.isModal = !this.isModal;
    },
    chunk(dates, size) {
      return lodash.chunk(dates, size);
    },
    resizeHandler() {
      this.isMobile = window.innerWidth < 600;
    },
  },
};
</script>

<style src="./calendar.less" lang="less" />
