  // ── FAQ Tab switching ──
  document.querySelectorAll('.faq-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const group = tab.dataset.group;
 
      // Update tabs
      document.querySelectorAll('.faq-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
 
      // Show correct group
      document.querySelectorAll('.faq-group').forEach(g => g.classList.remove('active'));
      document.getElementById('faq-' + group).classList.add('active');
    });
  });
 
  // ── FAQ Accordion open/close ──
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
 
      // Close all open items in this group
      btn.closest('.faq-group').querySelectorAll('.faq-item.open').forEach(openItem => {
        openItem.classList.remove('open');
      });
 
      // Toggle clicked item
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });