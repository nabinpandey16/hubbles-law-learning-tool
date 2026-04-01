// script.js

// Hubble's Law Simulation Tool

// Function to calculate distance based on Hubble's Law
function calculateDistance(recessionalVelocity) {
    const hubbleConstant = 70; // Hubble's constant in km/s/Mpc
    return recessionalVelocity / hubbleConstant; // distance in Mpc
}

// Function to visualize Hubble's Law
function visualizeHubblesLaw() {
    const velocities = [70, 140, 210, 280, 350]; // example recessional velocities in km/s
    const distances = velocities.map(calculateDistance);
    console.log('Recessional Velocities (km/s):', velocities);
    console.log('Distance (Mpc):', distances);
}

// Function to handle user input
function handleUserInput() {
    const inputVelocity = parseFloat(prompt('Enter recessional velocity in km/s:'));
    if (!isNaN(inputVelocity)) {
        const distance = calculateDistance(inputVelocity);
        alert(`The distance is approximately ${distance.toFixed(2)} Mpc.`);
    } else {
        alert('Please enter a valid number.');
    }
}

// Event listener for user interaction
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Calculate Distance';
    button.onclick = handleUserInput;
    document.body.appendChild(button);
    visualizeHubblesLaw(); // Run visualization on load
});