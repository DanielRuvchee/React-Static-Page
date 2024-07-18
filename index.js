
function Header() {
    return (
        <header>
            <nav>
                <img src="./images.png" width="50px"/>
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>2024 Ruvcheski Development. All Rights reserved.</small>
        </footer>
    )
    
}

function MainContent() {
    return (
        <div>
            <h1>Reasons l am excited to learn React</h1>
            <ol>
                <li>Becouse i like it</li>
                <li>Becouse it will get me a job</li>
            </ol>
        </div>
    )
  
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
        

  )
       
}

ReactDOM.render(<Page />, document.getElementById("root"))