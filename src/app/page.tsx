"use client"

import { useRef } from "react"
import Header from "./components/Header";

export default function Home() {
  const fileInput = useRef<HTMLInputElement>(null);

  const uploadFile = async() => {
    const formData = new FormData();
    formData.append("file", fileInput?.current?.files?.[0]!);

    const response = await fetch('/api/file-manager', {
      method: "POST",
      body: formData
    });

    const result = await response.json();
    console.log(result)
  }

  return (
    <>
      <Header title="Bitwarden Viewer" subtitle="This is a simple frontend to view and search a Bitwarden Vault Export" />
      
      <form className={`flex flex-col w-1/2 mx-auto justify-center`} action={uploadFile}>
        <label>
          <input type="file" name="file" className={`file-uploader`} ref={fileInput} />
        </label>

        <button type="submit" className={`btn-primary`}>Submit</button>
      </form>
    </>
  )
}