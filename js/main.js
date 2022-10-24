const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

/*
Milestone 3- Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
 1. Formattare le date in formato italiano (gg/mm/aaaa)
2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */

 const container = document.getElementById('container');

function printPost(){
    posts.forEach((userPost) => {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        container.append(postDiv);
        const postHeader = document.createElement('div');
        postHeader.classList.add('post__header');
        postDiv.append(postHeader);
        const authorDiv = document.createElement('div');
        authorDiv.classList.add('post-meta');
        postHeader.append(authorDiv);
        const profilePicIcon = document.createElement('div');
        profilePicIcon.classList.add('post-meta__icon');
        authorDiv.append(profilePicIcon);
        profilePicIcon.innerHTML = `
        <img class="profile-pic" src=${userPost.author.image} alt=${userPost.author.name}>   
        `
        const postDataDiv = document.createElement('div');
        postDataDiv.classList.add('post-meta__data');
        authorDiv.append(postDataDiv);
        const authorName = document.createElement('div');
        authorName.classList.add('post-meta__author');
        postDataDiv.append(authorName);
        authorName.innerHTML = `
        ${userPost.author.name}
        `
        const publishingDate = document.createElement('div');
        publishingDate.classList.add('post-meta__time');
        postDataDiv.append(publishingDate);
        publishingDate.innerHTML = `
        ${userPost.created}
        `
        const textDiv = document.createElement('div');
        textDiv.classList.add('post__text');
        postDiv.append(textDiv);
        textDiv.innerHTML = `
        ${userPost.content}
        `
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('post__image');
        postDiv.append(imageDiv);
        imageDiv.innerHTML = `
        <img src= ${userPost.media} alt="Foto post">
        `
        const postFooter = document.createElement('div');
        postFooter.classList.add('post__footer');
        postDiv.append(postFooter);
        const likesDiv = document.createElement('div');
        likesDiv.classList.add('likes', 'js-likes');
        postFooter.append(likesDiv);
        const likesInfo = document.createElement('div');
        likesInfo.classList.add('likes__cta');
        likesDiv.append(likesInfo);
        likesInfo.innerHTML = `
        <a class="like-button js-like-button" href="#" data-postid=${userPost.id}>
            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
            <span class="like-button__label">Mi Piace</span>
        </a>
        `
        const likesCounter = document.createElement('div');
        likesCounter.classList.add('likes__counter');
        likesDiv.append(likesCounter);
        likesCounter.innerHTML = `
        Piace a <b id="like-counter-${userPost.id}" class="js-likes-counter">${userPost.likes}</b> persone      
        `
    })
}
printPost();

const likeBtn = document.querySelectorAll('.js-like-button');
let newLikes = 0
const likedPosts = []
const likesCounter = document.querySelectorAll('.js-likes-counter');


likeBtn.forEach((el, i) => {
    el.addEventListener('click', function(){
    el.classList.add('like-button--liked');

    likesCounter[i].innerHTML = (posts[i].likes++) 
    newLikes++

    const btnID = likeBtn[i].dataset.postid
    const likedPost = btnID
    console.log(likedPost) 
     
    for(let i = 0; i < likeBtn.length; i++){
        if(!likedPosts.includes(likedPost)){
            likedPosts.push(likedPost) 
        }
        console.log(likedPosts)
    }   
})
})

