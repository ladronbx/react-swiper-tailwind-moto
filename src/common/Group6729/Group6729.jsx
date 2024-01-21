export const Group6729 = ({ text, backgroundImage, boxWidth, boxHeight }) => {
    return (
        <div className={`w-[266px] h-[147px] bg-${backgroundImage} opacity-100 cursor-pointer`}>
            <div className={`w-[266px] h-[147px] bg-custom-dark bg-opacity-50`}>
                <div className={`w-[266px] h-[147px] opacity-100 flex justify-center items-center`}>
                    <span style={{ width: boxWidth, height: boxHeight}} className={`leading-30 tracking-0.9 inline-block font-exo italic font-bold text-custom-white uppercase opacity-100 text-center text-30`}>{text}</span>
                </div>
            </div>
        </div>
    );
};