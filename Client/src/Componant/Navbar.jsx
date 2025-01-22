const navbar=()=>{
    return (
        <>
        <header>
            <div className="w-full px-20 py-8 flex justify-between items-center">
                <div className="logo">
                    <a href="/">logo</a>
                </div>

                <div className="links flex gap-10">
                    {["home ","about","contact","services","our work"].map((item,index)=>(
                    <a key={index} className="text-md">{item}</a> ))}
                </div>
            </div>
        </header>
        </>
    );
};
export default navbar