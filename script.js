// Sample data for movies and series
const moviesData = [
    {
      id: 1,
      title: "Guntur Kaaram",
      description: "This is the description for Movie 1.",
      imgUrl: "mahesh.jpeg"
    },
    {
        id: 2,
        title: "Animal",
        description: "This is the description for Movie 2.",
        imgUrl: "animal.jpeg"
      },
    // Add more movie data here
  ];
  
  const seriesData = [
    {
      id: 1,
      title: "Series 1",
      description: "This is the description for Series 1.",
      imgUrl: "animal.jpeg"
    },
    // Add more series data here
  ];
  
  // Render content on the homepage
  function renderContent(contentData, sectionId) {
    const contentSection = document.getElementById(sectionId);
    contentData.forEach(item => {
      const contentItem = document.createElement('div');
      contentItem.classList.add('content-item');
      contentItem.innerHTML = `
        <img src="${item.imgUrl}" alt="${item.title}">
        <div class="title">${item.title}</div>
      `;
      contentItem.addEventListener('click', () => showContentDetails(item));
      contentSection.appendChild(contentItem);
    });
  }
  
  renderContent(moviesData, 'trending-content');
  renderContent(seriesData, 'recommended-content');
  
  // Display content details
  const modal = document.getElementById('content-modal');
  const modalContent = document.querySelector('.modal-content');
  const closeModal = document.getElementsByClassName('close')[0];
  
  function showContentDetails(contentData) {
    const modalDetails = document.createElement('div');
    modalDetails.innerHTML = `
      <img src="${contentData.imgUrl}" alt="${contentData.title}">
      <h3>${contentData.title}</h3>
      <p>${contentData.description}</p>
    `;
    modalContent.querySelector('.modal-details').appendChild(modalDetails);
    modal.style.display = 'block';
  }
  
  closeModal.onclick = function() {
    modal.style.display = 'none';
    modalContent.querySelector('.modal-details').innerHTML = '';
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
      modalContent.querySelector('.modal-details').innerHTML = '';
    }
  }
  
  // Search functionality
  const searchInput = document.getElementById('search-input');
  
  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
      const title = item.querySelector('.title').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });