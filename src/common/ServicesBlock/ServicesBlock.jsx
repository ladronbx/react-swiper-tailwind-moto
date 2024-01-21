import React from "react";
import { Group6729 } from "../Group6729/Group6729";

export const ServicesBlock = () => {
    return (
        <section className="services-block-main-container">
            <div className="absolute top-[1193px] left-[135px] w-[1010px] h-[198px] opacity-100 group-7021">
                <h3 className="h-[19px] text-center font-exo text-custom-yellow uppercase text-[16px] leading-[20px] tracking-[0px] opacity-100 italic font-bold mb-[10px]">CONCESIONARIO OFICIAL</h3>
                <h2 className="w-[1010px] h-[48px] text-center font-exo text-custom-black uppercase text-[40px] leading-[48px] tracking-[0px] opacity-100 italic font-bold mb-[30px]">MOTOS.TECH VALENCIA</h2>
                <div className="w-[1010px] h-[91px] text-center font-rubik text-[16px] leading-[18px] tracking-[0px] text-custom-black opacity-100 font-light">
                    <p>
                        Lorem ipsum dolor sit amet. In iste nisi ea internos quia rem odio eaque sit nisi odio sed minus totam et nostrum iusto. Qui aliquam adipisci
                        sed ipsum quia ut sunt totam est mollitia voluptatem ea rerum rerum. A nesciunt nisi.
                    </p>
                    <br/>
                    <p className="mb-[30px]">
                        Est nemo debitis sit consequatur eius non obcecati incidunt.
                    </p>
                </div>
            </div>
            <div className="absolute top-[1433px] left-[80px] w-[1120px] h-[147px] opacity-100 flex space-x-[18px]">
            <Group6729 text="alquiler" backgroundImage="KD150GK009N" boxWidth="144px" boxHeight="36px" />
                <Group6729 text="renting" backgroundImage="MaskGroup3951" boxWidth="130px" boxHeight="36px" />
                <Group6729 text="cita en taller" backgroundImage="MaskGroup3952" boxWidth="114px" boxHeight="66px" />
                <Group6729 text="motos" backgroundImage="MaskGroup3953" boxWidth="106px" boxHeight="36px" />
            </div>
        </section>
    );
};