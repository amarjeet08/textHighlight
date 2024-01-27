window.addEventListener('DOMContentLoaded', () => {
    const para = document.getElementById('para')
    const textContent = para.innerHTML;

    const wordsArray = textContent.split(' ');
    let filteredWordsArray = wordsArray.filter(words => words.length > 8);

    const highlightedWords = wordsArray.map((words) => {
        if (filteredWordsArray.includes(words)) {
            return `<span class="highlight">${words}</span>`
        }
        return words;
    })

    para.innerHTML = highlightedWords.join(' ')
})