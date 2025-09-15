      function toggleMenu() {
      document.getElementById("navLinks").classList.toggle("show");
    }   
        
        const albumsData = {
            photos: [
                {
                    id: 'p1',
                    title: "Alumni Meet 2025",
                    year: "2025",
                    type: "social",
                    cover: "https://images.unsplash.com/photo-1523580846011-d3bb57ba03d1?w=400&h=220&fit=crop&q=80",
                    tags: ["alumni", "networking", "celebration"],
                    items: [
                        'https://images.unsplash.com/photo-1523580846011-d3bb57ba03d1?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1582210747477-f2824e93f9de?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1579547621419-f55a15a3a30c?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1523580846011-d3bb57ba03d1?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1582210747477-f2824e93f9de?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'p2',
                    title: "Campus Tour",
                    year: "2024",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=220&fit=crop&q=80",
                    tags: ["campus", "architecture", "students"],
                    items: [
                        'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1509062522267-3759367e9c52?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'p3',
                    title: "Workshop Series",
                    year: "2024",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=220&fit=crop&q=80",
                    tags: ["workshop", "learning", "skills"],
                    items: [
                        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1522204523234-87295a749852?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1531545514256-4b953a992e59?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'p4',
                    title: "Sports Day 2024",
                    year: "2024",
                    type: "sports",
                    cover: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=220&fit=crop&q=80",
                    tags: ["sports", "competition", "athletics"],
                    items: [
                        'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1517649742232-224484081c7e?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1552674609-66c3c7349b17?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1519052537078-ce792d25f778?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'p5',
                    title: "Freshers Day 2023",
                    year: "2023",
                    type: "social",
                    cover: "https://images.unsplash.com/photo-1519052537078-ce792d25f778?w=400&h=220&fit=crop&q=80",
                    tags: ["freshers", "social", "party"],
                    items: [
                        'https://images.unsplash.com/photo-1519052537078-ce792d25f778?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1517649742232-224484081c7e?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1552674609-66c3c7349b17?w=800&h=800&fit=crop&q=80',
                    ]
                }
            ],
            videos: [
                {
                    id: 'v1',
                    title: "Graduation Ceremony 2024",
                    year: "2024",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=220&fit=crop&q=80",
                    tags: ["graduation", "ceremony", "milestone"],
                    items: [
                        'https://www.w3schools.com/html/mov_bbb.mp4',
                        'https://www.w3schools.com/tags/movie.mp4'
                    ]
                },
                {
                    id: 'v2',
                    title: "Cultural Fest Highlights",
                    year: "2024",
                    type: "cultural",
                    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=220&fit=crop&q=80",
                    tags: ["cultural", "performance", "festival"],
                    items: [
                        'https://www.w3schools.com/html/mov_bbb.mp4',
                        'https://www.w3schools.com/tags/movie.mp4'
                    ]
                },
                {
                    id: 'v3',
                    title: "Alumni Stories",
                    year: "2025",
                    type: "social",
                    cover: "https://images.unsplash.com/photo-1560523112-9118e7e174b1?w=400&h=220&fit=crop&q=80",
                    tags: ["interviews", "alumni", "stories"],
                    items: [
                        'https://www.w3schools.com/html/mov_bbb.mp4',
                    ]
                },
                 {
                    id: 'v4',
                    title: "Career Fair Highlights",
                    year: "2024",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=220&fit=crop&q=80",
                    tags: ["careers", "networking", "jobs"],
                    items: [
                        'https://www.w3schools.com/html/mov_bbb.mp4',
                        'https://www.w3schools.com/tags/movie.mp4'
                    ]
                }
            ],
            events: [
                {
                    id: 'e1',
                    title: "Tech Conference 2025",
                    year: "2025",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=220&fit=crop&q=80",
                    tags: ["technology", "conference", "innovation"],
                    items: [
                        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1522204523234-87295a749852?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'e2',
                    title: "Annual Gala Night",
                    year: "2023",
                    type: "social",
                    cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=220&fit=crop&q=80",
                    tags: ["gala", "formal", "celebration"],
                    items: [
                        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1519052537078-ce792d25f778?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'e3',
                    title: "Founders' Day",
                    year: "2024",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1574629235706-5381a1714152?w=400&h=220&fit=crop&q=80",
                    tags: ["founders", "history", "ceremony"],
                    items: [
                        'https://images.unsplash.com/photo-1574629235706-5381a1714152?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1522204523234-87295a749852?w=800&h=800&fit=crop&q=80'
                    ]
                },
                {
                    id: 'e4',
                    title: "Career Fair 2024",
                    year: "2024",
                    type: "academic",
                    cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=400&h=220&fit=crop&q=80",
                    tags: ["careers", "networking", "jobs"],
                    items: [
                        'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=800&fit=crop&q=80',
                        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&q=80'
                    ]
                }
            ]
        };

        const collageData = [
            'https://images.unsplash.com/photo-1519052537078-ce792d25f778?w=400&h=300&fit=crop&q=80',
            'https://images.unsplash.com/photo-1562774053-701939374585?w=400&h=300&fit=crop&q=80',
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop&q=80',
            'https://images.unsplash.com/photo-1582210747477-f2824e93f9de?w=400&h=300&fit=crop&q=80',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop&q=80',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&q=80'
        ];

        let currentTab = 'photos';
        let filteredAlbums = albumsData[currentTab];

        function switchTab(tab) {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
            
            currentTab = tab;
            filteredAlbums = albumsData[currentTab];
            renderAlbums();
            filterAlbums();
            
            const collageSection = document.getElementById('photoCollageSection');
            if (tab === 'photos') {
                collageSection.style.display = 'block';
            } else {
                collageSection.style.display = 'none';
            }
        }

        function renderAlbums() {
            const grid = document.getElementById(currentTab + 'Grid');
            const albums = filteredAlbums;
        
            grid.innerHTML = albums.map(album => {
                const cover = album.cover;
                const isVideo = album.items.some(item => item.endsWith('.mp4'));

                return `
                    <div class="album-card" onclick="${isVideo ? `openVideoModal('${album.items[0]}')` : ''}" data-year="${album.year}" data-type="${album.type}" data-title="${album.title.toLowerCase()}">
                        <div class="album-cover-wrapper">
                            ${isVideo ? `<i class="fa fa-play-circle video-icon"></i>` : ''}
                            <img class="album-cover" src="${cover}" alt="${album.title} cover">
                        </div>
                        <div class="album-info">
                            <h3 class="album-title">${album.title}</h3>
                            <div class="album-meta">
                                <span><i class="fas fa-calendar-alt"></i> ${album.year}</span>
                                <span><i class="fas fa-tag"></i> ${album.type.charAt(0).toUpperCase() + album.type.slice(1)}</span>
                            </div>
                            <div class="album-tags">
                                ${album.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
        
        function openVideoModal(videoUrl) {
            const videoModal = document.getElementById('videoModal');
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.src = videoUrl;
            videoModal.style.display = 'flex';
        }

        function closeVideoModal() {
            const videoModal = document.getElementById('videoModal');
            const videoPlayer = document.getElementById('videoPlayer');
            videoPlayer.pause();
            videoPlayer.currentTime = 0;
            videoModal.style.display = 'none';
        }

        function filterAlbums() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const yearFilter = document.getElementById('yearFilter').value;
            const typeFilter = document.getElementById('typeFilter').value;
        
            const allCards = document.querySelectorAll(`#${currentTab}Grid .album-card`);
            
            allCards.forEach(card => {
                const title = card.dataset.title;
                const year = card.dataset.year;
                const type = card.dataset.type;
                
                const matchesSearch = title.includes(searchTerm);
                const matchesYear = !yearFilter || year === yearFilter;
                const matchesType = !typeFilter || type === typeFilter;
                
                if (matchesSearch && matchesYear && matchesType) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        function renderCollage() {
            const collageGrid = document.getElementById('collageGrid');
            collageGrid.innerHTML = collageData.map(url => `
                <div class="collage-item">
                    <img src="${url}" alt="Collage image">
                </div>
            `).join('');
        }

        document.addEventListener('DOMContentLoaded', () => {
            renderAlbums();
            filterAlbums();
            renderCollage();
            document.getElementById('photoCollageSection').style.display = 'block';
        });