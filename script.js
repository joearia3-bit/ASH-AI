/* ARIA SME HUB - Phase 1 script
   Navigation and interface behaviour only.
   No AI, voice or camera features are connected yet. */

(function () {
  'use strict';

  // ---------- Messages (kept in one place for easy changes) ----------
  const MSG = {
    voice: 'Voice input is not yet connected.',
    ideas: 'Business idea tool coming soon.',
    markets: 'Market discovery coming soon.',
    support: 'Support directory coming soon.',
    camera: 'Camera feature not yet connected. Use Choose Image instead.',
    imageLoaded: 'Image preview loaded. AI image analysis is not yet connected.',
    imageNone: 'No image was selected. Please try again.',
    imageInvalid: 'That file is not an image. Please choose a JPG, PNG or other image file.',
    imageError: 'This image could not be displayed. Please try another image.',
    chatWelcome: 'Hello, I am ARIA. ARIA AI backend is not yet connected. You can still explore the other tools on the homepage.',
    chatReply: 'ARIA AI backend is not yet connected. You can still explore the other tools on the homepage.'
  };

  // ---------- Helpers ----------
  const $ = (id) => document.getElementById(id);

  function showScreen(name) {
    document.querySelectorAll('.screen').forEach((s) => {
      s.classList.toggle('active', s.id === 'screen-' + name);
    });
    window.scrollTo(0, 0);
  }

  function setNotice(el, text, type) {
    el.textContent = text;
    el.className = 'notice notice-' + (type || 'info');
    el.hidden = false;
  }

  function showPlaceholder(title, message) {
    $('placeholder-title').textContent = title;
    setNotice($('placeholder-message'), message, 'info');
    showScreen('placeholder');
  }

  // ---------- Home menu ----------
  function handleMenuAction(action) {
    switch (action) {
      case 'scan':
        resetScan();
        showScreen('scan');
        break;
      case 'talk':
        showPlaceholder('🎤 Talk With ARIA', MSG.voice);
        break;
      case 'chat':
        showScreen('chat');
        $('chat-input').focus();
        break;
      case 'ideas':
        showPlaceholder('💡 Find A Business Idea', MSG.ideas);
        break;
      case 'markets':
        showPlaceholder('🛒 Find Markets', MSG.markets);
        break;
      case 'support':
        showPlaceholder('🤝 Find Support', MSG.support);
        break;
      default:
        showScreen('home');
    }
  }

  document.querySelectorAll('[data-action]').forEach((btn) => {
    btn.addEventListener('click', () => handleMenuAction(btn.dataset.action));
  });

  // ---------- Back buttons ----------
  document.querySelectorAll('[data-back]').forEach((btn) => {
    btn.addEventListener('click', () => showScreen(btn.dataset.back));
  });

  // ---------- Scan with ARIA ----------
  const takePhotoBtn = $('take-photo-btn');
  const chooseImageBtn = $('choose-image-btn');
  const fileInput = $('file-input');
  const preview = $('image-preview');
  const scanNotice = $('scan-notice');
  let currentPreviewUrl = null;

  function resetScan() {
    scanNotice.hidden = true;
    scanNotice.textContent = '';
  }

  takePhotoBtn.addEventListener('click', () => {
    setNotice(scanNotice, MSG.camera, 'warning');
  });

  chooseImageBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', () => {
    const file = fileInput.files && fileInput.files[0];

    if (!file) {
      setNotice(scanNotice, MSG.imageNone, 'warning');
      return;
    }

    if (!file.type || !file.type.startsWith('image/')) {
      setNotice(scanNotice, MSG.imageInvalid, 'warning');
      fileInput.value = '';
      return;
    }

    if (currentPreviewUrl) {
      URL.revokeObjectURL(currentPreviewUrl);
    }
    currentPreviewUrl = URL.createObjectURL(file);
    preview.src = currentPreviewUrl;
    preview.hidden = false;
    fileInput.value = '';
  });

  preview.addEventListener('load', () => {
    setNotice(scanNotice, MSG.imageLoaded, 'success');
  });

  preview.addEventListener('error', () => {
    preview.hidden = true;
    setNotice(scanNotice, MSG.imageError, 'warning');
  });

  // ---------- Chat with ARIA ----------
  const chatLog = $('chat-log');
  const chatForm = $('chat-form');
  const chatInput = $('chat-input');
  const chatClearBtn = $('chat-clear-btn');

  function addMessage(who, text) {
    const div = document.createElement('div');
    div.className = 'msg ' + (who === 'user' ? 'msg-user' : 'msg-aria');

    const label = document.createElement('span');
    label.className = 'msg-label';
    label.textContent = who === 'user' ? 'You' : 'ARIA';

    const body = document.createElement('span');
    body.textContent = text;

    div.appendChild(label);
    div.appendChild(body);
    chatLog.appendChild(div);
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function startChat() {
    chatLog.innerHTML = '';
    addMessage('aria', MSG.chatWelcome);
  }

  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) {
      chatInput.focus();
      return;
    }
    addMessage('user', text);
    addMessage('aria', MSG.chatReply);
    chatInput.value = '';
    chatInput.focus();
  });

  chatClearBtn.addEventListener('click', () => {
    chatInput.value = '';
    startChat();
    chatInput.focus();
  });

  // ---------- Startup ----------
  startChat();
  showScreen('home');
})();
