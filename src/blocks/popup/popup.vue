<template>
  <div class="calendar__popup popup">
    <div class="btn--close" @click="closeModal">
      <img :src="getStaticUrl('closed.svg')" alt="close-modal" />
    </div>

    <div class="popup__header header">
      <div class="header__info">
        <div class="header__date">
          {{ data.date.getDate() }} {{ monthNames[data.date.getMonth()].toUpperCase() }}
        </div>
        <div class="header__title">{{ data.title }}</div>
        <div class="header__subtitle">{{ data.subtitle }}</div>
        <div class="header__btn btn--primary">Посмотреть фильм</div>
      </div>
      <img :src="getStaticUrl(data.img)" alt="header-photo" class="header__img" />
    </div>

    <div class="popup__frame main">
      <div class="main__container">
        <div class="main__info info">
          <div class="info__title">Дебетовая карта ВТБ</div>
          <div class="info__subtitle">
            Оформите прямо сейчас бесплатную картус&nbsp;кешбэком&nbsp;2% в&nbsp;топ-категориях
          </div>
          <div class="info__btn">
            <div class="info__design btn--primary">Оформить карту</div>
            <div class="info__more btn--ghost">Подробнее</div>
          </div>
        </div>
        <img :src="getStaticUrl('card.png')" alt="main-photo" />
      </div>
      <div class="main__cards cards">
        <div v-for="(card, index) in frameCards" :key="index" class="cards__card card">
          <div class="card__title">{{ card.title }}</div>
          <div class="card__subtitle">{{ card.subtitle }}</div>
        </div>
      </div>
    </div>

    <div class="popup__footer footer">
      <div class="footer__title">С&nbsp;картой ВТБ вам доступно</div>
      <div class="footer__cards cards">
        <div v-for="(card, index) in footerCards" :key="index" class="cards__card card">
          <div class="card__title">{{ card.text }}</div>
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
      frameCards: [
        {
          title: '0\u00A0₽',
          subtitle: 'Обслуживание без скрытых условий',
        },
        {
          title: '2%',
          subtitle: 'Кешбэк в\u00A0популярных категориях',
        },
        {
          title: 'до\u00A030%',
          subtitle: 'Дополнительный кешбэк у\u00A0партнёров',
        },
        {
          title: '3\u00A0дня',
          subtitle: 'Срок зачисления кешбэка',
        },
      ],
      footerCards: [
        {
          text: 'Бесплатные платежи и\u00A0переводы по\u00A0номеру телефона в\u00A0другие банки (до\u00A0100\u00A0000\u00A0₽/мес.)',
        },
        { text: '0\u00A0₽ комиссия за\u00A0оплату ЖКУ' },
        { text: 'Накопительный счёт с\u00A0%\u00A0за\u00A0ежедневный остаток' },
        { text: 'Удобная оплата с\u00A0помощью сервисов Samsung Pay или Mir Pay (для Android)' },
        { text: '16\u00A0000\u00A0банкоматов, в\u00A0которых можно снимать наличные без комиссии' },
      ],
    };
  },
  methods: {
    closeModal() {
      this.$emit('closeModal');
    },
  },
};
</script>

<style src="./popup.less" lang="less"></style>
