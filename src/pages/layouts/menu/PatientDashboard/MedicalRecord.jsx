import React, { useEffect, useState } from "react";
import axios from "axios";
import MediTables from "../../../../components/microcomponents/MetricCards";
import MetricCards from "../../../..//components/microcomponents/MetricCards";
import { FiHeart, FiThermometer, FiDroplet, FiActivity } from "react-icons/fi";

const MedicalRecord = () => {
  const [metrics, setMetrics] = useState([]);
  const [medicalTabs, setMedicalTabs] = useState(null);
  const iconMap = { FiHeart, FiThermometer, FiDroplet, FiActivity };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const metricsResponse = await axios.get("http://localhost:5000/metrics");
        const tabsResponse = await axios.get("http://localhost:5000/medicalTabs");
        
        // Assign icons dynamically
        const metricsData = metricsResponse.data.map((item) => ({
          ...item,
          icon: iconMap[item.icon]
        }));

        setMetrics(metricsData);
        setMedicalTabs(tabsResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!medicalTabs) return <p>Loading...</p>;

  return (
    <div className="p-2">
      <h1 className="text-3xl font-bold mb-5">Patient Medical Records</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCards key={index} {...metric} />
        ))}
      </div>
      <div className="mt-6">
        <MediTables tabs={medicalTabs} />
      </div>
    </div>
  );
};

export default MedicalRecord;
