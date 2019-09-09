import React, { useState, useEffect } from 'react';
import './App.css';
import { Context } from './context';
import NavBar from './components/NavBar.js';
import Section from './components/Section';


export default function App() {

  const [materials] = useState([
    {
      "title": "Театр английского Возрождения",
      "type": "theater",
      "section": "course",
      "url": "https://arzamas.academy/courses/5",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/5/hd_background_detail_picture-b76a1784-e321-4e9d-af11-159ee159ad97.jpg"
    },
    {
      "title": "Как понимать живопись XIX века",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/courses/15",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/15/hd_background_detail_picture-dfcfb07a-26e1-4e23-a9eb-8529e358b6d3.jpg"
    },
    {
      "title": "Русский авангард",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/courses/18",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/21/hd_background_detail_picture-b7b02cec-7c1e-466b-b156-220c93bee2ab.jpg"
    },
    {
      "title": "Русское искусство XX века",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/likbez/russian-art-xx?e=1",
      "img": "https://cdn-s-assets.arzamas.academy/assets/likbez/russian-art/cover-9ef53eec69e6527db44425503550e8bfbdeff1cade041ea928375e2b21a2a5ea.jpg"
    },
    {
      "title": "Приключения Моне, Матисса и Пикассо в России",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/courses/52",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/65/hd_background_detail_picture-1d7b5574-c34a-4cda-ab3e-dfab1f231df3.jpg"
    },
    {
      "title": "Новая Третьяковка",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/special/tretyakovka",
      "img": "https://cdn-s-static.arzamas.academy/x/428-treryakovka-sljvlskdjlsdjf/cover.jpg"
    },
    {
      "title": "Как увидеть искусство глазами его современников",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/courses/59",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/84/hd_background_detail_picture-2e257869-3234-4d1a-8a48-c65ade5ea981.jpg"
    },
    {
      "title": "Первый русский авангардист",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/courses/60",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/85/hd_background_detail_picture-9108c590-999d-4902-a918-650709e897ba.jpg"
    },
    {
      "title": "Как смотреть на картины",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/kak-smotret-na-kartiny/",
      "img": "https://admarginem.ru/wp-content/uploads/2018/11/OI_kak_smotret_kartini_1030x928-e1552224633385.png"
    },
    {
      "title": "Модернизм и современное искусство",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/modernizm-i-sovremennoe-iskusstvo/",
      "img": "https://admarginem.ru/wp-content/uploads/2018/11/OI_modernizm_1030x928.png"
    },
    {
      "title": "Главное в истории искусств",
      "type": "paintings",
      "section": "book",
      "url": "https://www.mann-ivanov-ferber.ru/books/glavnoe-v-istorii-iskusstv/",
      "img": "https://www.mann-ivanov-ferber.ru/assets/images/covers/81/19681/1.00x-thumb.png"
    },
    {
      "title": "Главное в истории фотографии",
      "type": "photography",
      "section": "book",
      "url": "https://www.mann-ivanov-ferber.ru/books/glavnoe-v-istorii-fotografii/",
      "img": "https://www.mann-ivanov-ferber.ru/assets/images/covers/32/22032/1.00x-thumb.png"
    },
    {
      "title": "Импрессионизм",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/impressionizm/",
      "img": "https://admarginem.ru/wp-content/uploads/2019/07/Ae_impressionists_1030x928-copy.png"
    },
    {
      "title": "…Измы: как понимать современное искусство",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/izmy-kak-ponimat-sovremennoe-iskusstvo-2/",
      "img": "https://admarginem.ru/wp-content/uploads/2019/07/izms.png"
    },
    {
      "title": "Сюрреализм",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/syurrealizm/",
      "img": "https://admarginem.ru/wp-content/uploads/2019/04/syurrealizm.png"
    },
    {
      "title": "Стрит-арт",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/strit-art/",
      "img": "https://admarginem.ru/wp-content/uploads/2019/07/Ae_streetart_1030x928.png"
    },
    {
      "title": "Ключевые моменты в искусстве",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/klyuchevye-momenty-v-iskusstve/",
      "img": "https://admarginem.ru/wp-content/uploads/2018/11/OI_kluchevie_1030x928.png"
    },
    {
      "title": "Художницы",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/hudozhnitsy/",
      "img": "https://admarginem.ru/wp-content/uploads/2019/04/hudozhnitsy.png"
    },
    {
      "title": "Поп-арт",
      "type": "paintings",
      "section": "book",
      "url": "https://admarginem.ru/product/pop-art/",
      "img": "https://admarginem.ru/wp-content/uploads/2018/11/OI_popart_1030x928.png"
    },
    {
      "title": "Интерпретации современного искусства",
      "type": "contemporary",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=r0lvnspX_1E",
      "img": ""
    },
    {
      "title": "Лекция «Авангардная архитектура глазами фотографа»",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=isiKSs1aMAQ",
      "img": ""
    },
    {
      "title": "История русской культуры за 25 минут",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=cgLFTitXPdw",
      "img": ""
    },
    {
      "title": "История русской культуры за 25 минут",
      "type": "theater",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=cgLFTitXPdw",
      "img": ""
    },
    {
      "title": "История русской культуры за 25 минут",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=cgLFTitXPdw",
      "img": ""
    },
    {
      "title": "История русской культуры за 25 минут",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=cgLFTitXPdw",
      "img": ""
    },
    {
      "title": "Самая быстрая история русского искусства XX века",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tDxrdnk4e5g",
      "img": ""
    },
    {
      "title": "Самая быстрая история русского искусства XX века",
      "type": "theater",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tDxrdnk4e5g",
      "img": ""
    },
    {
      "title": "Самая быстрая история русского искусства XX века",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tDxrdnk4e5g",
      "img": ""
    },
    {
      "title": "Самая быстрая история русского искусства XX века",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tDxrdnk4e5g",
      "img": ""
    },
    {
      "title": "Искусство и контекст: «Прогулка по скалам Пурвиля» Моне и « Супрематическая композиция: Белое на белом",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=9qU6LqUQI6A",
      "img": ""
    },
    {
      "title": "Почему это искусство? Поллок",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=Jpo7Sa3qXDQ",
      "img": ""
    },
    {
      "title": "Почему это – искусство? Энди Уорхол, «Банки супа “Кэмпбелл”",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=rWScmSpm06A",
      "img": ""
    },
    {
      "title": "Искусство как концепт: \"Перед тем как сломать руку",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=WN1XTkNm0c0",
      "img": ""
    },
    {
      "title": "Изображение и абстракция. \"Офелия\" Милле и \"Vir Heroicus Sublimis\" Ньюмена",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=bBFoVh9Gli8",
      "img": ""
    },
    {
      "title": "Самая быстрая история русского искусства XX века",
      "type": "music",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tDxrdnk4e5g",
      "img": ""
    },
    {
      "title": "История русской культуры за 25 минут",
      "type": "music",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=cgLFTitXPdw",
      "img": ""
    },
    {
      "title": "XX век: все главные стили живописи",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/materials/1665",
      "img": ""
    },
    {
      "title": "Краткий учебник по русскому авангарду",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/materials/638",
      "img": ""
    },
    {
      "title": "Краткий учебник по русскому авангарду",
      "type": "architecture",
      "section": "article",
      "url": "https://arzamas.academy/materials/638",
      "img": ""
    },
    {
      "title": "Краткий учебник по русскому авангарду",
      "type": "cinema",
      "section": "article",
      "url": "https://arzamas.academy/materials/638",
      "img": ""
    },
    {
      "title": "Краткий учебник по русскому авангарду",
      "type": "music",
      "section": "article",
      "url": "https://arzamas.academy/materials/638",
      "img": ""
    },
    {
      "title": "Краткий учебник по русскому авангарду",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/materials/638",
      "img": ""
    },
    {
      "title": "Краткий учебник по русскому авангарду",
      "type": "theater",
      "section": "article",
      "url": "https://arzamas.academy/materials/638",
      "img": ""
    },
    {
      "title": "Пушкинский музей",
      "type": "paintings",
      "section": "course",
      "url": "https://arzamas.academy/special/pushkinskiy",
      "img": "https://cdn-s-assets.arzamas.academy/assets/pushkinskiy/1-back-vert-0aab48b7c095e77122632d71fe59ad425212437230ade852632253ff379e0fed.jpg"
    },
    {
      "title": "Архитектура как средство коммуникации",
      "type": "architecture",
      "section": "course",
      "url": "https://arzamas.academy/courses/12",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/17/hd_background_detail_picture-84e4b8af-c8a2-4f29-8de8-cee6eb6e4b40"
    },
    {
      "title": "Ле Корбюзье. «Архитектура XX века»",
      "type": "architecture",
      "section": "book",
      "url": "https://vk.com/wall-52526415_5465",
      "img": "https://sun9-13.userapi.com/c627221/v627221914/1170c/wi4frAYqAi4.jpg"
    },
    {
      "title": "Собственные дома архитекторов",
      "type": "architecture",
      "section": "article",
      "url": "https://arzamas.academy/materials/458",
      "img": ""
    },
    {
      "title": "Британская музыка от хора до хардкора",
      "type": "music",
      "section": "course",
      "url": "https://arzamas.academy/special/britmusic",
      "img": "https://cdn-s-assets.arzamas.academy/assets/specials/britmusic/bg-8e22f7d580a57d59777718c0da2c6172b21168fb955e744a86ba535a041e4f73.jpg"
    },
    {
      "title": "Документальное кино между вымыслом и реальностью",
      "type": "cinema",
      "section": "course",
      "url": "https://arzamas.academy/courses/67",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/91/hd_background_detail_picture-ee7df3e9-b0da-4c4d-b9df-0becc9016a6c.jpg"
    },
    {
      "title": "Плейлист француза эпохи Годара",
      "type": "music",
      "section": "article",
      "url": "https://arzamas.academy/materials/1397",
      "img": ""
    },
    {
      "title": "Главные фильмы французской «новой волны»",
      "type": "cinema",
      "section": "article",
      "url": "https://arzamas.academy/materials/1396",
      "img": ""
    },
    {
      "title": "Франция эпохи Сартра, Годара и Брижит Бардо",
      "type": "cinema",
      "section": "course",
      "url": "https://arzamas.academy/courses/48",
      "img": "https://cdn-s-static.arzamas.academy/custom/courses/48/covers/3.jpg"
    },
    {
      "title": "Архитектурный путеводитель по Самаре 1920–1940",
      "type": "architecture",
      "section": "book",
      "url": "https://tatlin.ru/shop/arxitekturnyj_putevoditel_po_samare_1920-1940",
      "img": "https://tatlin.ru/MyWeb-Image/table/item_photos/field/file/content-field/content/equality-field/id/equality/6026/max-width/490/max-height/590/no-crop/1/1/0%20obl_png.png"
    },
    {
      "title": "Владимир Павлов",
      "type": "architecture",
      "section": "book",
      "url": "https://tatlin.ru/shop/vladimir_pavlov-arxitektura_sovetskogo_modernizma",
      "img": "https://tatlin.ru/MyWeb-Image/table/item_photos/field/file/content-field/content/equality-field/id/equality/2892/max-width/490/max-height/590/no-crop/1/1/vp_obl.jpg"
    },
    {
      "title": "Школьный фильм",
      "type": "cinema",
      "section": "course",
      "url": "https://chapaev.media/courses/4",
      "img": "https://api.chapaev.media/storage/course/4/detail_picture-3571cadba8d986e6e8be76281d090fa4.jpg"
    },
    {
      "title": "Маргарита Барская. Амазонка детского кино",
      "type": "cinema",
      "section": "course",
      "url": "https://chapaev.media/courses/9",
      "img": "https://api.chapaev.media/storage/course/9/detail_picture-38851d832a5f4c96f8d70f0b059a92e3.jpg"
    },
    {
      "title": "Балабанов: крупным планом",
      "type": "cinema",
      "section": "course",
      "url": "https://chapaev.media/courses/11",
      "img": "https://api.chapaev.media/storage/course/11/detail_picture-8d340265fe5098efeea7e34787cd3f33.jpg"
    },
    {
      "title": "Русская революция как зеркало",
      "type": "cinema",
      "section": "course",
      "url": "https://chapaev.media/courses/21",
      "img": "https://api.chapaev.media/storage/course/21/detail_picture-f0c426ba5e5322a65842c00f6a0652d4.jpg"
    },
    {
      "title": "Ветеран на экране",
      "type": "cinema",
      "section": "course",
      "url": "https://chapaev.media/courses/26",
      "img": "https://api.chapaev.media/storage/course/26/detail_picture-8521b312d86cd964f6138276ed6b9522.jpg"
    },
    {
      "title": "Путеводитель по зарубежной популярной музыке",
      "type": "music",
      "section": "article",
      "url": "https://arzamas.academy/materials/1318",
      "img": ""
    },
    {
      "title": "Что можно услышать в классической музыке",
      "type": "music",
      "section": "article",
      "url": "https://arzamas.academy/materials/1359",
      "img": ""
    },
    {
      "title": "Рубрика \"Фотопроект\" от Bird In Flight",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/fotoproect",
      "img": ""
    },
    {
      "title": "Рубрика \"Почему это шедевр\" от Bird In Flight",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/pochemu_eto_shedevr",
      "img": ""
    },
    {
      "title": "Рубрика \"Почему это шедевр\" от Bird In Flight",
      "type": "contemporary",
      "section": "article",
      "url": "https://birdinflight.com/ru/pochemu_eto_shedevr",
      "img": ""
    },
    {
      "title": "Рубрика \"Почему это шедевр\" от Bird In Flight",
      "type": "paintings",
      "section": "article",
      "url": "https://birdinflight.com/ru/pochemu_eto_shedevr",
      "img": ""
    },
    {
      "title": "Раздел \"фотография\" на Losko",
      "type": "photography",
      "section": "article",
      "url": "https://losko.ru/category/photography/",
      "img": ""
    },
    {
      "title": "Раздел \"архитектура\" на Losko",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/category/architecture/",
      "img": ""
    },
    {
      "title": "Эдвард Хоппер — архитектура одиночества",
      "type": "paintings",
      "section": "article",
      "url": "https://losko.ru/edward-hopper-biography/",
      "img": "https://losko.ru/wp-content/uploads/2018/11/270714.jpg"
    },
    {
      "title": "Фрэнк Ллойд Райт — отец органической архитектуры",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/frank-lloyd-wright/",
      "img": "https://losko.ru/wp-content/uploads/2018/10/DmtJ_S2VsAUjrK4.jpg"
    },
    {
      "title": "Норман Фостер — архитектор будущего",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/norman-foster/",
      "img": "https://losko.ru/wp-content/uploads/2018/07/photo-1514557718210-26e452f8fab0-1660x1107.jpeg"
    },
    {
      "title": "Ренцо Пиано — основатель стиля хай-тек в архитектуре",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/renzo-piano/",
      "img": "https://losko.ru/wp-content/uploads/2018/06/201704_DE_MAI_01-RT-web-2.jpg"
    },
    {
      "title": "Оскар Нимейер — мастер железобетонных кривых",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/oscar-niemeyer-biography/",
      "img": "https://losko.ru/wp-content/uploads/2018/06/Niemeyer-Cultural-Center-Aviles-by-Oscar-Niemeyer-Yellowtrace-01.jpg"
    },
    {
      "title": "Анри Картье-Брессон — легенда уличной фотографии",
      "type": "photography",
      "section": "article",
      "url": "https://losko.ru/henri-cartier-bresson-biography/",
      "img": "https://losko.ru/wp-content/uploads/2018/01/image.jpeg"
    },
    {
      "title": "Сол Лейтер — художник и пионер цветной фотографии",
      "type": "photography",
      "section": "article",
      "url": "https://losko.ru/saul-leiter/",
      "img": "https://losko.ru/wp-content/uploads/2017/10/SaulLeiter01.jpg"
    },
    {
      "title": "Фрэнк Гери — экспрессивный гений деконструктивизма",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/frank-gehry/",
      "img": "https://losko.ru/wp-content/uploads/2017/07/FullSizeRender-6-10.jpg"
    },
    {
      "title": "Алвар Аалто — эталон скандинавской архитектуры",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/alvar-aalto-biography/",
      "img": "https://losko.ru/wp-content/uploads/2017/04/avanto_chapelofsaintlawrence_1_tuomasuusheimo-1660x1106.jpg"
    },
    {
      "title": "Самый дорогой художник современности Дэвид Хокни: «Я предпочитаю жить в цвете!»",
      "type": "paintings",
      "section": "article",
      "url": "https://losko.ru/david-hockney/",
      "img": "https://losko.ru/wp-content/uploads/2019/08/Hockney-1660x1178.jpg"
    },
    {
      "title": "Биография Клаудио Сильвестрина",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/claudio-silvestrin-biography/",
      "img": "https://losko.ru/wp-content/uploads/2017/04/claudio.jpg"
    },
    {
      "title": "Заха Хадид: «творчество — это способ осмысления мира»",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/zaha-hadid-biography/",
      "img": "https://losko.ru/wp-content/uploads/2017/03/screenshot.jpg"
    },
    {
      "title": "Андреас Гурски: самый дорогой фотограф современности",
      "type": "photography",
      "section": "article",
      "url": "https://losko.ru/andreas-gursky/",
      "img": "https://losko.ru/wp-content/uploads/2016/12/00-andreas-gursky-k20-p.jpg"
    },
    {
      "title": "Ле Корбюзье — гениальный новатор в современной архитектуре",
      "type": "architecture",
      "section": "article",
      "url": "https://losko.ru/le-corbusier-biography/",
      "img": "https://losko.ru/wp-content/uploads/2016/12/image-2-1660x1237.jpg"
    },
    {
      "title": "Любовь и эротика в сталинских комедиях",
      "type": "cinema",
      "section": "article",
      "url": "https://arzamas.academy/materials/967",
      "img": "https://cdn-s-static.arzamas.academy/uploads/ckeditor/pictures/5241/content_660.jpg"
    },
    {
      "title": "Фотографии Яна Артюс-Бертрана",
      "type": "photography",
      "section": "article",
      "url": "http://www.outshoot.ru/aerial-survey/1935/#more-1935",
      "img": "http://www.outshoot.ru/wp-content/uploads/2011/05/aero1.jpg"
    },
    {
      "title": "62 самых необычных и невероятных здания в мире",
      "type": "architecture",
      "section": "article",
      "url": "https://pozitiv-news.ru/mir/62-samyih-neobyichnyih-i-neveroyatnyih-zdaniya-v-mire.html",
      "img": "https://pozitiv-news.ru/wp-content/uploads/2011/04/0124.jpg"
    },
    {
      "title": "Брызги и капли на снимках Маркуса Ройгельса",
      "type": "photography",
      "section": "article",
      "url": "https://bigpicture.ru/?p=141155",
      "img": "https://bigpicture.ru/wp-content/uploads/2011/04/Temp167.jpg"
    },
    {
      "title": "Фотографии Марка Моусона",
      "type": "photography",
      "section": "article",
      "url": "http://www.spletnik.ru/blogs/kruto/19856_mark_mouson",
      "img": ""
    },
    {
      "title": "Великие зарубежные кинорежиссеры и их лучшие фильмы",
      "type": "cinema",
      "section": "article",
      "url": "http://media-shoot.ru/publ/16-1-0-385",
      "img": ""
    },
    {
      "title": "Как социолог смотрит кино",
      "type": "cinema",
      "section": "article",
      "url": "https://arzamas.academy/materials/937",
      "img": ""
    },
    {
      "title": "80 блогов о кино",
      "type": "cinema",
      "section": "article",
      "url": "http://www.lookatme.ru/mag/live/experience-news/122709-kino-na-tumlbr",
      "img": ""
    },
    {
      "title": "Величайшие хип-хоп-композиции",
      "type": "music",
      "section": "article",
      "url": "https://digitaldreamdoor.com/pages/best_rap-oldsch.html",
      "img": ""
    },
    {
      "title": "Топ джазовых стандартов",
      "type": "music",
      "section": "article",
      "url": "https://uk.askmen.com/top_10/entertainment/top-10-jazz-standards.html",
      "img": ""
    },
    {
      "title": "Декларация независимости: 20 лет американского инди-кино",
      "type": "cinema",
      "section": "article",
      "url": "http://www.lookatme.ru/mag/archive/experience-interview/176131-20-years-of-indie-filmmaking-in-screenshots",
      "img": ""
    },
    {
      "title": "15 запоминающихся новелл из киноальманахов",
      "type": "cinema",
      "section": "article",
      "url": "http://www.lookatme.ru/mag/archive/experience-interview/176687-15-notable-short-films",
      "img": ""
    },
    {
      "title": "Список лучших японских мультфильмов",
      "type": "cinema",
      "section": "article",
      "url": "http://www.lookatme.ru/mag/how-to/tops/191733-anime",
      "img": ""
    },
    {
      "title": "20 книг, которые почти невозможно экранизировать",
      "type": "cinema",
      "section": "article",
      "url": "https://inosmi.ru/world/20131101/214366919.html",
      "img": ""
    },
    {
      "title": "30 лет после Чернобыля",
      "type": "photography",
      "section": "article",
      "url": "https://www.theatlantic.com/photo/2016/04/still-cleaning-up-30-years-after-the-chernobyl-disaster/476748/",
      "img": ""
    },
    {
      "title": "Перечень фильмов, рекомендованных к просмотру студентам ВГИК",
      "type": "cinema",
      "section": "article",
      "url": "http://artmoviebase.com/a9",
      "img": ""
    },
    {
      "title": "Приднестрованные: Выжить в непризнанной республике",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/fotoproect/20180313-transnistria.html",
      "img": ""
    },
    {
      "title": "Визуальные отсылки в фильме \"Форма Воды",
      "type": "cinema",
      "section": "article",
      "url": "https://birdinflight.com/ru/novosti/20180313-video-shape-of-water-references.html",
      "img": ""
    },
    {
      "title": "Эволюция визуальных эффектов в кино с 1920-х годов",
      "type": "cinema",
      "section": "article",
      "url": "https://birdinflight.com/ru/novosti/industriya/20180301-vfx-oscars-movies-video.html",
      "img": ""
    },
    {
      "title": "Личный архив: Фотографы Magnum — о снимках, которые никто не видел",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/resursy/fotografy-magnum-pokazali-lyubimye-snimki-kotorye-ranee-ne-publikovali.html",
      "img": ""
    },
    {
      "title": "Переломный момент: Фотографы Magnum — о судьбоносных кадрах",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/opyt/perelomnyj-moment-fotografy-magnum-o-sudbonosnyh-kadrah.html",
      "img": ""
    },
    {
      "title": "Победители конкурса дрон-фотографии SkyPixel 2016",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/resursy/20170127-skypixel-contest.html",
      "img": ""
    },
    {
      "title": "Победители конкурса Best of Russia 2016",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/resursy/20170110-best-of-russia-2016-winners.html",
      "img": ""
    },
    {
      "title": "Обладатель Пулитцера Деннис Чемберлин: «Мои цветные фотографии довольно монохромны»",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/opyt/20161128-dennis-chemberlen.html",
      "img": ""
    },
    {
      "title": "Роджер Баллен: «Фотография была моим хобби. Лет до пятидесяти»",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/opyt/rodzher-ballen-fotografiya-byla-moim-hobbi-let-do-pyatidesyati.html",
      "img": ""
    },
    {
      "title": "Майк Келли скомбинировал снимки взлетающих самолетов в аэропортах по всему миру",
      "type": "photography",
      "section": "article",
      "url": "https://birdinflight.com/ru/vdohnovenie/resursy/20161019-airportraits.html",
      "img": ""
    },
    {
      "title": "Малевич наш: Все, что вы должны знать о гении",
      "type": "paintings",
      "section": "article",
      "url": "https://birdinflight.com/ru/pochemu_eto_shedevr/20160926-krasnyj-kvadrat-kazimira-malevicha.html",
      "img": ""
    },
    {
      "title": "Жилье нового человека: Какой была жизнь в домах эпохи конструктивизма",
      "type": "architecture",
      "section": "article",
      "url": "https://birdinflight.com/ru/mir/20160921-zhile-novogo-cheloveka-nedolgaya-zhizn-konstruktivizma.html",
      "img": ""
    },
    {
      "title": "«Оранжевое, красное, жёлтое» Марка Ротко",
      "type": "paintings",
      "section": "article",
      "url": "https://birdinflight.com/ru/pochemu_eto_shedevr/20160427-why-masterpiece-rothko-orange-red-yellow.html?utm_source=VK&utm_medium=post&utm_content=BiF&utm_campaign=VK_post_old",
      "img": ""
    },
    {
      "title": "Как Кубрик воплощал в жизнь Барри Линдона",
      "type": "cinema",
      "section": "article",
      "url": "https://cinephiliabeyond.org/stanley-kubricks-barry-lyndon/",
      "img": ""
    },
    {
      "title": "Японское кино для начинающих",
      "type": "cinema",
      "section": "article",
      "url": "https://arzamas.academy/mag/119-japan-cinema",
      "img": ""
    },
    {
      "title": "Аниме об истории Японии",
      "type": "cinema",
      "section": "article",
      "url": "https://arzamas.academy/materials/758",
      "img": ""
    },
    {
      "title": "Секрет величия главных произведений японского искусства",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/materials/727",
      "img": ""
    },
    {
      "title": "Что смотреть у корейских классиков и их учеников",
      "type": "cinema",
      "section": "article",
      "url": "https://www.kinopoisk.ru/media/article/3207975/",
      "img": ""
    },
    {
      "title": "10 песен, под которые просыпаются астронавты",
      "type": "music",
      "section": "article",
      "url": "https://arzamas.academy/mag/404-groundcontrol",
      "img": ""
    },
    {
      "title": "Грузинский авангард в шести картинах и двух эскизах",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/mag/408-gamardzhoba",
      "img": ""
    },
    {
      "title": "Мебель, которую придумали великие архитекторы",
      "type": "architecture",
      "section": "article",
      "url": "https://arzamas.academy/mag/391-chairs",
      "img": ""
    },
    {
      "title": "Как Ницше, Аполлинер и прерафаэлиты изменили архитектуру",
      "type": "architecture",
      "section": "article",
      "url": "https://arzamas.academy/mag/399-arch_books",
      "img": ""
    },
    {
      "title": "О чем рассказывает фасад готического собора",
      "type": "architecture",
      "section": "article",
      "url": "https://arzamas.academy/mag/403-fasad",
      "img": ""
    },
    {
      "title": "Фасадизм",
      "type": "architecture",
      "section": "article",
      "url": "https://strelkamag.com/ru/article/vocabulary-facadism",
      "img": ""
    },
    {
      "title": "10 знаковых модернистских зданий Куйбышева",
      "type": "architecture",
      "section": "article",
      "url": "https://sovietarch.strelka.com/ru/city/samara",
      "img": ""
    },
    {
      "title": "12 величайших проектов модернизма в СССР",
      "type": "architecture",
      "section": "article",
      "url": "https://daily.afisha.ru/cities/4204-ot-kafe-v-palange-do-plana-zelenograda-10-velichayshih-proektov-modernizma-v-sssr/",
      "img": ""
    },
    {
      "title": "Kleinewelt Architekten: «В каждом проекте мы стараемся чинить мир»",
      "type": "architecture",
      "section": "article",
      "url": "https://archi.ru/russia/72212/kleinewelt-architekten-v-kazhdom-proekte-my-staraemsya-chinit-mir",
      "img": ""
    },
    {
      "title": "Дадаизм",
      "type": "paintings",
      "section": "article",
      "url": "https://postnauka.ru/faq/70906",
      "img": ""
    },
    {
      "title": "Легендарные скульпторы-шестидесятники, входившие в группу «ЛеСС», снова вместе",
      "type": "paintings",
      "section": "article",
      "url": "http://www.theartnewspaper.ru/posts/1960/",
      "img": ""
    },
    {
      "title": "Музыкальные способности",
      "type": "music",
      "section": "article",
      "url": "https://postnauka.ru/faq/72316",
      "img": ""
    },
    {
      "title": "Как смотреть голландский натюрморт",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/mag/406-naturemorte",
      "img": ""
    },
    {
      "title": "Известные искусствоведческие работы одной серии",
      "type": "paintings",
      "section": "book",
      "url": "https://vk.com/wall-79876841_913",
      "img": "https://pp.userapi.com/6kf31NzsDo02NeaEHzysPxDFbnOX_AgPG_yxcw/HaNXLO5Jfog.jpg"
    },
    {
      "title": "Известные искусствоведческие работы одной серии",
      "type": "contemporary",
      "section": "book",
      "url": "https://vk.com/wall-79876841_913",
      "img": "https://pp.userapi.com/6kf31NzsDo02NeaEHzysPxDFbnOX_AgPG_yxcw/HaNXLO5Jfog.jpg"
    },
    {
      "title": "Краткий гид по миру американских инди-комедий",
      "type": "cinema",
      "section": "article",
      "url": "https://daily.afisha.ru/cinema/3333-ot-andersona-do-baumbaha-kratkiy-gid-po-miru-amerikanskoy-nezavisimoy-komedii/?utm_source=afishavk&utm_medium=social&utm_campaign=sostavili-kratkiy--no-poznavatelnyy-gid",
      "img": ""
    },
    {
      "title": "History of Music. Archive.",
      "type": "music",
      "section": "book",
      "url": "https://vk.com/wall-48369111_13073",
      "img": ""
    },
    {
      "title": "Рубрика \"Икона дня",
      "type": "paintings",
      "section": "article",
      "url": "https://arzamas.academy/micro/ikona",
      "img": ""
    },
    {
      "title": "Дзига и его братья",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=qdezIx9E1QE",
      "img": ""
    },
    {
      "title": "Гордон - Диалоги: Интерпретация в живописи",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=LbPKClQ23N0",
      "img": ""
    },
    {
      "title": "Культурный слой. Фотоандеграунд.",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=bF02sOoQQ7o",
      "img": ""
    },
    {
      "title": "Кинопробы к фильму \"400 ударов\" Франсуа Трюффо",
      "type": "cinema",
      "section": "video",
      "url": "https://vk.com/video-54363791_166416364",
      "img": ""
    },
    {
      "title": "Вадим Пискарёв. Мысли о фотографии",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=Z0_wsx5LbPE",
      "img": ""
    },
    {
      "title": "Советский авангард в 30-е годы",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=wxMV4Yx8Lio",
      "img": ""
    },
    {
      "title": "Советский авангард в 30-е годы",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=wxMV4Yx8Lio",
      "img": ""
    },
    {
      "title": "Советский авангард в 30-е годы",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=wxMV4Yx8Lio",
      "img": ""
    },
    {
      "title": "Советский авангард в 30-е годы",
      "type": "architecture",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=wxMV4Yx8Lio",
      "img": ""
    },
    {
      "title": "Первые цветные фотографии Российской империи",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=yQJf14c7GJo",
      "img": ""
    },
    {
      "title": "Авангардисты у власти. Культурное строительство в первые послереволюционные годы",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=VDvQVay0dSI",
      "img": ""
    },
    {
      "title": "Региональные школы авангарда в начале 1920-х годов",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tV0an4IoNZQ",
      "img": ""
    },
    {
      "title": "Догадки, прорывы, предвидения авангарда",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=dDQ8JNMy2zI",
      "img": ""
    },
    {
      "title": "Абстракция и беспредметность в русском авангарде",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=jtQ8MOjJ9MU",
      "img": ""
    },
    {
      "title": "Михаил Ларионов и Наталья Гончарова. Годы в России.",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=RMhNac7bJOg",
      "img": ""
    },
    {
      "title": "„Бубновый валет“ и „Союз молодежи“",
      "type": "paintings",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tM8o99fhQz4",
      "img": ""
    },
    {
      "title": "Авангардисты у власти. Культурное строительство в первые послереволюционные годы",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=VDvQVay0dSI",
      "img": ""
    },
    {
      "title": "Региональные школы авангарда в начале 1920-х годов",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tV0an4IoNZQ",
      "img": ""
    },
    {
      "title": "Догадки, прорывы, предвидения авангарда",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=dDQ8JNMy2zI",
      "img": ""
    },
    {
      "title": "Абстракция и беспредметность в русском авангарде",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=jtQ8MOjJ9MU",
      "img": ""
    },
    {
      "title": "„Бубновый валет“ и „Союз молодежи“",
      "type": "cinema",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tM8o99fhQz4",
      "img": ""
    },
    {
      "title": "Весь Шекспир",
      "type": "theater",
      "section": "course",
      "url": "https://arzamas.academy/courses/37",
      "img": "https://cdn-s-static.arzamas.academy/storage/course/44/hd_background_detail_picture-39757c6a-766c-4809-9d9f-0fc2e81e9638.jpg"
    },
    {
      "title": "Непрограммные пьесы Шекспира",
      "type": "theater",
      "section": "article",
      "url": "https://arzamas.academy/materials/1038",
      "img": ""
    },
    {
      "title": "Авангардисты у власти. Культурное строительство в первые послереволюционные годы",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=VDvQVay0dSI",
      "img": ""
    },
    {
      "title": "Региональные школы авангарда в начале 1920-х годов",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tV0an4IoNZQ",
      "img": ""
    },
    {
      "title": "Догадки, прорывы, предвидения авангарда",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=dDQ8JNMy2zI",
      "img": ""
    },
    {
      "title": "Абстракция и беспредметность в русском авангарде",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=jtQ8MOjJ9MU",
      "img": ""
    },
    {
      "title": "„Бубновый валет“ и „Союз молодежи“",
      "type": "photography",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tM8o99fhQz4",
      "img": ""
    },
    {
      "title": "Авангардисты у власти. Культурное строительство в первые послереволюционные годы",
      "type": "architecture",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=VDvQVay0dSI",
      "img": ""
    },
    {
      "title": "Региональные школы авангарда в начале 1920-х годов",
      "type": "architecture",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tV0an4IoNZQ",
      "img": ""
    },
    {
      "title": "Догадки, прорывы, предвидения авангарда",
      "type": "architecture",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=dDQ8JNMy2zI",
      "img": ""
    },
    {
      "title": "Абстракция и беспредметность в русском авангарде",
      "type": "architecture",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=jtQ8MOjJ9MU",
      "img": ""
    },
    {
      "title": "„Бубновый валет“ и „Союз молодежи“",
      "type": "architecture",
      "section": "video",
      "url": "https://www.youtube.com/watch?v=tM8o99fhQz4",
      "img": ""
    }
  ]);

  const [content, setContent] = useState([]);
  const [vocabulary] = useState([
    { id: 'course', ru: 'Курсы', en:'Courses' },
    { id: 'video', ru: 'Видео', en:'Video' },
    { id: 'article', ru: 'Статьи', en: 'Articles' },
    { id: 'book', ru: 'Книги', en: 'Books' },
    { id: 'architecture', ru: 'Архитектура', en: 'Architecture' },
    { id: 'cinema', ru: 'Кинематограф', en:'Cinema' },
    { id: 'contemporary', ru: 'Современное искусство', en :'Contemporary Art' },
    { id: 'music', ru: 'Музыка', en:'Music' },
    { id: 'paintings', ru: 'Живопись и скульптура', en:'Painting and sculpture' },
    { id: 'photography', ru: 'Фотография', en:'Photography' },
    { id: 'theater', ru: 'Театр', en:'Theater' },
  ]);

  useEffect(() => {
    setContent(materials.filter(
      (material) => {
        return material.type === 'architecture'
      }
    ))
  }, []);

  let sections = [];
  let types = [];

  materials.map((item) => {
    if (sections.indexOf(item.section) < 0) {
      sections.push(item.section);
    }

    if (types.indexOf(item.type) < 0) {
      types.push(item.type);
    }
  })

  let filteredMaterials = materials;

  const filterContent = filterType => {
    setContent([]);
    filteredMaterials = materials.filter(
      (material) => {
        return material.type === filterType
      }
    )
    setContent(filteredMaterials);
  }

  const translate = (language, word) => {
    if (vocabulary.filter(el => el.id === word).length > 0) {
      return vocabulary.filter(el => el.id === word)[0][language];
    }
    else {
      return word;      
    }
  }

  return (
    <Context.Provider value={{
      filterContent, translate
    }}>
      <div>
        <div className="uk-container">
          <h1 className="uk-heading-small uk-text-center uk-margin-top">Art-Guide</h1>
        </div>
        <NavBar types={types.sort()} vocabulary={vocabulary} />
        <div className="uk-container">
          <div className="uk-container-expand">
            <ul uk-accordion="multiple: true">
              {sections.map((item, index) => {
                if (content.filter(material => material.section === item).length > 0) {
                  return (
                    <Section key={item + index}
                      title={item}
                      cards={content.filter(material => material.section === item)}
                      count={content.filter(material => material.section === item).length}
                      vocabulary={vocabulary}
                    ></Section>

                  )
                }
              }
              )}

            </ul>
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}
