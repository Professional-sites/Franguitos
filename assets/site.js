
const INSTAGRAM_URL = document.body.dataset.instagram || 'https://instagram.com/oficialfranguitos';
const WPP_DEEPLINK = document.body.dataset.wpplink || '';
const ADDRESS = document.body.dataset.address || '';
const LOGO_URL = document.body.dataset.logo || '';

function whatsappLink(){ return WPP_DEEPLINK || 'https://wa.me/'; }
function mapsLink(){ return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`; }
function wazeLink(){ return `https://waze.com/ul?q=${encodeURIComponent(ADDRESS)}&navigate=yes`; }
function mapsEmbed(){ return `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`; }

function bindGlobals(){
  document.querySelectorAll('[data-action="wpp"]').forEach(el => el.addEventListener('click', () => window.open(whatsappLink(), '_blank')));
  document.querySelectorAll('[data-action="insta"]').forEach(el => el.addEventListener('click', () => window.open(INSTAGRAM_URL, '_blank')));
  const maps = document.getElementById('btnMaps'); if(maps) maps.href = mapsLink();
  const waze = document.getElementById('btnWaze'); if(waze) waze.href = wazeLink();
  const iframe = document.getElementById('mapFrame'); if(iframe) iframe.src = mapsEmbed();
  const y = document.getElementById('y'); if(y) y.textContent = new Date().getFullYear();
  if(LOGO_URL){ document.querySelectorAll('.logo-badge img').forEach(el => el.src = LOGO_URL); }
  const mobileMenu = document.getElementById('mobileMenu');
  const overlay = document.getElementById('overlay');
  const hamb = document.getElementById('hamb');
  if(hamb){ hamb.addEventListener('click', ()=>{ mobileMenu.style.display='block'; overlay.style.display='block'; document.body.style.overflow='hidden'; }); }
  if(overlay){ overlay.addEventListener('click', ()=>{ mobileMenu.style.display='none'; overlay.style.display='none'; document.body.style.overflow=''; }); }
}
document.addEventListener('DOMContentLoaded', bindGlobals);
