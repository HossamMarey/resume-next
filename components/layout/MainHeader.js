import Link from "next/link";
import { useRouter } from "next/router";

const MainHeader = () => {
  const router = useRouter();

  return (
    <header className="main-header">
      <div className="d-flex justify-content-between container">
        {/* exact-active-className="h-active" */}
        <Link href="/">
          <a className={`h-link ${router.asPath === "/" && "h-active"}`}>
            <i className="fas fa-user"></i>
            About
          </a>
        </Link>
        <Link href="/resume">
          <a className={`h-link ${router.asPath === "/resume" && "h-active"}`}>
            <i className="fas fa-file-alt"></i>
            Resume
          </a>
        </Link>
        <Link href="/portfolio">
          <a
            className={`h-link ${router.asPath === "/portfolio" && "h-active"}`}
          >
            <i className="fas fa-th-large"></i>
            Portfolio
          </a>
        </Link>
        <Link href="/contact">
          <a className={`h-link ${router.asPath === "/contact" && "h-active"}`}>
            <i className="fas fa-paper-plane"></i>
            Contact
          </a>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
