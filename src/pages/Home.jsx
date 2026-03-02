import React, { useEffect } from 'react';

const Home = () => {
  // Migration of your Fade Observer from script.js
  useEffect(() => {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 1. FADE IN: Only trigger when the element is at least 15% visible
        if (entry.intersectionRatio >= 0.15) {
          entry.target.classList.add('is-visible');
        } 
        // 2. FADE OUT: Only trigger when the element is 100% off-screen
        else if (entry.intersectionRatio === 0) {
          entry.target.classList.remove('is-visible');
        }
      });
    }, { 
      threshold: [0, 0.3] 
    });

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach((el) => scrollObserver.observe(el));

    return () => scrollObserver.disconnect();
  }, []);

  return (
    <div className="home-wrapper">
      {/* HERO STAGE */}
      <section className="hero-stage">
        <div className="hero-image-animated">
          <img src="/images/hero-pan.jpeg" alt="Maryland Wrestling Action Shot" />
        </div>

        <div className="hero-overlay">
          <div className="hero-content">
            <span className="hero-sub-label">UMD</span>
            <h1 className="hero-title">Wrestling<br />Club</h1>
            <p className="hero-desc">
              The home for students who want to learn, train, and compete in one of the most demanding sports on campus. No prior experience required.
            </p>
          </div>
          
          <div className="scroll-indicator">
            <span className="scroll-text">Scroll to learn more</span>
            <div className="scroll-dot"></div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="top-separator-line"></div>
        <div className="bg-glow-red"></div>

        <div className="image-spread">
          <img src="/images/wrestler1.jpg" alt="Wrestling" className="scatter-img img-L1 fade-on-scroll" />
          <img src="/images/wrestler2.jpg" alt="Wrestling" className="scatter-img img-L2 fade-on-scroll" />
          <img src="/images/wrestler3.jpg" alt="Wrestling" className="scatter-img img-L3 fade-on-scroll" /> 
          <img src="/images/wrestler4.jpg" alt="Wrestling" className="scatter-img img-R1 fade-on-scroll" />
          <img src="/images/wrestler5.jpg" alt="Wrestling" className="scatter-img img-R2 fade-on-scroll" />
        </div>

        <div className="centered-text-box fade-on-scroll">
          <p>Short description of our club right here. Something about how we wrestle, are successful, but also are a community, do things outside of wrestling such as a social events and philanthropy etc just fill some stuff.</p>
          <p>Short description of how we welcome everyone to the club. For example, there is no commitment to how often you come, no dues, no experience required, all genders welcome.</p>
          <p>For information for new members, keep scrolling.</p>
        </div>
      </section>

      {/* LOGISTICS STAGE */}
      <div className="logistics-stage">
        <div className="ambient-glow glow-left"></div>
        <div className="ambient-glow glow-right"></div>
        
        {/* Panel 1 */}
        <section className="log-panel">
          <div className="panel-container">
            <div className="log-group pos-1 fade-on-scroll">
              <div className="log-media"><img src="/images/coaches.jpg" alt="Coaching" /></div>
              <div className="log-callout callout-1">
                <div className="connector-line-white"></div>
                <div className="connector-dot-red"></div>
                <div className="log-content">
                  <div className="log-tag">Beginner Friendly</div>
                  <h3>No Experience Needed</h3>
                  <p>If you've never wrestled before, don't worry. We have new members join all the time who have no experience. Our coaches will teach you the fundamentals.</p>
                  <p>Andrew was a national qualifier, and Nimesh has been coaching high school for over 4 years.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 2 */}
        <section className="log-panel">
          <div className="panel-container">
            <div className="log-group pos-2 fade-on-scroll">
              <div className="log-media"><img src="/images/womens.jpg" alt="Women's Team" /></div>
              <div className="log-callout callout-2">
                <div className="connector-line-white"></div>
                <div className="connector-dot-red"></div>
                <div className="log-content">
                  <div className="log-tag">All Genders</div>
                  <h3>Women's Team</h3>
                  <p>Our women's team is led by Mckinley. She was a state champion, won last year's National Collegiate Wrestling Association (NCWA) Midwest regional tournament, and finished fifth in nationals to net All-American honors.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 3 */}
        <section className="log-panel">
          <div className="panel-container">
            <div className="log-group pos-3 fade-on-scroll">
              <div className="log-media"><img src="/images/practice.jpg" alt="Practice" /></div>
              <div className="log-callout callout-3">
                <div className="connector-line-white"></div>
                <div className="connector-dot-red"></div>
                <div className="log-content">
                  <div className="log-tag">Structure</div>
                  <h3>Practice Info</h3>
                  <p>Tue/Sun: 4-6PM<br />Thurs: 6-8PM<br />School of Public Health 0107</p>
                  <p>Bring athletic clothes, wrestling shoes or socks, water, and join the <a href="https://groupme.com/join_group/20293947/XW7h4YJz" className="log-link" target="_blank" rel="noreferrer">GroupMe</a> for updates.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panel 4 */}
        <section className="log-panel">
          <div className="panel-container">
            <div className="log-group pos-4 fade-on-scroll">
              <div className="log-media"><img src="/images/forms.jpg" alt="Gear" /></div>
              <div className="log-callout callout-4">
                <div className="connector-line-white"></div>
                <div className="connector-dot-red"></div>
                <div className="log-content">
                  <div className="log-tag tag-checklist">Checklist</div>
                  <h3>Forms</h3>
                  <p>Go to <a href="https://www.imleagues.com/spa/account/login" className="log-link" target="_blank" rel="noreferrer">IMLeagues</a> —&gt; select UMD —&gt; log-in using directory credentials —&gt; go to club sports —&gt; scroll down to Club Wrestling —&gt; join team, fill out personal information, watch quick video and do concussion quiz.</p>
                  <p>Click <a href="https://docs.google.com/spreadsheets/u/0/d/1LYdTpxAYkwe2Dz9oAMx4_AQY6YTONq-g1Ig_D13dNfQ/htmlview" className="log-link" target="_blank" rel="noreferrer">here</a> —&gt; input your name and .edu email at the bottom —&gt; wait to receive CampDoc email invitation —&gt; complete personal medical history health questionnaire —&gt; GO BACK to IMLeagues —&gt; click Club Wrestling —&gt; in forms, click health profile and sign.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* RESTORED: Top Separator Line */}
      <div className="separator-line"></div>

      {/* RESTORED: Fullscreen Banner */}
      <section className="fullscreen-banner fade-on-scroll">
        <img src="/images/home-break.jpg" alt="Maryland Wrestling Team Banner" />
      </section>

      {/* RESTORED: Bottom Separator Line */}
      <div className="separator-line"></div>

      {/* COMPETITIVE SECTION */}
      <section className="comp-split-stage fade-on-scroll">
        <div className="ambient-glow glow-bottom-left"></div>
        <div className="comp-wrapper">
          <h2 className="comp-heading">National Success</h2>

          <div className="comp-split-container">
            <div className="comp-text-content">
              <div className="text-top-group">
                <div className="comp-bullet-item">
                  <div className="red-bullet"></div>
                  <h3 className="bullet-title">Competitive Team</h3>
                </div>

                <p className="comp-paragraph">
                  For those looking to push themselves to the next level, our travel team competes across the East Coast against top-tier NCWA programs. We have a national champion, multiple national qualifiers, and All-Americans on our roster.
                </p>
              </div>

              <div className="comp-nav-tabs">
                <a href="/competitive" className="comp-tab tab-learn">
                  <span>Learn More</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <a href="/contact" className="comp-tab tab-question">
                  <span>Contact Us</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                </a>
              </div>
            </div>

            <div className="comp-image-wrapper">
              <img src="/images/national-success.jpg" alt="Competitive Wrestling Team" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;