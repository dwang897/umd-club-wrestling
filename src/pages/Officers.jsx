import React, { useState, useEffect } from 'react';

const Officers = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const team = [
        { id: 1, name: "Mikael Gandilyan", role: "President", bio: "\"Be water, my friend\" - Bruce Lee", img: "/images/president.jpeg" },
        { id: 2, name: "McKinley Jovanovic", role: "Vice President", bio: "Favorite move: Fireman's Carry", img: "/images/vice-president.jpeg" },
        { id: 3, name: "Andrew Campbell", role: "Coach", bio: "Focusing on technical fundamentals and high-level match strategy.", img: "/images/coach1.jpeg" },
        { id: 4, name: "Nimesh Fonseka", role: "Coach", bio: "Dedicated to developmental drills and building a strong team foundation.", img: "/images/coach2.jpeg" },
        { id: 5, name: "Humza Abbas", role: "Social Media Manager", bio: "Capturing every take-down and victory for our digital presence.", img: "/images/social-media.jpeg" },
        { id: 6, name: "Olav Jenson", role: "Social Chair", bio: "Building team culture through organized events and off-mat bonding.", img: "/images/social-chair.jpeg" },
        { id: 7, name: "Aaron Javier", role: "Treasurer", bio: "Managing the budget to ensure travel and gear stay on track.", img: "/images/treasurer.jpeg" },
        { id: 8, name: "Adam Mathew", role: "National Compliance Officer", bio: "Navigating NCWA regulations to keep our squad eligible for nationals.", img: "/images/fundraising.jpeg" },
        { id: 9, name: "Ibaad Shaikh", role: "Fundraising Chair", bio: "Driving the financial campaigns that power our competition schedule.", img: "/images/fundraising.jpeg" },
        { id: 10, name: "Max Sircus", role: "Secretary", bio: "Keeping the administrative gears turning behind the scenes for the club.", img: "/images/coach1.jpeg" }
    ];
    const next = () => {
        if (activeIndex < team.length - 1) setActiveIndex(activeIndex + 1);
    };
    const prev = () => {
        if (activeIndex > 0) setActiveIndex(activeIndex - 1);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); });
        }, { threshold: 0.1 });
        document.querySelectorAll('.fade-on-scroll').forEach(el => observer.observe(el));
        return () => document.querySelectorAll('.fade-on-scroll').forEach(el => observer.unobserve(el));
    }, []);

    return (
        <div className="rb-officers-page">
            <section className="rb-hero">
                <img src="/images/officer-page.jpeg" alt="Maryland Wrestling Action" className="rb-hero-img" />
                <div className="rb-hero-gradient"></div>
                <h1 className="rb-massive-title fade-on-scroll">Officers</h1>
                <span className="rb-sub-label fade-on-scroll">Meet our officers.</span>
            </section>

            <section className="rb-red-section">
                
                <div className="rb-nav-container">
                    <button 
                        className="rb-nav-btn" 
                        onClick={prev} 
                        style={{ opacity: activeIndex === 0 ? 0.3 : 1, cursor: activeIndex === 0 ? 'default' : 'pointer' }}
                    >
                        {/* 🔴 Changed strokeWidth to 1.5 */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button 
                        className="rb-nav-btn" 
                        onClick={next} 
                        style={{ opacity: activeIndex === team.length - 1 ? 0.3 : 1, cursor: activeIndex === team.length - 1 ? 'default' : 'pointer' }}
                    >
                        {/* 🔴 Changed strokeWidth to 1.5 */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>

                <div className="rb-carousel-stage">
                    {team.map((member, index) => {
                        let positionClass = "hidden-right";
                        if (index === activeIndex) positionClass = "active";
                        else if (index === activeIndex - 1) positionClass = "prev";
                        else if (index === activeIndex + 1) positionClass = "next";
                        else if (index < activeIndex - 1) positionClass = "hidden-left";
                        else if (index > activeIndex + 1) positionClass = "hidden-right";

                        return (
                            <div key={member.id} className={`rb-card-wrapper ${positionClass}`}>
                                <div className="rb-image-container">
                                    <img src={member.img} alt={member.name} onError={(e) => e.target.src = '/images/umd-logo.png'} />
                                </div>
                                <div className="rb-card-info">
                                    {/* Row 1: Name and Role perfectly inline */}
                                    <div className="rb-top-row">
                                        <h2 className="rb-info-name">{member.name}</h2>
                                        <div className="rb-info-role">{member.role}</div>
                                    </div>
                                    
                                    {/* Row 2: Bio spans the full width */}
                                    <p className="rb-info-bio">{member.bio}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </section>
        </div>
    );
};

export default Officers;