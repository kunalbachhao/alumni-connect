// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInWithCustomToken, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc, collection, query, getDocs, updateDoc, deleteDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
    // Global variables for Firebase
    const appId = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    const firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
    const initialAuthToken = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : '';
    let db, auth, userId;

    // UI elements
    const dashboardTabs = document.querySelectorAll('.dashboard-tab');
    const navItems = document.querySelectorAll('.nav-item');
    const loadingSpinner = document.getElementById('loading');
    const pageTitle = document.getElementById('pageTitle');
    const pageSubtitle = document.getElementById('pageSubtitle');
    const userIdDisplay = document.getElementById('userIdDisplay');

    // Dashboard content containers
    const mentorsList = document.getElementById('mentorsList');
    const sessionsTableBody = document.getElementById('sessionsTableBody');
    const feedbackList = document.getElementById('feedbackList');
    const popularMentorsList = document.getElementById('popularMentorsList');
    const sessionStatsList = document.getElementById('sessionStatsList');
    const totalMentorsCount = document.getElementById('totalMentorsCount');
    const totalSessionsCount = document.getElementById('totalSessionsCount');
    const averageRating = document.getElementById('averageRating');
    
    // Preview Sidebar elements
    const previewSidebar = document.getElementById('previewSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebarContent = document.getElementById('sidebarContent');

    // Message Box elements
    const messageBox = document.getElementById('messageBox');
    const messageText = document.getElementById('messageText');
    const okBtn = document.getElementById('okBtn');
    const cancelBtn = document.getElementById('cancelBtn');

    // --- Firebase Initialization and Authentication ---
    try {
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        auth = getAuth(app);

        // Sign in with custom token or anonymously
        if (initialAuthToken) {
            await signInWithCustomToken(auth, initialAuthToken);
        } else {
            await signInAnonymously(auth);
        }

        userId = auth.currentUser.uid;
        userIdDisplay.textContent = userId;

        // Simulate admin status check (all users in this demo are admins)
        const isAdmin = true;

        if (!isAdmin) {
            showMessageBox('You do not have administrative privileges to access this page.');
            return;
        }

        // Add some mock data to Firestore to get started
        // This is a one-time operation. Once the data is in the database, you can comment this out to improve load performance.
        // await addMockData();
        showTab('mentors');
    } catch (error) {
        console.error("Firebase initialization or authentication failed:", error);
        showMessageBox('Failed to connect to the database. Please try again later.');
        loadingSpinner.classList.add('hidden');
    }

    // --- Core Functions ---
    async function addMockData() {
        const mentorsRef = collection(db, `artifacts/${appId}/public/data/mentors`);
        const sessionsRef = collection(db, `artifacts/${appId}/public/data/sessions`);
        const feedbackRef = collection(db, `artifacts/${appId}/public/data/feedback`);
        
        try {
            const mentorsSnapshot = await getDocs(mentorsRef);
            if (mentorsSnapshot.empty) {
                console.log("Adding mock data...");
                const mockMentors = [
                    { id: 'mentor1', name: 'Dr. Jane Doe', specialization: 'Software Engineering', status: 'active', email: 'jane.d@example.com', bio: 'A highly experienced software architect with a focus on cloud-native applications and microservices.', joinedDate: '2023-01-15' },
                    { id: 'mentor2', name: 'John Smith', specialization: 'Product Management', status: 'active', email: 'john.s@example.com', bio: 'Passionate about building user-centric products and leading cross-functional teams from ideation to launch.', joinedDate: '2023-03-20' },
                    { id: 'mentor3', name: 'Emily White', specialization: 'UI/UX Design', status: 'inactive', email: 'emily.w@example.com', bio: 'Dedicated to creating intuitive and beautiful digital experiences. Expert in Figma and user research.', joinedDate: '2024-02-10' },
                    { id: 'mentor4', name: 'Michael Brown', specialization: 'Data Science', status: 'active', email: 'michael.b@example.com', bio: 'Specialist in machine learning models and data visualization. Helps aspiring data scientists build their portfolios.', joinedDate: '2024-05-05' },
                    { id: 'mentor5', name: 'Sarah Lee', specialization: 'Cybersecurity', status: 'active', email: 'sarah.l@example.com', bio: 'A certified cybersecurity professional with a focus on network security and ethical hacking.', joinedDate: '2024-06-25' }
                ];
                for (const mentor of mockMentors) { await setDoc(doc(mentorsRef, mentor.id), mentor); }

                const mockSessions = [
                    { id: 'session1', mentorId: 'mentor1', mentee: 'Alice Chen', date: '2024-09-01', status: 'completed', topic: 'Career Path in Tech', duration: '1 hr' },
                    { id: 'session2', mentorId: 'mentor2', mentee: 'Bob Johnson', date: '2024-08-25', status: 'completed', topic: 'Product Strategy', duration: '30 min' },
                    { id: 'session3', mentorId: 'mentor1', mentee: 'Charlie Davis', date: '2024-09-10', status: 'pending', topic: 'Interview Preparation', duration: '1 hr' },
                    { id: 'session4', mentorId: 'mentor4', mentee: 'Dana Evans', date: '2024-09-05', status: 'completed', topic: 'Building a Data Portfolio', duration: '45 min' },
                    { id: 'session5', mentorId: 'mentor1', mentee: 'Eva Green', date: '2024-09-12', status: 'completed', topic: 'Learning a New Language', duration: '1 hr' }
                ];
                for (const session of mockSessions) { await setDoc(doc(sessionsRef, session.id), session); }
                
                const mockFeedback = [
                    { id: 'feedback1', mentorId: 'mentor1', mentee: 'Alice Chen', rating: 5, comment: 'Excellent advice, very helpful! Jane was very clear and provided actionable steps.', date: '2024-09-02' },
                    { id: 'feedback2', mentorId: 'mentor2', mentee: 'Bob Johnson', rating: 4, comment: 'Good session, a little brief. John was knowledgeable but we ran out of time.', date: '2024-08-26' },
                    { id: 'feedback3', mentorId: 'mentor1', mentee: 'Eva Green', rating: 5, comment: 'Very insightful. Highly recommend. Great feedback on my learning plan.', date: '2024-09-12' },
                    { id: 'feedback4', mentorId: 'mentor4', mentee: 'Dana Evans', rating: 5, comment: 'Michael was awesome. Provided great project ideas and feedback.', date: '2024-09-06' }
                ];
                for (const feedback of mockFeedback) { await setDoc(doc(feedbackRef, feedback.id), feedback); }
            }
        } catch (e) {
            console.error("Error adding mock data: ", e);
        }
    }

    // --- Tab Management ---
    function showTab(tabId) {
        loadingSpinner.classList.remove('hidden');
        dashboardTabs.forEach(tab => tab.classList.add('hidden'));
        navItems.forEach(item => item.classList.remove('active'));

        const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
        activeTab.classList.add('active');

        const tabSection = document.getElementById(tabId);
        if (tabSection) tabSection.classList.remove('hidden');

        updateHeader(tabId);
        
        // Fetch and render data for the selected tab
        switch (tabId) {
            case 'mentors':
                fetchMentors();
                break;
            case 'sessions':
                fetchSessions();
                break;
            case 'feedback':
                fetchFeedback();
                break;
            case 'analytics':
                fetchAnalytics();
                break;
        }
    }

    function updateHeader(tabId) {
        const titles = {
            mentors: 'Manage Mentors',
            sessions: 'Session History',
            feedback: 'Review Feedback',
            analytics: 'Analytics'
        };
        const subtitles = {
            mentors: 'Approve, edit, and deactivate mentor profiles.',
            sessions: 'Track all past and upcoming mentorship sessions.',
            feedback: 'Review feedback and ratings from mentees.',
            analytics: 'View key statistics and insights on the program.'
        };
        pageTitle.textContent = titles[tabId];
        pageSubtitle.textContent = subtitles[tabId];
    }

    // --- Data Fetching and Rendering ---
    async function fetchMentors() {
        mentorsList.innerHTML = '';
        const mentorsRef = collection(db, `artifacts/${appId}/public/data/mentors`);
        onSnapshot(mentorsRef, (snapshot) => {
            mentorsList.innerHTML = '';
            const mentorsData = snapshot.docs.map(doc => doc.data());
            if (mentorsData.length === 0) {
                mentorsList.innerHTML = '<p class="text-gray-500 text-center col-span-full">No mentor profiles found.</p>';
            } else {
                mentorsData.forEach(mentor => {
                    const statusColor = mentor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
                    mentorsList.innerHTML += `
                        <div class="mentor-card bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300 cursor-pointer" data-id="${mentor.id}">
                            <h3 class="text-xl font-semibold mb-2">${mentor.name}</h3>
                            <p class="text-sm text-gray-500 mb-2">${mentor.specialization}</p>
                            <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColor}">${mentor.status.toUpperCase()}</span>
                        </div>
                    `;
                });
                document.querySelectorAll('.mentor-card').forEach(card => {
                    card.addEventListener('click', () => showMentorPreview(card.dataset.id));
                });
            }
            loadingSpinner.classList.add('hidden');
        }, (error) => {
            console.error("Error fetching mentors: ", error);
            mentorsList.innerHTML = '<p class="text-red-500 text-center col-span-full">Failed to load data. Please try again.</p>';
            loadingSpinner.classList.add('hidden');
        });
    }

    async function fetchSessions() {
        sessionsTableBody.innerHTML = '';
        const sessionsRef = collection(db, `artifacts/${appId}/public/data/sessions`);
        onSnapshot(sessionsRef, (snapshot) => {
            sessionsTableBody.innerHTML = '';
            const sessionsData = snapshot.docs.map(doc => doc.data());
            if (sessionsData.length === 0) {
                sessionsTableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-gray-500">No session history found.</td></tr>';
            } else {
                sessionsData.forEach(session => {
                    sessionsTableBody.innerHTML += `
                        <tr class="cursor-pointer hover:bg-gray-50 session-row" data-id="${session.id}">
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${session.id}</td>
                            <td class="px-6 py-4 whitespace-now-wrap text-sm text-gray-900">${session.mentorId}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${session.mentee}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${session.topic}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${session.date}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">${session.status}</td>
                        </tr>
                    `;
                });
                document.querySelectorAll('.session-row').forEach(row => {
                    row.addEventListener('click', () => showSessionPreview(row.dataset.id));
                });
            }
            loadingSpinner.classList.add('hidden');
        }, (error) => {
            console.error("Error fetching sessions: ", error);
            sessionsTableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4 text-red-500">Failed to load data.</td></tr>';
            loadingSpinner.classList.add('hidden');
        });
    }

    async function fetchFeedback() {
        feedbackList.innerHTML = '';
        const feedbackRef = collection(db, `artifacts/${appId}/public/data/feedback`);
        onSnapshot(feedbackRef, (snapshot) => {
            feedbackList.innerHTML = '';
            const feedbackData = snapshot.docs.map(doc => doc.data());
            if (feedbackData.length === 0) {
                feedbackList.innerHTML = '<p class="text-gray-500 text-center">No feedback received yet.</p>';
            } else {
                feedbackData.forEach(feedback => {
                    let starsHtml = '';
                    for (let i = 5; i >= 1; i--) {
                        starsHtml += `<span class="star ${feedback.rating >= i ? 'selected' : ''}">★</span>`;
                    }

                    feedbackList.innerHTML += `
                        <div class="feedback-card bg-white p-6 rounded-2xl shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300" data-id="${feedback.id}">
                            <div class="flex items-center mb-2">
                                <div class="star-rating">
                                    ${starsHtml}
                                </div>
                            </div>
                            <p class="text-gray-700 italic mb-2">"${feedback.comment}"</p>
                            <p class="text-sm text-gray-500">
                                <span class="font-semibold">Mentor:</span> ${feedback.mentorId}
                                <span class="mx-2 text-gray-300">|</span>
                                <span class="font-semibold">Mentee:</span> ${feedback.mentee}
                            </p>
                            <p class="text-sm text-gray-500">
                                <span class="font-semibold">Date:</span> ${feedback.date}
                            </p>
                        </div>
                    `;
                });
                document.querySelectorAll('.feedback-card').forEach(card => {
                    card.addEventListener('click', () => showFeedbackPreview(card.dataset.id));
                });
            }
            loadingSpinner.classList.add('hidden');
        }, (error) => {
            console.error("Error fetching feedback: ", error);
            feedbackList.innerHTML = '<p class="text-red-500 text-center">Failed to load data. Please try again.</p>';
            loadingSpinner.classList.add('hidden');
        });
    }

    async function fetchAnalytics() {
        popularMentorsList.innerHTML = '';
        sessionStatsList.innerHTML = '';
        const mentorsRef = collection(db, `artifacts/${appId}/public/data/mentors`);
        const sessionsRef = collection(db, `artifacts/${appId}/public/data/sessions`);
        const feedbackRef = collection(db, `artifacts/${appId}/public/data/feedback`);
        
        try {
            // Fetch all data for analytics
            const [mentorsSnap, sessionsSnap, feedbackSnap] = await Promise.all([
                getDocs(mentorsRef),
                getDocs(sessionsRef),
                getDocs(feedbackRef)
            ]);
            
            const mentorsData = mentorsSnap.docs.map(doc => doc.data());
            const sessionsData = sessionsSnap.docs.map(doc => doc.data());
            const feedbackData = feedbackSnap.docs.map(doc => doc.data());

            // Render summary cards
            totalMentorsCount.textContent = mentorsData.length;
            totalSessionsCount.textContent = sessionsData.length;
            
            const totalRating = feedbackData.reduce((sum, f) => sum + f.rating, 0);
            const avgRating = feedbackData.length > 0 ? (totalRating / feedbackData.length).toFixed(1) : 'N/A';
            averageRating.textContent = avgRating;

            // Render popular mentors list
            const mentorSessionCounts = sessionsData.reduce((acc, session) => {
                acc[session.mentorId] = (acc[session.mentorId] || 0) + 1;
                return acc;
            }, {});
            const sortedMentors = Object.entries(mentorSessionCounts).sort(([, a], [, b]) => b - a);

            if (sortedMentors.length > 0) {
                const popularMentors = sortedMentors.slice(0, 5);
                popularMentors.forEach(([mentorId, count]) => {
                    const mentor = mentorsData.find(m => m.id === mentorId);
                    const mentorName = mentor ? mentor.name : mentorId;
                    popularMentorsList.innerHTML += `
                        <li class="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                            <span class="font-medium">${mentorName}</span>
                            <span class="text-sm text-gray-500">${count} sessions</span>
                        </li>
                    `;
                });
            } else {
                popularMentorsList.innerHTML = '<li class="text-gray-500 text-sm">No session data to analyze.</li>';
            }

            // Render session stats
            const completedSessions = sessionsData.filter(s => s.status === 'completed').length;
            const pendingSessions = sessionsData.filter(s => s.status === 'pending').length;

            sessionStatsList.innerHTML = `
                <li class="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <span class="font-medium">Completed Sessions</span>
                    <span class="text-green-600 font-bold">${completedSessions}</span>
                </li>
                <li class="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                    <span class="font-medium">Pending Sessions</span>
                    <span class="text-yellow-600 font-bold">${pendingSessions}</span>
                </li>
            `;
        } catch (error) {
            console.error("Error fetching analytics: ", error);
            popularMentorsList.innerHTML = '<p class="text-red-500 text-sm">Failed to load analytics data.</p>';
            sessionStatsList.innerHTML = '';
        } finally {
            loadingSpinner.classList.add('hidden');
        }
    }

    // --- Preview Sidebar Functions ---
    function openSidebar() {
        previewSidebar.classList.add('open');
        previewSidebar.classList.remove('hidden');
    }

    function closeSidebar() {
        previewSidebar.classList.remove('open');
        setTimeout(() => previewSidebar.classList.add('hidden'), 300);
    }
    
    async function showMentorPreview(id) {
        const mentorsRef = collection(db, `artifacts/${appId}/public/data/mentors`);
        const q = query(mentorsRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            showMessageBox('Mentor not found.');
            return;
        }
        const mentor = querySnapshot.docs[0].data();
        const statusColor = mentor.status === 'active' ? 'text-green-600' : 'text-red-600';

        sidebarContent.innerHTML = `
            <h3 class="text-2xl font-bold mb-2">${mentor.name}</h3>
            <p class="text-gray-500 mb-4">${mentor.specialization}</p>
            <div class="space-y-3 text-gray-700 text-sm">
                <p><strong>Email:</strong> <span class="text-gray-600">${mentor.email}</span></p>
                <p><strong>Status:</strong> <span class="capitalize font-semibold ${statusColor}">${mentor.status}</span></p>
                <p><strong>Joined:</strong> <span class="text-gray-600">${mentor.joinedDate}</span></p>
                <p><strong>Bio:</strong> <p class="text-gray-600 italic mt-1">${mentor.bio}</p></p>
            </div>
            <div class="mt-6 flex space-x-2">
                <button class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 toggle-status-btn" data-id="${mentor.id}" data-status="${mentor.status}">
                    ${mentor.status === 'active' ? 'Deactivate' : 'Activate'}
                </button>
                <button class="bg-red-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-700 delete-btn" data-id="${mentor.id}">Delete</button>
            </div>
        `;
        openSidebar();
    }

    async function showSessionPreview(id) {
        const sessionsRef = collection(db, `artifacts/${appId}/public/data/sessions`);
        const q = query(sessionsRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            showMessageBox('Session not found.');
            return;
        }
        const session = querySnapshot.docs[0].data();
        
        sidebarContent.innerHTML = `
            <h3 class="text-2xl font-bold mb-2">Session Details</h3>
            <div class="space-y-3 text-gray-700 text-sm">
                <p><strong>Session ID:</strong> <span class="text-gray-600">${session.id}</span></p>
                <p><strong>Mentor:</strong> <span class="text-gray-600">${session.mentorId}</span></p>
                <p><strong>Mentee:</strong> <span class="text-gray-600">${session.mentee}</span></p>
                <p><strong>Topic:</strong> <span class="text-gray-600">${session.topic}</span></p>
                <p><strong>Date:</strong> <span class="text-gray-600">${session.date}</span></p>
                <p><strong>Duration:</strong> <span class="text-gray-600">${session.duration}</span></p>
                <p><strong>Status:</strong> <span class="capitalize font-semibold text-gray-600">${session.status}</span></p>
            </div>
        `;
        openSidebar();
    }

    async function showFeedbackPreview(id) {
        const feedbackRef = collection(db, `artifacts/${appId}/public/data/feedback`);
        const q = query(feedbackRef, where("id", "==", id));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            showMessageBox('Feedback not found.');
            return;
        }
        const feedback = querySnapshot.docs[0].data();
        
        let starsHtml = '';
        for (let i = 5; i >= 1; i--) {
            starsHtml += `<span class="star ${feedback.rating >= i ? 'selected' : ''}">★</span>`;
        }

        sidebarContent.innerHTML = `
            <h3 class="text-2xl font-bold mb-2">Feedback</h3>
            <div class="space-y-3 text-gray-700 text-sm">
                <div class="flex items-center mb-2">
                    <div class="star-rating">
                        ${starsHtml}
                    </div>
                </div>
                <p><strong>Mentor:</strong> <span class="text-gray-600">${feedback.mentorId}</span></p>
                <p><strong>Mentee:</strong> <span class="text-gray-600">${feedback.mentee}</span></p>
                <p><strong>Date:</strong> <span class="text-gray-600">${feedback.date}</span></p>
                <div class="bg-gray-100 p-4 rounded-lg mt-4">
                    <p class="text-sm font-semibold mb-1">Comments:</p>
                    <p class="italic text-gray-700">"${feedback.comment}"</p>
                </div>
            </div>
        `;
        openSidebar();
    }

    // --- Action Handlers ---
    document.addEventListener('click', async (e) => {
        if (e.target.classList.contains('toggle-status-btn')) {
            const id = e.target.dataset.id;
            const currentStatus = e.target.dataset.status;
            const newStatus = currentStatus === 'active' ? 'inactive' : 'active';
            
            showMessageBox(`Are you sure you want to change this mentor's status to ${newStatus}?`, true).then(async (confirmed) => {
                if (confirmed) {
                    try {
                        const mentorRef = doc(db, `artifacts/${appId}/public/data/mentors`, id);
                        await updateDoc(mentorRef, { status: newStatus });
                        showMessageBox('Mentor status updated successfully!');
                        closeSidebar();
                    } catch (error) {
                        console.error("Error updating mentor status:", error);
                        showMessageBox('Failed to update mentor status.');
                    }
                }
            });
        }
        
        if (e.target.classList.contains('delete-btn')) {
            const id = e.target.dataset.id;
            
            showMessageBox('Are you sure you want to delete this mentor? This action cannot be undone.', true).then(async (confirmed) => {
                if (confirmed) {
                    try {
                        const mentorRef = doc(db, `artifacts/${appId}/public/data/mentors`, id);
                        await deleteDoc(mentorRef);
                        showMessageBox('Mentor deleted successfully!');
                        closeSidebar();
                    } catch (error) {
                        console.error("Error deleting mentor:", error);
                        showMessageBox('Failed to delete mentor.');
                    }
                }
            });
        }

        if (e.target.classList.contains('nav-item')) {
            e.preventDefault();
            const tabId = e.target.dataset.tab;
            showTab(tabId);
            closeSidebar();
        }
    });

    closeSidebarBtn.addEventListener('click', closeSidebar);

    // --- Custom Message Box ---
    function showMessageBox(message, isConfirm = false) {
        return new Promise(resolve => {
            messageText.textContent = message;
            messageBox.classList.remove('hidden');
            okBtn.onclick = () => {
                messageBox.classList.add('hidden');
                resolve(true);
            };
            if (isConfirm) {
                cancelBtn.classList.remove('hidden');
                cancelBtn.onclick = () => {
                    messageBox.classList.add('hidden');
                    resolve(false);
                };
            } else {
                cancelBtn.classList.add('hidden');
            }
        });
    }

});

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector("aside");

// Create overlay
const overlay = document.createElement("div");
overlay.id = "sidebarOverlay";
document.body.appendChild(overlay);

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("show");
});