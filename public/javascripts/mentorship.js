const mentors = [
    {
        id: 1,
        name: 'Jane Doe',
        title: 'Senior Software Engineer',
        expertise: 'Software Engineering',
        industry: 'Tech',
        location: 'San Francisco',
        bio: 'Experienced full-stack developer with 10+ years in building scalable web applications. Passionate about helping new developers navigate their career paths.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=JD',
        linkedin: 'https://www.linkedin.com/in/janedoe'
    },
    {
        id: 2,
        name: 'John Smith',
        title: 'Product Manager',
        expertise: 'Product Management',
        industry: 'Tech',
        location: 'New York',
        bio: 'A product leader with a background in data science. I specialize in product strategy and user-centric design.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=JS',
        linkedin: 'https://www.linkedin.com/in/johnsmith'
    },
    {
        id: 3,
        name: 'Sarah Lee',
        title: 'Data Scientist',
        expertise: 'Data Science',
        industry: 'Finance',
        location: 'London',
        bio: 'I help aspiring data scientists develop a strong foundation in machine learning and data analysis for the finance sector.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=SL',
        linkedin: 'https://www.linkedin.com/in/sarahlee'
    },
    {
        id: 4,
        name: 'Mike Johnson',
        title: 'UX Lead',
        expertise: 'UX/UI Design',
        industry: 'Tech',
        location: 'Bangalore',
        bio: 'Design expert focused on creating intuitive and accessible user experiences. Let\'s build your portfolio together.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=MJ',
        linkedin: 'https://www.linkedin.com/in/mikejohnson'
    },
    {
        id: 5,
        name: 'Emily Chen',
        title: 'Marketing Director',
        expertise: 'Marketing',
        industry: 'Education',
        location: 'San Francisco',
        bio: 'Seasoned marketing professional with a track record of building successful brand strategies for educational platforms.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=EC',
        linkedin: 'https://www.linkedin.com/in/emilychen'
    },
    {
        id: 6,
        name: 'David Wilson',
        title: 'Full Stack Engineer',
        expertise: 'Software Engineering',
        industry: 'Finance',
        location: 'New York',
        bio: 'Focus on fintech solutions and secure application development. I can help you with backend systems and API design.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=DW',
        linkedin: 'https://www.linkedin.com/in/davidwilson'
    },
    {
        id: 7,
        name: 'Alex Rivera',
        title: 'Product Designer',
        expertise: 'UX/UI Design',
        industry: 'Tech',
        location: 'San Francisco',
        bio: 'Specialist in mobile app design and prototyping. I love mentoring on design thinking and user research.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=AR',
        linkedin: 'https://www.linkedin.com/in/alexrivera'
    },
    {
        id: 8,
        name: 'Maria Garcia',
        title: 'Senior Data Analyst',
        expertise: 'Data Science',
        industry: 'Healthcare',
        location: 'London',
        bio: 'Experienced in clinical data analysis and statistical modeling. I can guide you through complex data projects.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=MG',
        linkedin: 'https://www.linkedin.com/in/mariagarcia'
    },
    {
        id: 9,
        name: 'Liam O\'Connell',
        title: 'Cybersecurity Consultant',
        expertise: 'Software Engineering',
        industry: 'Tech',
        location: 'Dublin',
        bio: 'Expert in network security and ethical hacking. I can help you secure your applications and systems.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=LO',
        linkedin: 'https://www.linkedin.com/in/liamoconnell'
    },
    {
        id: 10,
        name: 'Priya Sharma',
        title: 'Business Analyst',
        expertise: 'Product Management',
        industry: 'Finance',
        location: 'Bangalore',
        bio: 'I specialize in bridging the gap between business goals and technical solutions. Let\'s talk about product strategy!',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=PS',
        linkedin: 'https://www.linkedin.com/in/priyasharma'
    },
    {
        id: 11,
        name: 'Ben Carter',
        title: 'SEO Specialist',
        expertise: 'Marketing',
        industry: 'Tech',
        location: 'New York',
        bio: 'Digital marketing expert with a focus on SEO and content strategy. I can help you grow your online presence.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=BC',
        linkedin: 'https://www.linkedin.com/in/bencarter'
    },
    {
        id: 12,
        name: 'Chen Wei',
        title: 'Mobile Developer',
        expertise: 'Software Engineering',
        industry: 'Education',
        location: 'Shanghai',
        bio: 'Experienced in iOS and Android development. I can help you build your first mobile app or improve an existing one.',
        image: 'https://placehold.co/100x100/4F46E5/ffffff?text=CW',
        linkedin: 'https://www.linkedin.com/in/chenwei'
    }
];

// Dynamically generating availableSlots for the current and next two months
const availableSlots = {};
const today = new Date();

function generateDummySlots(year, month) {
    const numDays = new Date(year, month + 1, 0).getDate();
    for (let day = 1; day <= numDays; day++) {
        const date = new Date(year, month, day);
        const dateString = date.toISOString().split('T')[0];
        const dayOfWeek = date.getDay();
        
        // Only add slots for weekdays (Mon-Fri)
        if (dayOfWeek > 0 && dayOfWeek < 6) {
            availableSlots[dateString] = [
                '10:00 AM - 11:00 AM',
                '12:00 PM - 01:00 PM',
                '03:00 PM - 04:00 PM',
                '04:30 PM - 05:00 PM',
                '06:00 PM - 07:00 PM'
            ];
        }
    }
}

generateDummySlots(today.getFullYear(), today.getMonth());
generateDummySlots(today.getFullYear(), today.getMonth() + 1);
generateDummySlots(today.getFullYear(), today.getMonth() + 2);

const mentorsPerPage = 6;
let currentPage = 0;
let filteredMentors = mentors;
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const mentorList = document.getElementById('mentor-list');
const expertiseFilter = document.getElementById('expertise-filter');
const industryFilter = document.getElementById('industry-filter');
const locationFilter = document.getElementById('location-filter');
const nextPageBtn = document.getElementById('next-page-btn');
const prevPageBtn = document.getElementById('prev-page-btn');
const schedulingModal = document.getElementById('scheduling-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const mentorNameModal = document.getElementById('mentor-name-modal');
const calendarDates = document.getElementById('calendar-dates');
const currentMonthYearSpan = document.getElementById('current-month-year');
const prevMonthBtn = document.getElementById('prev-month-btn');
const nextMonthBtn = document.getElementById('next-month-btn');
const timeSlotsView = document.getElementById('time-slots-view');
const timeSlotsContainer = document.getElementById('time-slots-container');
const confirmBookingBtn = document.getElementById('confirm-booking-btn');
const successPopup = document.getElementById('success-popup');

function renderMentors() {
    mentorList.innerHTML = '';
    
    const start = currentPage * mentorsPerPage;
    const end = start + mentorsPerPage;
    const mentorsToRender = filteredMentors.slice(start, end);

    mentorsToRender.forEach(mentor => {
        const mentorCard = document.createElement('div');
        mentorCard.className = 'bg-white rounded-lg shadow-md p-6 mentor-card cursor-pointer';
        mentorCard.innerHTML = `
            <div class="flex items-center space-x-4 mb-4">
                <img src="${mentor.image}" alt="${mentor.name} profile photo" class="w-20 h-20 rounded-full object-cover shadow-lg border-4 border-white">
                <div>
                    <div class="flex items-center space-x-2">
                        <h3 class="text-xl font-bold text-gray-900">${mentor.name}</h3>
                        <a href="${mentor.linkedin}" target="_blank" class="text-blue-600 hover:text-blue-800 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.766s.784-1.766 1.75-1.766 1.75.79 1.75 1.766-.783 1.766-1.75 1.766zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </div>
                    <p class="text-blue-600 font-medium">${mentor.title}</p>
                </div>
            </div>
            <div class="flex flex-wrap gap-2 mb-4">
                <span class="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">${mentor.expertise}</span>
                <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">${mentor.industry}</span>
                <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">${mentor.location}</span>
            </div>
            <p class="text-gray-600 text-sm mt-2">${mentor.bio}</p>
            <div class="flex justify-end mt-4">
                <button data-mentor-id="${mentor.id}" class="request-btn bg-blue-600 text-white py-2 px-6 rounded-md font-semibold hover:bg-blue-700 transition-colors duration-300">Request Session</button>
            </div>
        `;
        mentorList.appendChild(mentorCard);
    });
    updatePaginationButtons();
    attachRequestEventListeners();
}

function updatePaginationButtons() {
    if (filteredMentors.length <= mentorsPerPage) {
        prevPageBtn.style.display = 'none';
        nextPageBtn.style.display = 'none';
    } else {
        prevPageBtn.style.display = currentPage === 0 ? 'none' : 'block';
        nextPageBtn.style.display = (currentPage + 1) * mentorsPerPage >= filteredMentors.length ? 'none' : 'block';
    }
}

function applyFilters() {
    const expertiseValue = expertiseFilter.value;
    const industryValue = industryFilter.value;
    const locationValue = locationFilter.value;

    filteredMentors = mentors.filter(mentor => {
        const expertiseMatch = expertiseValue === 'all' || mentor.expertise.toLowerCase().replace(/\s/g, '-') === expertiseValue;
        const industryMatch = industryValue === 'all' || mentor.industry.toLowerCase().replace(/\s/g, '-') === industryValue;
        const locationMatch = locationValue === 'all' || mentor.location.toLowerCase().replace(/\s/g, '-') === locationValue;
        return expertiseMatch && industryMatch && locationMatch;
    });
    currentPage = 0;
    renderMentors();
}

function attachRequestEventListeners() {
    document.querySelectorAll('.request-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const mentorId = event.target.dataset.mentorId;
            const mentor = mentors.find(m => m.id == mentorId);
            if (mentor) {
                mentorNameModal.textContent = mentor.name;
                showModal();
                renderCalendar();
            }
        });
    });
}

function showModal() {
    schedulingModal.classList.add('modal-active');
}

function hideModal() {
    schedulingModal.classList.remove('modal-active');
    timeSlotsView.classList.add('hidden');
}

function showSuccessPopup() {
    successPopup.classList.add('success-popup-active');
    setTimeout(() => {
        successPopup.classList.remove('success-popup-active');
    }, 3000);
}

function renderCalendar() {
    calendarDates.innerHTML = '';
    const today = new Date();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const startDay = firstDayOfMonth.getDay();
    const numDays = lastDayOfMonth.getDate();
    
    currentMonthYearSpan.textContent = firstDayOfMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' });

    for (let i = 0; i < startDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'calendar-day-cell';
        calendarDates.appendChild(emptyCell);
    }

    for (let day = 1; day <= numDays; day++) {
        const dateCell = document.createElement('div');
        const fullDate = new Date(currentYear, currentMonth, day);
        const dateString = fullDate.toISOString().split('T')[0];
        const isToday = fullDate.toDateString() === today.toDateString();
        const hasSlots = availableSlots[dateString];

        dateCell.className = `calendar-day-cell cursor-pointer text-gray-800 ${isToday ? 'bg-blue-200 text-blue-800 font-semibold' : ''} ${hasSlots ? 'has-slots' : 'text-gray-400 cursor-not-allowed'}`;
        dateCell.textContent = day;
        dateCell.dataset.date = dateString;
        
        if (hasSlots) {
            dateCell.addEventListener('click', () => {
                document.querySelectorAll('.calendar-day-cell').forEach(cell => cell.classList.remove('active'));
                dateCell.classList.add('active');
                renderTimeSlots(dateString);
            });
        }
        calendarDates.appendChild(dateCell);
    }
}

function renderTimeSlots(date) {
    timeSlotsContainer.innerHTML = '';
    timeSlotsView.classList.remove('hidden');
    
    const slots = availableSlots[date] || [];
    if (slots.length > 0) {
        slots.forEach(slot => {
            const slotBtn = document.createElement('button');
            slotBtn.className = 'time-slot bg-gray-200 rounded-full font-medium text-gray-700';
            slotBtn.textContent = slot;
            slotBtn.addEventListener('click', () => {
                document.querySelectorAll('.time-slot').forEach(btn => btn.classList.remove('selected'));
                slotBtn.classList.add('selected');
                confirmBookingBtn.style.display = 'block';
            });
            timeSlotsContainer.appendChild(slotBtn);
        });
    } else {
        timeSlotsContainer.innerHTML = '<p class="text-gray-500">No slots available on this day.</p>';
        confirmBookingBtn.style.display = 'none';
    }
}

// Event listeners for page navigation and filters
expertiseFilter.addEventListener('change', applyFilters);
industryFilter.addEventListener('change', applyFilters);
locationFilter.addEventListener('change', applyFilters);

nextPageBtn.addEventListener('click', () => {
    if (!nextPageBtn.disabled) {
        currentPage++;
        renderMentors();
    }
});

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        renderMentors();
    }
});

// Event listeners for modal
closeModalBtn.addEventListener('click', hideModal);
window.addEventListener('click', (event) => {
    if (event.target === schedulingModal) {
        hideModal();
    }
});

// Event listeners for calendar navigation
prevMonthBtn.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});

// Event listener for booking confirmation
confirmBookingBtn.addEventListener('click', () => {
    const selectedDate = document.querySelector('.calendar-day-cell.active').dataset.date;
    const selectedTime = document.querySelector('.time-slot.selected').textContent;
    
    console.log(`Booking confirmed for ${selectedDate} at ${selectedTime}.`);
    
    hideModal();
    showSuccessPopup();
});

// Initial render
applyFilters();