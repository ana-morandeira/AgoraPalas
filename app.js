/* =============================================
   ÁGORA PALAS — Lógica principal
   app.js
   ============================================= */

/**

 
 * @param {string} sectionId  
 * @param {HTMLElement} btn   
 */
function showTab(sectionId, btn) {
  // Ocultar todas las secciones
  document.querySelectorAll('.section').forEach(function (section) {
    section.classList.remove('active');
  });

  // Desactivar todos los tabs
  document.querySelectorAll('.tab-btn').forEach(function (tabBtn) {
    tabBtn.classList.remove('active');
  });

  
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.add('active');
  }

  // Activar el tab elegido
  if (btn) {
    btn.classList.add('active');
    // Llevar el tab al centro de la barra de navegación
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  // Hacer scroll al tope de la página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Navega a una sección desde las tiles de inicio.
 * Busca el botón de tab por índice y llama a showTab.
 *
 * @param {string} sectionId  - ID del <section> destino
 * @param {number} tabIndex   - Índice (0-based) del botón en .tab-btn
 */
function goToSection(sectionId, tabIndex) {
  const tabs = document.querySelectorAll('.tab-btn');
  const btn = tabs[tabIndex] || null;
  showTab(sectionId, btn);
}

/* ── Inicialización ── */
document.addEventListener('DOMContentLoaded', function () {
  // Asegurarse de que la sección "inicio" esté activa al cargar
  const firstSection = document.getElementById('inicio');
  const firstTab = document.querySelector('.tab-btn');

  if (firstSection) firstSection.classList.add('active');
  if (firstTab) firstTab.classList.add('active');

  console.log('Ágora Palas app iniciada ✓');
});
