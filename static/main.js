document.addEventListener('DOMContentLoaded', () => {
  const ageModal = document.getElementById('ageModal');
  const mainContent = document.getElementById('mainContent');

  window.enterSite = () => {
    ageModal.style.display = 'none';
    mainContent.style.display = 'flex';
    localStorage.setItem('ageVerified', 'true');
  };

  window.leaveSite = () => {
    window.location.href = 'https://google.com';
  };

  if (localStorage.getItem('ageVerified') === 'true') {
    ageModal.style.display = 'none';
    mainContent.style.display = 'flex';
  }
});
