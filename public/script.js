document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseover', (event) => {
            const id = event.currentTarget.id;
            let color;

            switch(id) {
                case 'pedro-guivarra':
                    color = 'green';
                    break;
                case 'emilio-aguinaldo':
                    color = 'red';
                    break;
                case 'technological-institute':
                    color = 'yellow';
                    break;
                default:
                    color = 'white';
            }

            document.body.style.backgroundColor = color;
        });

        card.addEventListener('mouseout', () => {
            document.body.style.backgroundColor = 'var(--primary-color)';
        });
    });
});