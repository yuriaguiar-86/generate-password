const Container = (props) => {
    return (
        <main className="container_main">
            <section className="container">
                { props.children }
            </section>
        </main>
    );
}

export default Container;