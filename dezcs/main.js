const config = {
  discordId: "1244703247260979301",
  links: [
    { label: "Roblox", url: "" },
    { label: "GitHub", url: "" },
    { label: "Discord", url: "" },
    { label: "YouTube", url: "" }
  ]
};

const text = {
  tr: {
    "nav.skills": "diller",
    "nav.projects": "projeler",
    "hero.line": "Oyun yapıyorum, yapay zekâ araçları yazıyorum, kalan vaktimde de Arduino'yla uğraşıyorum.",
    "hero.sub": "Roblox'ta Luau, Unity'de C#, geri kalan her şeyde Python.",
    "skills.title": "diller",
    "skills.note": "kendime verdiğim notlar",
    "projects.title": "projeler",
    "st.live": "yayında",
    "st.soon": "yakında",
    "p1.kind": "Roblox oyunu",
    "p1.desc": "Herkesin kendine ait bir kuralının olduğu, 30'dan fazla olayda hayatta kalmaya çalıştığımız bir oyun. Kuralını bozan can kaybeder, son kalan kazanır.",
    "p1.link": "Roblox'ta oyna",
    "p2.title": "İsimsiz su oyunu",
    "p2.kind": "Steam için co-op oyun",
    "p2.desc": "Kıyametten sonra iki kişi tuhaf insanlara su satıyoruz. Kazandıkça makine ve upgrader kurup tesisi büyütüyoruz: şişeyi doldur, temizle, değerini artır, sat.",
    "p2.tags": "Unity / C# / Netcode / 2 oyuncu",
    "p3.kind": "Kali Linux için siber güvenlik yapay zekâsı",
    "p3.desc": "Terminalde çalışan bir asistan. Ne yapmak istediğini yazıyorsun, komutu öneriyor. Tarama bitince açık portları okuyor, riskleri CVE ve ATT&CK karşılıklarıyla eşleştiriyor, savunma adımlarıyla birlikte rapor çıkarıyor.",
    "p4.kind": "CNC makineleri için yapay zekâ",
    "p4.desc": "Ne kesmek istediğini düz yazıyla söylüyorsun (\"ortaya 30x20 cep aç, 4 mm derin\"). Kontur G-kodunu yazıyor, işi adım adım plana döküyor ve kesimi 3B olarak simüle ediyor. Model bilgisayarda, Ollama üzerinde çalışıyor.",
    "snd.off": "ses kapalı",
    "snd.on": "ses açık",
    "foot.top": "yukarı",
    "dc.online": "çevrimiçi",
    "dc.idle": "boşta",
    "dc.dnd": "rahatsız etmeyin",
    "dc.offline": "çevrimdışı",
    "dc.0": "{} oynuyor",
    "dc.1": "{} yayınında",
    "dc.2": "{} dinliyor",
    "dc.3": "{} izliyor",
    "dc.5": "{} yarışıyor"
  },
  en: {
    "nav.skills": "languages",
    "nav.projects": "projects",
    "hero.line": "I make games, build AI tools, and spend the rest of my time on Arduino stuff.",
    "hero.sub": "Luau on Roblox, C# in Unity, Python for everything else.",
    "skills.title": "languages",
    "skills.note": "self-rated",
    "projects.title": "projects",
    "st.live": "live",
    "st.soon": "coming soon",
    "p1.kind": "Roblox game",
    "p1.desc": "Everyone gets their own rule and tries to survive 30+ events. Break yours and you lose a heart. Last one standing wins.",
    "p1.link": "Play on Roblox",
    "p2.title": "Untitled water game",
    "p2.kind": "Co-op game for Steam",
    "p2.desc": "Two people selling water to strange folks after the apocalypse. Earn money, place machines and upgraders, grow the plant: fill the bottle, clean it, make it worth more, sell it.",
    "p2.tags": "Unity / C# / Netcode / 2 players",
    "p3.kind": "Cybersecurity AI for Kali Linux",
    "p3.desc": "An assistant that lives in the terminal. Tell it what you want to do and it suggests the command. After a scan it reads the open ports, maps the risks to CVE and ATT&CK, and writes a report with the defense steps.",
    "p4.kind": "AI for CNC machines",
    "p4.desc": "You describe the cut in plain words (\"30x20 pocket in the middle, 4 mm deep\"). Kontur writes the G-code, breaks the job into a plan and simulates the cut in 3D. The model runs locally on Ollama.",
    "snd.off": "sound off",
    "snd.on": "sound on",
    "foot.top": "top",
    "dc.online": "online",
    "dc.idle": "idle",
    "dc.dnd": "do not disturb",
    "dc.offline": "offline",
    "dc.0": "playing {}",
    "dc.1": "streaming {}",
    "dc.2": "listening to {}",
    "dc.3": "watching {}",
    "dc.5": "competing in {}"
  }
};

let lang = "tr";
let presence = null;

const t = key => text[lang][key] ?? text.tr[key] ?? key;

function setLang(next) {
  lang = text[next] ? next : "tr";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-t]").forEach(el => {
    const key = el.classList.contains("snd") ? (el.classList.contains("on") ? "snd.on" : "snd.off") : el.dataset.t;
    el.textContent = t(key);
  });
  document.querySelectorAll("[data-lang]").forEach(b => b.classList.toggle("on", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (e) {}
  if (presence) showPresence(presence);
}

function startLang() {
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  const guess = (navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en";
  setLang(saved || guess);
  document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
}

const glyphs = {
  d: ["....#", "....#", ".####", "#...#", "#...#", "#...#", ".####"],
  e: [".....", ".....", ".###.", "#...#", "#####", "#....", ".###."],
  z: [".....", ".....", "#####", "...#.", "..#..", ".#...", "#####"],
  ".": [".", ".", ".", ".", ".", ".", "#"],
  c: [".....", ".....", ".####", "#....", "#....", "#....", ".####"],
  s: [".....", ".....", ".####", "#....", ".###.", "....#", "####."]
};

function drawLogo() {
  const svg = document.getElementById("logo");
  const ns = "http://www.w3.org/2000/svg";
  const cells = [];
  let x = 0;
  for (const ch of "dez.cs") {
    const g = glyphs[ch];
    g.forEach((row, y) => {
      [...row].forEach((c, i) => { if (c === "#") cells.push([x + i, y]); });
    });
    x += g[0].length + 1;
  }
  const width = x;
  svg.setAttribute("viewBox", `0 0 ${width} 8`);
  svg.setAttribute("shape-rendering", "crispEdges");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const add = (cx, cy, cls, delay) => {
    const r = document.createElementNS(ns, "rect");
    r.setAttribute("x", cx);
    r.setAttribute("y", cy);
    r.setAttribute("width", 1);
    r.setAttribute("height", 1);
    r.setAttribute("class", cls);
    r.style.setProperty("--o", cx);
    svg.appendChild(r);
    if (!still) r.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 1, delay, fill: "backwards" });
  };
  cells.forEach(([cx, cy]) => add(cx + 1, cy + 1, "sh", 0));
  cells.forEach(([cx, cy]) => add(cx, cy, "px", 120 + Math.random() * 520));
}

function buildSkills() {
  const box = document.querySelector(".skills");
  box.querySelectorAll(".sk").forEach(row => {
    const filled = Math.round(Number(row.dataset.v) / 5);
    const segs = row.querySelector(".segs");
    for (let k = 0; k < 20; k++) {
      const i = document.createElement("i");
      i.style.setProperty("--k", k);
      if (k < filled) i.className = "f";
      segs.appendChild(i);
    }
  });
  const seen = new IntersectionObserver(entries => {
    if (entries.some(e => e.isIntersecting)) {
      box.classList.add("on");
      seen.disconnect();
    }
  }, { threshold: 0.3 });
  seen.observe(box);
}

function setupVideos() {
  const figs = [...document.querySelectorAll(".media.vid")];
  const mute = except => figs.forEach(f => {
    if (f === except) return;
    f.querySelector("video").muted = true;
    const b = f.querySelector(".snd");
    b.classList.remove("on");
    b.textContent = t("snd.off");
  });
  const watch = new IntersectionObserver(entries => {
    entries.forEach(e => {
      const v = e.target.querySelector("video");
      if (e.isIntersecting && !v.dataset.hold) v.play().catch(() => {});
      else if (!e.isIntersecting) v.pause();
    });
  }, { threshold: 0.35 });
  figs.forEach(f => {
    const v = f.querySelector("video");
    const b = f.querySelector(".snd");
    const bar = f.querySelector(".bar i");
    v.addEventListener("timeupdate", () => {
      if (v.duration) bar.style.width = `${(v.currentTime / v.duration) * 100}%`;
    });
    v.addEventListener("click", () => {
      if (v.paused) {
        delete v.dataset.hold;
        v.play().catch(() => {});
      } else {
        v.dataset.hold = "1";
        v.pause();
      }
    });
    b.addEventListener("click", () => {
      const on = v.muted;
      if (on) mute(f);
      v.muted = !on;
      b.classList.toggle("on", on);
      b.textContent = t(on ? "snd.on" : "snd.off");
      if (on && v.paused) {
        delete v.dataset.hold;
        v.play().catch(() => {});
      }
    });
    watch.observe(f);
  });
}

function setupLinks() {
  const box = document.querySelector(".foot .links");
  config.links.filter(l => l.url).forEach(l => {
    const a = document.createElement("a");
    a.href = l.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.textContent = l.label;
    box.appendChild(a);
  });
}

function showPresence(d) {
  const row = document.querySelector(".discord");
  const dot = document.querySelector(".face .dot");
  const status = ["online", "idle", "dnd", "offline"].includes(d.discord_status) ? d.discord_status : "offline";
  let act = "";
  if (d.listening_to_spotify && d.spotify) {
    act = `Spotify: ${d.spotify.song} / ${d.spotify.artist}`;
  } else {
    const a = (d.activities || []).find(x => x.type !== 4);
    const custom = (d.activities || []).find(x => x.type === 4);
    if (a && text[lang][`dc.${a.type}`]) act = t(`dc.${a.type}`).replace("{}", a.name);
    else if (custom && custom.state) act = custom.state;
  }
  row.querySelector("i").className = `st-${status}`;
  row.querySelector(".ds").textContent = `discord: ${t(`dc.${status}`)}`;
  row.querySelector(".da").textContent = act;
  dot.className = `dot st-${status}`;
  row.hidden = false;
  dot.hidden = false;
}

async function loadPresence() {
  try {
    const r = await fetch(`https://api.lanyard.rest/v1/users/${config.discordId}`);
    const j = await r.json();
    if (j.success && j.data) {
      presence = j.data;
      showPresence(presence);
    }
  } catch (e) {}
}

function startPresence() {
  if (!config.discordId) return;
  loadPresence();
  setInterval(loadPresence, 30000);
}

drawLogo();
buildSkills();
setupVideos();
setupLinks();
startLang();
startPresence();
