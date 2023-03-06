import React from 'react'
export async function getServerSideProps(context) {
  return {
    redirect: {
      permanent: false,
      destination: "https://drive.google.com/drive/folders/1y-udbV3dKyQaSemvbDVzWHoHyoWytw2S?usp=sharing"
    }
  }
}

const videos = () => {
  return (
    <div>videos</div>
  )
}

export default videos