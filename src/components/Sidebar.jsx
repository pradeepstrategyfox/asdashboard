import React from 'react'

function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="sidebar-profile-image">
                <img src="/andrew_profile.png" alt="Andrew Covington" className="profile-img" />
                <div className="profile-overlay"></div>
            </div>

            <div className="sidebar-info">
                <h2 className="profile-name">Andrew<br />Covington</h2>
                <div className="member-badge">
                    <span className="badge-icon">✦</span>
                    <span className="badge-text">GOLD DIAMOND MEMBER</span>
                </div>

                <div className="profile-details">
                    <div className="detail-row">Birthdate: March 4</div>
                    <div className="detail-row">Lawyer</div>
                </div>

                <div className="measurements">
                    <div className="measurements-title">Measurements:</div>
                    <div className="measurements-grid">
                        <div className="measurement-item">
                            <span className="m-label">Jacket:</span>
                            <span className="m-value">40R</span>
                        </div>
                        <div className="measurement-item full">
                            <span className="m-label">Length:</span>
                            <span className="m-value">R</span>
                            <span className="m-label">Sleeve:</span>
                            <span className="m-value">33</span>
                        </div>
                        <div className="measurement-item full">
                            <span className="m-label">Waist:</span>
                            <span className="m-value">32</span>
                            <span className="m-label">Inseam:</span>
                            <span className="m-value">30</span>
                        </div>
                    </div>
                </div>

                <button className="edit-profile-btn">EDIT PROFILE</button>

                <div className="next-delivery">
                    <div className="delivery-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                    </div>
                    <div className="delivery-text">
                        <div className="delivery-label">Next Delivery:</div>
                        <div className="delivery-date">June 10, 2024</div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar
