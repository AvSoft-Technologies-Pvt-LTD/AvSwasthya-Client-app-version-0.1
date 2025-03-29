import React from 'react';
import { User, Calendar, Activity, Heart, Droplet, Weight, Pill as Pills, FileText, CreditCard, Bell, MessageSquare, Download, Search, Menu } from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function Dashboard() {
  const appointmentData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
        {
            label: 'Appointments',
            data: [3, 5, 2, 4, 6, 1, 4],
            backgroundColor: 'rgb(6, 182, 212)',
        },
        {
            label: 'Patients',
            data: [3, 5, 2, 4, 11, 2, 2],
            backgroundColor: 'rgb(255, 99, 132)', // Different color for distinction
        }
    ]
};


  return (
    <div className="min-h-screen">

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Patient Profile Card */}
      

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Appointments Chart */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-cyan-600" />
              Weekly Appointments
            </h2>
            <Bar data={appointmentData} options={{
              responsive: true,
              plugins: { legend: { position: 'bottom' } },
              scales: { y: { beginAtZero: true } }
            }} />
          </div>

          {/* Health Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Activity className="text-cyan-600" />
              Health Summary
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Heart, label: 'Blood Pressure', value: '120/80', status: 'Normal Range', color: 'text-red-500' },
                { icon: Activity, label: 'Heart Rate', value: '72 bpm', status: 'Normal Range', color: 'text-blue-500' },
                { icon: Droplet, label: 'Blood Sugar', value: '90 mg/dL', status: 'Fasting', color: 'text-purple-500' },
                { icon: Weight, label: 'BMI', value: '22.5', status: 'Normal Weight', color: 'text-green-500' },
              ].map((item) => (
                <div key={item.label} className="p-4 bg-cyan-50 rounded-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon size={18} className={item.color} />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <p className="text-2xl font-bold text-cyan-900">{item.value}</p>
                  <p className="text-sm text-cyan-600">{item.status}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Medications */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Pills className="text-cyan-600" />
              Current Medications
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Amoxicillin', dosage: '500mg', frequency: '2x daily', duration: '7 days' },
                { name: 'Lisinopril', dosage: '10mg', frequency: '1x daily', duration: 'Ongoing' },
                { name: 'Metformin', dosage: '850mg', frequency: '2x daily', duration: 'Ongoing' },
              ].map((med) => (
                <div key={med.name} className="p-4 border border-gray-100 rounded-lg hover:border-cyan-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{med.name}</p>
                      <p className="text-sm text-gray-600">{med.dosage} - {med.frequency}</p>
                    </div>
                    <span className="text-sm text-gray-500">{med.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Reports */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="text-cyan-600" />
              Recent Lab Reports
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Complete Blood Count', date: '15 Mar 2024', status: 'Completed' },
                { name: 'Lipid Profile', date: '10 Mar 2024', status: 'Pending' },
                { name: 'Thyroid Function', date: '05 Mar 2024', status: 'Completed' },
              ].map((report) => (
                <div key={report.name} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-cyan-100">
                  <div>
                    <p className="font-medium">{report.name}</p>
                    <p className="text-sm text-gray-600">{report.date}</p>
                  </div>
                  <button className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700">
                    <Download size={18} />
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Insurance Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="text-cyan-600" />
              Insurance Details
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-cyan-50 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium text-cyan-900">ABC Health Insurance</p>
                    <p className="text-sm text-cyan-700 mt-1">Policy No: INS-2024-456789</p>
                    <div className="mt-3 flex items-center gap-2 text-cyan-600">
                      <span className="w-2 h-2 bg-cyan-600 rounded-full"></span>
                      Active
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-cyan-900">Coverage Limit</p>
                    <p className="text-xl font-bold text-cyan-700">$500,000</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-cyan-700">Valid From</p>
                    <p className="font-medium text-cyan-900">Jan 01, 2024</p>
                  </div>
                  <div>
                    <p className="text-sm text-cyan-700">Valid Until</p>
                    <p className="font-medium text-cyan-900">Dec 31, 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Payments */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="text-cyan-600" />
              Recent Payments
            </h2>
            <div className="space-y-4">
              {[
                { desc: 'Consultation - Dr. Smith', amount: '$150', date: '15 Mar', status: 'Paid', type: 'Debit Card' },
                { desc: 'Lab Tests - CBC', amount: '$75', date: '10 Mar', status: 'Paid', type: 'Insurance' },
                { desc: 'Prescription Refill', amount: '$45', date: '05 Mar', status: 'Pending', type: 'Insurance' },
              ].map((payment) => (
                <div key={payment.desc} className="p-4 border border-gray-100 rounded-lg hover:border-cyan-100">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-medium">{payment.desc}</p>
                      <p className="text-sm text-gray-600">{payment.date} • {payment.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-cyan-900">{payment.amount}</p>
                      <p className={`text-sm ${payment.status === 'Paid' ? 'text-green-600' : 'text-amber-600'}`}>
                        {payment.status}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: 'Book Appointment' },
              { icon: MessageSquare, label: 'Message Doctor' },
              { icon: FileText, label: 'Request Lab Test' },
              { icon: Bell, label: 'Set Reminder' },
            ].map((action) => (
              <button
                key={action.label}
                className="p-4 bg-cyan-50 rounded-lg flex flex-col items-center gap-2 hover:bg-cyan-100 transition-colors"
              >
                <action.icon className="text-cyan-600" size={24} />
                <span className="text-sm font-medium text-gray-900">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;