import { useState, useEffect } from 'react'
import './App.css'
import IndividualContact from './IndividualContact'

function App() {
  const [contacts, setContacts] = useState([])
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)

  useEffect(() => {
    const fetchContacts = async() => {
      const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users") 
      const data = await response.json()
      console.log(data)

      setContacts(data)
    }
    fetchContacts()
  }, [])
  console.log(contacts)

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1)
    })
  }, [])

  const indContact = contacts.find ((contact) => {
    console.log(typeof hash)
    return hash === contact.id
  })
  console.log(indContact)

  return (
    <div>
      <h1>Contacts</h1>
      {indContact ? (<IndividualContact indContact={indContact} />) : null}

      <ul>
        {
          contacts.map((contact) => {
            return ( 
              <li key={contact.id}>
                <a href={`#${contact.id}`}>
                  {contact.name}
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default App
