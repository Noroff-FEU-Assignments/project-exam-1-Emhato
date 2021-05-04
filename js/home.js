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
            images.innerHTML += `<section class="carousel-section">
                                    <figure class="carousel-image image1" style="background-image: url('images/sunrise.jpg')"></figure>
                                    <figure class="carousel-image image2 selected" style="background-image: url('${data[0].better_featured_image.source_url}')"></figure>
                                    <figure class="carousel-image image3" style="background-image: url('${data[1].better_featured_image.source_url}')"></figure>
                                    <figure class="carousel-image image4" style="background-image: url('${data[2].better_featured_image.source_url}')"></figure>
                                </section>
                                    `;
        }
    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        posts.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getPosts();


const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");
const image3 = document.querySelector(".image3");
const image4 = document.querySelector(".image4");

function antiSelect() {
    document.querySelector(".selected").classList.remove("selected");
}

image1.addEventListener("click", function() {
    classList.add("selected")
});



image1.addEventListener("click", antiSelect);
image2.addEventListener("click", antiSelect);
image3.addEventListener("click", antiSelect);
image4.addEventListener("click", antiSelect);

// <a href="blog-post.html?id=${data[i].id}" class="result">
//                                         <div class="wrap">
// <h2>${data[i].title.rendered}</h2>
// <p>${data[i].content.rendered}</p>                                            
// </div>
// </a>