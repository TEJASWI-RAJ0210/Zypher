import React from "react";
import { FaPlaneDeparture, FaMapMarkerAlt } from "react-icons/fa";

const years = Array.from({ length: 10 }, (_, i) => 2025 + i);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dates = Array.from({ length: 31 }, (_, i) => i + 1);

export default function TripPlanner() {
  return (
    <div
      className="p-10 bg-pink-200 text-gray-800"
      style={{
        backgroundImage: "url('/features.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h2 className="text-4xl font-semibold text-center mb-8 drop-shadow-md">
        <span className="text-stone-700">Plan your</span>
        <span className="text-stone-500"> next</span>
        <span className="text-stone-700"> trip</span>
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-xl">
        {/* Trip Form */}
        <div className="bg-rose-200 w-full md:w-1/2 p-6">
          <h3 className="text-xl font-semibold mb-4">Enter trip details</h3>

          {/* Destination */}
          <div className="mb-6">
            <label className="font-semibold flex items-center gap-2 mb-2">
              <FaPlaneDeparture /> Destination
            </label>
            <select className="w-full p-2 rounded-md border border-gray-400 bg-transparent" defaultValue="">
              <option value="" disabled hidden>
                Select Destination
              </option>
              <option>Paris</option>
              <option>Tokyo</option>
              <option>New York</option>
              <option>Rome</option>
            </select>
          </div>

          {/* Trip Duration */}
          <div>
            <label className="font-semibold flex items-center gap-2 mb-2">
              <FaMapMarkerAlt /> Trip Duration
            </label>

            <div className="mb-4">
              <p className="mb-1">Start Date:</p>
              <div className="flex gap-2">
                <select className="p-2 border border-gray-300 rounded" defaultValue="">
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
                <select className="p-2 border border-gray-300 rounded" defaultValue="">
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  {months.map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
                <select className="p-2 border border-gray-300 rounded" defaultValue="">
                  <option value="" disabled hidden>
                    Select Date
                  </option>
                  {dates.map((date) => (
                    <option key={date}>{date}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <p className="mb-1">End Date:</p>
              <div className="flex gap-2">
                <select className="p-2 border border-gray-300 rounded" defaultValue="">
                  <option value="" disabled hidden>
                    Select Year
                  </option>
                  {years.map((year) => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
                <select className="p-2 border border-gray-300 rounded" defaultValue="">
                  <option value="" disabled hidden>
                    Select Month
                  </option>
                  {months.map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </select>
                <select className="p-2 border border-gray-300 rounded" defaultValue="">
                  <option value="" disabled hidden>
                    Select Date
                  </option>
                  {dates.map((date) => (
                    <option key={date}>{date}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* To Do List */}
        <div className="bg-stone-600 text-white w-full md:w-1/2 p-6">
          <h3 className="text-xl font-semibold mb-4">To Do List</h3>
          <div className="flex flex-col gap-2">
            {[...Array(6)].map((_, index) => (
              <input
                key={index}
                type="text"
                placeholder="+Add Item"
                className="p-2 bg-stone-600 border border-gray-400 rounded w-full"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
