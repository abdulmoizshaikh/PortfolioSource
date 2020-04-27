import React from "react";

export default function PortfolioCard({ cardInfo }) {
  console.log("cardInfo", cardInfo);
  function openUrlInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="certificate-card">
      <div className="certificate-image-div">
        {cardInfo.images.map((image) => {
          console.log("image", image);
          return (
            <span className="card-image-wrapper">
              <img src={image} alt="Projectimage" className="card-image"></img>
            </span>
          );
        })}
      </div>
      <div className="certificate-detail-div">
        <h5 className="card-title">{cardInfo.title}</h5>
        <p className="card-subtitle">{cardInfo.description}</p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return <p onClick={() => openUrlInNewTab(v.url)}>{v.name}</p>;
        })}
      </div>
    </div>
  );
}
