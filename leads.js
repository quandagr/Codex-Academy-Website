async function submitLead(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const interest_messaging = document.getElementById('message').value;

    const leadData = {
       Name: name,
        contact_email: email,
        interest_messaging: interest_messaging

    };

    try {
        const response = await fetch(leadsurl, {
            method: 'POST',
            headers: {
                'apikey': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(leadData)
        });

        if (response.ok) {
            alert('Lead submitted successfully!');
            document.getElementById('leadsform').reset();
        } else {
            alert('Error submitting lead.');
        }
    } catch (error) {
        console.error('Error submitting lead:', error);
    }
}
document.getElementById('leadsform').addEventListener('submit', submitLead);