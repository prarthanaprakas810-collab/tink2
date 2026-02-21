// Utility functions for chaos scoring and messages
const zodiacFactors = {
    Aries: 0.8,
    Taurus: 0.4,
    Gemini: 0.6,
    Cancer: 0.5,
    Leo: 0.7,
    Virgo: 0.3,
    Libra: 0.4,
    Scorpio: 0.9,
    Sagittarius: 0.8,
    Capricorn: 0.2,
    Aquarius: 0.6,
    Pisces: 0.5
};

const roasts = [
    "Your sleep schedule and your life goals are not in talking terms.",
    "Your cholesterol is planning a rebellion, kindly negotiate.",
    "Water intake: a myth you keep repeating.",
    "Stress level: NASA called, they want their rocket back.",
    "Your diet and your kitchen have an abusive relationship.",
    "You say 'exercise' like it's a suggestion.",
    "Your zodiac sign is probably 'Messy'."
];

// Add descriptions for each zodiac sign
const zodiacDescriptions = {
    Aries: "Aries are bold, impulsive, and sometimes a little too honest. Try not to headbutt your problems.",
    Taurus: "Taurus enjoys comfort and routine. Treat yourself, but maybe not with a tub of ice cream.",
    Gemini: "Geminis are curious and chatty. Two minds are better than one, unless they disagree.",
    Cancer: "Cancer is emotional and caring. Your heart is big; remember to take care of it too.",
    Leo: "Leos love the spotlight. Shine, but don't forget sunscreen for your ego.",
    Virgo: "Virgos are perfectionists. Relax, some chaos is okay — even you can't organize the weather.",
    Libra: "Libras are all about balance. Try to keep your scales from tipping toward couch potato.",
    Scorpio: "Scorpios are intense and mysterious. A little less sting, a little more swim.",
    Sagittarius: "Sagittarius craves adventure. The world is yours; maybe pack water.",
    Capricorn: "Capricorns are disciplined and driven. Climb that mountain, but rest on the way down.",
    Aquarius: "Aquarius thinks ahead of their time. Future you might thank present you for the water intake.",
    Pisces: "Pisces is dreamy and empathetic. Keep your feet on the ground — or at least near water."
};

const improvements = [
    "Drink more water, it's free and more effective than coffee.",
    "Try sleeping before midnight (Earth time).",
    "Negotiate peace with your cholesterol.",
    "Take a walk. Your legs miss you.",
    "Say no to stress like it's a telemarketer.",
];

function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function computeChaosScore(values) {
    // values: {bp, sugar, cholesterol, sleep, stress, water, exercise, zodiac}
    let score = 0;
    score += Math.min(values.bp / 120, 1) * 20; // normalized
    score += Math.min(values.sugar / 100, 1) * 20;
    score += Math.min(values.cholesterol / 200, 1) * 20;
    score += (8 - values.sleep) * 5; // less sleep = more chaos
    score += values.stress * 3;
    score += Math.max(0, 8 - values.water) * 2;
    score += (5 - values.exercise) * 3;
    score += (zodiacFactors[values.zodiac] || 0.5) * 5;
    // random spice
    score += Math.random() * 10;
    return Math.min(Math.max(Math.round(score), 0), 100);
}

function updateMeter(element, value) {
    const fill = element.querySelector('.meter-fill');
    fill.style.width = value + '%';
}

function showLoader(show) {
    document.getElementById('loader').style.display = show ? 'block' : 'none';
}

function analyze(e) {
    e.preventDefault();
    const form = document.getElementById('dataForm');
    const formData = new FormData(form);
    // if user uploaded a file we "extract" random values to make it feel real
    const file = formData.get('file');
    if (file && file.size > 0) {
        // simulate extraction by assigning random-ish numbers
        if (!formData.get('bp')) document.getElementById('bp').value = 100 + Math.floor(Math.random()*40);
        if (!formData.get('sugar')) document.getElementById('sugar').value = 70 + Math.floor(Math.random()*60);
        if (!formData.get('cholesterol')) document.getElementById('cholesterol').value = 120 + Math.floor(Math.random()*100);
    }
    const values = {
        bp: parseFloat(formData.get('bp') || 0),
        sugar: parseFloat(formData.get('sugar') || 0),
        cholesterol: parseFloat(formData.get('cholesterol') || 0),
        sleep: parseFloat(formData.get('sleep') || 0),
        stress: parseFloat(formData.get('stress') || 0),
        water: parseFloat(formData.get('water') || 0),
        exercise: parseFloat(formData.get('exercise') || 0),
        zodiac: formData.get('zodiac')
    };

    showLoader(true);
    setTimeout(() => {
        showLoader(false);
        const score = computeChaosScore(values);
        displayResults(score, values);
    }, 1200);
}

function displayResults(score, values) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = `Drama Survival Rating: ${score}/100`;
    results.appendChild(title);

    const roast = document.createElement('p');
    roast.textContent = pickRandom(roasts);
    results.appendChild(roast);
    // meme-style comment (emoji)
    const meme = document.createElement('p');
    meme.innerHTML = "<span style='font-size:2em;'>😅🤡</span>";
    results.appendChild(meme);

    // zodiac sign details
    if (values.zodiac && zodiacDescriptions[values.zodiac]) {
        const signInfo = document.createElement('p');
        signInfo.style.fontStyle = 'italic';
        signInfo.textContent = `Sign (${values.zodiac}): ${zodiacDescriptions[values.zodiac]}`;
        results.appendChild(signInfo);
    }

    const meter = document.createElement('div');
    meter.className = 'meter';
    const fill = document.createElement('div');
    fill.className = 'meter-fill';
    meter.appendChild(fill);
    results.appendChild(meter);
    updateMeter(meter, score);

    // suggestions
    const suggestTitle = document.createElement('h3');
    suggestTitle.textContent = 'Practical Suggestions';
    results.appendChild(suggestTitle);
    const ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        const li = document.createElement('li');
        li.textContent = pickRandom(improvements);
        ul.appendChild(li);
    }
    results.appendChild(ul);

    // comparison
    const compTitle = document.createElement('h3');
    compTitle.textContent = 'Future You Comparison';
    results.appendChild(compTitle);
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    const tr = document.createElement('tr');
    ['If You Improve', 'If You Keep Going'].forEach(text => {
        const th = document.createElement('th');
        th.textContent = text;
        th.style.border = '1px solid #ccc';
        th.style.padding = '5px';
        tr.appendChild(th);
    });
    table.appendChild(tr);
    const tr2 = document.createElement('tr');
    const cell1 = document.createElement('td');
    cell1.textContent = 'Highlights: healthier skin, fewer arguments with fridge.';
    cell1.style.border = '1px solid #ccc';
    cell1.style.padding = '5px';
    const cell2 = document.createElement('td');
    cell2.textContent = 'Highlights: cholesterol climbs Everest, sleep schedule remains a mystery.';
    cell2.style.border = '1px solid #ccc';
    cell2.style.padding = '5px';
    tr2.appendChild(cell1);
    tr2.appendChild(cell2);
    table.appendChild(tr2);
    results.appendChild(table);

    results.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('dataForm').addEventListener('submit', analyze);
    const fileInput = document.getElementById('file');
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) {
            const name = fileInput.files[0].name;
            console.log('Uploaded', name);
            // could show name somewhere if desired
        }
    });
    const stressSlider = document.getElementById('stress');
    const stressLabel = document.createElement('span');
    stressSlider.parentNode.appendChild(stressLabel);
    stressLabel.style.marginLeft = '10px';
    stressLabel.textContent = stressSlider.value;
    stressSlider.addEventListener('input', () => {
        stressLabel.textContent = stressSlider.value;
    });
});