function equipGun() {
    const gunSpawn = document.getElementById('gunItem');
    if (gunSpawn) {
        gunSpawn.style.opacity = '0';
        gunSpawn.style.pointerEvents = 'none';
        const gunEquipped = document.getElementById('gunEquipped');
        gunEquipped.style.opacity = '1';
        gunEquipped.style.display = 'block';

        const sigmaLamb = document.getElementById('gLamb');
        let lambClickCount = 0; 
        let shownMessages = []; 
        let bulletWounds = []; 

        const randomMessages = [
            "leave the fucking <span style='color:rgb(4, 196, 4);'>lamb</span> alone",
            "ur gonna burn in hell for trying to kill G<span style='color:rgb(4, 196, 4);font-size:15px;'>(reen Lamb)</span>od",
            "i actually hate you and so does everybody else",
            "ur gonna be rejected at the <span style='color:rgb(4, 196, 4);'>green gates</span>"
        ];


        if (sigmaLamb) {
            sigmaLamb.addEventListener('click', function(event) {
                lambClickCount++;
                const dialogue = document.getElementById('dialogue');
                const shakeClass = "shakee"; 

                if (lambClickCount === 1) {
                    dialogue.innerHTML = "why are u shooting him."; 
                } else if (lambClickCount === 2) {
                    dialogue.innerHTML = "i said stop."; 
                } else if (lambClickCount === 3) {
                    dialogue.innerHTML = "what the actual fuck is your problem"; 
                } else if (lambClickCount === 9) {
                    dialogue.innerHTML = "how about i shoot you instead."; 
                    sigmaLamb.style.pointerEvents = 'none';

                    setTimeout(function() {
                        const backgroundimg = document.getElementById('sigmaroom');
                        backgroundimg.src = './greengates.png';
                        backgroundimg.style.zIndex = '21';
                        dialogue.classList.remove(shakeClass);
                        const lambFly = document.getElementById('lambFly');
                        lambFly.style.opacity = '1';
                        lambFly.style.pointerEvents = 'all';
                        dialogue.innerHTML = "im so sorry, green lamb.<br />* i didnt know it was this serious..<br /><h1 style='font-size:25px;font-weight:100;' class='shakee'>* please spare me.</h1>"; 
                        sigmaLamb.style.display = 'none';
                    
                        gunEquipped.style.opacity = '0';

                        bulletWounds.forEach(bulletWound => {
                            bulletWound.style.display = 'none';
                        });

                        morgan.style.opacity = '0';
                        morgan.style.pointerEvents = 'none';

                        const lambChar = document.getElementById('otherc');
                        lambChar.style.opacity = '1';
                        lambChar.style.pointerEvents = 'all';
                    }, 1500);
                } else {
                    let availableMessages = randomMessages.filter(message => !shownMessages.includes(message));
                    
                    if (availableMessages.length === 0) {
                        availableMessages = randomMessages;
                        shownMessages = [];
                    }

                    const randomMessage = availableMessages[Math.floor(Math.random() * availableMessages.length)];
                    dialogue.innerHTML = randomMessage;

                    shownMessages.push(randomMessage);
                }

                if (lambClickCount > 2) {
                    dialogue.classList.add(shakeClass);
                }

                if (gunEquipped.style.display === 'block') {
                    const bulletShot = document.getElementById('pistol');
                    bulletShot.currentTime = 0;
                    bulletShot.volume = 0.1;
                    bulletShot.play();

                    const bulletWound = document.createElement('img');
                    bulletWound.src = './wound.png';
                    bulletWound.width = 30;
                    bulletWound.height = 30;
                    bulletWound.id = 'bulletWounds';

                    bulletWound.style.position = 'absolute';
                    bulletWound.style.left = `${event.clientX - bulletWound.width / 2}px`;
                    bulletWound.style.top = `${event.clientY - bulletWound.height / 2}px`;
                    bulletWound.style.zIndex = '20';

                    gunEquipped.src = './shoot.gif';

                    setTimeout(function() {
                        gunEquipped.src = './gunnygun.png';
                    }, 500);

                    document.body.appendChild(bulletWound);

                    bulletWounds.push(bulletWound);
                }
            });
        }

        const morgan = document.getElementById('morgc');
        if (morgan) {
            morgan.addEventListener('click', function(event) {
                if (gunEquipped.style.display === 'block') {
                    const dialogue = document.getElementById('dialogue');
                    dialogue.textContent = "ShotMorgan";

                    const bulletShot = document.getElementById('pistol');
                    bulletShot.currentTime = 0;
                    bulletShot.volume = 0.1;
                    bulletShot.play();

                    const bulletWound = document.createElement('img');
                    bulletWound.src = './wound.png';
                    bulletWound.width = 30;
                    bulletWound.height = 30;
                    bulletWound.id = 'bulletWounds';

                    bulletWound.style.position = 'absolute';
                    bulletWound.style.left = `${event.clientX - bulletWound.width / 2}px`;
                    bulletWound.style.top = `${event.clientY - bulletWound.height / 2}px`;
                    bulletWound.style.zIndex = '20';

                    gunEquipped.src = './shoot.gif';

                    setTimeout(function() {
                        gunEquipped.src = './gunnygun.png';
                    }, 500);

                    document.body.appendChild(bulletWound);

                    bulletWounds.push(bulletWound);
                }
            });
        }
    }
}
