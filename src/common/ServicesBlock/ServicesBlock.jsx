import React from "react";
import { Group6729 } from "../Group6729/Group6729";
export const ServicesBlock = () => {

    return (
        <section className="services-block-main-container flex justify-center flex-col">
            <div className="relative ml-[80px] mr-[80px] md:ml-[80px] md:mr-[80px] sm:ml-[0px] sm:mr-[0px] xs:ml-[0px] xs:mr-[0px] opacity-100 group-7021">
                <h3 className="h-[19px] text-center font-exo text-custom-yellow uppercase text-[16px] leading-[20px] tracking-[0px] opacity-100 italic font-bold mt-[60px]">CONCESIONARIO OFICIAL</h3>
                <h2 className="relative w-full h-[48px] text-center font-exo text-custom-black uppercase text-[40px] md:text-[30px] sm:text-[30px] xs:text-[20px] leading-[48px] tracking-[0px] opacity-100 italic font-bold mb-[30px]">MOTOS.TECH VALENCIA</h2>
                <div className="relative max-w-[1280px] w-full text-center font-rubik text-[16px] leading-[18px] tracking-[0px] text-custom-black opacity-100 font-light texto-motos-tech">
                    <p>
                        Lorem ipsum dolor sit amet. In iste nisi ea internos quia rem odio eaque sit nisi odio sed minus totam et nostrum iusto. Qui aliquam adipisci
                        sed ipsum quia ut sunt totam est mollitia voluptatem ea rerum rerum. A nesciunt nisi.
                    </p>
                    <br />
                    <p>
                        Est nemo debitis sit consequatur eius non obcecati incidunt.
                    </p>
                </div>
            </div>
            <div className="relative mt-[42px] w-full flex flex-wrap container-categorias justify-around">
                <Group6729 text="alquiler" backgroundImage="KD150GK009N" boxWidth="144px" boxHeight="36px" />
                <Group6729 text="renting" backgroundImage="MaskGroup3951" boxWidth="144px" boxHeight="36px" />
                <Group6729 text="cita en taller" backgroundImage="MaskGroup3952" boxWidth="144px" boxHeight="36px" className={"cita-taller-img"}/>
                <Group6729 text="motos" backgroundImage="MaskGroup3953" boxWidth="144px" boxHeight="36px" />
            </div>
        </section>
    );
};