
const candles = document.getElementById("candles");
const counter = document.getElementById("counter");
const message = document.getElementById("message");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let extinguished = 0;

// إنشاء 19 شمعة
for (let i = 1; i <= 19; i++) {
  const candle = document.createElement("div");
  candle.className = "candle";
  candle.innerHTML = '<span class="flame"></span>';

  candle.addEventListener("click", () => {
    if (candle.classList.contains("off")) return;

    candle.classList.add("off");
    extinguished++;

    counter.textContent =
      `أطفأتِ ${extinguished} من 19 شمعة ✨`;

    if (extinguished === 19) {
      counter.textContent =
        "🎉 أمنيتك تحققت! عيد ميلاد سعيد أشواق! ❤️";

      message.classList.remove("hidden");
    }
  });

  candles.appendChild(candle);
}

// تشغيل وإيقاف الموسيقى
musicBtn.addEventListener("click", async () => {
  try {
    if (music.paused) {
      await music.play();
      musicBtn.textContent = "⏸️ إيقاف الموسيقى";
    } else {
      music.pause();
      musicBtn.textContent = "🎵 تشغيل الموسيقى";
    }
  } catch (error) {
    alert("تعذر تشغيل الموسيقى. تأكدي من رابط الملف.");
  }
});
