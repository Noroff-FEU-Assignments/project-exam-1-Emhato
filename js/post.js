// Retriving spesific post

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const idParam = params.get("id");

const url = "https://www.emmatonnessen.com/wp-json/wp/v2/posts/" + idParam;

console.log(url)

const post = document.querySelector(".post");
const title = document.querySelector("title");


async function getDetails() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        post.innerHTML = "";

        // for (let i = 0; i < data.length; i++) {

            title.innerHTML = `${data.title.rendered}`;

            post.innerHTML = `<div class="results">
                                <h2>${data.title.rendered}</h2>
                                <div class="post-image"
                                    style="background-image: url('${data.better_featured_image.source_url}')" alt="${data.title.rendered}"></div>
                                <p>${data.content.rendered}</p>
                            </div>`;
        
        // }

    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        post.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getDetails();