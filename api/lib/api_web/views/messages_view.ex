defmodule ApiWeb.MessagesView do
  use ApiWeb, :view

  def render("create.json", %{message: message}) do
    %{
      result: "Message created!",
      message: message
    }
  end
end
