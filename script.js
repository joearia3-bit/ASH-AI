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
