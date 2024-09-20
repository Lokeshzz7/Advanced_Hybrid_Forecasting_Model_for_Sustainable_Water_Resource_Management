import React, { useState } from "react";
import { SelectButton } from 'primereact/selectbutton';

const AreaFilter = () => {
    const options = ['Area', 'Basin'];
    const [value, setValue] = useState(options[0]);
    return (
        <div className="card flex justify-content-center">
            <SelectButton value={value} onChange={(e) => setValue(e.value)} options={options} />
        </div>
    )
}

export default AreaFilter