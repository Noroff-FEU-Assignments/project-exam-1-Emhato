// Carousel

const url = "https://emmatonnessen.com/wp-json/wp/v2/posts/";

const images = document.querySelector(".carousel-images");

async function getPosts() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        images.innerHTML = "";

        for (let i = 0; i < data.length; i++) {


            if (i === 1) {
                break;
            }
            images.innerHTML += `<h2>${data[0].title.rendered}</h2>
                                <div class="carousel-image" style="background-image: url('${data[0].better_featured_image.source_url}')"></div>
                                <p>${data[0].excerpt.rendered}`;
        }
    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        posts.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getPosts();

// <a href="blog-post.html?id=${data[i].id}" class="result">
//                                         <div class="wrap">
// <h2>${data[i].title.rendered}</h2>
// <p>${data[i].content.rendered}</p>                                            
// </div>
// </a>