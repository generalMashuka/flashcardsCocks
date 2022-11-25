const { Topic } = require('../models');
const { Quiz } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up() {
    await Topic.bulkCreate([
      {
        title: 'Russian MTV',
        image: '',
      },
      {
        title: 'Угадай, чья тень',
        image: '',
      },
      {
        title: 'Верю/Не Верю',
        image: '',
      },

    ]);

    await Quiz.bulkCreate([
      {
        question: 'Итак, поехали. Вспомните, из какой песни фраза: «Woo-hoo! Woo-hoo! Woo-hoo! Woo-hoo!»?',
        answer: 'Song 2',
        topic_id: '1',
        image: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1539341713/ychrn8m4ike0gi6bohog.jpg',
      },
      {
        question: 'Помните у Fatboy Slim был крутой клип с летающим голливудским актером Кристофером Уокеном. А что за трек?',
        answer: 'Weapon of choice',
        topic_id: '1',
        image: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1539341806/cp1ml21gjvacmho5p4tu.png',
      },
      {
        question: 'Из какого клипа кадр?',
        answer: 'Freestyla',
        topic_id: '1',
        image: 'https://img.playbuzz.com/image/upload/ar_1.5,c_crop/q_auto:best,f_auto,fl_lossy,w_640,c_limit,dpr_2/v1539342055/q3wnaiwaevp6va7zokes.jpg',
      },
      {
        question: 'Угадай тень!',
        answer: 'Добби',
        topic_id: '2',
        image: 'https://konstruktortestov.ru/files/72fd/ecc1/856a/9b3d/6c13/3db2/5339/b530/1133690140.jpg',
      },
      {
        question: 'Угадай тень!',
        answer: 'Круэлла Де Виль',
        topic_id: '2',
        image: 'https://img-s3.onedio.com/id-5ab175c7e228477423dce4a1/rev-0/w-635/listing/f-jpg-webp/s-5820cfbe891fa1e6a5e11a812d17e26a18c52cc4.webp',
      },
      {
        question: 'Угадай тень!',
        answer: 'Белль',
        topic_id: '2',
        image: 'https://img-s3.onedio.com/id-5ab174c6a270807a232cb4d1/rev-0/w-635/listing/f-jpg-webp/s-268a83aff08ba593a4ff3e4e1ec6012b9186dda9.webp',
      },
      {
        question: 'Правда ли, что если биться головой о стену, можно сжечь 150 калорий в час.',
        answer: 'Правда',
        topic_id: '3',
        image: '/public/images/Ваня_бьется_об_стену.jpg',
      },
      {
        question: 'Правда ли, что бикини и тампоны изобрели женщины?',
        answer: 'Неправда',
        topic_id: '3',
        image: '/public/images/Тема_и_тампон.jpg',
      },
      {
        question: 'Правда ли, что человеческая ДНК на 50% повторяет ДНК банана?',
        answer: 'Правда',
        topic_id: '3',
        image: '/public/images/саша_и_банан.jpg',
      },

    ]);
  },

  async down() {
    await Topic.destroy({ truncate: { cascade: true } });
  },
};
