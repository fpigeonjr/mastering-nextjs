import Header from '../components/header'

export default function Home() {
  return (
    <>
      <div className="title">
        <p>CSS</p>
      </div>
      <Header />
      <h1>Welcome to Mastering Next.js</h1>
      <p className="headom">styled-jsx</p>
      <style jsx>
        {`
          .headom {
            font: 15px Helvetica, Arial, san-serif;
            background: #eee;
            padding: 100px;
            text-align: center;
          }
          .headom:hover {
            background: #ccc;
          }
        `}
      </style>
    </>
  )
}
