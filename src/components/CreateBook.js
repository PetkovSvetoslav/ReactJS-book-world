const CreateBook = () => {
    return (
        <section id="create-page" className="auth">
            <form id="create">
                <div className="container">

                    <h1>Create Book</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" placeholder="Enter book title..." />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" placeholder="Enter book category..." />

                    <label htmlFor="levels">Author:</label>
                    <input type="text" id="author" name="author" placeholder="Enter book author..." />

                    <label htmlFor="book-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" placeholder="summary..."></textarea>
                    <input className="btn submit" type="submit" value="Create Book" />
                </div>
            </form>
        </section>
    );
}

export default CreateBook;