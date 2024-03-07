import ClassHeader from "./ClassHeader";
import SearchBox from "./SearchBox";
import Student from "./Student";

// student's data
const students = [
    {
        "id": 1,
        "name": "John Doe",
        "score": 85,
        "percentage": 85,
        "grade": "A",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "score": 92,
        "percentage": 92,
        "grade": "A+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "score": 78,
        "percentage": 78,
        "grade": "B",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        "id": 4,
        "name": "Alice Brown",
        "score": 95,
        "percentage": 95,
        "grade": "A+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        "id": 5,
        "name": "Chris Davis",
        "score": 89,
        "percentage": 89,
        "grade": "A",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        "id": 6,
        "name": "Eva White",
        "score": 76,
        "percentage": 76,
        "grade": "C",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
        "id": 7,
        "name": "Michael Black",
        "score": 84,
        "percentage": 84,
        "grade": "B",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
        "id": 8,
        "name": "Sophia Green",
        "score": 91,
        "percentage": 91,
        "grade": "A+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
        "id": 9,
        "name": "David Wilson",
        "score": 79,
        "percentage": 79,
        "grade": "C+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
        "id": 10,
        "name": "Olivia Hall",
        "score": 88,
        "percentage": 88,
        "grade": "B+",
        "class": 1,
        "image": "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
        "id": 11,
        "name": "Mark Turner",
        "score": 87,
        "percentage": 87,
        "grade": "B+",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
        "id": 12,
        "name": "Emily Davis",
        "score": 93,
        "percentage": 93,
        "grade": "A",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
        "id": 13,
        "name": "Tom White",
        "score": 80,
        "percentage": 80,
        "grade": "B-",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
        "id": 14,
        "name": "Lily Harris",
        "score": 96,
        "percentage": 96,
        "grade": "A+",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
        "id": 15,
        "name": "Daniel Smith",
        "score": 82,
        "percentage": 82,
        "grade": "B",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
        "id": 16,
        "name": "Ava Wilson",
        "score": 75,
        "percentage": 75,
        "grade": "C-",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/16.jpg"
    },
    {
        "id": 17,
        "name": "Justin Brown",
        "score": 88,
        "percentage": 88,
        "grade": "B+",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/17.jpg"
    },
    {
        "id": 18,
        "name": "Mia Johnson",
        "score": 94,
        "percentage": 94,
        "grade": "A",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/18.jpg"
    },
    {
        "id": 19,
        "name": "Ryan Green",
        "score": 81,
        "percentage": 81,
        "grade": "B-",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/men/19.jpg"
    },
    {
        "id": 20,
        "name": "Isabella Turner",
        "score": 89,
        "percentage": 89,
        "grade": "A",
        "class": 2,
        "image": "https://randomuser.me/api/portraits/women/20.jpg"
    }
];
const classOne = students.filter(student => student.class === 1);
const classTwo = students.filter(student => student.class === 2);

const StudentsTable = () => {
    return (
        <section className="py-24 lg:pt-[120px] lg:pb-28 mx-5">
            <div className="container mx-auto">
                <div className="mb-16 flex flex-col items-center">
                    <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
                        <span className="text-[#00CC8C]">Students</span> of the Year
                    </h2>
                    <SearchBox />
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
                            <ClassHeader level="One" />
                            {
                                classOne.map(student => <Student key={student.id} student={student} />)
                            }
                            {/* class two */}
                            <ClassHeader level="Two" />
                            {
                                classTwo.map(student => <Student key={student.id} student={student} />)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default StudentsTable;
