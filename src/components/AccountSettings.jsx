function AccountSettings() {
  return (
    <div className="screen account-screen">
      <div className="account-header">
        <h2>Account Settings</h2>
      </div>

      <div className="account-profile">
        <div className="avatar-wrapper">
          <img
            src="https://i.pravatar.cc/80"
            alt="Marry Doe"
            className="avatar-img"
          />
          <div className="camera-badge" aria-label="Edit photo">
            {/* Camera icon */}
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
            </svg>
          </div>
        </div>

        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>

      <div className="account-body">
        <p className="account-bio">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <hr className="divider-dashed" />
      </div>
    </div>
  )
}

export default AccountSettings
