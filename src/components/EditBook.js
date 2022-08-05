const EditBook = () => {
    return (
        <section id="edit-page" className="auth">
            <form id="edit">
                <div className="container">

                    <h1>Edit Book</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="text" id="author" name="author"  />

                    <label htmlFor="book-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Edit Book" />

                </div>
            </form>
        </section>
    );
}

export default EditBook;