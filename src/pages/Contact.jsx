
import { Button, Input, Textarea } from '@material-tailwind/react';
import { useState } from 'react';

const Contact = () => {
 // Il faut envoyer les données de ce formulaire dans le localStorage,
 // RAPPEL: Il faut récupérer le LS, puis ajouter une nouvelle valeur pour ne pas
 // écraser anciennes valeurs

 const [contact, setContact] = useState({
  pseudo : "",
  message: ""   
 })

 const [message, setMessage] = useState("")

 const handleChange = (e) =>{ 
  // Décomposition de e.target
  const {name, value} = e.target 
  setContact({...contact, [name] : value, date: new Date() })
  setMessage("")
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    
    const contactLocalStorage = JSON.parse(localStorage.getItem("contact")) || []
    if(contact.pseudo.trim() === "" || contact.message.trim() === ""){
      return setMessage("Vous ne pouvez pas envoyer de champs vides")
    }
    contactLocalStorage.push(contact)
    window.localStorage.setItem("contact", JSON.stringify(contactLocalStorage))
  }

 // Faire la fonction handleChange et handleSubmit
  return (
    <>
    <div className="min-h-screen bg-[#0E1217] flex justify-center items-center">
      <div className="container mx-auto px-4 pt-10">
        <h1 className="text-4xl font-bold mb-5 text-[#E11D48] text-center">Contact</h1>
        <form className="max-w-xl mx-auto"  method="POST" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="pseudo" className="block text-white mb-2">Pseudo</label>
            <Input 
              onChange={handleChange} 
              value={contact.pseudo}
              id="pseudo"
              name="pseudo"
              type="text"
              color="light-blue"
              className='text-white'
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <Textarea 
            onChange={handleChange} 
            value={contact.message}
              id="message"
              name="message"
              color="light-blue"
              className='text-white'
            />
          </div>
          <Button type="submit" className="w-full bg-[#E11D48] hover:bg-[#c81e42]">Envoyer</Button>
        </form>
        {message && <span className="mx-auto text-[#E11D48]">{message}</span>}
      </div>
    </div>
    </>
  );
};

export default Contact;
