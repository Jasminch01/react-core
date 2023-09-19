import {
  LineChart as LChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Linechart = () => {
  const studentData = [
    {
      id: 1,
      name: "Alice",
      mathMarks: 85,
      physicsMarks: 75,
      chemistryMarks: 92,
    },
    { id: 2, name: "Bob", mathMarks: 78, physicsMarks: 88, chemistryMarks: 80 },
    {
      id: 3,
      name: "Charlie",
      mathMarks: 92,
      physicsMarks: 90,
      chemistryMarks: 95,
    },
    {
      id: 4,
      name: "David",
      mathMarks: 64,
      physicsMarks: 70,
      chemistryMarks: 68,
    },
    { id: 5, name: "Eve", mathMarks: 89, physicsMarks: 84, chemistryMarks: 91 },
    {
      id: 6,
      name: "Frank",
      mathMarks: 77,
      physicsMarks: 79,
      chemistryMarks: 85,
    },
    {
      id: 7,
      name: "Grace",
      mathMarks: 95,
      physicsMarks: 92,
      chemistryMarks: 98,
    },
    {
      id: 8,
      name: "Hannah",
      mathMarks: 68,
      physicsMarks: 72,
      chemistryMarks: 70,
    },
    {
      id: 9,
      name: "Isaac",
      mathMarks: 91,
      physicsMarks: 88,
      chemistryMarks: 93,
    },
    {
      id: 10,
      name: "Jack",
      mathMarks: 82,
      physicsMarks: 85,
      chemistryMarks: 87,
    },
  ];

  return (
    <div>
        <LChart data={studentData}  width={800} height={400}>
          <Line dataKey="mathMarks" stroke="green"></Line>
          <Line dataKey="physicsMarks" stroke="violet"></Line>
          <Tooltip></Tooltip>
          <XAxis dataKey="name"></XAxis>
          <YAxis></YAxis>
        </LChart>
    </div>
  );
};

export default Linechart;
