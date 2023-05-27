import React from 'react'

type PropertiesProps = {
    name: string;
    type: string;
    numberOfUnits: number;
    location: string;
    referenceNumber: number;
}

const Properties = () => {
    const [selectedStatus, setSelectedStatus] = React.useState('all');
    const [properties, setProperties] = React.useState<PropertiesProps[]>([]);

    React.useEffect(() => {
        // fetch properties
    }, [])
  return (
    <div>Properties</div>
  )
}

export default Properties