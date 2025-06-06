async function getPosts() {
    try {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const posts = await response.json();

        
        let postsSection = document.querySelector('.posts');
        
        for (let post of posts) {
            let article = document.createElement('article');
            
            let h2 = document.createElement('h2');
            h2.innerHTML = post.title;
            
            article.appendChild(h2);
            let p = document.createElement('p');
            p.innerHTML = post.body;
            
            let button = document.createElement('button');
            button.innerHTML = 'Like';
            
            let small = document.createElement('small');
            small.innerHTML = '19 Likes';
            
            article.appendChild(p);
            article.appendChild(button);
            article.appendChild(small);

            postsSection.appendChild(article);

        }
    } catch (error) {
        // alert("Não conseguimos carregar os posts.")
    }
}

function getLikesFromId(id) {
    let likesString = localStorage.getItem('likes');
    if (!likesString) return 0;

    let likes = JSON.parse(likesString);
    let postLike = likes.find(item => item.id === id);
    if (!postLike) return 0;

    return postLike.count;
}

getPosts();