document.addEventListener("DOMContentLoaded", () => {
    // Counter & current count
    const counter = document.getElementById("counter");
    let current = parseInt(counter.textContent);

    // Second-by-second increment
    function incrementCounter () {
        if (!paused) {
            counter.textContent = current++;
        };
    };
    setInterval(incrementCounter, 1000);

    // Increment button
    const addButton = document.getElementById("plus");
    addButton.addEventListener("click", function(e) {
        incrementCounter();
    });

    // Decrement button
    const subtractButton = document.getElementById("minus");
    subtractButton.addEventListener("click", function(e) {
        counter.textContent = current--;
    });


    // Pause button & pause status
    const buttons = document.querySelectorAll("button");
    const pauseButton = document.getElementById("pause");
    let paused = false;
    pauseButton.addEventListener("click", function(e) {
        if (paused) {
            paused = false;
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            };
            counter.textContent = "0";
            current = 0;
            pauseButton.textContent = "pause";
        } else {
            paused = true;
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].id != "pause") {
                    buttons[i].disabled = true;
                };
            };
            pauseButton.textContent = "resume";
        };
    });


    // "Likes" list
    const likeButton = document.getElementById("heart");
    const likesList = document.querySelector("ul.likes");
    let likesData = {};

    // Add a like to a number
    likeButton.addEventListener("click", function(e) {
        // Determine & increment like count
        let likedNum = current - 1;
        if (!likesData[likedNum]) {
            likesData[likedNum] = 0;
        };
        likesData[likedNum]++;
        let likesCount = likesData[likedNum];

        // Create/Update the like count list
        if (likesCount == 1) {
            const entry = document.createElement("li");
            entry.setAttribute("id", likedNum);
            entry.textContent = `${likedNum} has been liked 1 time`;
            likesList.appendChild(entry);
        } else {
            const entry = document.getElementById(`${likedNum}`);
            entry.textContent = `${likedNum} has been liked ${likesCount} times`;
        };
    });


    // Add user-input comments
    comments = document.querySelector("div.comments");
    commentForm = document.getElementById("comment-form");
    commentForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const inputField = document.getElementById("comment-input");
        userInput = inputField.value;
        par = document.createElement("p");
        par.textContent = userInput;
        
        list = document.querySelector("div.comments");
        list.appendChild(par);
        commentForm.reset();
    });
});