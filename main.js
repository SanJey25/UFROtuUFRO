const minRotation = -90;
const maxRotation = 90;

const slider = document.getElementById('slider');
const arrow = document.getElementById('arrow');

let isWhite = false;

document.getElementById('rerollBtn').addEventListener('click', function() {
    const randomRotation = Math.random() * (maxRotation - minRotation) + minRotation;
    document.getElementById('wheel').style.transform = `rotate(${randomRotation}deg)`;
});

document.getElementById('openBtn').addEventListener('click', function() {
    const image = document.getElementById('wheel');
    const button = document.getElementById('openBtn');

    if (isWhite) {
        image.style.filter = 'brightness(100%)';
        button.textContent = 'Close';
    } else {
        image.style.filter = 'brightness(0%) invert(100%)';
        button.textContent = 'Open';
    }

    isWhite = !isWhite;
});

slider.addEventListener('input', function() {
    const rotation = slider.value;

    arrow.style.transform = `translateX(-50%) rotate(${rotation}deg)`
});

const negative = [
    "Hot",
    "Light",
    "Fast",
    "Big",
    "Happy",
    "Up",
    "Rich",
    "Wet",
    "Clean",
    "Strong",
    "Open",
    "Full",
    "Positive",
    "Near",
    "Old",
    "Short",
    "Deep",
    "Heavy",
    "Hard",
    "Tasty",
    "Safe",
    "Alive",
    "Loud",
    "Smooth",
    "Early",
    "Wise",
    "Bitter",
    "Fresh",
    "Bright",
    "Real",
    "Famous",
    "Calm",
    "Flexible",
    "Generous",
    "Joyful",
    "Active",
    "Open-minded",
    "Loyal",
    "Creative",
    "Friendly",
    "Hopeful",
    "Fair",
    "Natural",
    "Functional",
    "Valuable",
    "Healthy",
    "Subtle",
    "Secure",
    "Sincere",
    "Thoughtful",
    "Virtuous",
    "Passionate",
    "Connected",
    "Transparent",
    "Traditional",
];

const positive = [
    "Cold",
    "Dark",
    "Slow",
    "Small",
    "Sad",
    "Down",
    "Poor",
    "Dry",
    "Dirty",
    "Weak",
    "Closed",
    "Empty",
    "Negative",
    "Far",
    "New",
    "Tall",
    "Shallow",
    "Light",
    "Soft",
    "Bland",
    "Dangerous",
    "Dead",
    "Quiet",
    "Rough",
    "Late",
    "Fragile",
    "Foolish",
    "Sweet",
    "Stale",
    "Dim",
    "Fake",
    "Unknown",
    "Agitated",
    "Rigid",
    "Greedy",
    "Miserable",
    "Passive",
    "Close-minded",
    "Disloyal",
    "Unimaginative",
    "Hostile",
    "Hopeless",
    "Unfair",
    "Artificial",
    "Dysfunctional",
    "Worthless",
    "Unhealthy",
    "Obvious",
    "Insecure",
    "Insincere",
    "Thoughtless",
    "Vicious",
    "Apathetic",
    "Disconnected",
    "Opaque",
    "Modern",
];

document.getElementById('switchBtn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * negative.length);

    document.getElementById('negativeText').innerText = negative[randomIndex];
    document.getElementById('positiveText').innerText = positive[randomIndex];
});