import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import TicketSection from './components/TicketSection'
import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/Footer'

function App() {
  const [tickets, setTickets] = useState([]) 
  const [taskStatus, setTaskStatus] = useState([]) 
  const [resolvedTasks, setResolvedTasks] = useState([]) 
  const [inProgressCount, setInProgressCount] = useState(0)
  const [resolvedCount, setResolvedCount] = useState(0)


  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await fetch("/public/Ticekts.json") 
        const data = await res.json()
        setTickets(data)
      } catch (error) {
        console.error("Error fetching tickets:", error)
      }
    }
    fetchTickets()
  }, [])

const handleTicketClick = (title) => {
  if (!taskStatus.includes(title)) {
    setTaskStatus(prev => [...prev, title])

    setTickets(prev =>
      prev.map(ticket => {
        if (ticket.title === title && ticket.status === "Open") {
          setInProgressCount(c => c + 1) // count up
          toast.info("In-Progress", { autoClose: 2000 })
          return { ...ticket, status: "In-Progress" }
        }
        return ticket
      })
    )
  }
}



const handleComplete = (title) => {
  setTaskStatus(prev => prev.filter(t => t !== title))  
  setResolvedTasks(prev => [...prev, title])            

  setTickets(prev =>
    prev.map(ticket => {
      if (ticket.title === title && ticket.status === "In-Progress") {
        setInProgressCount(c => c - 1) 
        setResolvedCount(c => c + 1)   
        toast.success("Task Completed!", { autoClose: 2000 })
        return { ...ticket, status: "Completed" }
      }
      return ticket
    })
  )
  setTickets(prev => prev.filter(ticket => ticket.title !== title))
}

  return (
    <>
      <Navbar className="bg-[#FFFFFF]max-w-[1200px] mx-auto flex justify-between items-center"/>
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <TicketSection
        tickets={tickets}
        taskStatus={taskStatus}
        resolvedTasks={resolvedTasks}
        handleTicketClick={handleTicketClick}
        handleComplete={handleComplete}
      />
      <Footer></Footer>
      <ToastContainer />
    </>
  )
}

export default App
