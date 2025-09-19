const articles = [
  {
    id: 1,
    title: "Alumni Launch AI Startup",
    date: "2024-09-01",
    excerpt: "A team of recent graduates has successfully launched a new startup focused on applying AI to sustainable agriculture.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=AI+Startup"
  },
  {
    id: 2,
    title: "Annual Gala a Record Success",
    date: "2024-08-25",
    excerpt: "Our yearly gala drew its largest crowd ever, with hundreds of alumni reconnecting and celebrating.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Annual+Gala"
  },
  {
    id: 3,
    title: "University Breaks Ground on New Library",
    date: "2024-07-15",
    excerpt: "Construction has officially begun on the new campus library, a project years in the making.",
    category: "campus",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=New+Library"
  },
  {
    id: 4,
    title: "Alumnus Profile: Jane Doe, NASA Engineer",
    date: "2024-06-10",
    excerpt: "We interview Jane Doe, a graduate from the Class of '15, about her journey to working at NASA on Mars rovers.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Jane+Doe"
  },
  {
    id: 5,
    title: "Fall Career Fair Attracts Top Companies",
    date: "2024-05-20",
    excerpt: "The recent career fair saw a record number of companies looking to hire our talented graduates.",
    category: "jobs",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Career+Fair"
  },
  {
    id: 6,
    title: "Students Win National Robotics Competition",
    date: "2024-04-05",
    excerpt: "A team of our engineering students took first place in a prestigious national robotics challenge.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Robotics+Team"
  },
  {
    id: 7,
    title: "New Partnership with Global Tech Giant",
    date: "2024-03-28",
    excerpt: "The university has announced a strategic partnership with a global tech leader to create new research opportunities.",
    category: "research",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Tech+Partner"
  },
  {
    id: 8,
    title: "Alumni Give Back to Student Scholarship Fund",
    date: "2024-02-14",
    excerpt: "Generous donations from alumni have boosted our scholarship fund, helping more students achieve their dreams.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Scholarship+Fund"
  },
  {
    id: 9,
    title: "Class of '14 Reunion a Great Success",
    date: "2024-01-20",
    excerpt: "Graduates from the class of 2014 returned to campus to celebrate their 10-year reunion.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Reunion"
  },
  {
    id: 10,
    title: "Startup Spotlight: Alumnus' Eco-Friendly Business",
    date: "2023-12-05",
    excerpt: "We highlight an alumnus who has built a successful business focused on sustainable, eco-friendly products.",
    category: "jobs",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Eco-Business"
  },
  {
    id: 11,
    title: "New Research Lab Opens on Campus",
    date: "2023-11-18",
    excerpt: "A state-of-the-art research lab for biotechnology has been officially opened for faculty and students.",
    category: "research",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Research+Lab"
  },
  {
    id: 12,
    title: "Alumni-Led Mentorship Program Launched",
    date: "2023-10-10",
    excerpt: "Experienced alumni are now mentoring current students through a new program designed to provide career guidance.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Mentorship"
  },
  {
    id: 13,
    title: "Students Win International Design Award",
    date: "2023-09-01",
    excerpt: "A team from the School of Design took home the top prize at a global design competition.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Design+Award"
  },
  {
    id: 14,
    title: "Alumni Volunteer Day a Huge Success",
    date: "2023-08-15",
    excerpt: "Hundreds of alumni volunteered their time for local community service projects during our annual volunteer day.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Volunteer+Day"
  },
  {
    id: 15,
    title: "Campus Dining Hall to be Renovated",
    date: "2023-07-22",
    excerpt: "The university has announced a major renovation project for the main campus dining hall.",
    category: "campus",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Dining+Hall"
  },
  {
    id: 16,
    title: "Alumnus Appointed to CEO of Fortune 500",
    date: "2023-06-03",
    excerpt: "John Smith, a graduate from our business school, has been named CEO of a major company.",
    category: "jobs",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=New+CEO"
  },
  {
    id: 17,
    title: "Summer Mixer Attracts Recent Graduates",
    date: "2023-05-19",
    excerpt: "The summer mixer was a great opportunity for our newest alumni to network and connect with each other.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Summer+Mixer"
  },
  {
    id: 18,
    title: "New Academic Building Opens to Students",
    date: "2023-04-10",
    excerpt: "The long-awaited new academic building for the humanities department is now open.",
    category: "campus",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Humanities+Building"
  },
  {
    id: 19,
    title: "Alumni Win a Grammy Award",
    date: "2023-03-05",
    excerpt: "A musical duo who met on campus won a Grammy for their first album.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Grammy+Winner"
  },
  {
    id: 20,
    title: "Alumni-Student Career Fair",
    date: "2023-02-18",
    excerpt: "The alumni-student career fair provided valuable networking opportunities for all.",
    category: "jobs",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Career+Fair+2"
  },
  {
    id: 21,
    title: "Alumni Endow Professorship in Engineering",
    date: "2023-01-20",
    excerpt: "A generous gift from a distinguished alumnus has endowed a new professorship.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Endowed+Professorship"
  },
  {
    id: 22,
    title: "Campus Adds New Green Space",
    date: "2022-12-01",
    excerpt: "The university has added a new sustainable green space for students to enjoy.",
    category: "campus",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Green+Space"
  },
  {
    id: 23,
    title: "Alumni Speaker Series Begins",
    date: "2022-11-10",
    excerpt: "Our inaugural alumni speaker series has kicked off with talks from leading experts.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Speaker+Series"
  },
  {
    id: 24,
    title: "Students Launch First Rocket",
    date: "2022-10-15",
    excerpt: "The student rocketry club successfully launched its first rocket into the atmosphere.",
    category: "research",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Rocket+Launch"
  },
  {
    id: 25,
    title: "Alumnus' Book Becomes Bestseller",
    date: "2022-09-01",
    excerpt: "A recent book by a graduate has hit the bestseller list, praised for its captivating story.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Bestseller"
  },
  {
    id: 26,
    title: "Alumni Networking Event in London",
    date: "2022-08-20",
    excerpt: "Alumni in London gathered for a successful networking event to connect professionally.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=London+Event"
  },
  {
    id: 27,
    title: "Campus Museum Unveils New Exhibit",
    date: "2022-07-10",
    excerpt: "The campus museum has revealed a new exhibit on the history of the university.",
    category: "campus",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Museum+Exhibit"
  },
  {
    id: 28,
    title: "Alumnus Wins Pulitzer Prize",
    date: "2022-06-01",
    excerpt: "A celebrated alumnus has won a Pulitzer Prize for their investigative journalism.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Pulitzer+Winner"
  },
  {
    id: 29,
    title: "Robotics Club Wins Another Competition",
    date: "2022-05-15",
    excerpt: "Our robotics club has continued its winning streak by taking home first place at a regional competition.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Robotics+Win"
  },
  {
    id: 30,
    title: "Alumni Fundraising Exceeds Goals",
    date: "2022-04-20",
    excerpt: "The annual alumni fundraising campaign surpassed its goal, supporting various campus initiatives.",
    category: "events",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Fundraising"
  },
  {
    id: 31,
    title: "New Sports Complex Announced",
    date: "2022-03-01",
    excerpt: "The university is set to build a new multi-purpose sports complex for student and faculty use.",
    category: "campus",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Sports+Complex"
  },
  {
    id: 32,
    title: "Alumna's Film Premieres at Sundance",
    date: "2022-02-10",
    excerpt: "A film directed by a talented alumna has premiered at the prestigious Sundance Film Festival.",
    category: "achievements",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Sundance+Film"
  },
  {
    id: 33,
    title: "Alumni-Student Networking Session",
    date: "2022-01-15",
    excerpt: "An event connecting current students with alumni professionals provided invaluable career advice.",
    category: "jobs",
    img: "https://placehold.co/400x300/3b82f6/ffffff?text=Networking"
  }
];

const articlesPerPage = 12;
let currentPage = 1;

const newsContainer = document.getElementById('news-container');
const paginationControls = document.getElementById('pagination-controls');

const searchInput = document.getElementById('search-input');
const yearFilter = document.getElementById('year-filter');
const monthFilter = document.getElementById('month-filter');
const categoryFilter = document.getElementById('category-filter');
const sortOptions = document.getElementById('sort-options');

// Fill year filter dynamically
const years = [...new Set(articles.map(a => new Date(a.date).getFullYear()))].sort((a, b) => b - a);
years.forEach(year => {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearFilter.appendChild(option);
});

function renderPage() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedYear = yearFilter.value;
  const selectedMonth = monthFilter.value;
  const selectedCategory = categoryFilter.value;
  const selectedSort = sortOptions.value;

  let filteredArticles = articles.filter(article => {
    const articleDate = new Date(article.date);
    const yearMatch = selectedYear === 'all' || articleDate.getFullYear().toString() === selectedYear;
    const monthMatch = selectedMonth === 'all' || (articleDate.getMonth() + 1).toString() === selectedMonth;
    const categoryMatch = selectedCategory === 'all' || article.category === selectedCategory;
    const searchMatch = article.title.toLowerCase().includes(searchTerm) || article.excerpt.toLowerCase().includes(searchTerm);
    return yearMatch && monthMatch && categoryMatch && searchMatch;
  });

  if (selectedSort === 'newest') {
    filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (selectedSort === 'oldest') {
    filteredArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  currentPage = Math.min(currentPage, totalPages || 1);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const pageArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  newsContainer.innerHTML = pageArticles.map(article => `
    <article class="bg-white p-6 rounded-lg shadow-md article-card">
      <img src="${article.img}" alt="${article.title}" class="w-full h-48 object-cover rounded-md mb-4">
      <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
      <p class="text-sm text-gray-500 mb-2">${new Date(article.date).toDateString()}</p>
      <p class="text-gray-700 mb-4">${article.excerpt}</p>
      <span class="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">${article.category}</span>
    </article>
  `).join('');

  paginationControls.innerHTML = Array.from({ length: totalPages }, (_, i) => `
    <button onclick="goToPage(${i + 1})" class="px-3 py-1 rounded ${i + 1 === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}">${i + 1}</button>
  `).join('');
}

function goToPage(page) {
  currentPage = page;
  renderPage();
}

searchInput.addEventListener('input', () => { currentPage = 1; renderPage(); });
yearFilter.addEventListener('change', () => { currentPage = 1; renderPage(); });
monthFilter.addEventListener('change', () => { currentPage = 1; renderPage(); });
categoryFilter.addEventListener('change', () => { currentPage = 1; renderPage(); });
sortOptions.addEventListener('change', () => { currentPage = 1; renderPage(); });

renderPage();