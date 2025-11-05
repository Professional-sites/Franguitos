const INSTAGRAM_URL = document.body.dataset.instagram || 'https://instagram.com/oficialfranguitos';
const WHATSAPP_NUMBER = document.body.dataset.whatsapp || '5591999999999';
const WPP_TEXT = encodeURIComponent('Olá, quero fazer um pedido! Vim pelo site.');
const ADDRESS = document.body.dataset.address || '';
const LAT = parseFloat(document.body.dataset.lat || '0');
const LNG = parseFloat(document.body.dataset.lng || '0');
const LOGO_URL = document.body.dataset.logo || '';

function whatsappLink(){ return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${WPP_TEXT}`; }
function mapsLink(){ if(ADDRESS) return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`; if(!isNaN(LAT) && !isNaN(LNG) && LAT && LNG) return `https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`; return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Franguitos Fortaleza CE')}`; }
function wazeLink(){ if(!isNaN(LAT)&&!isNaN(LNG)&&LAT&&LNG) return `https://waze.com/ul?ll=${LAT},${LNG}&navigate=yes`; return `https://waze.com/ul?q=${encodeURIComponent(ADDRESS || 'Franguitos Fortaleza CE')}&navigate=yes`; }
function mapsEmbed(){ const base='https://www.google.com/maps?q='; const q = ADDRESS ? encodeURIComponent(ADDRESS) : (!isNaN(LAT)&&!isNaN(LNG)&&LAT&&LNG ? `${LAT},${LNG}` : encodeURIComponent('Franguitos Fortaleza CE')); return `${base}${q}&output=embed`; }

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