'use-client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const initialState = {
  name: "",
  email: "",
  message: ""
}

export default function Feedback() {
  const [data, setData] = useState(initialState);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify(data))
    const { name, email, message } = data

    const res = await fetch('http://localhost:3000/api/feedback', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, message
      })
    })

    const result = await res.json();
    console.log(result);
  }

}