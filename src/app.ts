const form = document.getElementById('myForm') as HTMLFormElement;

        form.addEventListener('submit', (event: Event) => {
            event.preventDefault();

            const name = (document.getElementById('name') as HTMLInputElement).value;
            const surname = (document.getElementById('surname') as HTMLInputElement).value;
            const address = (document.getElementById('address') as HTMLInputElement).value;
            const age = (document.getElementById('age') as HTMLInputElement).value;
            const married = (document.getElementById('married') as HTMLInputElement).value;
            const skill = (document.getElementById('skill') as HTMLInputElement).value;

            (document.getElementById('outputName') as HTMLParagraphElement).textContent = `Hi👋, my name is: ${name}`;
            (document.getElementById('outputSurname') as HTMLParagraphElement).textContent = ` and my surname is: ${surname}`;
            (document.getElementById('outputAddress') as HTMLParagraphElement).textContent = `I live in: ${address}`;
            (document.getElementById('outputAge') as HTMLParagraphElement).textContent = `I'm ${age} years old`;
            (document.getElementById('outputMarried') as HTMLParagraphElement).textContent = `I'm : ${married}`;
            (document.getElementById('outputSkill') as HTMLParagraphElement).textContent = `I'm good at: ${skill}`;
        });