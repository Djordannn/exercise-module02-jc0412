"use client";

import Card from "@/components/card";

export default function About() {
  const dataCard = [
    {
      id: 1,
      imgUrl:
        "https://i.pinimg.com/564x/cc/a6/85/cca6856e1bfdb6865cf2a2334eed31d8.jpg",
      title: "img-1",
      price: 30,
    },
    {
      id: 2,
      imgUrl:
        "https://i.pinimg.com/564x/cc/a6/85/cca6856e1bfdb6865cf2a2334eed31d8.jpg",
      title: "img-2",
      price: 30,
    },
    {
      id: 3,
      imgUrl:
        "https://i.pinimg.com/564x/cc/a6/85/cca6856e1bfdb6865cf2a2334eed31d8.jpg",
      title: "img-3",
      price: 30,
    },
  ];

  const printData = function () {
    const newArray = dataCard.map((value: any, index: number) => {
      return (
        <div key={value.id}>
          <Card
            id={value.id}
            imgUrl={value.imgUrl}
            title={value.title}
            price={value.price}
          ></Card>
        </div>
      );
    });

    return newArray;
  };

  return (
    <div style={{ padding: "5rem 8rem" }}>
      <p className="text-2xl font-bold mb-6">About page</p>
      <div style={{ display: "flex", gap: "1rem" }}>{printData()}</div>
    </div>
  );
}
