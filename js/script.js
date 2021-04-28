// Api fetching!

const url = "https://emmatonnessen.com/wp-json/wp/v2/posts/";

const posts = document.querySelector(".posts");

async function getPosts() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        posts.innerHTML = "";

        for (let i = 0; i < data.length; i++) {


            if (i === 10) {
                break;
            }
            posts.innerHTML += `<a href="blog-post.html?id=${data[i].id}" class="result">
                                        <div class="wrap">
                                            <div class="image" style="background-image: url('${data[i].better_featured_image.source_url}')"></div>
                                            <h2>${data[i].title.rendered}</h2>
                                            <p>${data[i].content.rendered}</p>                                            
                                        </div>
                                        </a>`;
        }
    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        posts.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}

getPosts();


// Hamburger menu

const hamburger = document.querySelector(".fa-bars");


const navigation = document.querySelector("nav")

function hamburgerClicked() {
    console.log("Yooo");
    navigation.style.display = "block"
}

hamburger.addEventListener("click", hamburgerClicked);

