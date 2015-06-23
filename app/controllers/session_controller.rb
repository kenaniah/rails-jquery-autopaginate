class SessionController < ApplicationController

  def new
  end

  def show

      redirect_to root_path unless session['auth']

      @auth = session['auth']
      @graph = Koala::Facebook::API.new @auth['credentials']['token']

      @stories = @graph.get_object("me/feed?limit=3")

      # render :_feed, layout: false

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
