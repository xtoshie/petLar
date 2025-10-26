// accessibility.js
// For toggling dark mode and high contrast, and persisting preference
document.addEventListener('DOMContentLoaded', function(){
  const html = document.documentElement;
  const btnId = 'a11y-toggle-contrast';

  function applyPreference(){
    const p = localStorage.getItem('petlar_pref');
    if(!p) return;
    try{
      const obj = JSON.parse(p);
      if(obj.dark) html.classList.add('dark-mode'); else html.classList.remove('dark-mode');
      if(obj.highContrast) html.classList.add('high-contrast'); else html.classList.remove('high-contrast');
    }catch(e){}
  }

  function toggleHighContrast(){
    const pref = JSON.parse(localStorage.getItem('petlar_pref') || '{}');
    pref.highContrast = !pref.highContrast;
    localStorage.setItem('petlar_pref', JSON.stringify(pref));
    applyPreference();
  }

  // Expose a function to create a small toggle button in the page (if desired)
  window.petLarA11y = { toggleHighContrast, applyPreference };
  applyPreference();
});
