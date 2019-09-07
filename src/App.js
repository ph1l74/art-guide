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
    return vocabulary.filter(el => el.id === word)[0][language];
  }

  return (
    <Context.Provider value={{
      filterContent, translate
    }}>
      <div>
        <div className="uk-container">
          <h1 class="uk-heading-small uk-text-center uk-margin-top">Art-Guide</h1>
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
