const articles = [
    // Mock data for news articles (33 total)
    { id: 1, title: "Alumni Launch AI Startup", date: "2024-09-01", excerpt: "A team of recent graduates has successfully launched a new startup focused on applying AI to sustainable agriculture.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=AI+Startup" },
    { id: 2, title: "Annual Gala a Record Success", date: "2024-08-25", excerpt: "Our yearly gala drew its largest crowd ever, with hundreds of alumni reconnecting and celebrating.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Annual+Gala" },
    { id: 3, title: "University Breaks Ground on New Library", date: "2024-07-15", excerpt: "Construction has officially begun on the new campus library, a project years in the making.", category: "campus", img: "https://placehold.co/400x300/27272a/71717a?text=New+Library" },
    { id: 4, title: "Alumnus Profile: Jane Doe, NASA Engineer", date: "2024-06-10", excerpt: "We interview Jane Doe, a graduate from the Class of '15, about her journey to working at NASA on Mars rovers.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Jane+Doe" },
    { id: 5, title: "Fall Career Fair Attracts Top Companies", date: "2024-05-20", excerpt: "The recent career fair saw a record number of companies looking to hire our talented graduates.", category: "jobs", img: "https://placehold.co/400x300/27272a/71717a?text=Career+Fair" },
    { id: 6, title: "Students Win National Robotics Competition", date: "2024-04-05", excerpt: "A team of our engineering students took first place in a prestigious national robotics challenge.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Robotics+Team" },
    { id: 7, title: "New Partnership with Global Tech Giant", date: "2024-03-28", excerpt: "The university has announced a strategic partnership with a global tech leader to create new research opportunities.", category: "research", img: "https://placehold.co/400x300/27272a/71717a?text=Tech+Partner" },
    { id: 8, title: "Alumni Give Back to Student Scholarship Fund", date: "2024-02-14", excerpt: "Generous donations from alumni have boosted our scholarship fund, helping more students achieve their dreams.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Scholarship+Fund" },
    { id: 9, title: "Class of '14 Reunion a Great Success", date: "2024-01-20", excerpt: "Graduates from the class of 2014 returned to campus to celebrate their 10-year reunion.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Reunion" },
    { id: 10, title: "Startup Spotlight: Alumnus' Eco-Friendly Business", date: "2023-12-05", excerpt: "We highlight an alumnus who has built a successful business focused on sustainable, eco-friendly products.", category: "jobs", img: "https://placehold.co/400x300/27272a/71717a?text=Eco-Business" },
    { id: 11, title: "New Research Lab Opens on Campus", date: "2023-11-18", excerpt: "A state-of-the-art research lab for biotechnology has been officially opened for faculty and students.", category: "research", img: "https://placehold.co/400x300/27272a/71717a?text=Research+Lab" },
    { id: 12, title: "Alumni-Led Mentorship Program Launched", date: "2023-10-10", excerpt: "Experienced alumni are now mentoring current students through a new program designed to provide career guidance.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Mentorship" },
    { id: 13, title: "Students Win International Design Award", date: "2023-09-01", excerpt: "A team from the School of Design took home the top prize at a global design competition.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Design+Award" },
    { id: 14, title: "Alumni Volunteer Day a Huge Success", date: "2023-08-15", excerpt: "Hundreds of alumni volunteered their time for local community service projects during our annual volunteer day.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Volunteer+Day" },
    { id: 15, title: "Campus Dining Hall to be Renovated", date: "2023-07-22", excerpt: "The university has announced a major renovation project for the main campus dining hall.", category: "campus", img: "https://placehold.co/400x300/27272a/71717a?text=Dining+Hall" },
    { id: 16, title: "Alumnus Appointed to CEO of Fortune 500", date: "2023-06-03", excerpt: "John Smith, a graduate from our business school, has been named CEO of a major company.", category: "jobs", img: "https://placehold.co/400x300/27272a/71717a?text=New+CEO" },
    { id: 17, title: "Summer Mixer Attracts Recent Graduates", date: "2023-05-19", excerpt: "The summer mixer was a great opportunity for our newest alumni to network and connect with each other.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Summer+Mixer" },
    { id: 18, title: "New Academic Building Opens to Students", date: "2023-04-10", excerpt: "The long-awaited new academic building for the humanities department is now open.", category: "campus", img: "https://placehold.co/400x300/27272a/71717a?text=Humanities+Building" },
    { id: 19, title: "Alumni Win a Grammy Award", date: "2023-03-05", excerpt: "A musical duo who met on campus won a Grammy for their first album.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Grammy+Winner" },
    { id: 20, title: "Alumni-Student Career Fair", date: "2023-02-18", excerpt: "The alumni-student career fair provided valuable networking opportunities for all.", category: "jobs", img: "https://placehold.co/400x300/27272a/71717a?text=Career+Fair+2" },
    { id: 21, title: "Alumni Endow Professorship in Engineering", date: "2023-01-20", excerpt: "A generous gift from a distinguished alumnus has endowed a new professorship.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Endowed+Professorship" },
    { id: 22, title: "Campus Adds New Green Space", date: "2022-12-01", excerpt: "The university has added a new sustainable green space for students to enjoy.", category: "campus", img: "https://placehold.co/400x300/27272a/71717a?text=Green+Space" },
    { id: 23, title: "Alumni Speaker Series Begins", date: "2022-11-10", excerpt: "Our inaugural alumni speaker series has kicked off with talks from leading experts.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Speaker+Series" },
    { id: 24, title: "Students Launch First Rocket", date: "2022-10-15", excerpt: "The student rocketry club successfully launched its first rocket into the atmosphere.", category: "research", img: "https://placehold.co/400x300/27272a/71717a?text=Rocket+Launch" },
    { id: 25, title: "Alumnus' Book Becomes Bestseller", date: "2022-09-01", excerpt: "A recent book by a graduate has hit the bestseller list, praised for its captivating story.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Bestseller" },
    { id: 26, title: "Alumni Networking Event in London", date: "2022-08-20", excerpt: "Alumni in London gathered for a successful networking event to connect professionally.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=London+Event" },
    { id: 27, title: "Campus Museum Unveils New Exhibit", date: "2022-07-10", excerpt: "The campus museum has revealed a new exhibit on the history of the university.", category: "campus", img: "https://placehold.co/400x300/27272a/71717a?text=Museum+Exhibit" },
    { id: 28, title: "Alumnus Wins Pulitzer Prize", date: "2022-06-01", excerpt: "A celebrated alumnus has won a Pulitzer Prize for their investigative journalism.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Pulitzer+Winner" },
    { id: 29, title: "Robotics Club Wins Another Competition", date: "2022-05-15", excerpt: "Our robotics club has continued its winning streak by taking home first place at a regional competition.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Robotics+Win" },
    { id: 30, title: "Alumni Fundraising Exceeds Goals", date: "2022-04-20", excerpt: "The annual alumni fundraising campaign surpassed its goal, supporting various campus initiatives.", category: "events", img: "https://placehold.co/400x300/27272a/71717a?text=Fundraising" },
    { id: 31, title: "New Sports Complex Announced", date: "2022-03-01", excerpt: "The university is set to build a new multi-purpose sports complex for student and faculty use.", category: "campus", img: "https://placehold.co/400x300/27272a/71717a?text=Sports+Complex" },
    { id: 32, title: "Alumna's Film Premieres at Sundance", date: "2022-02-10", excerpt: "A film directed by a talented alumna has premiered at the prestigious Sundance Film Festival.", category: "achievements", img: "https://placehold.co/400x300/27272a/71717a?text=Sundance+Film" },
    { id: 33, title: "Alumni-Student Networking Session", date: "2022-01-15", excerpt: "An event connecting current students with alumni professionals provided invaluable career advice.", category: "jobs", img: "https://placehold.co/400x300/27272a/71717a?text=Networking" }
];

const articlesPerPage = 12;
let currentPage = 1;

const newsContainer = document.getElementById('news-container');
const searchInput = document.getElementById('search-input');
const yearFilter = document.getElementById('year-filter');
const monthFilter = document.getElementById('month-filter');
const categoryFilter = document.getElementById('category-filter');
const sortOptions = document.getElementById('sort-options');
const paginationControls = document.getElementById('pagination-controls');

// Populate year filter dropdown dynamically
const years = new Set(articles.map(a => new Date(a.date).getFullYear()));
Array.from(years).sort().reverse().forEach(year => {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearFilter.appendChild(option);
});

// Main function to render articles and pagination
const renderPage = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedYear = yearFilter.value;
    const selectedMonth = monthFilter.value;
    const selectedCategory = categoryFilter.value;
    const selectedSort = sortOptions.value;

    // Filter articles based on user input
    let filteredArticles = articles.filter(article => {
        const articleDate = new Date(article.date);
        const articleYear = articleDate.getFullYear().toString();
        const articleMonth = (articleDate.getMonth() + 1).toString();
        
        const matchesSearch = article.title.toLowerCase().includes(searchTerm) || article.excerpt.toLowerCase().includes(searchTerm);
        const matchesYear = selectedYear === 'all' || articleYear === selectedYear;
        const matchesMonth = selectedMonth === 'all' || articleMonth === selectedMonth;
        const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;

        return matchesSearch && matchesYear && matchesMonth && matchesCategory;
    });
    
    // Sort articles based on user input
    if (selectedSort === 'newest') {
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedSort === 'oldest') {
        filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
    }
    // Note: The "Most Popular" sort option is included for demonstration.
    // As the mock data lacks a popularity metric, it defaults to the current order.

    // Calculate total pages
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    
    // Slice articles for the current page
    const start = (currentPage - 1) * articlesPerPage;
    const end = start + articlesPerPage;
    const articlesToDisplay = filteredArticles.slice(start, end);

    // Render articles
    newsContainer.innerHTML = '';
    articlesToDisplay.forEach(article => {
        const articleCard = document.createElement('article');
        articleCard.className = "article-card bg-zinc-800 rounded-xl shadow-md overflow-hidden flex flex-col";
        articleCard.innerHTML = `
            <img src="${article.img}" alt="${article.title}" class="w-full h-48 object-cover rounded-t-lg">
            <div class="p-6 flex flex-col flex-grow">
                <span class="inline-block bg-gradient-to-r from-gray-200 to-gray-400 text-gray-900 text-[10px] font-normal px-1 py-0 rounded-full mb-2">${article.category.toUpperCase()}</span>
                <h3 class="text-xl font-bold text-gray-100 leading-tight mb-2">${article.title}</h3>
                <p class="text-sm text-gray-400 mb-4 flex-grow">${article.excerpt}</p>
                <div class="flex items-center text-xs text-gray-500">
                    <svg class="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                    </svg>
                    <span>${new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                <a href="#" class="inline-block mt-4 text-sm font-semibold text-gray-200 hover:text-white transition-colors">Read More</a>
            </div>
        `;
        newsContainer.appendChild(articleCard);
    });

    // Render pagination controls
    paginationControls.innerHTML = '';
    if (totalPages > 1) {
        // Previous button
        const prevButton = document.createElement('button');
        prevButton.textContent = 'Previous';
        prevButton.className = `px-3 py-1 rounded-lg font-semibold transition ${currentPage === 1 ? 'text-gray-600 cursor-not-allowed' : 'bg-zinc-700 text-gray-200 hover:bg-zinc-600'}`;
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage();
            }
        });
        paginationControls.appendChild(prevButton);

        // Page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement('button');
            pageButton.textContent = i;
            pageButton.className = `w-8 h-8 rounded-full font-semibold transition ${currentPage === i ? 'bg-white text-gray-900' : 'bg-zinc-700 text-gray-200 hover:bg-zinc-600'}`;
            pageButton.addEventListener('click', () => {
                currentPage = i;
                renderPage();
            });
            paginationControls.appendChild(pageButton);
        }

        // Next button
        const nextButton = document.createElement('button');
        nextButton.textContent = 'Next';
        nextButton.className = `px-3 py-1 rounded-lg font-semibold transition ${currentPage === totalPages ? 'text-gray-600 cursor-not-allowed' : 'bg-zinc-700 text-gray-200 hover:bg-zinc-600'}`;
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage();
            }
        });
        paginationControls.appendChild(nextButton);
    }
};

// Event listeners for filters and search
searchInput.addEventListener('input', () => {
    currentPage = 1;
    renderPage();
});
yearFilter.addEventListener('change', () => {
    currentPage = 1;
    renderPage();
});
monthFilter.addEventListener('change', () => {
    currentPage = 1;
    renderPage();
});
categoryFilter.addEventListener('change', () => {
    currentPage = 1;
    renderPage();
});
sortOptions.addEventListener('change', () => {
    currentPage = 1;
    renderPage();
});

// Initial render on page load
renderPage();