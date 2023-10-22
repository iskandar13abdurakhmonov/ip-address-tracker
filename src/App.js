/* eslint-disable jsx-a11y/anchor-is-valid */
import Form from './components/Form'
import Header from './components/Header'
import Info from './components/Info'
import MapMain from './components/MapMain'

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header>
                    <Form />
                </Header>
                <main className="main">
                    <div className="main__container">
                        <Info />
                    </div>
                    <MapMain />
                </main>
                <footer className="footer">
                    <div class="attribution">
                        Challenge by{' '}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank" rel="noreferrer"
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
