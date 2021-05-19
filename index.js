let tmpData = [];
const createList = (recipeItem) => {
    const listArea = document.getElementById('js-listArea');
    const ListBoxFragment = document.createDocumentFragment();
    const createListArea = document.createElement('ul');
    createListArea.setAttribute('id', 'recipe-list')


    for (let i = 0; i < recipeItem.length; i++) {
        let createListBox = document.createElement('li');

        createListBox.classList.add('recipe-list-box');

        createListBox.innerHTML = `<img class="recipe-photo" src="${recipeItem[i].photo}" alt=""　 >
        <div class="recipe-contents">
        <div class="recipeTitle">
        <h4>${recipeItem[i].title}<span class="name">${recipeItem[i].name}</span></h4>
        </div>
        <ul class='recipeInfo'>
            <li class="info-content time"><i class="fas fa-stopwatch"></i> ${recipeItem[i].time}</li>
            <li class="info-content like"><i class="fas fa-heart "></i>${recipeItem[i].like}</li>
            <li class="info-content ">公開日  ${recipeItem[i].date}</li>
            
        </ul>
        </div>`;
        ListBoxFragment.appendChild(createListBox);
        createListArea.appendChild(ListBoxFragment);
        listArea.appendChild(createListArea);
    }
}

const sort = (value) => {
    let v;
    switch (value) {
        case 'like':
            v = 'like';
            console.log(v);
            break;
        case 'date':
            v = 'date'
            break;
    }
    const sortedRecipeContents = tmpData.slice().sort((a, b) => {
        console.log(a[v]);
        if (a[v] < b[v]) {

            return 1;
        } else {
            return -1;
        }

    });

    console.log(sortedRecipeContents);

    createList(sortedRecipeContents);
}

const getBtn = document.querySelectorAll('.btn');
getBtn.forEach((item) => item.addEventListener('click', (e) => {
    console.log(e.target.id);
    const getUl = document.getElementById('recipe-list');
    getUl.remove();
    sort(e.target.id);

})
)

fetch('http://localhost:3000/recipe-list')
    .then(response => response.json())
    .then((data) => {
        createList(data);
        tmpData = [...data];
        console.log(tmpData);
    });



