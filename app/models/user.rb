class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :first_name, :last_name, presence: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  has_many :routeslog,
    foreign_key: :user_id,
    class_name: :Routeslog

  has_many :friends,
    class_name: :Friend,
    foreign_key: :user_id

  has_many :comments,
    foreign_key: :commenter_id,
    class_name: :Comment

  has_many :likes,
  foreign_key: :liker_id,
  class_name: :Like

  attr_reader :password
  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
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
