import React from 'react'

function Topbar({ onMenuClick }) {
    return (
        <header className="topbar">
            {/* Mobile hamburger - left side on mobile */}
            <button className="icon-btn mobile-hamburger" onClick={onMenuClick} aria-label="Open menu">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            </button>

            <div className="topbar-brand">
                <span className="brand-a1">A1</span>
                <span className="brand-text">MEMBERS ONLY</span>
            </div>

            <nav className="topbar-nav">
                <a href="#" className="nav-link active">Dashboard</a>
                <a href="#" className="nav-link">Orders</a>
                <a href="#" className="nav-link">Profile</a>
            </nav>

            <div className="topbar-actions">
                <button className="icon-btn" aria-label="Notifications">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                        <path d="M13.73 21a2 2 0 01-3.46 0"></path>
                    </svg>
                    <span className="notif-dot"></span>
                </button>
                <button className="icon-btn desktop-only" aria-label="Messages">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"></path>
                    </svg>
                </button>
                <button className="icon-btn desktop-only" aria-label="Screen">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                </button>
                <button className="icon-btn desktop-only menu-btn" aria-label="Menu">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                {/* Mobile profile avatar */}
                <button className="mobile-avatar-btn mobile-only" aria-label="Profile" onClick={onMenuClick}>
                    <img src="/andrew_profile.jpg" alt="Profile" />
                </button>
            </div>
        </header>
    )
}

export default Topbar
