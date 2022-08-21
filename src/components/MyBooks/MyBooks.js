const MyBooks = () => {
    return (
        <section id="my-pets-page" className="my-pets">
            <h1>My Books</h1>
            <ul className="my-pets-list">
                <li className="otherPet">
                    <h3>Name: Be Smart</h3>
                    <p>Type: learn</p>
                    <p className="img">
                        <img src="/images/1.png" />
                    </p>
                    <a className="button" href="#">
                        Details
                    </a>
                </li>
                <li className="otherPet">
                    <h3>Name: Black & white lives</h3>
                    <p>Type: action</p>
                    <p className="img">
                        <img src="/images/2.png" />
                    </p>
                    <a className="button" href="#">
                        Details
                    </a>
                </li>
            </ul>

            <p className="no-pets">No pets in database!</p>
        </section>
    );
};

export default MyBooks;
