const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');


const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const img = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg"];

/* Declaring the alternative text for each image file */
const imgAlt = ["Photo 1", "Photo 2", "Photo 3", "Photo 4", "Photo 5"];

/* Looping through images */
for (let i = 0; i < img.length; i++) {
const newImage = document.createElement('img');
newImage.setAttribute('src', `images/${img[i]}`);
newImage.setAttribute('alt', imgAlt[i]);
thumbBar.appendChild(newImage);
}

thumbBar.addEventListener("click", (event) => {
    displayedImage.setAttribute('src', event.target.getAttribute('src'));
    displayedImage.setAttribute('alt', event.target.getAttribute('alt'));
});



/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
    if (btn.getattribute("class") === "dark") {
        btn.setAttribute("class", "light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";

    } 
    else {
        btn.setAttribute("class", "dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
} );


