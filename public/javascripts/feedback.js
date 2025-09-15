document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');
    const stars = document.querySelectorAll('.star-rating .star');
    const ratingText = document.getElementById('ratingText');
    const mentorNamePlaceholder = document.getElementById('mentorNamePlaceholder');
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    const okBtn = document.getElementById('okBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const successModal = document.getElementById('successModal');
    const confettiCanvas = document.getElementById('confettiCanvas');
    const confettiCtx = confettiCanvas.getContext('2d');
    const confettiPieces = [];

    // Initial state variables
    let selectedRating = null;
    let currentAction = null;

    // Example mentor name, you would dynamically set this
    const mentorName = "Jane Doe";
    mentorNamePlaceholder.textContent = mentorName;

    // --- Confetti Logic ---
    class ConfettiPiece {
        constructor(x, y, color, size, rotation, velocityX, velocityY, gravity) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.size = size;
            this.rotation = rotation;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
            this.gravity = gravity;
        }
        update() {
            this.x += this.velocityX;
            this.y += this.velocityY;
            this.velocityY += this.gravity;
            this.rotation += 0.05;
        }
        draw() {
            confettiCtx.save();
            confettiCtx.translate(this.x, this.y);
            confettiCtx.rotate(this.rotation);
            confettiCtx.fillStyle = this.color;
            confettiCtx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            confettiCtx.restore();
        }
    }

    const createConfetti = () => {
        const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#a855f7'];
        const count = 100;
        for (let i = 0; i < count; i++) {
            const x = confettiCanvas.width / 2;
            const y = confettiCanvas.height;
            const color = colors[Math.floor(Math.random() * colors.length)];
            const size = Math.random() * 8 + 4;
            const rotation = Math.random() * 2 * Math.PI;
            const velocityX = (Math.random() - 0.5) * 10;
            const velocityY = -Math.random() * 20 - 5;
            const gravity = 0.5;
            confettiPieces.push(new ConfettiPiece(x, y, color, size, rotation, velocityX, velocityY, gravity));
        }
    };

    const animateConfetti = () => {
        confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        for (let i = 0; i < confettiPieces.length; i++) {
            confettiPieces[i].update();
            confettiPieces[i].draw();
        }
        // Stop animation after pieces fall off screen
        const piecesOnScreen = confettiPieces.filter(p => p.y < confettiCanvas.height);
        if (piecesOnScreen.length > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            confettiPieces.length = 0; // Clear the array
            confettiCanvas.classList.remove('show');
        }
    };

    const triggerConfetti = () => {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
        confettiCanvas.classList.add('show');
        createConfetti();
        animateConfetti();
    };
    
    // --- Custom Message Box Logic ---
    const showMessageBox = (message, isConfirm = false) => {
        messageText.textContent = message;
        messageBox.classList.remove('hidden');
        okBtn.classList.remove('hidden');
        if (isConfirm) {
            cancelBtn.classList.remove('hidden');
        } else {
            cancelBtn.classList.add('hidden');
        }
    };

    const hideMessageBox = () => {
        messageBox.classList.add('hidden');
        okBtn.classList.remove('hidden');
        cancelBtn.classList.add('hidden');
    };

    // Event listener for the OK button in the message box
    okBtn.addEventListener('click', () => {
        hideMessageBox();
        if (currentAction === 'submit_without_feedback') {
            // This is where you would handle the form submission
            handleFormSubmission();
        }
    });

    // Event listener for the Cancel button in the message box
    cancelBtn.addEventListener('click', () => {
        hideMessageBox();
        currentAction = null;
    });

    // --- Form and Star Rating Logic ---
    // Add hover and click event listeners to the stars
    stars.forEach(star => {
        star.addEventListener('mouseenter', () => {
            const label = star.getAttribute('data-label');
            ratingText.textContent = label;
        });
        star.addEventListener('mouseleave', () => {
            if (selectedRating === null) {
                ratingText.textContent = '';
            } else {
                const selectedStar = document.querySelector(`.star[data-value="${selectedRating}"]`);
                ratingText.textContent = selectedStar.getAttribute('data-label');
            }
        });
        star.addEventListener('click', (event) => {
            event.preventDefault();
            
            selectedRating = parseInt(star.getAttribute('data-value'));

            // Remove 'selected' class from all stars
            stars.forEach(s => s.classList.remove('selected'));

            // Add 'selected' class to the clicked star and all stars before it
            star.classList.add('selected');

            const label = star.getAttribute('data-label');
            ratingText.textContent = label;
        });
    });

    // Function to handle the actual form submission
    const handleFormSubmission = () => {
        const writtenFeedback = document.getElementById('feedback').value;

        const feedbackData = {
            rating: selectedRating,
            comment: writtenFeedback,
            mentor: mentorName
        };

        // Simulate form submission success by logging data
        console.log('Feedback submitted:', feedbackData);

        // Show the success modal
        successModal.classList.remove('hidden');
        setTimeout(() => successModal.classList.add('open'), 10);
        triggerConfetti();

        // Reset the form after the success message has been displayed for a few seconds
        setTimeout(() => {
            successModal.classList.remove('open');
            setTimeout(() => successModal.classList.add('hidden'), 300);
            feedbackForm.reset();
            stars.forEach(s => s.classList.remove('selected'));
            selectedRating = null;
            ratingText.textContent = '';
        }, 3000); // Hide success message and reset after 3 seconds
    };

    // Handle form submission
    feedbackForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (selectedRating === null) {
            showMessageBox('Please select a star rating before submitting.');
            return;
        }

        const writtenFeedback = document.getElementById('feedback').value;
        if (writtenFeedback.trim() === '') {
            currentAction = 'submit_without_feedback';
            showMessageBox('Are you sure you want to submit without any written feedback?', true);
            return;
        }

        handleFormSubmission();
    });
});