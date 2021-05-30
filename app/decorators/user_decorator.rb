# frozen_string_literal: true

module UserDecorator
  def display_name
    self.email.split('@').first
  end
end
