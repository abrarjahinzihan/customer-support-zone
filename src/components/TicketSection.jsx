import React from "react";
import { BsCalendar2Date } from "react-icons/bs";

const TicketsSection = ({ tickets, taskStatus, resolvedTasks, handleTicketClick, handleComplete }) => {
    return (
        <div className="flex px-6 py-10 gap-4">

            <div className="w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">
                {tickets.length === 0 ? (
                    <p className="text-gray-500">No tickets available</p>
                ) : (
                    tickets.map(ticket => (
                        <div
                            key={ticket.id}
                            onClick={() => handleTicketClick(ticket.title)}
                            className="card bg-base-100 shadow-md border rounded-lg p-4 cursor-pointer hover:shadow-lg transition"
                        >

                            <div className="flex justify-between items-start">
                                <h3 className="text-base font-semibold">{ticket.title}</h3>
                                <div
                                    className={`badge ${
                                        ticket.status === "Resolved"
                                            ? "badge-success"
                                            : ticket.status === "In-Progress"
                                            ? "badge-warning"
                                            : "badge-ghost"
                                    }`}
                                >
                                    {ticket.status}
                                </div>
                            </div>


                            <p className="text-sm text-gray-600 mt-1 mb-2 line-clamp-2">
                                {ticket.description}
                            </p>

                            <div className="flex justify-between items-center text-sm">
                                <span>
                                    # {ticket.id}
                                </span>
                                <span
                                    className={`font-medium ${
                                        ticket.priority === "High"
                                            ? "text-red-600"
                                            : ticket.priority === "Medium"
                                            ? "text-yellow-600"
                                            : "text-green-600"
                                    }`}
                                >
                                    {ticket.priority} Priority
                                </span>

                                <div className="text-xs text-gray-500 flex items-center gap-2">
                                    <span>{ticket.customer}</span>
                                    <span className="flex items-center gap-1">
                                        <BsCalendar2Date className="inline-block" />
                                        {new Date(ticket.createdAt).toLocaleDateString("en-US")}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>


            <div className="w-2/5 flex flex-col gap-4">
                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Task Status</h3>
                    {taskStatus.length === 0 ? (
                        <p className="text-sm text-gray-600">Select a ticket to add to Task Status</p>
                    ) : (
                        taskStatus.map((title, index) => (
                            <div key={index} className="mb-2">
                                <p className="text-sm text-gray-500 mb-1">{title}</p>
                                <button
                                    className="w-full bg-green-500 text-white py-1 rounded"
                                    onClick={() => handleComplete(title)}
                                >
                                    Complete
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <div className="bg-white shadow-md rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">Resolved Task</h3>
                    {resolvedTasks.length === 0 ? (
                        <p className="text-sm text-gray-500">No resolved tasks yet.</p>
                    ) : (
                        <div className="flex flex-col gap-2">
                            {resolvedTasks.map((title, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-100 text-gray-700 text-sm px-2 py-1 rounded"
                                >
                                    {title}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TicketsSection;
