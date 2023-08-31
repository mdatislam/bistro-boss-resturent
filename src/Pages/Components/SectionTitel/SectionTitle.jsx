

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="text-center my-4">  
            <p className="text-yellow-500 my-1"> ---{subHeading}---</p>
            <h3 className="uppercase text-xl font-lightBold border-y-2 divide-x w-1/4 mx-auto py-2"> {heading}</h3>
            
        </div>
    );
};

export default SectionTitle;