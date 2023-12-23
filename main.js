// const posts = document.querySelectorAll('.gallery-item');

// posts.forEach(post => {
// 	post.addEventListener('click', () => {
// 		//Get original image URL
// 		const imgUrl = post.firstElementChild.src.split("?")[0];
// 		//Open image in new tab
// 		window.open(imgUrl, '_blank');
// 	});
// });

document.addEventListener('DOMContentLoaded', function () {
    const posts = document.querySelectorAll('.gallery-item');

    posts.forEach(post => {
        // Check if the anchor tag exists in the gallery item
        const anchor = post.querySelector('a');
        if (anchor) {
            anchor.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent the default anchor link behavior
                // Get the href attribute of the anchor tag
                const imgUrl = anchor.href;
                // Open the href link in a new tab
                window.open(imgUrl, '_blank');
            });
        }
    });
});




// JavaScript to handle opening and closing of the popup

document.addEventListener('DOMContentLoaded', function () {
    // Function to toggle the popup
    function togglePopup(popupId, show) {
        console.log("togglePopup called for", popupId, "with show =", show); // Debug log
        const popup = document.querySelector(popupId);
        if (popup) {
            if (show) {
                popup.style.display = 'block';
                document.body.classList.add("active-popup");
            } else {
                popup.style.display = 'none';
                document.body.classList.remove("active-popup");
            }
        }
    }

    // Find all open-buttons and attach a click event listener to them
    const openButtons = document.querySelectorAll('[id^="open-popup-"]');
    openButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const number = button.id.split('-').pop();
            const popupId = `#popup-${number}`;
            console.log("Opening popup with ID:", popupId); // Debug log
            togglePopup(popupId, true);
        });
    });

    // Find all close-buttons and attach a click event listener to them
    const closeButtons = document.querySelectorAll('.popup .close-btn');
    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const popup = button.closest('.popup');
            if (popup) {
                console.log("Closing popup with ID:", popup.id); // Debug log
                togglePopup(`#${popup.id}`, false);
            }
        });
    });
});
    