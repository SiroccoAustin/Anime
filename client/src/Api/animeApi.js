import Img2 from '../components/pages/inc/images/AttackOnTitan.jpg';

const generateAnimeData = (length) => {
  return Array.from({ length }, (_, index) => ({
    mal_id: index + 1,
    url: "https://myanimelist.net/anime/15/Eyeshield_21",
    images: Img2,
    trailer: ["Object"],
    approved: true,
    titles: ["Array"],
    title: "Eyeshield 21",
    title_english: null,
    title_japanese: "アイシールド21",
    title_synonyms: ["Array"],
    type: "TV",
    source: "Manga",
    episodes: 145,
    status: "Finished Airing",
    airing: false,
    aired: ["Object"],
    duration: "23 min per ep",
    rating: "PG-13 - Teens 13 or older",
    score: 7.91,
    scored_by: 89818,
    rank: 774,
    popularity: 1312,
    members: 185210,
    favorites: 2039,
    synopsis: "Shy, reserved, and small-statured, Deimon High School student Sena Kobayakawa is the perfect target for bullies...",
    background: "Eyeshield 21 was original scheduled to stream in North America on Toonami Jetstream...",
  }));
};

export default generateAnimeData;
