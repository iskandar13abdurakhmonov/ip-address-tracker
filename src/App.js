/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react'
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import MapMain from './components/MapMain'

const apiKey = 'at_S9qLxqvF3wVz8WUJukg7gOtPoq18s'

function App() {
    const [location, setLocation] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [query, setQuery] = useState('')

    const handleSubmit = (query) => {
        setQuery(query)
    }

    useEffect(() => {
        const getLocation = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(
                    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${query}`
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
                    <Info
                        location={location}
                        isLoading={isLoading}
                    />
                </Header>
                <main className="main">
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
                        . Coded by <a href="https://www.frontendmentor.io/profile/iskandar13abdurakhmonov">eescan</a>.
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App
