// --- Integrated JavaScript ---
document.addEventListener('DOMContentLoaded', () => {

    // --- Mock Data for News Feed with Pre-written Full Content ---
    const newsData = [{
        title: "Students Win National Robotics Competition",
        image: "https://placehold.co/400x250/DAF7A6/000000?text=Robotics+Team",
        category: "achievements",
        summary: "Our university's robotics team secured first place in a national competition, showcasing innovation and skill.",
        fullContent: `
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Robotics Team Claims National Title</h2>
            <p class="mb-4 text-slate-700">In a stunning display of technical prowess and innovative design, our university's robotics team, the 'Circuit Breakers,' has won the first-place trophy at the National Intercollegiate Robotics Competition. The event, which hosted over 50 teams from across the country, concluded this past weekend in a tense final round.</p>
            <p class="mb-4 text-slate-700">The team's winning creation, an autonomous robot named 'Pathfinder,' successfully navigated a complex and unpredictable obstacle course in a record-breaking time. The robot utilized a custom-built sensor array and a sophisticated machine learning algorithm to make real-time decisions, a feature that judges praised for its elegance and effectiveness.</p>
            <p class="text-slate-700">Team captain Sarah Jenkins, a final-year engineering student, expressed her pride in the team's hard work. "This victory is the culmination of countless hours spent in the lab. We are thrilled to bring this honor back to our university and hope to inspire future students."</p>`
    }, {
        title: "Annual Alumni Networking Event Sells Out",
        image: "https://placehold.co/400x250/FFC300/000000?text=Networking+Event",
        category: "events",
        summary: "The annual alumni networking event was a huge success, connecting students with a diverse group of professionals.",
        fullContent: `
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Record Turnout for Alumni Networking Event</h2>
            <p class="mb-4 text-slate-700">The university's grand ballroom was filled to capacity for the annual Alumni Networking Event, which sold out weeks in advance. The event successfully bridged the gap between current students and a vast network of accomplished alumni from various industries.</p>
            <p class="mb-4 text-slate-700">The evening featured a powerful keynote address from alumna and CEO of Innovate Corp, Maria Rodriguez, who spoke about the importance of mentorship and lifelong learning. Following the address, students participated in speed networking sessions, allowing them to make valuable connections.</p>
            <p class="text-slate-700">"It was an invaluable experience," said one third-year business student. "I made more meaningful connections in one evening than I have in a year. Seeing where our alumni have gone is incredibly motivating."</p>`
    }, {
        title: "New Job Board Launches for Students",
        image: "https://placehold.co/400x250/C70039/FFFFFF?text=Job+Board",
        category: "career",
        summary: "A new online job board, powered by the career services office, is now live with hundreds of new opportunities.",
        fullContent: `
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Career Services Unveils Powerful New Job Board</h2>
            <p class="mb-4 text-slate-700">The Career Services Office has officially launched a new, state-of-the-art online job board designed to streamline the job search process for students and recent graduates. The platform, named 'Career Connect,' already features hundreds of internship and full-time opportunities.</p>
            <p class="mb-4 text-slate-700">Unlike previous systems, Career Connect uses an AI-powered recommendation engine to match students with relevant opportunities based on their major, skills, and career interests. The platform also includes integrated tools for resume building and interview practice.</p>
            <p class="text-slate-700">The Director of Career Services stated, "Our goal is to provide students with the tools they need to succeed. Career Connect is a significant leap forward in how we support our students' professional development."</p>`
    }, {
        title: "Campus-Wide Food Drive Exceeds Goal",
        image: "https://placehold.co/400x250/581845/FFFFFF?text=Food+Drive",
        category: "campus",
        summary: "The recent food drive collected over 5,000 pounds of food for local charities, thanks to student and faculty support.",
        fullContent: `
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Community Spirit Shines as Food Drive Surpasses Goal</h2>
            <p class="mb-4 text-slate-700">The university community has once again demonstrated its incredible generosity, with the annual campus-wide food drive collecting a staggering 5,280 pounds of non-perishable food items. This figure surpasses the initial goal of 4,000 pounds and sets a new record for the initiative.</p>
            <p class="mb-4 text-slate-700">Organized by the Student Volunteer Association, the two-week drive saw collection bins placed in every major building on campus. Donations from students, faculty, and staff poured in, ranging from canned goods to pasta and cereals. All collected items have been delivered to the Local Community Food Bank to support families in need.</p>
            <p class="text-slate-700">"The response was overwhelming," said the event coordinator. "It's a powerful reminder of what we can achieve when we come together as a community."</p>`
    }, {
        title: "Research Team Publishes in Prestigious Journal",
        image: "https://placehold.co/400x250/4B4B4B/FFFFFF?text=Research+Team",
        category: "achievements",
        summary: "A research team from the biology department has published a groundbreaking paper in 'Nature' journal.",
        fullContent: `
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Biology Researchers Make Breakthrough in Cellular Regeneration</h2>
            <p class="mb-4 text-slate-700">A team of researchers led by Dr. Evelyn Reed from the university's biology department has achieved a significant milestone, with their latest study being published in the highly prestigious scientific journal, 'Nature'.</p>
            <p class="mb-4 text-slate-700">Their groundbreaking paper details the discovery of a new signaling pathway that plays a crucial role in cellular regeneration. The research could have profound implications for the treatment of degenerative diseases and traumatic injuries. By manipulating this pathway in laboratory models, the team was able to significantly accelerate tissue repair.</p>
            <p class="text-slate-700">"This is a fundamental discovery that opens up exciting new avenues for therapeutic development," Dr. Reed explained. "We are incredibly proud that our work has been recognized by a journal of 'Nature's' caliber."</p>`
    }, {
        title: "Fall Concert Series Announced",
        image: "https://placehold.co/400x250/1B4F72/FFFFFF?text=Concert",
        category: "events",
        summary: "The lineup for this semester's concert series has been revealed, featuring a mix of local and national artists.",
        fullContent: `
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Eclectic Lineup Unveiled for Fall Concert Series</h2>
            <p class="mb-4 text-slate-700">The Student Activities Board has officially announced the much-anticipated lineup for the Fall Concert Series, promising a diverse range of musical experiences for the campus community. The series will feature four unique acts, spanning indie rock, electronic, and acoustic genres.</p>
            <p class="mb-4 text-slate-700">Kicking off the series next month is the nationally acclaimed indie band "The Wandering Echoes." All concerts are free for students with a valid university ID and will be held at the university's main quad.</p>
            <p class="text-slate-700">Tickets for the general public will be available for a nominal fee. The full schedule and artist bios are now available on the university's events website.</p>`
    }, ];

    const newsFeed = document.getElementById('newsFeed');
    const categoryFilters = document.getElementById('categoryFilters');
    const searchInput = document.getElementById('searchInput');
    const articleModal = document.getElementById('articleModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const articleContent = document.getElementById('articleContent');

    // --- Simulated Article Generation ---
    function generateArticle(title) {
        return new Promise((resolve) => {
            setTimeout(() => { // Simulate network delay
                const article = newsData.find(a => a.title === title);
                if (article) {
                    articleContent.innerHTML = article.fullContent;
                    articleModal.classList.remove('hidden');
                } else {
                    articleContent.innerHTML = `<h2 class="text-xl font-bold text-red-600">Error</h2><p class="text-slate-700">Could not find the article content.</p>`;
                    articleModal.classList.remove('hidden');
                }
                resolve();
            }, 1000); // 1-second delay
        });
    }

    // --- News Feed & Filtering ---
    function renderNews(articles) {
        newsFeed.innerHTML = '';
        if (articles.length === 0) {
            newsFeed.innerHTML = '<p class="text-slate-500 text-center col-span-full">No news found.</p>';
        }
        articles.forEach(article => {
            const newsCard = document.createElement('div');
            // MODIFIED LINE FOR BORDER AND HOVER EFFECT
            newsCard.className = 'bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:-translate-y-1';
            newsCard.setAttribute('data-category', article.category);
            newsCard.innerHTML = `
                <div class="overflow-hidden"><img src="${article.image}" alt="${article.title}" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"></div>
                <div class="p-6">
                    <span class="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full mb-2">${article.category.charAt(0).toUpperCase() + article.category.slice(1)}</span>
                    <h3 class="text-xl font-bold text-slate-800 mt-2 mb-3">${article.title}</h3>
                    <p class="text-slate-600 text-sm leading-relaxed">${article.summary}</p>
                    <button class="read-more-btn mt-4 text-blue-600 hover:underline font-bold" data-title="${article.title}">Read More &rarr;</button>
                </div>
            `;
            newsFeed.appendChild(newsCard);
        });

        document.querySelectorAll('.read-more-btn').forEach(button => {
            button.addEventListener('click', () => {
                const title = button.dataset.title;
                const originalText = button.innerHTML;
                button.innerHTML = 'Loading...';
                button.classList.add('loading-dots');
                button.disabled = true;
                generateArticle(title).finally(() => {
                    button.innerHTML = originalText;
                    button.classList.remove('loading-dots');
                    button.disabled = false;
                });
            });
        });
    }

    function filterNews(category) {
        const filteredNews = newsData.filter(article => category === 'all' || article.category === category);
        renderNews(filteredNews);
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('bg-blue-600', btn.dataset.category === category);
            btn.classList.toggle('text-white', btn.dataset.category === category);
            btn.classList.toggle('bg-blue-100', btn.dataset.category !== category);
            btn.classList.toggle('text-blue-700', btn.dataset.category !== category);
            // Add hover scale effect
            btn.classList.toggle('hover:scale-105', true);
        });
    }

    function searchNews(query) {
        const searchTerm = query.toLowerCase();
        renderNews(newsData.filter(article =>
            article.title.toLowerCase().includes(searchTerm) ||
            article.summary.toLowerCase().includes(searchTerm)
        ));
    }

    categoryFilters.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            filterNews(e.target.dataset.category);
            searchInput.value = '';
        }
    });

    searchInput.addEventListener('input', (e) => searchNews(e.target.value));
    closeModalBtn.addEventListener('click', () => articleModal.classList.add('hidden'));

    // --- Carousel Functionality ---
    const carouselSlides = document.getElementById('carouselSlides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselIndicators = document.getElementById('carouselIndicators');
    const slides = Array.from(carouselSlides.children);
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateCarousel() {
        carouselSlides.style.transform = `translateX(-${currentIndex * 100}%)`;
        document.querySelectorAll('#carouselIndicators button').forEach((indicator, i) => {
            indicator.classList.toggle('bg-white', i === currentIndex);
            indicator.classList.toggle('bg-white/50', i !== currentIndex);
        });
    }

    slides.forEach((_, i) => {
        const indicator = document.createElement('button');
        indicator.className = 'w-2 h-2 rounded-full transition-colors';
        indicator.addEventListener('click', () => { currentIndex = i; updateCarousel(); });
        carouselIndicators.appendChild(indicator);
    });

    nextBtn.addEventListener('click', () => { currentIndex = (currentIndex + 1) % totalSlides; updateCarousel(); });
    prevBtn.addEventListener('click', () => { currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; updateCarousel(); });
    
    setInterval(() => nextBtn.click(), 5000);
    updateCarousel();

    // --- Quick Poll Functionality ---
    const pollOptions = document.getElementById('pollOptions');
    const pollResults = document.getElementById('pollResults');
    let hasVoted = false;
    
    pollOptions.addEventListener('click', (e) => {
        if (e.target.classList.contains('poll-option') && !hasVoted) {
            hasVoted = true;
            showPollResults();
        }
    });

    function showPollResults() {
        pollOptions.classList.add('hidden');
        pollResults.classList.remove('hidden');
        
        const pollData = [
            { option: 'Student Clubs', votes: 45 }, { option: 'Campus Events', votes: 78 },
            { option: 'Library', votes: 32 }, { option: 'Sports & Recreation', votes: 61 }
        ];
        const totalVotes = pollData.reduce((sum, item) => sum + item.votes, 0);

        pollResults.innerHTML = pollData.map(item => {
            const percentage = totalVotes > 0 ? (item.votes / totalVotes) * 100 : 0;
            return `
                <div>
                    <div class="flex justify-between text-sm mb-1"><span class="font-medium text-slate-700">${item.option}</span><span class="text-slate-500">${percentage.toFixed(0)}%</span></div>
                    <div class="w-full bg-slate-200 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full" style="width: 0%; transition: width 1s ease-out;"></div></div>
                </div>`;
        }).join('');

        setTimeout(() => {
            pollResults.querySelectorAll('.bg-blue-600').forEach((bar, index) => {
                const percentage = totalVotes > 0 ? (pollData[index].votes / totalVotes) * 100 : 0;
                bar.style.width = `${percentage}%`;
            });
        }, 100);
    }
    
    // --- Initial Render ---
    filterNews('all'); // Renders news and sets initial button styles
});