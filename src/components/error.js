import React from "react";

export default function error() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        width: "60%",
        height: "80vh",
        margin: "auto",
      }}
    >
      <img src="/404.jpeg" alt="404" />
      <p>عذرلم نستطيع العثور علي هذه الصفحة</p>
    </div>
  );
}
