"use client";
import Link from "../../node_modules/next/link";

export default function Navbar() {
  return (
    <div id="navbar">
      <div className="navlist">
        <ul>
          <a href="#" className="icon">
            <i className="ri-bar-chart-horizontal-line"></i>
          </a>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="logo">
        <h2>
          <Link href="/">
            <i className="ri-armchair-line"></i>
          </Link>
        </h2>
      </div>
      <div className="navlist">
        <ul>
          <li>
            <a href="#">Account</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
          <li>
            <a href="#">Bag (o)</a>
          </li>
        </ul>
        <a href="#" className="icon">
          <i className="ri-shopping-bag-2-line"></i>
        </a>
      </div>
    </div>
  );
}
