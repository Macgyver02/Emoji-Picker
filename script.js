document.addEventListener('DOMContentLoaded', () => {
    const emojiContainer = document.getElementById('emoji-list');
    const emojiInput = document.getElementById('emoji-input');

    const displayEmojis = (emojis) => {
        emojiContainer.innerHTML = '';
        emojis.forEach(({ emoji }) => {
            const emojiSpan = document.createElement('span');
            emojiSpan.textContent = emoji;
            emojiSpan.addEventListener('click', () => {
                emojiInput.value += emoji;
            });
            emojiContainer.appendChild(emojiSpan);
        });
    };

    const filterEmojis = () => {
        const query = emojiInput.value.toLowerCase();
        const filteredEmojis = emojiData.filter(({ keywords }) => 
            keywords.some(keyword => keyword.includes(query))
        );
        displayEmojis(filteredEmojis);
    };

    // Initial display of all emojis
    displayEmojis(emojiData);
});
