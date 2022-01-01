function Footer() {
  return (
    <footer className="page-footer teal darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Meals Project
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/AnthonyGr/meals-project--udemy-course--react"
            target="_blank"
            rel="noreferrer"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
