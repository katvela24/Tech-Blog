const logoutbutton = document.getElementById("logout")

logoutbutton.addEventListener("click", async () => {
    const response = await fetch('/api/users/logout', {
        method: 'POST',
        body: JSON.stringify({

        }),
        headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
        console.log('success');
    } else {
        alert(response.statusText);
    }
    document.location.replace('/');
})