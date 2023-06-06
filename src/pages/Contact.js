import "../assets/allpages/Contact.css";

const Contact = () => {
  return (
    <div className="contact container" id="contact">
      <h1>contact me </h1>
      <form>
        <label for="fname">Name</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />
        <label for="email">Email</label>
        <br />
        <input type="text" id="email" name="email" />
        <br />
        <label for="message">Message</label>
        <br />
        <textarea id="message" name="message" rows="4" cols="30"></textarea>
        <br />
      </form>
    </div>
  );
};

export default Contact;
