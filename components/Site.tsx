const bookingUrl = "https://cal.com/pavan-charak/";

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/" aria-label="Parmana Systems home">
        <img src="/logo-mark.svg" alt="" width="26" height="26" />
        <span>Parmana</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="/#how-it-works">How it works</a>
        <a href="/vision">Vision</a>
        <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs</a>
      </nav>
      <a className="button" href={bookingUrl} target="_blank" rel="noreferrer">Book a meeting</a>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Parmana Systems</span>
      <nav aria-label="Footer navigation">
        <a href="/vision">Vision</a>
        <a href="https://docs.parmanasystems.com" target="_blank" rel="noreferrer">Docs</a>
        <a href={bookingUrl} target="_blank" rel="noreferrer">Contact</a>
      </nav>
    </footer>
  );
}

export { bookingUrl };
