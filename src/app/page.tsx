// import Image from "next/image";
"use client"; // render page di bclient browser
import Navbar from "@/components/navbar";
import Card from "@/components/card";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <div id="hero">
        <div className="text-hero">
          <div className="containerr">
            <h2>
              new
              <br />
              collection
            </h2>
            <a href="#">shop</a>
            <hr
              style={{
                border: "2px solid #2d2d2d",
                width: "60px",
                margin: "10px auto",
              }}
            />
          </div>
        </div>
      </div>

      <div className="provider">
        <div className="containerr">
          <h3>
            ko is a collection of modern,
            <br />
            handmade sofa, inspired by the natures's
            <br />
            unique shapes and tones
          </h3>
          <hr
            style={{
              border: "2px solid #2d2d2d",
              width: "140px",
              margin: "10px auto",
            }}
          />
        </div>
      </div>

      <div className="arrival">
        <div className="containerr">
          <h2>arrival</h2>
          <div className="card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>

      <div id="section">
        <div className="containerr">
          <div className="img-section">
            <a href="#">our story</a>
          </div>
          <div className="text-section">
            <h3>
              what started as a hobby
              <br />
              and a way to pass time,
              <br />
              evolved into a real passion.
            </h3>
            <a href="#">our story</a>
            <hr
              style={{
                border: "2px solid #2d2d2d",
                width: "70px",
                marginTop: "0.6rem",
              }}
            />
          </div>
        </div>
      </div>

      <div id="collection">
        <div className="containerr">
          <h2>all collections</h2>
          <div className="main-collection">
            <div className="left-img">
              {/* <image src="../../public/images/hero.avif" alt="img" /> */}
              <h3>provider</h3>
            </div>
            <div className="right">
              {/* <image src="../../public/images/hero.avif" alt="img" /> */}
              <h3>provider</h3>
            </div>
            <div className="right2">
              <h3>provider</h3>
              {/* <image src="../../public/images/hero.avif" alt="img" /> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
