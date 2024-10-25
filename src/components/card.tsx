"use client";

import { title } from "process";

// import card
interface ICard {
  id: number;
  imgUrl: string;
  title: string;
  price: number;
}

export default function Card(props: ICard) {
  console.log("Data from parents", props.title);

  return (
    <div className="card-body" style={{ maxWidth: "40" }}>
      <div className="card-img">
        <img src={props.imgUrl} alt="img" />
      </div>
      <div className="text-card">
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
    </div>
  );
}
