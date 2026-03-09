import React, { useState } from 'react'

const quarters = [
    { label: 'Q1', sub: 'Feb 24', active: false },
    { label: 'Q2', sub: 'Q2 – Jun 24', active: true, gold: true, highlight: 'Q2 – Jun 24' },
    { label: 'Q3', sub: 'Q3 – Sep 24', active: false },
    { label: 'Q4', sub: 'Q4 – Dec 24', active: false },
]

const pastOrders = [
    {
        label: 'Q1 • March 1, 2024',
        image: '/suit_charcoal.png',
        name: 'Charcoal Peak\nLapel Suit',
        status: 'IN PROGRESS',
        statusClass: 'status-progress',
    },
    {
        label: 'Q2 • June 15, 2024',
        image: '/suit_tan.png',
        name: 'Light Tan\nDouble-Breasted Suit',
        status: 'DELIVERED',
        statusClass: 'status-delivered',
    },
    {
        label: 'Q3 • Sept 5, 2023',
        image: '/suit_rust.png',
        name: 'Rust Peak\nLapel Suit',
        status: 'DELIVERED',
        statusClass: 'status-delivered',
    },
]

const upcomingOrders = [
    {
        image: '/suit_navy.png',
        name: 'Navy Wool-Silk Hopsack Suit J...',
        status: 'IN PROGRESS',
        date: 'June 10-15, 2024',
    },
    {
        image: '/shirt_lightblue.png',
        name: 'Light Blue Spread Collar Shirt',
        status: 'IN PROGRESS',
        date: 'June 10-15, 2024',
    },
    {
        image: '/trouser_charcoal.png',
        name: 'Charcoal Grey Wool Trouser',
        status: 'IN PROGRESS',
        date: 'June 10-15, 2024',
    },
]

function Stars({ count = 5, filled = 4 }) {
    return (
        <div className="stars">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className={`star ${i < filled ? 'star-filled' : 'star-empty'}`}>★</span>
            ))}
        </div>
    )
}

function DashboardContent() {
    const [note, setNote] = useState('')
    const [sideNote, setSideNote] = useState('')

    return (
        <main className="dashboard-content">
            {/* Welcome + Reminder row */}
            <div className="welcome-row">
                <div className="welcome-left">
                    <h1 className="welcome-heading">Welcome back, Andrew.</h1>
                </div>
                <div className="reminder-bar">
                    <div className="reminder-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    </div>
                    <div className="reminder-text">
                        <span className="reminder-label">Reminder: Visual Shoot – Sat, June 15 • 2:00 PM •</span>
                        <span className="reminder-sub"> A1 Showroom, NYC – Mark Hastings</span>
                    </div>
                    <div className="reminder-avatar">
                        <img src="/andrew_profile.png" alt="Mark" />
                    </div>
                    <button className="reminder-arrow">›</button>
                </div>
            </div>

            {/* Quarterly Overview */}
            <section className="quarterly-section">
                <div className="quarterly-header">
                    <h2 className="section-title">Quarterly Overview</h2>
                    <div className="quarterly-header-right">
                        <Stars filled={4} />
                        <a href="#" className="view-all-link">VIEW ALL ORDERS</a>
                    </div>
                </div>
                <div className="quarterly-timeline">
                    {quarters.map((q, i) => (
                        <div key={i} className={`quarter-item ${q.active ? 'active' : ''}`}>
                            <div className="quarter-dot-line">
                                <div className={`quarter-dot ${q.active ? 'dot-gold' : ''}`}></div>
                                {i < quarters.length - 1 && <div className={`quarter-line ${q.active ? 'line-active' : ''}`}></div>}
                            </div>
                            <div className={`quarter-label ${q.gold ? 'quarter-gold' : ''}`}>{q.label}</div>
                            <div className="quarter-sub">{q.sub}</div>
                            {q.gold && <div className="quarter-badge">GOLD</div>}
                        </div>
                    ))}
                </div>
            </section>

            {/* Two-column layout: Past Orders + Upcoming Orders */}
            <div className="orders-row">
                {/* Past Orders */}
                <section className="past-orders-section">
                    <h2 className="section-title">Past Orders</h2>
                    <div className="past-orders-grid">
                        {pastOrders.map((order, i) => (
                            <div className="past-order-card" key={i}>
                                <div className="order-card-label">{order.label}</div>
                                <div className="order-card-image">
                                    <img src={order.image} alt={order.name} />
                                </div>
                                <div className="order-card-name">{order.name}</div>
                                <div className={`order-status ${order.statusClass}`}>{order.status}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Upcoming Orders */}
                <section className="upcoming-orders-section">
                    <h2 className="section-title">Upcoming Orders</h2>
                    <div className="upcoming-period">June 2024 <span className="upcoming-delivery">(Delivery: Jun 10-15)</span></div>
                    <div className="upcoming-grid">
                        {upcomingOrders.map((item, i) => (
                            <div className="upcoming-card" key={i}>
                                <div className="upcoming-card-img">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="upcoming-card-name">{item.name}</div>
                                <div className="upcoming-status">IN PROGRESS</div>
                                <div className="upcoming-date">{item.date}</div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Bottom row: Scheduled Photo Shoot + Additional Notes */}
            <div className="bottom-row">
                {/* Scheduled Photo Shoot */}
                <section className="photoshoot-section">
                    <h2 className="section-title">Scheduled Photo Shoot</h2>
                    <div className="photoshoot-card">
                        <div className="photoshoot-top">
                            <div className="photoshoot-avatar">
                                <img src="/andrew_profile.png" alt="Shoot" />
                            </div>
                            <div className="photoshoot-info">
                                <div className="photoshoot-date-line">
                                    <strong>Saturday, June 15</strong>
                                    <span className="photoshoot-icon">🕑</span>
                                    <strong>2:00 PM</strong>
                                </div>
                                <div className="photoshoot-location-line">
                                    <span className="map-pin">📍</span>
                                    <span>A1 Showroom,</span>
                                    <span className="person-icon">👤</span>
                                    <span>New Yook, CTy.</span>
                                </div>
                            </div>
                        </div>
                        <div className="photoshoot-bottom">
                            <div className="photoshoot-address">
                                <span className="map-pin">📍</span> A1 Showroom, NYC
                            </div>
                            <button className="add-contents-btn">Add 15 Contents</button>
                        </div>
                    </div>
                </section>

                {/* Additional Notes */}
                <section className="notes-section">
                    <h2 className="section-title">Additional Notes</h2>
                    <div className="notes-card">
                        <div className="notes-existing">
                            Diring: Olive Linen Blager (ecoco) shoot
                        </div>
                        <div className="notes-input-row">
                            <input
                                className="notes-input"
                                placeholder="Write a note..."
                                value={note}
                                onChange={e => setNote(e.target.value)}
                            />
                            <button className="side-notes-btn" onClick={() => setSideNote(note)}>Side Notes</button>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default DashboardContent
