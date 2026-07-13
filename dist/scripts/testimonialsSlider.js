/**
 * Testimonials Slider Module
 * Handles infinite continuous loop of testimonials carousel
 */

class TestimonialsSlider {
  constructor() {
    this.track = document.querySelector('.testi-track');
    this.cards = document.querySelectorAll('.testi');
    this.currentIndex = 0;
    this.autoRotateInterval = null;
    this.autoRotateDelay = 3000; // 3 seconds
    this.originalCardCount = 4; // Number of original testimonials before duplication

    if (this.track && this.cards.length > 0) {
      this.init();
    }
  }

  init() {
    // Start auto-rotation immediately
    this.startAutoRotate();
    
    // Handle window resize
    window.addEventListener('resize', () => this.updateSlider());
    
    this.updateSlider();
  }

  updateSlider() {
    const cardWidth = this.cards[0].offsetWidth + 40; // 40px gap
    this.track.style.transform = `translateX(-${this.currentIndex * cardWidth}px)`;
  }

  nextSlide() {
    this.currentIndex++;
    const cardWidth = this.cards[0].offsetWidth + 40;
    
    // When reaching the end of original set, reset to beginning seamlessly
    if (this.currentIndex >= this.originalCardCount) {
      // Apply transition for smooth movement
      this.track.style.transition = 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
      this.updateSlider();
      
      // After reaching the duplicate section, reset without animation
      setTimeout(() => {
        this.track.style.transition = 'none';
        this.currentIndex = 0;
        this.updateSlider();
      }, 800); // Match the transition duration
    } else {
      this.track.style.transition = 'transform 0.8s cubic-bezier(0.22, 0.61, 0.36, 1)';
      this.updateSlider();
    }
  }

  startAutoRotate() {
    if (this.autoRotateInterval) return;
    
    this.autoRotateInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoRotateDelay);
  }

  stopAutoRotate() {
    if (this.autoRotateInterval) {
      clearInterval(this.autoRotateInterval);
      this.autoRotateInterval = null;
    }
  }

  destroy() {
    this.stopAutoRotate();
  }
}

// Initialize slider when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      new TestimonialsSlider();
    });
  } else {
    new TestimonialsSlider();
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TestimonialsSlider;
}
