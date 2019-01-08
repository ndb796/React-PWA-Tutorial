<script src="https://www.gstatic.com/firebasejs/5.5.2/firebase.js"></script>

var config = {
    apiKey: "AIzaSyC6v4IxtnSSxhdkT3rRBrBd5jneQuOEz2Q",
    authDomain: "test-803cf.firebaseapp.com",
    databaseURL: "https://test-803cf.firebaseio.com",
    projectId: "test-803cf",
    storageBucket: "test-803cf.appspot.com",
    messagingSenderId: "323624478186"
};

firebase.initializeApp(config);
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(({data} = {})) => {
    const title = data.title || 'Title';
    const opts = Object.assign({
        body: data.body || 'Body'
    }, data);
    return self.registration.showNotification(title, opts);
}