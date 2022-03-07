import classes from './Home.module.css'

const Home = () => {
    
    return (
        <div className={classes.parent}>
            <header className={classes.middleFour}>
                <span className={ 'Home.js' }></span>
                <h1>Welcome back, *user*!</h1>
        </header>
            <section className={classes.homeBody}>
                Det ser ut som att du inte har några saker som måste göras idag! Njut av ledigheten, eller <button className={classes.link}>lägg till</button> något på din lista!
            </section>
        </div>

    );
}

export default Home;