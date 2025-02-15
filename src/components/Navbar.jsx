import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgMenu, CgCloseR } from 'react-icons/cg';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Nav role="navigation" aria-label="Main Navigation">
      {/* Overlay effect when the menu is open */}
      <div className={`overlay ${openMenu ? 'active' : ''}`} onClick={() => setOpenMenu(false)}></div>

      <div className="menuIcon">
        <div
          className="mobile-navbar-btn"
          aria-label={openMenu ? "Close menu" : "Open menu"}
          aria-expanded={openMenu}
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? (
            <CgCloseR
              className="mobile-nav-icon close-icon"
              aria-hidden="true"
            />
          ) : (
            <CgMenu
              className="mobile-nav-icon"
              aria-hidden="true"
            />
          )}
        </div>

        <ul className={`navbar-list ${openMenu ? 'active' : ''}`} role="menubar">
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/"
              role="menuitem"
              aria-label="Home"
            >
              Home
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/about"
              role="menuitem"
              aria-label="About Us"
            >
              About
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/testimonial"
              role="menuitem"
              aria-label="Testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/contact"
              role="menuitem"
              aria-label="Contact Us"
            >
              Contact
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/blog"
              role="menuitem"
              aria-label="Blogs"
            >
              Blogs
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/FAQ"
              role="menuitem"
              aria-label="FAQ"
            >
              FAQ
            </NavLink>
          </li>
          <li role="none">
            <NavLink
              className="navbar-link"
              onClick={() => setOpenMenu(false)}
              to="/Franchise"
              role="menuitem"
              aria-label="FAQ"
            >
              Franchise
            </NavLink>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

const Nav = styled.nav`
  /* Main container for the menu */
  .menuIcon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(37,37,37,255);
    box-sizing: border-box;
    width: 100%;
    position: relative;
    z-index: 1001;
  }

  /* Basic styling for desktop view */
  .navbar-list {
    display: flex;
    gap: 1.5rem;
    list-style: none;

    li {
      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          transition: color 0.3s ease;
        }

        &:hover,
        &:active {
          color: #ffcc00;
        }
      }
    }
  }

  /* Hidden by default in desktop view */
  .mobile-navbar-btn {
    display: none;

    .mobile-nav-icon {
      font-size: 4rem;
      cursor: pointer;
      color: #febb12;
      transition: color 0.3s ease;
    }

    .close-icon {
      position: fixed;
      top: 1.5rem;
      right: 1.5rem;
      z-index: 10001;
    }
  }

  /* Overlay that dims the background when the menu is open */
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    z-index: 999;
  }

  .overlay.active {
    opacity: 1;
    visibility: visible;
  }

  /* Responsive styling for mobile view */
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .mobile-navbar-btn {
      display: block;
    }

    /* Full-screen mobile view menu */
    .navbar-list {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(37, 37, 37, 0.95);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2rem;
      padding: 0;
      margin: 0;
      transform: translateY(-100%);
      opacity: 0;
      visibility: hidden;
      transition: transform 0.5s ease, opacity 0.5s ease, visibility 0.5s ease;
      z-index: 10000;
    }

    /* Show menu when active */
    .navbar-list.active {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }

    /* Styling for navbar links in mobile view */
    .navbar-link {
      font-size: 2.5rem;
      color: #ffcc00;
      text-transform: uppercase;
    }

    /* Ensure the menu icon appears */
    .mobile-navbar-btn .mobile-nav-icon {
      display: block;
    }
  }
`;

export default Navbar;
