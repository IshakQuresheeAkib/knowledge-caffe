import logo from "../../assets/mypic2.jpg";

const Header = () => {
    
    return (
        <>
            <div className="flex justify-between pb-5 items-center">
                <h1 className="text-[42px] font-semibold font-serif">KnowLedge <span className="font-extrabold text-[#6047EC] ">Café</span></h1>
                <img src={logo} alt="" className=" w-14 rounded-full h-14"/>
            </div>
            <hr />
        </>
    );
};

export default Header;