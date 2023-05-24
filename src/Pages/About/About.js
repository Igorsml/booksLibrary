import scss from "../Pages.module.scss";

export const About = () => {
  return (
    <div className={scss.pagesWrapper}>
      <p>
        Google Books - search the world's most comprehensive index of full-text
        books. n response to search queries, Google Books allows users to view
        full pages from books in which the search terms appear if the book is
        out of copyright or if the copyright owner has given permission.
      </p>
      <h2>You can:</h2>
      <ul>
        <li>Search books;</li>
        <li>Open books card;</li>
        <li>Add books to your library (in progress);</li>
        <li>Count books and pages what you've read.</li>
      </ul>
    </div>
  );
};
