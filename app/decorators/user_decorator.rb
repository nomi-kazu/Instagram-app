# frozen_string_literal: true

module UserDecorator
  def display_name
    profile&.name || self.email.split('@').first
  end

  def avatar_image
    if profile&.avatar&.attached?
      profile.avatar
    else
      'Ellipse.png'
    end
  end
end
