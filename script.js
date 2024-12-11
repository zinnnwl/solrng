const rewards = [
    { name: "Common Item", rarity: "Common", color: "#80d0a7" },
    { name: "Uncommon Item", rarity: "Uncommon", color: "#f7c31c" },
    { name: "Rare Item", rarity: "Rare", color: "#4b72c1" },
    { name: "Epic Item", rarity: "Epic", color: "#d33682" },
    { name: "Legendary Item", rarity: "Legendary", color: "#ff7518" }
];

function rollRNG() {
    // Generate a random index to pick a reward
    let randomIndex = Math.floor(Math.random() * rewards.length);
    let selectedReward = rewards[randomIndex];
    
    // Update the result display
    document.getElementById("reward").textContent = selectedReward.name;
    document.getElementById("reward").style.color = selectedReward.color;
}

function restartGame() {
    // Reset the reward display
    document.getElementById("reward").textContent = "None";
}
