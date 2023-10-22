/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import MapMain from './components/MapMain'

const API_KEY = 'at_GhT5ICpeSwx0Nhdi2OWf8yBBg1NOW'

function App() {
    const [location, setLocation] = useState('184.207.90.20')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [query, setQuery] = useState('184.207.90.20')

    const handleSubmit = (query) => {
        setQuery(query)
    }

    useEffect(() => {
        const getLocation = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(
                    `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${query}`
                )
                if (!res.ok) {
                    throw new Error(
                        'Something went wrong with fetching data :('
                    )
                }
                const data = await res.json()
                setLocation(data)
            } catch (err) {
                console.log(err.message)
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
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
                        <Info
                            query={query}
                            location={location}
                            isLoading={isLoading}
                        />
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
