import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/AriasCamilaA' target="_blank">
                <img src="/img/github.png" alt='Facebook'/>
            </a>
            <a href='https://www.linkedin.com/in/camila-alexandra-arias-ruiz-3747941a6' target="_blank">
                <img src="/img/linkedin.png" alt='twitter'/>
            </a>
        </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Camila Arias</strong>
    </footer>
}

export default Footer