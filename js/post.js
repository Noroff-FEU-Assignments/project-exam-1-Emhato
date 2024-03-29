// Retriving spesific post

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const idParam = params.get("id");

const url = "https://www.emmatonnessen.com/wp-json/wp/v2/posts/" + idParam;

console.log(url);

const post = document.querySelector(".post");
const title = document.querySelector("title");
const metaDescription = document.querySelector(".blog-description");


async function getDetails() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        post.innerHTML = "";

        title.innerHTML = `${data.title.rendered}`;
        metaDescription.innerHTML = `name="description" content="This is the content page of the hopeful news. Here you can read the article: ${data.title.rendered}"`;

        post.innerHTML = `<div class="results">
                            <h2 class="remove1">${data.title.rendered}</h2>
                            <div tabindex="0" role="button" aria-label="enlarge" class="post-image"
                                style="background-image: url('${data.better_featured_image.source_url}')" alt="${data.title.rendered}"></div>
                            <p class="remove2">${data.content.rendered}</p>
                        </div>`;
        

    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        post.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

// getDetails();

getDetails().then(() => {
    const body = document.querySelector("body");
    const image = document.querySelector(".post-image");
    const main = document.querySelector("main");


    image.addEventListener("click", function() {
        body.classList.add("background");
        image.classList.add("enlarged-image");
        body.style.cursor = "pointer";
        image.style.cursor = "default";
        main.style.maxWidth = "1000px";
    })

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".post-image")) {
            body.classList.remove("background");
            image.classList.remove("enlarged-image");
            body.style.cursor = "default";
            image.style.cursor = "pointer";
            main.style.maxWidth = "800px";
        }
    })

    function imageKey() {
        body.classList.add("background");
        image.classList.add("enlarged-image");
        body.style.cursor = "pointer";
        image.style.cursor = "default";
        main.style.maxWidth = "1000px";
    }

    function bodyKey() {
        if (!event.target.closest(".post-image")) {
            body.classList.remove("background");
            image.classList.remove("enlarged-image");
            body.style.cursor = "default";
            image.style.cursor = "pointer";
            main.style.maxWidth = "800px";
        }
    }

    image.onkeydown = imageKey;

    body.onkeydown = bodyKey;
});

