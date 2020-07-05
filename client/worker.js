
self.addEventListener('push',e=>{
    const data = e.data.json();
    console.log("push has been received...")
    self.registration.showNotification(data.title,{
        body:'shepHertz'
    });
});




