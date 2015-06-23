class SessionController < ApplicationController

  def new
  end

  def show
      redirect_to root_path unless session['auth']
      @auth = session['auth']
  end

  def create
      session['auth'] = request.env['omniauth.auth']
      redirect_to session_show_path
  end

  def destroy
      session['auth'] = nil
      redirect_to root_path
  end

end
