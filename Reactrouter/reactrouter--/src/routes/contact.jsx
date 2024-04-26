import { Form, useLoaderData } from "react-router-dom";
import { getContact } from "../contacts";



export default function Contact() {
    const { contact: loadedContact } = useLoaderData();

    // Provide default values if contact properties are undefined
    const contact = {
        first: loadedContact?.first || "Your",
        last: loadedContact?.last || "Name",
        avatar: loadedContact?.avatar || "https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/438099663_7514262395286023_7396021035072627314_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=lUn71B8GZU8Q7kNvgEIz2vn&_nc_ht=scontent-lga3-2.xx&oh=00_AfAKx34uo42O8nfvu1lwG85xi9Tb06RmaJx3qxhFdeKCJg&oe=66309D42",
        twitter: loadedContact?.twitter || "your_handle",
        notes: loadedContact?.notes || "Some notes",
        favorite: typeof loadedContact?.favorite === 'boolean' ? loadedContact.favorite : true,
    };


  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact.first || contact.last ? (
            <>
              {contact.first} {contact.last}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact.twitter}`}
            >
              {contact.twitter}
            </a>
          </p>
        )}

        {contact.notes && <p>{contact.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
