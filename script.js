const newsList = [
    "🚀 AI revolutionizing the tech industry!",
    "🌍 Global warming concerns rise in 2026.",
    "📱 New smartphone released with insane features!",
    "🎬 Upcoming blockbuster movie breaks records!",
    "⚽ Football championship finals this weekend!"
    "🚀 Silus Gaming World hits 6000! On the way to 10k!"
];

function updateNews() {
    const ticker = document.getElementById("news-ticker");
    const newsItems = newsList.map(news => `<span>${news}</span>`).join("");
    
    // Duplicate content to ensure smooth looping
    ticker.innerHTML = newsItems + newsItems;
}

updateNews();
