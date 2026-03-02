import React, { useEffect, useRef } from 'react';

const Comp = () => {
  const scrollRef = useRef(null);

  // Match Data - Moved from your script tag
  const matches = [
    { id: 1, date: "Sat Feb 07", event: "Conference Duals (UMBC)", opponentLogo: "https://styleguide.umbc.edu/wp-content/uploads/sites/113/2019/09/UMBCretrievers_JUSTHEAD-on-white-or-black.png", location: "Baltimore, MD", type: "Away", color: "#FFC20E" },
    { id: 2, date: "Sat Feb 21", event: "Home Tri Meet (TBD)", opponentLogo: "/images/umd-logo.png", location: "College Park, MD", type: "Home", color: "#E31130" },
    { id: 3, date: "Sat Mar 14", event: "Conference Championships", opponentLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvceyVdhzbFLKWaLJ3PMtcg0Arqu8SxnUeHg&s", location: "Bensalem, PA", type: "Away", color: "#00205B" },
    { id: 4, date: "Mar 25–28", event: "National Championships", opponentLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvceyVdhzbFLKWaLJ3PMtcg0Arqu8SxnUeHg&s", location: "Shreveport, LA", type: "Away", color: "#00205B" },
    { id: 5, date: "Oct 2026", event: "Season Opener (TBA)", opponentLogo: "/images/umd-logo.png", location: "TBA", type: "Home", color: "#E31130" }
  ];

  // Scroll logic for buttons
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Fade Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
    }, { threshold: 0.1 });

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    return () => fadeElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="comp-page-override">
      <section className="comp-hero-stage">
        <div className="comp-hero-image">
          <img src="/images/comp-page.jpg" alt="Competitive Wrestling Action" />
        </div>
        <div className="comp-hero-overlay">
          <div className="hero-content fade-on-scroll">
            <span className="hero-sub-label">NCWA</span>
            <h1 className="hero-title">Schedule</h1>
            <p className="hero-desc">Join our competitive team to wrestle against the best teams in the east coast.</p>
          </div>
        </div>
      </section>

      <section className="schedule-stage-overlay">
        <div className="scroller-wrapper">
          <div className="scroller-nav">
            <button className="nav-btn btn-left" onClick={() => scroll('left')} aria-label="Scroll Left">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="nav-btn btn-right" onClick={() => scroll('right')} aria-label="Scroll Right">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="schedule-scroller-track fade-on-scroll">
            {matches.map((match) => (
              <div key={match.id} className="match-card">
                <div className="card-top-logo" style={{ backgroundColor: match.color }}>
                  <img src={match.opponentLogo} alt="Logo" />
                </div>
                <div className="card-bottom-info">
                  <span className="card-date">{match.date}</span>
                  <h3 className="card-event">{match.event}</h3>
                  <span className="card-location">{match.location}</span>
                  <span className={`type-tag tag-${match.type.toLowerCase()}`}>{match.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Comp;