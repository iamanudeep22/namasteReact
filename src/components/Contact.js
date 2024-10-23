const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
            <form>
                <input type="text" className="border border-orange-500 rounded-lg p-2 m-2" placeholder="Name"/>
                <input type="text" className="border  border-orange-500 rounded-lg p-2 m-2" placeholder="Message"/>
                <button className="border border-orange-500 px-3 py-2 m-2 bg-orange-400 rounded-lg text-white">Submit</button>
            </form>
        </div>
    )
}

export default Contact;