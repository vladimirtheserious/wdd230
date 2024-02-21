const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chapterArray = getChapterList() || [];

chapterArray.forEach(chapter => {
    displayList(chapter);    
});

function displayList(item) {
    const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            deleteChapter(li, textContent);
            input.focus();
        });
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chapterArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArray = chapterArray.filter((item) => item !== chapter);
    setChapterList();
}




button.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chapterArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        
    }
    input.value = '';
    
}); 







