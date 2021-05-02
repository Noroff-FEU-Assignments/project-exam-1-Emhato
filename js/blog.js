// List of posts

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

            // Add anchor tag and href here!
            posts.innerHTML += `<a href="blog-post.html?id=${data[i].id}" class="result">
                                <div class="card">
                                <h2>${data[i].title.rendered}</h2>
                                <p>${data[i].excerpt.rendered}</p>
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


// Show more button

const showMore = document.querySelector("button");

// let numberOfClicks = 1;

// function clicks() {
//     numberOfClicks += 1;
// }


// showMore.addEventListener("click", clicks);

// SEE IF YOU CAN USE OFFSET NUMBERS INSTEAD OF PAGE NUMBERS WITH THE HELP OF 10 INCREMENTS


urlTwo = "https://emmatonnessen.com/wp-json/wp/v2/posts/?offset=10"

showMore.addEventListener("click", function(){
    console.log(urlTwo)
});


async function morePosts() {
    try {
        const response = await fetch(urlTwo);

        const data = await response.json();

        console.log(data);

        // showMore.style.display = "none";


        for (let i = 0; i < data.length; i++) {


            if (i === 20) {
                break;
            }

            posts.innerHTML += `<a href="blog-post.html?id=${data[i].id}" class="result">
                                <div class="card">
                                <h2>${data[i].title.rendered}</h2>
                                <p>${data[i].excerpt.rendered}</p>
                                </div>
                                </a>`;
        }

    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        posts.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }
}

showMore.addEventListener("click", morePosts);

// let numberOfClicks = 1;

// function clicks() {
//     numberOfClicks += 1;
//     console.log(numberOfClicks);
// }

// showMore.addEventListener("click", clicks);