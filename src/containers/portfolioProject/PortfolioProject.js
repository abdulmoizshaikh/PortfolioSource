import React from "react";
import "./Achievement.css";
import PortfolioProjectCard from "../../components/portfolioProjectCard/PortfolioProjectCard";
import { portfolioProjectSection } from "../../portfolio";
import { Fade } from "react-reveal";

export default function PortfolioProject() {
  // function openUrlInNewTab(url) {
  //   var win = window.open(url, "_blank");
  //   win.focus();
  // }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="achievements">
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1 className="heading achievement-heading">
              {portfolioProjectSection.title}
            </h1>
            <p className="subTitle achievement-subtitle">
              {portfolioProjectSection.subtitle}
            </p>
          </div>
          <div className="achievement-cards-div">
            {portfolioProjectSection.achivementsCards.map((card) => {
              return (
                <PortfolioProjectCard
                  cardInfo={{
                    title: card.title,
                    description: card.subtitle,
                    image: card.image,
                    footer: card.footerLink,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
