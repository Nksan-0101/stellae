// 抽签数据
const fortunes = [
    {
        title: "星芒微光",
        content: "尘埃在银河间低语，微弱的星芒中隐藏着亘古的答案。",
        latin: "Pulvis in Via Lactea susurrat, responsa aeterna in tenuibus radiis latent.",
        interpretation: "你正处于一个小小的迷茫时刻，但答案早已存在。",
        advice: "保持冷静，留意身边细微的线索，你会发现隐藏的答案。"
    },
    {
        title: "命运回廊",
        content: "命运是无限延展的回廊，迷途者徘徊于光影之间，直至意识崩塌。",
        latin: "Fatum est atrium infinitum. Errantes inter lucem et umbram vagantur, donec mens concidat.",
        interpretation: "你正陷入一个反复犹豫的选择中，徘徊不前只会让你更加迷茫。",
        advice: "不要再犹豫不决，选择一个方向，并坚定地走下去。"
    },
    {
        title: "虚空低语",
        content: "虚空没有回音，只有无法言喻的冷漠与亘古的沉默。",
        latin: "Inanis non resonat. Tantum frigiditas ineffabilis et silentium aeternum manet.",
        interpretation: "你的问题暂时无法被解答，前方是未知的黑暗。",
        advice: "保持谨慎，避免贸然行动，静待时机成熟。"
    }
];

// 绑定按钮和结果容器
const drawButton = document.getElementById('drawButton');
const resultDiv = document.getElementById('result');
const title = document.getElementById('title');
const content = document.getElementById('content');
const latin = document.getElementById('latin');
const interpretation = document.getElementById('interpretation');
const advice = document.getElementById('advice');

// 点击抽签
drawButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];

    title.textContent = fortune.title;
    content.textContent = fortune.content;
    latin.textContent = fortune.latin;
    interpretation.textContent = `✨ 释意: ${fortune.interpretation}`;
    advice.textContent = `🪐 建议: ${fortune.advice}`;

    resultDiv.classList.remove('hidden');
});
