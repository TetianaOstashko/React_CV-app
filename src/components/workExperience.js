import React, {useState} from "react";
import { WorkPlace } from "./workPlace";
import { AddWorkPlaceForm } from "./workPlaceForm";

export function WorkExperience() {
    const [Experience, setExperience] = useState([
        {
            title: 'Business Analyst',
            name: 'Danfoss A/S',
            description: 'Manage, analyse and report sales performance metrics; Develop and implement process improvements to optimize inventory control processes, reducing lead times and improving on-time delivery performance.',
            link: 'https://www.danfoss.com/en/',
        },

        {
            title: 'Logistics Specialist',
            name: 'Samsung Electronics Ukraine Company',
            description: 'Processed of inbound staging & receiving goods, maintained on-hand goods, inventory pulls/audits, and also processed outbound shipments of goods.',
            link: 'https://www.samsung.com/ua/',
        },
    ]);

    const addWorkPlace = (newWorkPlace) => {
        setExperience((prevExperience) => [...prevExperience, newWorkPlace]);
    };

    return (
        <div>
            <h2>Work Experience</h2>
            <hr />
            {Experience.map((item, index) => (
                <div>
                    <WorkPlace 
                        key={index}
                        title={item.title}
                        name={item.name}
                        description={item.description}
                        link={item.link}
                    />
                    {index < Experience.length - 1 && <br />}
                </div> 
            ))}
            <br />
            <AddWorkPlaceForm onAdd={addWorkPlace} />
        </div>
    );
}