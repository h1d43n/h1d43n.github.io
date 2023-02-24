const useless = [
  "寿司の甘露煮",
  "暴れリコーダー",
  "膝から上が朝青龍なドラゴン",
  "アルミ缶の上にある瓶",
  "おかゆかけごはん",
  "珪藻土バスマットの刺身",
  "ハイチュウの姿焼き",
  "コストコのちくわ",
  "けん玉っぽい髪型",
  "ルービックキューブの隙間という隙間",
  "食べられないラー油",
  "固体ムヒ",
  "水道のアクリルキーホルダー",
  "うごめくシシャモ",
];

const onLoad = () => {
  const uselessWord = useless[
    Math.floor(Math.random() * useless.length)
  ] || "意味のない文字列";

  const content = document.querySelector("#useless");
  if (content) {
    content.textContent = uselessWord;
  }
}