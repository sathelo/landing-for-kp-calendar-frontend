<template>
  <div class="calendar">
    <popup-block v-if="isModal" :data="infoModal" />
    <div class="calendar__container">
      <img class="calendar__logo" :src="getStaticUrl('logo.svg')" alt="calendar-logo" />
      <div class="calendar__main main">
        <div class="main__title">{{ title }}</div>
        <div class="main__subtitle">{{ subtitle }}</div>
      </div>

      <div class="calendar__dates dates">
        <div v-for="(data, index) in dates" :key="index" class="dates__container">
          <div
            :class="{ 'btn--hidden': hasHidden(data.date), 'btn--active': hasActive(index) }"
            class="dates__btn btn"
            @click="hasHidden(data.date) ? null : clickDate(index)"
          >
            <img
              v-if="hasHidden(data.date)"
              :src="getStaticUrl('closed.svg')"
              alt="ico-closed"
              class="btn__img"
            />
            <div class="btn__info">
              <div class="btn__date">{{ data.date.getDate() }}</div>
              <div class="btn__month">{{ monthNames[data.date.getMonth()].toLowerCase() }}</div>
            </div>
            <div v-if="hasActive(index)" class="btn--more" @click="clickMore(data)">
              <img :src="getStaticUrl('arrow-right.svg')" alt="arrow-right" />
            </div>
          </div>
        </div>
      </div>

      <div class="calendar__footer footer">
        <div class="footer__text">{{ footer.text }}</div>
        <div class="footer__nav nav">
          <div v-for="(link, index) in footer.links" :key="index" class="nav__link">
            {{ link }}
          </div>
          <div class="nav__rating">18+</div>
        </div>
      </div>
    </div>
    <div class="calendar__present present">
      <img class="present__photo" :src="getStaticUrl('presentBig.png')" alt="presentBig-photo" />
      <img class="present__photo" :src="getStaticUrl('presentSmall.png')" alt="presentBig-photo" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'calendar-block',
  data() {
    return {
      infoModal: Object,
      isModal: false,
      isActive: false,
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
      currentDate: '',
      title: 'Праздник каждый день',
      subtitle:
        'День шепота, День спонтанности, День рождения видеомагнитофона\u00A0\u2013 окунитесь в\u00A0календарь ежедневных поводов улыбнуться, а\u00A0решение повседневных задач доверьте банку ВТБ.',
      dates: [
        {
          date: new Date(2023, 2, 13),
        },
        {
          date: new Date(2023, 2, 14),
        },
        {
          date: new Date(2023, 2, 15),
        },
        {
          date: new Date(2023, 2, 16),
        },
        {
          date: new Date(2023, 2, 17),
        },
        {
          date: new Date(2023, 2, 18),
        },
        {
          date: new Date(2023, 2, 19),
        },
        {
          date: new Date(2023, 2, 20),
        },
        {
          date: new Date(2023, 2, 21),
        },
        {
          date: new Date(2023, 2, 22),
        },
        {
          date: new Date(2023, 2, 23),
        },
        {
          date: new Date(2023, 2, 24),
        },
        {
          date: new Date(2023, 2, 25),
        },
        {
          date: new Date(2023, 2, 26),
        },
        {
          date: new Date(2023, 2, 27),
        },
        {
          date: new Date(2023, 2, 28),
        },
        {
          date: new Date(2023, 2, 29),
        },
        {
          date: new Date(2023, 2, 30),
        },
        {
          date: new Date(2023, 2, 31),
        },
        {
          date: new Date(2023, 3, 1),
        },
        {
          date: new Date(2023, 3, 2),
        },
        {
          date: new Date(2023, 3, 3),
        },
        {
          date: new Date(2023, 3, 4),
        },
        {
          date: new Date(2023, 3, 5),
        },
        {
          date: new Date(2023, 3, 6),
        },
        {
          date: new Date(2023, 3, 7),
        },
        {
          date: new Date(2023, 3, 8),
        },
        {
          date: new Date(2023, 3, 9),
        },
        {
          date: new Date(2023, 3, 10),
        },
        {
          date: new Date(2023, 4, 10),
        },
      ],
      footer: {
        text: 'Доходность до\u00A08,3% годовых в\u00A0рублях по\u00A0вкладу \u00ABЦенность достижений\u00BB для владельцев пакетов \u00ABПривилегия-Мультикарта\u00BB, \u00ABПривилегия New\u00BB, \u00ABПрайм New\u00BB, \u00ABПрайм+\u00BB достигается за\u00A0счёт начисления эффективной ставки 8,3% годовых (эффективная ставка\u00A0\u2014 минимальная гарантированная ставка при условии выбора способа уплаты процентов, уплаченные проценты капитализируются) с\u00A0учётом капитализации процентов на\u00A0срок 370\u00A0дней. Минимальная сумма вклада и\u00A0минимальный размер неснижаемого остатка\u00A0\u2014 2\u00A0500\u00A0000\u00A0₽. При открытии вклада на\u00A0срок 370 дней эффективная ставка\u00A0\u2014 8,3% годовых, номинальная\u00A0\u2014 8% \u00A0годовых. Пополнение предусмотрено на\u00A0новые денежные средства, частичные снятия суммы вклада предусмотрены в\u00A0пределах неснижаемого остатка. Продление договора не\u00A0предусмотрено. При досрочном расторжении вклада проценты по\u00A0вкладу уплачиваются по\u00A0ставке вклада \u00ABдо\u00A0востребования\u00BB, действующей в\u00A0банке на\u00A0момент досрочного востребования вклада. Условие капитализации процентов при досрочном расторжении вклада не\u00A0применяется.\u2028Вклад \u00ABЦенность достижений\u00BB доступен для открытия только на\u00A0новые денежные средства.',
        links: [
          'Генеральная лицензия Банка России \u2116\u00A01000',
          'Политика конфиденциальности',
        ],
      },
    };
  },
  beforeMount() {
    this.currentDate = new Date();
  },
  methods: {
    clickDate(dataId) {
      this.isActive = dataId;
    },
    hasHidden(date) {
      return this.currentDate - date <= 0;
    },
    hasActive(dataId) {
      return this.isActive === dataId;
    },
    clickMore(data) {
      this.isModal = !this.isModal;
      this.infoModal = data;
      console.log(this.infoModal);
    },
  },
};
</script>

<style src="./calendar.less" lang="less" />
