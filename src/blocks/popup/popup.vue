<template>
  <div class="calendar__popup popup">
    <div class="btn--close" />

    <div class="popup__header header">
      <div class="header__info">
        <div class="header__date">
          {{ data.date.getDate() }} {{ monthNames[data.date.getMonth()].toUpperCase() }}
        </div>
        <!-- <div class="header__title">{{ title }}</div>
        <div class="header__subtitle">{{ subtitle }}</div> -->
        <div class="header__btn btn__watching">Посмотреть фильм</div>
      </div>
      <!-- <img :src="image" alt="header-photo" /> -->
    </div>

    <div class="popup__frame main">
      <div class="main__container">
        <div class="main__info">
          <div class="main__title">Дебетовая карта ВТБ</div>
          <div class="main__subtitle">
            Оформите прямо сейчас бесплатную картус&nbsp;кешбэком&nbsp;2% в&nbsp;топ-категориях
          </div>
          <div class="main__design">Оформить карту</div>
          <div class="main__more">Подробнее</div>
        </div>
        <img src="" alt="main-photo" />
      </div>
      <!-- <div class="main__cards cards">
        <div v-for="(card, index) in frameCards" :key="index" class="cards__card card">
          <div class="card__title">{{ card.title }}</div>
          <div class="card__subtitle">{{ card.subtitle }}</div>
        </div>
      </div> -->
    </div>

    <div class="popup__footer footer">
      <div class="footer__title">С&nbsp;картой ВТБ вам доступно</div>
      <!-- <div class="footer__cards cards">
        <div v-for="(card, index) in footerCards" :key="index" class="cards__card card">
          <div class="card__title">{{ card.text }}</div>
        </div>
      </div> -->
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
  data() {
    return {
      monthNames: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
    };
  },
};
</script>

<style src="./popup.less" lang="less"></style>
