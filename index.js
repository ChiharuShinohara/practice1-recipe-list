const recipeContents=[{
    title:'簡単！ホットケーキミックスでピザ',
    name:'by A',
    time:'15分',
    like: 1000,
    date: '2019年5月12日',
    photo:'https://asset.oceans-nadia.com/upload/save_image/84/84cf28750053bfc6587635e221fc95cf.jpeg'},
    {title:'もちもちかしわもち',
    name:'by B',
    time:'40分',
    like: 500,
    date: '2021年2月1日',
    photo:'https://asset.oceans-nadia.com/upload/save_image/e2/e27fe8e59fcd7bf4088994ee73498375.jpg'},
    {title:'ずっしりバナナパウンドケーキ',
    name:'by C',
    time:'10分',
    like: 3000,
    date: '2020年9月23日',
    photo:'https://asset.oceans-nadia.com/upload/save_image/00/009118220ec746e47e705891bf3aeedd.jpg'}];

    




const createList=(recipeItem)=>{
const listArea =document.getElementById('js-listArea');
const ListBoxFragment= document.createDocumentFragment();
const createListArea=document.createElement('ul');
createListArea.setAttribute('id' ,'recipe-list')


for(let i=0; i<recipeItem.length; i++){
    let createListBox= document.createElement('li');
    createListBox.classList.add('recipe-list-box');

    createListBox.innerHTML=`<img class="recipe-photo" src="${recipeItem[i].photo}" alt=""　 >
    <div class="recipe-contents">
    <div class="recipeTitle">
    <h4>${recipeItem[i].title}<span class="name"> ${recipeItem[i].name}</span></h4>
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
createList(recipeContents);


const sort= (value)=>{
    let v;
    switch(value){
        case 'like':
        v='like';
        console.log(v);
        break;
        case 'date':
         v='date'
        break;}   
    const sortedRecipeContents=recipeContents.slice().sort((a,b)=>{
        console.log(a[v]);
        if(a[v]<b[v]){

            return 1;
        }else{
            return -1;
        }
        
    });
    console.log(sortedRecipeContents);
    
    createList(sortedRecipeContents);
}


const getBtn= document.querySelectorAll('.btn');
getBtn.forEach((item)=>item.addEventListener('click', (e)=>{
    console.log(e.target.id);
    const getUl=document.getElementById('recipe-list');
    getUl.remove();
    sort(e.target.id);
   
    })
)
let requestURL='http://localhost:3000';
let request= new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
console.log(request.response);
request.onload=()=>{
    let responseJson =JSON.parse(request.response);
    console.log(responseJson);
}
request.send();
