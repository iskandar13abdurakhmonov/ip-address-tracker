/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import MapMain from './components/MapMain'

const API_KEY = 'at_GhT5ICpeSwx0Nhdi2OWf8yBBg1NOW'

function App() {
    const [location, setLocation] = useState({})
    const [query, setQuery] = useState('')

    const handleSubmit = (query) => {
        setQuery(query)
    }

    useEffect(() => {
        const getLocation = async () => {
            const res = await fetch(
                `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${query}`
            )
            const data = await res.json()
            setLocation(data)
        }
        getLocation()
    }, [query])

    console.log(location)

    return (
        <div className="App">
            <div className="wrapper">
                <Header>
                    <Form
                        querySubmit={handleSubmit}
                        query={query}
                        setQuery={setQuery}
                    />
                </Header>
                <main className="main">
                    <div className="main__container">
                        <Info />
                    </div>
                    <MapMain location={location} />
                </main>
                <footer className="footer">
                    <div className="attribution">
                        Challenge by{' '}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Frontend Mentor
                        </a>
                        . Coded by <a href="#">Your Name Here</a>.
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App
