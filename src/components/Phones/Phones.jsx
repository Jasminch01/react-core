
import axios from "axios";
import { useState } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useState(()=>{
        // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
        // .then(res => res.json())
        // .then(data => setPhones(data.data))

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phoneData = data.data.data;
            const phonesFakeData = phoneData.map(phone =>{
                const obj = {
                    name : phone.phone_name,
                    price : parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesFakeData)
        })

    },[])

    return (
        <div>
            <h1> Phones : {phones.length}</h1>
            <BarChart width={800}height={400} data={phones}>
                <Bar dataKey= 'price' fill="blue"></Bar>
                <XAxis dataKey= 'name'></XAxis>
                <YAxis></YAxis>
            </BarChart>
        </div>
    );
};

export default Phones;