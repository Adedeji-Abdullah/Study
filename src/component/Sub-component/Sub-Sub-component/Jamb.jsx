import React, { useEffect } from 'react'

const jamb = () => {
     const token = "QB-QB-24aa21fe651e5576569e"

    useEffect(() => {
    const tete = async() => {
            try {
              const response = await fetch("https://raw.githubusercontent.com/ajokpete/JAMB-API/main/questions.json")
              if (!response.ok) {
                console.log("error")
              }
              
              const data = await response.json()
              console.log(data)
            } catch (error) {
                console.log(error.type)
            }
        }

        tete()
    },[])
  return (
    
        
    <div>
      
    </div>
  )
}

export default jamb
