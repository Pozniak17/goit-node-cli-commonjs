const { program } = require("commander");
const contacts = require("./contacts");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const allContacts = await contacts.listContacts();
      console.table(allContacts);
      break;

    case "get":
      // ... id
      const oneContact = await contacts.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      // ... name email phone
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "edit":
      // ... id, name email phone
      const updateContact = await contacts.updateById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;

    case "remove":
      // ... id
      const deleteContact = await contacts.removeContact(id);
      console.log(deleteContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);

// invokeAction({ action: "list" });

// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });

// invokeAction({
//   action: "add",
//   name: "Gleck",
//   email: "glocktar.net",
//   phone: "(362) 251-6732",
// });

// invokeAction({
//   action: "edit",
//   id: "2UQvpeWUAUOSO2BWfrUIu",
//   name: "Marina Nazina",
//   email: "marinazi.net",
//   phone: "(777) 251-6732",
// });

// invokeAction({ action: "remove", id: "fHQ7O1jimVf5lJ7mN_QjV" });

//todo команди
// npm start -- -a list
// node src/index -a list
