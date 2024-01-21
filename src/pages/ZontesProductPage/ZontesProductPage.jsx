import React from "react";
import "./ZontesProductPage.css";
import { HeroBlock } from "../../common/HeroBlock/HeroBlock";
import { CatalogBlock } from "../../common/CatalogBlock/CatalogBlock";

export const ZontesProductPage = () => {
  return (
    <>
      <article className="flex justify-center items-center flex-col min-h-screen w-full">
          < HeroBlock />
          < CatalogBlock />
        </article>
    </>
  )
};