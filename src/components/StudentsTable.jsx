import ClassHeader from "./ClassHeader";
import SearchBox from "./SearchBox";
import Student from "./Student";

const StudentsTable = () => {
    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28 mx-5">
            <div className="container mx-auto">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span className="text-[#00CC8C]">Students</span> of the Year
                    </h2>
                    <SearchBox/>
                </div>
                <div className="max-w-[848px] mx-auto overflow-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-[#FFFFFF0D]">
                                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                                    ID
                                </th>
                                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                                    Name
                                </th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                                <th className="p-5 text-sm md:text-xl font-semibold">Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* class one */}
                            <ClassHeader level="One"/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                            {/* class two */}
                            <ClassHeader level="two"/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                            <Student/>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default StudentsTable;
