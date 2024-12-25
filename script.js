// 🌟 星辰占卜议会 - 抽签系统 🌟

// 签文数据
const fortunes = [
    // 🪐 流星签 (Stella Cadens)
    {
        title: "银光微芒",
        content: "在遥远的宇宙深处，银光微微颤动，传递微弱的希望。",
        latin: "Argentea lux in profundis tremit, spem tenuem transmittens.",
        interpretation: "你可能正在经历小小的迷茫，但机会正悄然靠近。",
        advice: "不要急于求成，耐心等待机会的降临。"
    },
    {
        title: "晨曦星语",
        content: "晨曦破晓之前，群星轻声低语，未来的碎片隐藏其中。",
        latin: "Ante auroram, stellae susurrant, fragmenta futuri latent.",
        interpretation: "未来的轮廓逐渐显现，但仍需要你细心观察。",
        advice: "保持敏锐，抓住生活中细小的提示。"
    },
    {
        title: "风中呢喃",
        content: "夜风轻拂，呢喃穿过时间的缝隙，留下一个未解的谜团。",
        latin: "Aura noctis sibilat, per intervalla temporis, enigma relinquit.",
        interpretation: "你即将面临一个微妙的抉择，但线索尚未完全显现。",
        advice: "耐心等待，不要被表面现象所迷惑。"
    },

    // 💫 星核签 (Nucleus Stellarum)
    {
        title: "群星静默",
        content: "群星之上，沉默笼罩苍穹，真相往往藏在无声之中。",
        latin: "Super stellas, silentium caelum operit, veritas in silentio latet.",
        interpretation: "你面临一个重要的决定，需要内心的宁静来感受答案。",
        advice: "远离外界喧嚣，独自思考，答案就在内心深处。"
    },
    {
        title: "命运枢纽",
        content: "命运的齿轮缓缓转动，错过一次转折，可能失去一扇门。",
        latin: "Fatum lente rotat, occasio amissa ianuam claudit.",
        interpretation: "你正站在一个重要的分岔口，时间紧迫。",
        advice: "迅速做出决定，拖延将带来不可逆的结果。"
    },
    {
        title: "命运之钥",
        content: "在无尽的星空中，一把钥匙悬浮在虚空，它能打开一扇通往未知的门。",
        latin: "In caelis infinitis, clavis pendet, ianuam ad ignotum aperiens.",
        interpretation: "一个机会正等待你去发现，但只有有准备的人才能抓住它。",
        advice: "做好准备，时机来临时果断行动。"
    },

    // 🌑 黑洞签 (Abyssus Nigrum)
    {
        title: "深渊低语",
        content: "深渊中回荡着模糊的低语，真相与危险交织其中。",
        latin: "In abysso sibilus resonat, veritas et periculum inter se miscent.",
        interpretation: "你即将接触一个不确定的领域，伴随着潜在的危险。",
        advice: "谨慎行动，不要贸然涉险。"
    },
    {
        title: "虚无之门",
        content: "一扇黑暗的门缓缓开启，通向未知的维度。",
        latin: "Porta tenebrosa aperitur, ad dimensionem ignotam ducens.",
        interpretation: "一次冒险或变化正在到来，但充满不可预知的后果。",
        advice: "做好充分的准备，确保有后路可退。"
    },
    {
        title: "黑暗之匙",
        content: "钥匙在黑暗中浮现，触碰它，可能开启，也可能封闭一切。",
        latin: "Clavis in tenebris apparet. Tangere eam potest aperire aut claudere omnia.",
        interpretation: "一个关键的抉择即将到来，充满未知。",
        advice: "深思熟虑，权衡利弊，再做决定。"
    }
];

// 🌠 绑定 DOM 元素
const drawButton = document.getElementById('drawButton');
const resultDiv = document.getElementById('result');
const title = document.getElementById('title');
const content = document.getElementById('content');
const latin = document.getElementById('latin');
const interpretation = document.getElementById('interpretation');
const advice = document.getElementById('advice');

// 🎲 抽签逻辑
drawButton.addEventListener('click', () => {
    // 随机选择一个签文
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const fortune = fortunes[randomIndex];

    // 更新页面内容
    title.textContent = fortune.title;
    content.textContent = fortune.content;
    latin.textContent = fortune.latin;
    interpretation.textContent = `✨ 释意: ${fortune.interpretation}`;
    advice.textContent = `🪐 建议: ${fortune.advice}`;

    // 显示结果区域
    resultDiv.classList.remove('hidden');

    // 添加淡入动画效果
    resultDiv.style.opacity = 0;
    setTimeout(() => {
        resultDiv.style.opacity = 1;
    }, 100);
});

// 🌌 页面加载时隐藏结果区域
document.addEventListener('DOMContentLoaded', () => {
    resultDiv.classList.add('hidden');
});
