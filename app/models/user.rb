class User < ApplicationRecord
  validates :username, :session_token, presence: true, uniquness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_null: true}

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, pw)
    user = User.find_by(username: username);
    (user && user.is_password?(pw)) ? user : nil
  end

  def password=(pw)
    self.password_digest = BCrypt::Password.create(pw)
    @password = password
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
