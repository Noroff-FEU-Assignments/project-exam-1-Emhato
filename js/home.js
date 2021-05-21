// Carousel

const urlHome = "https://emmatonnessen.com/wp-json/wp/v2/posts/";

const images = document.querySelector(".carousel-images");
const theHeader = document.querySelector(".carousel-header");
const theText = document.querySelector(".carousel-text");
const buttonPlace = document.querySelector(".text-section");

async function getPosts() {
    try {
        const response = await fetch(urlHome);

        const data = await response.json();

        console.log(data);

        images.innerHTML = "";

        for (let i = 0; i < data.length; i++) {


            if (i === 1) {
                break;
            }

            theHeader.innerHTML += `<h2 class="header header2">${data[0].title.rendered}</h2>
                                <h2 class="header header3">${data[1].title.rendered}</h2>
                                <h2 class="header header4">${data[2].title.rendered}</h2>
                                `;

            images.innerHTML += `<section class="carousel-section">
                                    <figure tabindex="0" role="button" aria-label="about" id="image1" class="carousel-image image1 selected" style="background-image: url('images/sunrise.jpg')" alt="Sunrise"></figure>
                                    <figure tabindex="0" role="button" aria-label="next-story" class="carousel-image image2" style="background-image: url('${data[0].better_featured_image.source_url}')" alt="${data[0].title.rendered}"></figure>
                                    <figure tabindex="0" role="button" aria-label="next-story" class="carousel-image image3" style="background-image: url('${data[1].better_featured_image.source_url}')" ${data[1].title.rendered}></figure>
                                    <figure tabindex="0" role="button" aria-label="next-story" class="carousel-image image4" style="background-image: url('${data[2].better_featured_image.source_url}')" ${data[2].title.rendered}></figure>
                                </section>
                                    `;
            
            theText.innerHTML += `<div class="text text2">${data[0].excerpt.rendered}</div>
                                <div class="text text3">${data[1].excerpt.rendered}</div>
                                <div class="text text4">${data[2].excerpt.rendered}</div>
                                `;


            buttonPlace.innerHTML += `<a href="about.html" class="readMoreButton button1"><button class="read-more">Read more!</button></a>
                                    <a href="blog-post.html?id=${data[0].id}" class="readMoreButton button2"><button class="read-more">Read more!</button></a>
                                    <a href="blog-post.html?id=${data[1].id}" class="readMoreButton button3"><button class="read-more">Read more!</button></a>
                                    <a href="blog-post.html?id=${data[2].id}" class="readMoreButton button4"><button class="read-more">Read more!</button></a>
                                    `;

        }
    } catch (error) {
        console.log(error);
        console.log("An error occurred");
        theHeader.innerHTML = "An error has occured, sorry for the inconvinience this may cause!";
    }

}


getPosts().then(() => {
    const image1 = document.querySelector(".image1");
    const image2 = document.querySelector(".image2");
    const image3 = document.querySelector(".image3");
    const image4 = document.querySelector(".image4");

    const header1 = document.querySelector(".header1");
    const header2 = document.querySelector(".header2");
    const header3 = document.querySelector(".header3");
    const header4 = document.querySelector(".header4");

    const text1 = document.querySelector(".text1");
    const text2 = document.querySelector(".text2");
    const text3 = document.querySelector(".text3");
    const text4 = document.querySelector(".text4");

    const circleIndicator = document.querySelector(".circle-indicator");

    const button1 = document.querySelector(".button1");
    const button2 = document.querySelector(".button2");
    const button3 = document.querySelector(".button3");
    const button4 = document.querySelector(".button4");

    const leftArrow = document.querySelector(".arrow-left");
    const rightArrow = document.querySelector(".arrow-right");


    image1.addEventListener("click", image1Key);
    image1.onkeydown = image1Key;


    function image1Key() {
        //Image
        image2.classList.remove("selected");
        image3.classList.remove("selected");
        image4.classList.remove("selected");
        
        image1.classList.add("selected");
        
        //header
        header1.style.display = "block";
        
        header2.style.display = "none";
        header3.style.display = "none";
        header4.style.display = "none";
        
        //text
        text1.style.display = "block";
        
        text2.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";
        
        
        
        //circle indicator
        circleIndicator.innerHTML = `<span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                    <span class="circle circle2"><i class="far fa-circle"></i></span>
                                    <span class="circle circle3"><i class="far fa-circle"></i></span>
                                    <span class="circle circle4"><i class="far fa-circle"></i></span>
                                    `;
        
        // button
        button1.style.display = "block";
        
        button2.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
    }

    image2.addEventListener("click", image2Key);
    image2.onkeydown = image2Key;

    function image2Key() {
        //image
        image1.classList.remove("selected");
        image3.classList.remove("selected");
        image4.classList.remove("selected");

        image2.classList.add("selected");

        //header
        header2.style.display = "block";

        header1.style.display = "none";
        header3.style.display = "none";
        header4.style.display = "none";

        //text
        text2.style.display = "block";

        text1.style.display = "none";
        text3.style.display = "none";
        text4.style.display = "none";

        //circle indicator
        circleIndicator.innerHTML = `
                                    <span class="circle circle2"><i class="far fa-circle"></i></span>
                                    <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                    <span class="circle circle3"><i class="far fa-circle"></i></span>
                                    <span class="circle circle4"><i class="far fa-circle"></i></span>
                                    `;

        // button
        button2.style.display = "block";

        button1.style.display = "none";
        button3.style.display = "none";
        button4.style.display = "none";
    }

    image3.addEventListener("click", image3Key);
    image3.onkeydown = image3Key;

    function image3Key() {
        //image
        image1.classList.remove("selected");
        image2.classList.remove("selected");
        image4.classList.remove("selected");

        image3.classList.add("selected");

        //header
        header3.style.display = "block";

        header1.style.display = "none";
        header2.style.display = "none";
        header4.style.display = "none";

        //text
        text3.style.display = "block";

        text1.style.display = "none";
        text2.style.display = "none";
        text4.style.display = "none";

        // circle indicator
        circleIndicator.innerHTML = `
                                    <span class="circle circle2"><i class="far fa-circle"></i></span>
                                    <span class="circle circle3"><i class="far fa-circle"></i></span>
                                    <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                    <span class="circle circle4"><i class="far fa-circle"></i></span>
                                    `;

        // Button
        button3.style.display = "block";

        button1.style.display = "none";
        button2.style.display = "none";
        button4.style.display = "none";
    }

    image4.addEventListener("click", image4Key);
    image4.onkeydown = image4Key;

    function image4Key() {
        //image
        image1.classList.remove("selected");
        image2.classList.remove("selected");
        image3.classList.remove("selected");

        image4.classList.add("selected");

        //header
        header4.style.display = "block";

        header1.style.display = "none";
        header2.style.display = "none";
        header3.style.display = "none";

        //text
        text4.style.display = "block";

        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "none";

        //circle indicator
        circleIndicator.innerHTML = `
                                    <span class="circle circle2"><i class="far fa-circle"></i></span>
                                    <span class="circle circle3"><i class="far fa-circle"></i></span>
                                    <span class="circle circle4"><i class="far fa-circle"></i></span>
                                    <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                    `;

        // Button
        button4.style.display = "block";

        button1.style.display = "none";
        button2.style.display = "none";
        button3.style.display = "none";
    };


    //Arrow

    rightArrow.addEventListener("click", rightArrowKey);
    rightArrow.onkeydown = rightArrowKey;

    function rightArrowKey() {

        if (image1.classList.contains("selected")) {
            image1.classList.remove("selected");
            image2.classList.add("selected");

            //header
            header2.style.display = "block";

            header1.style.display = "none";
            header3.style.display = "none";
            header4.style.display = "none";

            //text
            text2.style.display = "block";

            text1.style.display = "none";
            text3.style.display = "none";
            text4.style.display = "none";

            //circle indicator
            circleIndicator.innerHTML = `
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        `;

            // button
            button2.style.display = "block";

            button1.style.display = "none";
            button3.style.display = "none";
            button4.style.display = "none";

        }

        else if (image2.classList.contains("selected")) {
            image2.classList.remove("selected");
            image3.classList.add("selected");

            //header
            header3.style.display = "block";

            header1.style.display = "none";
            header2.style.display = "none";
            header4.style.display = "none";

            //text
            text3.style.display = "block";

            text1.style.display = "none";
            text2.style.display = "none";
            text4.style.display = "none";

            // circle indicator
            circleIndicator.innerHTML = `
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        `;

            // Button
            button3.style.display = "block";

            button1.style.display = "none";
            button2.style.display = "none";
            button4.style.display = "none";
        }

        else if (image3.classList.contains("selected")) {
            image3.classList.remove("selected");
            image4.classList.add("selected");

            //header
            header4.style.display = "block";

            header1.style.display = "none";
            header2.style.display = "none";
            header3.style.display = "none";

            //text
            text4.style.display = "block";

            text1.style.display = "none";
            text2.style.display = "none";
            text3.style.display = "none";

            //circle indicator
            circleIndicator.innerHTML = `
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        `;

            // Button
            button4.style.display = "block";

            button1.style.display = "none";
            button2.style.display = "none";
            button3.style.display = "none";
        }

        else if (image4.classList.contains("selected")) {
            image4.classList.remove("selected");
            image1.classList.add("selected");

            //header
            header1.style.display = "block";

            header2.style.display = "none";
            header3.style.display = "none";
            header4.style.display = "none";

            //text
            text1.style.display = "block";

            text2.style.display = "none";
            text3.style.display = "none";
            text4.style.display = "none";



            //circle indicator
            circleIndicator.innerHTML = `<span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        `;

            // button
            button1.style.display = "block";

            button2.style.display = "none";
            button3.style.display = "none";
            button4.style.display = "none";
        }

    };

    leftArrow.addEventListener("click", leftArrowKey);
    leftArrow.onkeydown = leftArrowKey;

    function leftArrowKey() {

        if (image1.classList.contains("selected")) {
            image1.classList.remove("selected");
            image4.classList.add("selected");

            //header
            header4.style.display = "block";

            header1.style.display = "none";
            header2.style.display = "none";
            header3.style.display = "none";

            //text
            text4.style.display = "block";

            text1.style.display = "none";
            text2.style.display = "none";
            text3.style.display = "none";

            //circle indicator
            circleIndicator.innerHTML = `
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        `;

            // Button
            button4.style.display = "block";

            button1.style.display = "none";
            button2.style.display = "none";
            button3.style.display = "none";

        }

        else if (image2.classList.contains("selected")) {
            image2.classList.remove("selected");
            image1.classList.add("selected");

            //header
            header1.style.display = "block";

            header2.style.display = "none";
            header3.style.display = "none";
            header4.style.display = "none";

            //text
            text1.style.display = "block";

            text2.style.display = "none";
            text3.style.display = "none";
            text4.style.display = "none";



            //circle indicator
            circleIndicator.innerHTML = `<span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        `;

            // button
            button1.style.display = "block";

            button2.style.display = "none";
            button3.style.display = "none";
            button4.style.display = "none";
        }

        else if (image3.classList.contains("selected")) {
            image3.classList.remove("selected");
            image2.classList.add("selected");

            //header
            header2.style.display = "block";

            header1.style.display = "none";
            header3.style.display = "none";
            header4.style.display = "none";

            //text
            text2.style.display = "block";

            text1.style.display = "none";
            text3.style.display = "none";
            text4.style.display = "none";

            //circle indicator
            circleIndicator.innerHTML = `
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        `;

            // button
            button2.style.display = "block";

            button1.style.display = "none";
            button3.style.display = "none";
            button4.style.display = "none";
        }

        else if (image4.classList.contains("selected")) {
            image4.classList.remove("selected");
            image3.classList.add("selected");

            //header
            header3.style.display = "block";

            header1.style.display = "none";
            header2.style.display = "none";
            header4.style.display = "none";

            //text
            text3.style.display = "block";

            text1.style.display = "none";
            text2.style.display = "none";
            text4.style.display = "none";

            // circle indicator
            circleIndicator.innerHTML = `
                                        <span class="circle circle2"><i class="far fa-circle"></i></span>
                                        <span class="circle circle3"><i class="far fa-circle"></i></span>
                                        <span class="circle circle-full"><i class="fas fa-circle"></i></span>
                                        <span class="circle circle4"><i class="far fa-circle"></i></span>
                                        `;

            // Button
            button3.style.display = "block";

            button1.style.display = "none";
            button2.style.display = "none";
            button4.style.display = "none";
        }

    };

});