import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CommentForm } from ".";

describe("comment form testing", () => {
  it("button should be hidden on initial rendering and appears when user fill the textbox", async () => {
    render(<CommentForm />);
    expect(screen.queryByRole("button", { name: /post/i })).toBeNull();

    await waitFor(async () => {
      userEvent.type(screen.getByRole("textbox"), "selamat datang");
      expect(
        await screen.findByRole("button", { name: /post/i })
      ).not.toBeNull();
    });
  });

  it("button should be disabled when textbox is empty or contains only space", async () => {
    render(<CommentForm />);

    await waitFor(async () => {
      userEvent.type(screen.getByRole("textbox"), " ");
      expect(
        await screen.findByRole("button", { name: /post/i })
      ).toHaveProperty("disabled", true);
    });
  });
});
