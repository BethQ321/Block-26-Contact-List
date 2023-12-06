
function IndividualContact({indContact}) {

    return (
        <div>
            <h3>Email: {indContact.email}</h3>
            <h3>Phone: {indContact.phone}</h3>
            <h3>Username: {indContact.username}</h3>
            <h3>Website: {indContact.website}</h3>
            <h3>Company: {indContact.company.name}</h3>
            <h4>Address: {indContact.address.street} {indContact.address.suite}, {indContact.address.city} {indContact.address.zipcode}</h4>
        </div>
    )
}

export default IndividualContact